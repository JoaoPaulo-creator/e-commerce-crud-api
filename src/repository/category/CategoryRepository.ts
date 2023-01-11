import { categorySchema } from "../../models/CategoryModel"

export default new class CategoryRepository {

  async create(data: any){
    const category = await categorySchema.findOneAndUpdate(data, {upsert: true, returnNewDocument: true})
    return category
  }

  // #BUG
  async find(data: any){
    const duplicate = await categorySchema.aggregate([
      { '$group': { "_id": `$${data}`, 'count': {$sum: 1} } },
      { '$match': { 'count': { '$gt': 1 }}},
    ])
    return duplicate
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

  async count(data: any){
    const category = await categorySchema.count(data)
    return category
  }
}

