import pb from "./pocketbase"

export default async function getProducts() {
  try {
    const products = await pb.collection("products").getFullList()
    return products
  } catch (e) {
    console.log(e)
    return []
  }
}