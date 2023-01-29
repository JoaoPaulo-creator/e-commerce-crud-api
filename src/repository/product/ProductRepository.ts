import { productSchema } from "../../models/ProductModel"

class ProductRepository {

  async findAll(){
    const products = await productSchema.find()
    return products
  }

  async findById(id: string){
    const product = await productSchema.findById(id)
    return product
  }

  async create(data: any){
    const product = await productSchema.create(data)
    return product
  }

  async update(id: string, {
    title,
    price,
    flavour,
    weight,
    description,
    onSale,
    unitCount
  }: any){

    const product = await productSchema.findByIdAndUpdate(id, {
      title,
      price,
      flavour,
      weight,
      description,
      onSale,
      unitCount
    })
    return product
  }

  async delete(id: string){
   const product = await productSchema.findByIdAndDelete(id)
   return product
  }

}

export default new ProductRepository()