import { PRODUCT_SCHEMA } from "../../models/ProductModel"

class ProductRepository {

  async findAll(){
    const products = await PRODUCT_SCHEMA.find()
    return products
  }

  async findById(id: string){
    const product = await PRODUCT_SCHEMA.findById(id)
    return product
  }

  async create(data: any){
    const product = await PRODUCT_SCHEMA.create(data)
    return product
  }

  async update(id: any, {
    title,
    price,
    flavour,
    weight,
    description
  }: any){

    const product = await PRODUCT_SCHEMA.findByIdAndUpdate(id, {
      title,
      price,
      flavour,
      weight,
      description
    })
    return product
  }

  async delete(id: string){
   const product = await PRODUCT_SCHEMA.findByIdAndDelete(id)
   return product
  }

}

export default new ProductRepository()