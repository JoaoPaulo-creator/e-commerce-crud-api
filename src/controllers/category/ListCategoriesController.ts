import { Request, Response } from "express";
import CategoryRepository from "../../repository/category/CategoryRepository";

export default new class ListCategoriesController {
  async index(request: Request, response: Response) {
    const categories = await CategoryRepository.findAll()
    return response.status(200).json(categories)
  }
}