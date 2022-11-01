import {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'

/* 
Este middlware serve para validar os campos do body 
Esses campos foram criados no arquivo "productBodyValidation"
*/

// criando um middleware coringa, para conseguir trabalhar com qualquer erro
// sendo assim, não há necessidade de ficar criando validações o tempo todo

function handleBodyValidation (req: Request, res: Response, next: NextFunction){
    // criando um arrays de erros
    const errors = validationResult(req)
    const extractErrors: object[] = []
    
    if(errors.isEmpty()){
        return next()
    }

    errors.array().map((err) => extractErrors.push({[err.param]: err.msg}))
    
    return res.status(422).json({
        errors: extractErrors,

    })

}

export default handleBodyValidation
