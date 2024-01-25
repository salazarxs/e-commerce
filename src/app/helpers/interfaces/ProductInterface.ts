export type Product = {
  readonly ID?: number;
  productName: string;
  categoryID: number;
  productDescription: string;
  price: number;
  rating?: number;
  productImage?: string;
};
