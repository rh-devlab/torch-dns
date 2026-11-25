const WORKER_URL = "https://torch-id.rh22042010.workers.dev";
const WORDLIST_URL = "https://cdn.jsdelivr.net/gh/rh-devlab/torch-dns@main/torch-id/bip39-english.txt";

let cachedWords = null;

async function getWordlist() {
  if (cachedWords) return cachedWords;
  const res = await fetch(WORDLIST_URL);
  if (!res.ok) throw new Error("Failed to load BIP39 wordlist");
  const text = await res.text();
  cachedWords = text.trim().split(/\r?\n/).map(w => w.trim().toLowerCase()).filter(Boolean);
  if (cachedWords.length < 2048) throw new Error("Wordlist file is incomplete");
  return cachedWords;
}

export function normalizeSeed(seed) {
  return String(seed || "").toLowerCase().trim().replace(/\s+/g, " ");
}

// ১. ক্রিপ্টোগ্রাফিক র‍্যান্ডম ৮-শব্দের সীড তৈরি করা
export async function generateSeed() {
  const words = await getWordlist();
  const randomValues = new Uint32Array(8);
  crypto.getRandomValues(randomValues);
  const selected = Array.from(randomValues).map(num => words[num % words.length]);
  return selected.join(" ");
}

// ২. সীড থেকে ক্লায়েন্ট-সাইড SHA-256 idHash বের করা (সার্ভারে কখনো আসল সীড যাবে না)
export async function deriveIdHash(seed) {
  const clean = normalizeSeed(seed);
  const words = clean.split(" ");
  if (words.length !== 8) throw new Error("Seed must be exactly 8 words");

  const list = await getWordlist();
  const wordSet = new Set(list);
  if (!words.every(w => wordSet.has(w))) {
    throw new Error("One or more words are not in the valid BIP39 wordlist");
  }

  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(clean));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

// ৩. ওয়ার্কারের সাথে পরিচয় যাচাই করা (/auth)
export async function checkIdentity(seed) {
  const idHash = await deriveIdHash(seed);
  const res = await fetch(`${WORKER_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idHash })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Authentication failed");
  return data;
}

// ৪. প্রোফাইল তৈরি বা আপডেট করা (/profile)
export async function saveProfile(seed, { username, displayName, bio = "", avatar = "" }) {
  const idHash = await deriveIdHash(seed);
  const res = await fetch(`${WORKER_URL}/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idHash, username, displayName, bio, avatar })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Profile save failed");
  return data;
}

// ৫. ইউজারনেম দিয়ে পাবলিক প্রোফাইল দেখা (/user)
export async function getPublicUser(username) {
  const clean = String(username || "").toLowerCase().trim().replace(/^@/, "");
  const res = await fetch(`${WORKER_URL}/user?username=${encodeURIComponent(clean)}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "User not found");
  return data;
}
