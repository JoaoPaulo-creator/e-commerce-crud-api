import { Router } from "express"
import ProductController from "./controllers/ProductController"
import handleBodyValidation from "./middlewares/handleValidation"
import bodyRequestValidation from './middlewares/productBodyValidation'


const router = Router()
// rotas de produtos
router.get('/product', ProductController.getAllProducts)
router.get('/product/:id', ProductController.getProductById)

router.post('/product', bodyRequestValidation(), handleBodyValidation, ProductController.createProduct)
router.patch('/product/:id', bodyRequestValidation(), handleBodyValidation, ProductController.patchProductId)
router.delete('/product/:id', ProductController.deleteProductById)


export default router