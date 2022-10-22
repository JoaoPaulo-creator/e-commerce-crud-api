from sqlalchemy import Column, Integer, String
from ..config.database import Base


class Produto(Base):
    __tablename__ = 'produtos'

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, unique=False, index=True)
    nome = Column(String, unique=False, index=True)
    peso = Column(Integer, unique=False, index=True)
    descricao = Column(String, unique=False, index=True)
