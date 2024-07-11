import { Product } from "./Product";

export interface Bucket {
  product: Product,
  quantity: number,
  selected: boolean,
}