import { Router } from "express"
import ProductController from "./controllers/ProductController"
import handleBodyValidation from "./middlewares/handleValidation"
import bodyRequestValidation from './middlewares/productBodyValidation'

import ListAllProductsController from "./controllers/ListAllProductsController"
import ListProductController from "./controllers/ListProductController"
import DeleteProductController from "./controllers/DeleteProductController"

const router = Router()

router.get('/product', ListAllProductsController.index)
router.get('/product/:id', ListProductController.show)

router.post('/product', bodyRequestValidation(), handleBodyValidation, ProductController.createProduct)
router.patch('/product/:id', bodyRequestValidation(), handleBodyValidation, ProductController.patchProductId)

router.delete('/product/:id', DeleteProductController.delete)


export default router