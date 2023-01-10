import { CategorySchema } from "../../models/CategoryModel"

export default new class CategoryRepository {

  async create(data: any){
    const category = await CategorySchema.create(data)
    return category
  }



}

