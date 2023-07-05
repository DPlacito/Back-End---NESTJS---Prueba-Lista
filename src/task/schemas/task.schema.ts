//Esquema para ver como vamos a guardar los datos en mongodb
import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  name: { type: String, require: true },
  description: String,
  imageURL: String,
  price: Number,
  status: {
    type: String,
    enum: ['NoCompletado', 'Completado'],
    default: 'NoCompletado',
  },
  deleted: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
