from sqlalchemy.orm import Session
from ..models import ProdutoModel
from ..schemas import ProdutoSchema


def consultar_lista_produtos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(ProdutoModel.Produto).offset(skip).limit(limit).all()


def consultar_produto(db: Session, produto_id: int):
    return db.query(ProdutoModel.Produto).filter(ProdutoModel.Produto.id == produto_id).first()


def cadastrar_produto(db: Session, produto: ProdutoSchema.ProdutoCreate):
    db_produto = ProdutoModel.Produto(nome=produto.descricao)
    db.add(db_produto)
    db.commit()
    db.refresh(db_produto)
    return db_produto
