from pydantic import BaseModel


class ProdutoBase(BaseModel):
    titulo: str
    descricao: str


class ProduCreate(ProdutoBase):
    pass


class Produto(ProdutoBase):
    id: int

    class Config:
        orm_mode = True

