import { Request, Response } from "express"
import CategoryRepository from "../../repository/category/CategoryRepository"

export default new class DeleteCategoryController {

  async delete(request: Request, response: Response){
    const categoryID = request.params.id

    await CategoryRepository.delete(categoryID)
    return response.sendStatus(204)
  }
}