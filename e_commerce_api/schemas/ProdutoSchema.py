from pydantic import BaseModel
from datetime import datetime


class ProdutoBase(BaseModel):
    titulo: str
    descricao: str
    peso: int
    data_criacao: datetime | None = None


class ProdutoCreate(ProdutoBase):
    pass


class Produto(ProdutoBase):
    id: int

    class Config:
        orm_mode = True
