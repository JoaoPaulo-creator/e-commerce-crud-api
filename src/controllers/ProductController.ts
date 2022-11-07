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

    public async getAllProducts(req: Request, res: Response){
        try {
            const products = await PRODUCT_SCHEMA.find()
            return res.status(200).json(products)
        } catch (error) {
            console.error(`An error occured: ${error}`)
        }
    }

    public async deleteProductById(req: Request, res: Response){
        try {
            const productId = req.params.id
            const product = await PRODUCT_SCHEMA.findById(productId)    
            if(!product){
                return res.status(404).send({message: 'Product not found'})
            }

            //perform delete
            await product.delete()
            return res.status(200).json({ message: 'Product deleted successfully', product: [product._id, product.title]})
        } catch (error) {
            console.error(`An error occured while deleting produtc: ${error}`)
        }
        
    }

    public async patchProductId(req: Request, res: Response){
        try {
            const productId = req.params.id
            const data = req.body

            const product = await PRODUCT_SCHEMA.findById(productId)

            if(!product){
                return res.status(404).json({message: 'Product not found'})
            }

            // perform update
            await PRODUCT_SCHEMA.updateOne({_id: productId}, data)
            return res.status(200).json(product)

        } catch (error) {
            console.error({message: `An error ocurred while update product: ${error}`})            
        }
    }

}

export default new ProductController()
