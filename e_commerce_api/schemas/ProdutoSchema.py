from pydantic import BaseModel


class ProdutoBase(BaseModel):
    descricao: str
    titulo: str
    peso: int


class ProdutoCreate(ProdutoBase):
    nome: str


class Produto(ProdutoBase):
    id: int
    class Config:
        orm_mode = True

