from sqlalchemy import Column, Integer, String
from ..config.database import Base


class Produto(Base):
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, unique=False, index=True)
    descricao = Column(String, unique=False, index=False)
    peso = Column(Integer, unique=False, index=True)
