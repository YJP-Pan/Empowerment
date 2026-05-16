# CLAUDE.md — Herway Frontend Project

## 0. Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- Remove imports/variables/functions that YOUR changes made unused.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

For multi-step tasks, state a brief plan before starting:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```

---

## 5. Local Server & Screenshots

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves root at `http://localhost:3000`)
- If the server is already running, do not start a second instance.
- **Puppeteer** is at `C:/Program Files/Google/Chrome/Application/chrome.exe`
- Screenshots save to `./temporary screenshots/screenshot-N.png`
- Use `node screenshot.mjs http://localhost:3000` for full-page desktop screenshots.
- For mobile, use a custom Puppeteer script with `setViewport({ width: 375, height: 812 })`.
- After screenshotting, read the PNG with the Read tool and analyze visually.

## 6. Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly.
- Do at least 2 screenshot comparison rounds. Stop only when no visible differences remain.
- Do not improve or add to the design — match it.

## 7. Output Defaults

- Single `index.html` per page, all styles inline, unless user says otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive. Always verify RWD with a mobile screenshot.
- Domain: `superstar.tw`

## 8. Brand Assets

- Always check `brand_assets/` before designing — logos, color guides, images.
- Use real assets; no placeholders where real assets exist.
- Primary brand color: `#C07868` (coral). Background: `#FEFCFB`. Body text: `#1A1814`.

## 9. Anti-Generic Guardrails

- **Colors:** Never default Tailwind palette (indigo-500, blue-600). Use `#C07868` and derivatives.
- **Shadows:** Layered, color-tinted with low opacity — not flat `shadow-md`.
- **Typography:** Cormorant Garamond for headings, Noto Sans TC for body. Tight tracking on large headings.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Consistent spacing tokens — not random Tailwind steps.

## 10. Hard Rules

- Do not add sections, features, or content not in the reference or request.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
- Do not stop after one screenshot pass when a reference image is provided.
- Unsplash image IDs must be verified via WebFetch — never hallucinated.
