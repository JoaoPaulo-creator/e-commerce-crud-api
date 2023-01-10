import { Request, Response } from "express";
import ProductRepository from "../../repository/product/ProductRepository";

export default new class CreateProductController{

  async store(request: Request, respose: Response): Promise<Response> {
    try {
      const data = request.body
      const product = await ProductRepository.create(data)
      return respose.status(201).json(product)

    } catch (error) {
      return respose.json(error)
    }
  }
}

