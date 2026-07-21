import { Product } from "@/types/product";
import { ApiProduct } from "@/types/apiProduct";

export function productAdapter(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    stock: apiProduct.stock,
    category: apiProduct.category,
    image: apiProduct.thumbnail,
  };
}