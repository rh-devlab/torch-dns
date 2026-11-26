# 🔥 TORCH Sovereign Network & Root DNS (`.torch`)

**TORCH (The Open Routing & Community Hub)** is an independent, sovereign web ecosystem built outside traditional ICANN domain registries. It combines a custom `.torch` root DNS layer, a mobile-first browser engine, zero-knowledge cryptographic identity, and zero-cost web hosting portals.

---

## 🌐 Live Root DNS Endpoint
Our automated root pipeline compiles all verified `.torch` domains in real-time:
* **Root Registry:** `https://github.com/rh-devlab/torch-dns/blob/gh-pages/all-domains.json`
* **Native Browser:** [Launch TORCH Browser](https://rh-devlab.github.io/torch-browser/)
* **Download Browser:** [From This Link](https://github.com/rh-devlab/torch-browser/releases/download/Torrch_browser_download/torch_browser.apk)
---

## 🏛️ Ecosystem Architecture & Core Portals

| Portal / Layer | Description |
| :--- | :--- |
| **TORCH Browser** | Native mobile-first browser engine with multi-tab support, **TORCH Shield** (sandboxed execution), and `.torch` protocol routing. |
| **TORCH ID** | Zero-knowledge **8-word cryptographic seed identity** (BIP-39 standard). Your private seed never leaves your device; a derived SHA-256 `idHash` provides seamless Single Sign-On across all `.torch` apps. |
| **`home.torch`** | Central root directory and sovereign search engine indexing all active `.torch` domains. |
| **`host.torch`** | One-click single-file HTML web publisher. Claim a `.torch` domain, paste your code, and deploy instantly with a secret ownership key. |
| **`git.torch`** | Decentralized GitHub-style code hosting (`TORCH Forge`) with versioned snapshots, forking, continuous deployment, and `.torch` Pages. |
| **`torch.torch`** | Primary network specification node and architectural status beacon. |

---

## 🚀 How to Publish Your Free `.torch` Website

You no longer need to manually submit Pull Requests to get a `.torch` domain:

1. Open **[TORCH Browser](https:// + rh-devlab + .github.io/ + torch-browser/)** and generate or unlock your **8-word TORCH ID**.
2. **For Instant Single-File Sites:** Visit **`host.torch`**, enter your desired `<name>.torch` domain, paste your HTML/CSS/JS code, and click **Generate**.
3. **For Versioned Repositories:** Visit **`git.torch`**, create a repository under your `@username`, push your files, and publish directly via **Pages (`.torch` Hosting)**.
4. *(Optional Manual PR)* Developers hosting static sites externally can still submit a JSON record in `domains/<name>.json` via Pull Request.

---

## 📜 Network Rules
- Domain names must be lowercase alphanumeric (`a-z`, `0-9`, single hyphens `-`), 2–63 characters.
- All hosted content runs inside sandboxed frames to protect user privacy and security.
- Zero tolerance for phishing, malware, or abusive content.

---
*Architected & maintained by [rh-devlab](https://github.com/rh-devlab)*
