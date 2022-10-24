from sqlalchemy import Column, Integer, String
from ..config.database import Base
from sqlalchemy.sql.sqltypes import TIMESTAMP


class Produto(Base):
    __tablename__ = 'produtos'

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    titulo = Column(String, unique=False, index=True, nullable=False)
    peso = Column(Integer, unique=False, index=True, nullable=False)
    descricao = Column(String, unique=False, index=True, nullable=False)

    data_criacao = Column(TIMESTAMP(timezone=True),
                          unique=False, index=True,
                          nullable=True)
