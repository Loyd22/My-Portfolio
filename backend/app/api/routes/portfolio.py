from fastapi import APIRouter

from app.schemas.portfolio import PortfolioPayload
from app.services.portfolio_service import portfolio_service

router = APIRouter(prefix="/api", tags=["portfolio"])


@router.get("/portfolio", response_model=PortfolioPayload)
def get_portfolio() -> PortfolioPayload:
    data = portfolio_service.get_portfolio()
    return PortfolioPayload(**data)
