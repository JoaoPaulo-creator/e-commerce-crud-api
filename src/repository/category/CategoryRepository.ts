import { categorySchema } from "../../models/CategoryModel"

export default new class CategoryRepository {

  async create(data: any){
    const category = await categorySchema.create(data)
    return category
  }

  async findAll(){
    const categories = await categorySchema.find()
    return categories
  }

  async findById(id: string){
    const product = await categorySchema.findById(id)
    return product
  }

  async delete(id: string){
    const category = await categorySchema.findByIdAndDelete(id)
    return category
  }

  async update(id: any, { title }: any){
    const category = await categorySchema.findByIdAndUpdate(id, { title})
    return category
  }

}

