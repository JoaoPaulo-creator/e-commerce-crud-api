from pydantic import BaseModel
from datetime import datetime

class ProdutoBase(BaseModel):
    titulo: str
    descricao: str
    peso: int
    data_criacao: datetime


class ProdutoCreate(ProdutoBase):
    pass


class Produto(ProdutoBase):
    id: int

    class Config:
        orm_mode = True
