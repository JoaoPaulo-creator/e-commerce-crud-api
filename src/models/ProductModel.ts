import { model, Schema } from 'mongoose'

export const productSchema =  model('ProductModel', new Schema
({
    title: String,
    price: Number,
    flavour: String,
    weight: Number,
    description: String,
    unitCount: Number,
    onSale: Boolean,

    categoryId:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'CategoryModel'
    }
},
{
    timestamps: true
}))