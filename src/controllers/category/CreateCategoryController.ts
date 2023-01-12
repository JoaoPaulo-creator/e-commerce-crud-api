import { Request, Response } from "express";
import CategoryRepository from "../../repository/category/CategoryRepository";
import { handleDuplicateKey } from "./utils/handleDuplicateCategory";



export default new class CreateCategoryController {
  async store(request: Request, response: Response){

    try {
      const data = request.body

      if(!data.title){
        return response.status(400).json({ message: 'Title is required'})
      }

      const category = await CategoryRepository.create(data)
      return response.status(201).json(category)

    } catch (error) {
      return response.status(400).json({error: handleDuplicateKey(error)})
    }
  }
}