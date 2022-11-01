import { Router } from "express"
import ProductController from "./controllers/ProductController"


const router = Router()

router.get('/product', ProductController.getAllProducts)
router.get('/product/:id', ProductController.getProductById)
router.post('/product', ProductController.createProduct)
router.delete('/product/:id', ProductController.deleteProductById)
router.patch('/product/:id', ProductController.patchProductId)

export default router