import json
from pathlib import Path
from typing import Any, Dict


class PortfolioService:
    def __init__(self) -> None:
        # backend/data/portfolio.json
        self._data_path = Path(__file__).resolve().parents[2] / "data" / "portfolio.json"

    def get_portfolio(self) -> Dict[str, Any]:
        with self._data_path.open("r", encoding="utf-8") as file:
            return json.load(file)


portfolio_service = PortfolioService()
