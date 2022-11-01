import { model, Schema} from 'mongoose'

const ProductSchema = new Schema 
    ({
        title: String,
        price: Number,
        flavour: String,
        weight: Number,
        description: String
    },
    {
        timestamps: true
    })

export const PRODUCT_SCHEMA = model('ProductModel', ProductSchema)