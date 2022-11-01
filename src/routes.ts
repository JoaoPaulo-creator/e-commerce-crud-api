import { Router, Request, Response } from "express"
import ProductController from "./controllers/ProductController"


const router = Router()

router.get('/product/:id', ProductController.getProductById)
router.post('/product', ProductController.createProduct)

export default router


