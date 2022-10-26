from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from ..models import produto_model
from ..schemas import ProdutoSchema
from ..config.database import SessionLocal, engine
from ..controllers import e_commerce_controller as comm_controller

produto_model.Base.metadata.create_all(bind=engine)

router = APIRouter(prefix='/produtos', tags=['produto-e-commerce'])


def get_db():
    data_base = SessionLocal()
    try:
        yield data_base
    finally:
        data_base.close()


@router.post('/', response_model=ProdutoSchema.Produto, status_code=201)
def cadastrar_produto(produto: ProdutoSchema.ProdutoCreate, db: Session = Depends(get_db)):
    return comm_controller.cadastrar_produto(db, produto)


@router.get('/', status_code=200)
def consultar_lista_de_produtos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_produto = comm_controller.consultar_lista_produtos(skip=skip, limit=limit, db=db)
    return db_produto


@router.get('/{id_produto}', status_code=200)
def consultar_produto_por_id(id_produto: int, db: Session = Depends(get_db)):
    db_produto = comm_controller.consultar_produto(db, id_produto)
    if not db_produto:
        raise HTTPException(status_code=404, detail='Produto não encontrado')
    return db_produto


@router.put('/{id_produto}')
def atualizar_produto_por_id(id_produto: int, produto: ProdutoSchema.ProdutoCreate, db: Session = Depends(get_db)):
    atualizar_produto = comm_controller.atualizar_produto(db, id_produto, produto)
    if atualizar_produto is None:
        raise HTTPException(status_code=404, detail=f'Id {id_produto} não encontrado')
    return atualizar_produto


@router.delete('/{id_produto}')
def deletar_produto_por_id(id_produto: int, db: Session = Depends(get_db)):
    db_produto = comm_controller.deletar_produto(db, id_produto)
    if not db_produto:
        raise HTTPException(status_code=404, detail='Produto não encontrado')
    return db_produto
