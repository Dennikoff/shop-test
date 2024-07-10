import axios from "axios"

export async function getProducts() {
  const result = await axios.get('https://fakestoreapi.com/products/')
  console.log(result)
  return result.data
}