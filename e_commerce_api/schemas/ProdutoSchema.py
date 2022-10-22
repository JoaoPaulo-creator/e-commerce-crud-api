from pydantic import BaseModel


class ProdutoBase(BaseModel):
    descricao: str


class ProdutoCreate(ProdutoBase):
    nome: str
    titulo: str


class Produto(ProdutoBase):
    id: int
    peso: float

    class Config:
        orm_mode = True

