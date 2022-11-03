import { model, Schema} from 'mongoose'

const UserSchema = new Schema ({
    name: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    personalId:{
        type: String,
        unique: true
    },
    password: String,    
    isAdmin: Boolean
},
    {
        timestamps: true
    })

export const USER_SCHEMA = model('PersonSchema', UserSchema)