import { Request, Response } from "express"
import CategoryRepository from "../../repository/category/CategoryRepository"


export default new class UpdateCateogoryController {
  async update(request: Request, response: Response) {
    const id = request.params.id
    const { title } = request.body

    await CategoryRepository.update(id, { title })

    const updatedCategory = await CategoryRepository.findById(id)
    return response.json(updatedCategory)
  }
}