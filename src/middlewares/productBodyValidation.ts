import { body } from 'express-validator'

export default function bodyProductRequestValidation(){
    return [
        body('title')
        .isString()
        .withMessage('Title must be informed'),

        body('price')
        .isNumeric()
        .withMessage('Price must be a number')
        .custom((value: number) =>{
            if( value < 0 ){
                throw new Error('Invalid price')
            }
            return true
        }),

        body('flavour')
        .isString()
        .withMessage('Flavour must be informed'),

        body('weight')
        .isNumeric()
        .withMessage('Weight must be a number')
        .custom((value: number) =>{
            if( value < 0 ){
                throw new Error('Invalid Weight')
            }
            return true
        }),

        body('description')
        .isString()
        .withMessage('Description must be informed'),

        body('categoryId')
        .isString()

    ]
}