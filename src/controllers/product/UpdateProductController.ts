import { Request, Response } from "express";
import ProductRepository from "../../repository/product/ProductRepository";

export default new class UpdateProductContoller {

  async update(request: Request, response: Response){

    try {
      const id = request.params.id
      const {
        title,
        price,
        flavour,
        weight,
        description,
        onSale,
        unitCount
      } = request.body

      await ProductRepository.update(id, {
        title,
        price,
        flavour,
        weight,
        description,
        onSale,
        unitCount
      })

      const updatedProduct = await ProductRepository.findById(id)

      return response.json(updatedProduct)

    } catch (error) {
      return response.status(500)
    }
  }
}