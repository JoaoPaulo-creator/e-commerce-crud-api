from sqlalchemy.orm import Session
from ..models import produto_model
from ..schemas import ProdutoSchema
from fastapi import HTTPException


def consultar_lista_produtos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(produto_model.Produto).offset(skip).limit(limit).all()


def consultar_produto(db: Session, produto_id: int):
    db_produto = db.query(produto_model.Produto).filter(produto_model.Produto.id == produto_id).first()
    if not db_produto:
        raise HTTPException(status_code=404, detail='Produto não encontrado')


def cadastrar_produto(db: Session, produto: ProdutoSchema.ProdutoCreate):
    db_produto = produto_model.Produto(
        titulo=produto.titulo,
        preco=produto.preco,
        sabor=produto.sabor,
        peso=produto.peso,
        descricao=produto.descricao,
        data_criacao=produto.data_criacao
    )  # o que tá
    # entre parenteses, é o body da requisição. Ao mesmo tempo, são as colunas que foram criada na tabela
    db.add(db_produto)
    db.commit()
    db.refresh(db_produto)
    return db_produto


def deletar_produto(db: Session, produto_id: int):
    produto_query_delete = db.query(produto_model.Produto).filter(produto_model.Produto.id == produto_id)
    select_query = produto_query_delete.first()

    if select_query is None:
        raise HTTPException(status_code=404, detail='Produto não encontrado')

    produto_query_delete.delete()
    db.commit()

    return {
        'id_produto': produto_id,
        'message': 'Produto deletado com sucesso'
        }


def atualizar_produto(db: Session, produto_id: int, item_atualizado: ProdutoSchema.ProdutoCreate):
    localizar_produto = db.query(produto_model.Produto).filter(produto_model.Produto.id == produto_id)
    #  Quando se vai atualizar um dado no banco de dados, é necessário passar um dicionário
    #  na função update()

    select_query = localizar_produto.first()

    if select_query is None:
        raise HTTPException(status_code=404, detail=f'Id {produto_id} não encontrado')

    localizar_produto.update(item_atualizado.dict())
    db.commit()
    return localizar_produto.first()
