import { model, Schema} from 'mongoose'

export const CategorySchema = model('CategoryModel', new Schema({
  title: {
    type: String,
    require: true
  }
}))