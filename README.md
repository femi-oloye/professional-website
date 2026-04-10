# professional-website

Portfolio website (Vite + React) with a live AI Support Chat demo section.

## Environment

Create a `.env` from `.env.example` and set:

- `VITE_CHAT_API_URL`: deployed FastAPI base URL, e.g. `https://api.yourdomain.com`
- `VITE_CHAT_API_KEY`: optional if your backend requires `X-API-Key`
- `VITE_CHAT_CLIENT_ID`: client config id (default: `default`)

## Local Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages Deploy

1. Connect this repo in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Add environment variables from `.env.example` in Pages project settings.
5. Deploy.

## Recommended Domain Setup

- Frontend: `www.yourdomain.com` (Cloudflare Pages)
- Backend API: `api.yourdomain.com` (Render/Railway/Fly/Cloud Run)

Make sure backend `ALLOWED_ORIGINS` includes the frontend domains.
