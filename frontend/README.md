# Loyd Portfolio (Next.js 14)

Premium one-page developer portfolio for **John Loyd Viray**, built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Local Development

1. Go to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Copy env file:

```bash
cp .env.example .env.local
```

4. Start the dev server:

```bash
npm run dev
```

5. Open:

`http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel (Free)

1. Push this project to a GitHub repository.
2. Go to Vercel and click **Add New Project**.
3. Import the repository.
4. Keep default build settings:
   - Framework Preset: `Next.js`
   - Root Directory: `frontend`
   - Build Command: `next build`
   - Output: default
5. Add environment variable:
   - `PORTFOLIO_API_BASE_URL` = your deployed backend API base URL (example: `https://your-api-domain.com`)
6. Click **Deploy**.

## Update Your Personal Links (Required)

Edit:

- `data/portfolio.ts`

Replace these placeholders:

- `contact.linkedin`
- `contact.email`
- `contact.resume`

Optional metadata update:

- `app/layout.tsx`
  - `metadataBase`
  - `openGraph.url`

## Suggested Next Improvements

- Replace `app/icon.svg` with your own logo icon.
- Add `public/og-image.png` and wire it into Open Graph metadata.
- Add your real resume PDF link.
