import { model, Schema} from 'mongoose'

export const categorySchema = model('CategoryModel', new Schema({
  title: {
    type: String,
    require: true
  },
  },
  {
    timestamps: true
  }
))