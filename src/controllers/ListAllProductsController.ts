import { Request, Response } from "express";
import ProductRepository from "../repository/ProductRepository";

class ListAllProductsController {

  async index(request: Request, response: Response) {
    const products = await ProductRepository.findAll()
    if(!products) {
      return response.status(404).json({ message: 'Products list not found'})
    }
    return response.status(200).json(products)
  }
}

export default new ListAllProductsController()