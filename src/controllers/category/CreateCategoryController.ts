import { Request, Response } from "express";
import CategoryRepository from "../../repository/category/CategoryRepository";

export default new class CreateCategoryController {
  async store(request: Request, response: Response){
    const data = request.body

    // Bug
    const duplicate = await CategoryRepository.find(data.title)

    if(duplicate.length > 1){
      return response.json(duplicate)
    }

    if(!data.title){
      return response.status(400).json({ message: 'Title is required'})
    }

    const category = await CategoryRepository.create(data)
    return response.status(201).json(category)
  }
}