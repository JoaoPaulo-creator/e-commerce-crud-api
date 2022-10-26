from pydantic import BaseModel
from datetime import datetime


class ProdutoBase(BaseModel):
    titulo: str
    preco: str
    descricao: str | None = None
    sabor: str | None = None
    peso: int
    data_criacao: datetime | None = None


class ProdutoCreate(ProdutoBase):
    pass


class Produto(ProdutoBase):
    id: int

    class Config:
        orm_mode = True
