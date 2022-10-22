from fastapi import FastAPI
from .routes import produtos

app = FastAPI()

app.include_router(produtos.router)
