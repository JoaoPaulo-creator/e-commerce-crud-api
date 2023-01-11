import { model, Schema} from 'mongoose'

export const productSchema =  model('ProductModel', new Schema
({
    title: String,
    price: Number,
    flavour: String,
    weight: Number,
    description: String,

    categoryId:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'CategoryModel'
    }
},
{
    timestamps: true
}))