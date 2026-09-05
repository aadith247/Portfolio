# Thatipally Aadithhya — Portfolio

A responsive, colorful software-engineering portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
Build command: `npm run build`  
Publish directory: `dist`

## Easy edits

- Main content/links: `src/App.jsx`
- Visual design/responsive rules: `src/styles.css`
- Resume: `public/Thatipally_Aadithhya_Resume.pdf`

## Design direction

The site intentionally combines:
- dark premium base + bright purple/cyan/orange accents,
- a modular bento/card system,
- compact proof-of-impact metrics,
- custom project visuals rather than generic stock photos,
- subtle motion and cursor light,
- responsive + reduced-motion support.


## Featured systems project

The portfolio now leads with **Chronicle**, a C++20 low-latency electronic trading simulator featuring binary UDP market data, L2 order-book reconstruction, TCP order entry, deterministic record/replay, sequence-gap recovery, fault injection, a cache-aligned lock-free SPSC queue, and p50/p99/p99.9 latency benchmarking.
