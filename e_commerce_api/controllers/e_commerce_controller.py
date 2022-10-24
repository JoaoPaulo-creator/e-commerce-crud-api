from sqlalchemy.orm import Session
from ..models import produto_model
from ..schemas import ProdutoSchema


def consultar_lista_produtos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(produto_model.Produto).offset(skip).limit(limit).all()


def consultar_produto(db: Session, produto_id: int):
    return db.query(produto_model.Produto).filter(produto_model.Produto.id == produto_id).first()


def cadastrar_produto(db: Session, produto: ProdutoSchema.ProdutoCreate):
    db_produto = produto_model.Produto(
        titulo=produto.titulo,
        nome=produto.nome,
        peso=produto.peso,
        descricao=produto.descricao,
        )  # o que tá
    # entre parenteses, é o body da requisição. Ao mesmo tempo, são as colunas que foram criada na tabela
    db.add(db_produto)
    db.commit()
    db.refresh(db_produto)
    return db_produto


def deletar_produto(db: Session, produto_id: int):
    produto_query_delete = db.query(produto_model.Produto).filter(produto_model.Produto.id == produto_id)
    produto_query_delete.delete()
    db.commit()
    return {
        'id_produto': produto_id,
        'message': 'Produto deletado'
        }
