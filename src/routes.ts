import { Router } from "express"
import UserRegistrationController from "./controllers/UserRegistrationController"
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


// rotas de usuários
router.get('/user/:id', UserRegistrationController.getPersonById)
router.get('/user', UserRegistrationController.getAllUsers)

router.post('/user_registration', UserRegistrationController.createPerson)
router.delete('/user/:id', UserRegistrationController.deleteUserById)


export default router