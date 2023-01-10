import { Router } from "express"
import handleBodyValidation from "./middlewares/handleValidation"
import bodyRequestValidation from './middlewares/productBodyValidation'

import ListAllProductsController from "./controllers/product/ListAllProductsController"
import ListProductController from "./controllers/product/ListProductController"
import DeleteProductController from "./controllers/product/DeleteProductController"
import UpdateProductController from "./controllers/product/UpdateProductController"
import CreateProductController from "./controllers/product/CreateProductController"

import CreateCategoryController from "./controllers/category/CreateCategoryController"



const router = Router()

router.get('/product', ListAllProductsController.index)
router.get('/product/:id', ListProductController.show)

router.post('/product', bodyRequestValidation(), handleBodyValidation, CreateProductController.store)
router.patch('/product/:id', bodyRequestValidation(), handleBodyValidation, UpdateProductController.update)

router.delete('/product/:id', DeleteProductController.delete)


router.post('/category', CreateCategoryController.store)



export default router