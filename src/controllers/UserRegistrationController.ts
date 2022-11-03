import {Request, Response } from 'express'
import { USER_SCHEMA } from '../models/PersonModel'


class UserRegistrationController{
      
    public async createPerson(req: Request, res: Response){        
        const  userEmail = req.body
        const data = req.body
        try {

            /*
            realizando a consulta no banco, 
            para verificar se email informado já existe
            */
            const isEmailAlreadyExists = await USER_SCHEMA.findOne(userEmail)            
            if (isEmailAlreadyExists){
                return res.status(422).json({ message: 'Email already exists!'})
            }

            const person = await USER_SCHEMA.create(data)
            return res.status(201).json(person)

        } catch (error) {
            console.log(error)
        }        
    }

    public async getPersonById(req: Request, res: Response){
        try {
            const userId = req.params.id
            const userData = await USER_SCHEMA.findById(userId)

            if(!userData){
                return res.status(404).json({message: 'User not found'})
            }

            return res.status(200).json(userData)
        } catch (error) {
            console.error(error)
        }        
    }

    public async getAllUsers(req: Request, res: Response){
        try {            
            const userList = await USER_SCHEMA.find()
            return res.status(200).json(userList)
        } catch (error) {
            console.error(`An error occurred while searching for users. Error: ${error}`)
        }        
    }

    public async deleteUserById(req: Request, res: Response){
        const userId = req.params.id
        const userData = await USER_SCHEMA.findById(userId)
        try {
            if(!userData){
                return res.status(404).json({ message: 'User not found'})
            }
            await userData.delete()
            return res.status(200).json({message: 'User deleted', user_name: userData.name, user_id: userData.id})
        } catch (error) {
            console.log(error)            
        }
    }

}

export default new UserRegistrationController()