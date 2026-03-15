# Backend (FastAPI)

Backend API for portfolio content and frontend integration.

## Structure

```txt
backend/
├─ app/
│  ├─ api/
│  │  ├─ router.py
│  │  └─ routes/
│  │     ├─ health.py
│  │     └─ portfolio.py
│  ├─ core/
│  │  └─ config.py
│  ├─ schemas/
│  │  └─ portfolio.py
│  ├─ services/
│  │  └─ portfolio_service.py
│  └─ main.py
├─ data/
│  └─ portfolio.json
├─ .env.example
└─ requirements.txt
```

## Run locally

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Endpoints

- `GET /` root message
- `GET /api/health` health check
- `GET /api/portfolio` portfolio payload
