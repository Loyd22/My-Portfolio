# Portfolio Monorepo (Separated Frontend/Backend)

This repository now follows separation of concerns:

- `frontend/` -> Next.js 14 App Router UI
- `backend/` -> FastAPI API layer

## Folder Layout

```txt
.
├─ frontend/   # portfolio UI (React/Next.js/Tailwind/Framer Motion)
└─ backend/    # API service (FastAPI)
```

## Run Locally

## 1) Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API:

- `http://localhost:8000/api/health`
- `http://localhost:8000/api/portfolio`

## 2) Frontend

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Frontend:

- `http://localhost:3000`

The frontend fetches portfolio content from backend and falls back to local data if API is unreachable.

## Deploy

- Frontend: Vercel
- Backend: Render / Railway / Fly.io / VPS

Set `PORTFOLIO_API_BASE_URL` in frontend environment to your deployed backend URL.
