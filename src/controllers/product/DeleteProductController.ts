import { Request, Response } from "express";
import ProductRepository from "../../repository/product/ProductRepository";

export default new class DeleteProductController {

  async delete(request: Request, response: Response) {
    const productId = request.params.id
    await ProductRepository.delete(productId)

    return response.sendStatus(204)
  }

}