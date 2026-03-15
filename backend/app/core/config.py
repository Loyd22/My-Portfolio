from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = "Loyd Portfolio API"
    app_version: str = "1.0.0"
    frontend_origin: str = "http://localhost:3000"


settings = Settings()
