import { Request, Response } from "express";
import CategoryRepository from "../../repository/category/CategoryRepository";

export default new class ListCategoryController {

  async show(request: Request, response: Response) {
    const id: string = request.params.id
    const category = await CategoryRepository.findById(id)

    if(!category){
      return response.status(404).json({ message: 'Category not found'})
    }

    return response.status(200).json(category)
  }
}
