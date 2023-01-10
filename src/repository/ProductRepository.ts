import { PRODUCT_SCHEMA } from "../models/ProductModel"

class ProductRepository {

  async findAll(){
    const products = await PRODUCT_SCHEMA.find()
    return products
  }

  async findById(id: string){
    const product = await PRODUCT_SCHEMA.findById(id)
    return product
  }

  async create(arg: JSON){
    const product = await PRODUCT_SCHEMA.create(arg)
  }

  async update(id: string, arg: string){
    const product = await PRODUCT_SCHEMA.findById(id)
    return product
  }

  async delete(id: string){
   const product = await PRODUCT_SCHEMA.findByIdAndDelete(id)
   return product
  }

}

export default new ProductRepository()