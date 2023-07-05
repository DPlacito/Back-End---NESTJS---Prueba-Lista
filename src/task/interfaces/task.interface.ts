import { Document } from 'mongoose';

//Ayudar a typescript a escribir el codigo, dado que es un lenguaje tipado define mejor los tipos de datos

export interface Task extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly status: string;
  readonly deleted: number;
  readonly createdAt: Date;
}
