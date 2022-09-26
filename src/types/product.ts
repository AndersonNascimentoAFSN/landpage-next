export interface Product {
  id: string;
  name: string;
  imageURL: string;
  listPrice: string;
  salePrice: string;
  isFavorite: boolean;
}

export interface ProductData extends Omit<Product, "listPrice" | "salePrice"> {
  listPrice: number;
  salePrice: number;
}
