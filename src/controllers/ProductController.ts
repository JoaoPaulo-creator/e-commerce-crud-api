import { Request, Response} from 'express'
import { PRODUCT_SCHEMA } from '../models/ProductModel'

class ProductController {

    public async createProduct(req: Request, res: Response): Promise<Response> {
        const data = req.body
        const product = await PRODUCT_SCHEMA.create(data)
        return res.status(201).json(product)        
    }

    public async getProductById(req: Request, res: Response){
        const productId = req.params.id
        const product = await PRODUCT_SCHEMA.findById(productId)

        if(!product){
            return res.status(404).send({message: 'Product not found'})
        }

        return res.status(200).json(product)
    }

}

export default new ProductController()
