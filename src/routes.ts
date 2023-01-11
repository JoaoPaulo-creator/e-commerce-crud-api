import { Router } from "express"
import handleBodyValidation from "./middlewares/handleValidation"
import bodyProductRequestValidation from './middlewares/productBodyValidation'

import ListAllProductsController from "./controllers/product/ListAllProductsController"
import ListProductController from "./controllers/product/ListProductController"
import DeleteProductController from "./controllers/product/DeleteProductController"
import UpdateProductController from "./controllers/product/UpdateProductController"
import CreateProductController from "./controllers/product/CreateProductController"

import CreateCategoryController from "./controllers/category/CreateCategoryController"
import ListCategoriesController from "./controllers/category/ListCategoriesController"
import DeleteCategoryController from "./controllers/category/DeleteCategoryController"
import ListCategoryController from "./controllers/category/ListCategoryController"
import UpdateCategoryController from "./controllers/category/UpdateCategoryController"



const router = Router()

router.get('/product', ListAllProductsController.index)
router.get('/product/:id', ListProductController.show)

router.post('/product', bodyProductRequestValidation(), handleBodyValidation, CreateProductController.store)
router.patch('/product/:id', bodyProductRequestValidation(), handleBodyValidation, UpdateProductController.update)

router.delete('/product/:id', DeleteProductController.delete)


router.post('/category', CreateCategoryController.store)

router.get('/categories', ListCategoriesController.index)
router.get('/categories/:id', ListCategoryController.show)

router.delete('/categories/:id', DeleteCategoryController.delete)
router.patch('/categories/:id', UpdateCategoryController.update)


export default router