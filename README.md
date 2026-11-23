# 🔥 TORCH DNS Registry (`.torch`)

**TORCH (The Open Routing & Community Hub)** is an open, decentralized, and completely free naming system built for developers. Claim your own `.torch` domain without central authorities, gatekeepers, or annual renewal fees.

---

## 🌐 Live Root DNS Endpoint
Our automated root registry compiles all verified domains in real-time:
`https://rh-devlab.github.io/torch-dns/all-domains.json`

---

## 🚀 How to Claim Your Free `.torch` Domain

1. **Fork** this repository.
2. Create a new JSON file inside the `domains/` folder named `yourname.json` (e.g., `domains/amit.json`).
3. Add your domain details in the following format:

```json
{
  "domain": "yourname.torch",
  "owner": {
    "name": "Your Name",
    "github": "your-github-username"
  },
  "record": {
    "type": "URL",
    "target": "https://github.io"
  },
  "description": "A short description of your site"
}
```

4. Submit a **Pull Request (PR)**. Once reviewed and merged, your `.torch` domain will automatically go live across the TORCH Network!

---

## 📜 Rules
- Domain names must be lowercase alphanumeric (`a-z`, `0-9`, `-`).
- Target URLs must use `https://`.
- No spam, phishing, or malicious websites.

---
*Built with ❤️ by [rh-devlab](https://github.com)*
