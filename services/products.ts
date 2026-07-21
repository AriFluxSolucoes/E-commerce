import { api } from "./api";
import { productAdapter } from "@/adapters/product.adapter";

export async function getProducts() {
  const { data } = await api.get("/products");

  return data.products.map(productAdapter);
}

export async function getProduct(id: string) {
  const { data } = await api.get(`/products/${id}`);

  return productAdapter(data);
}