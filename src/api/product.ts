import axios from "axios"

export async function getProducts() {
  const result = await axios.get('https://fakestoreapi.com/products/')
  return result.data
}