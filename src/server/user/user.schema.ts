import { Schema, model } from 'mongoose'

export const userSchema = new Schema({
  // 覆盖 mongoose生成的默认_id
  _id: { type: String, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
})