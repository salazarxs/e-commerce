import axios from "axios";
import { GenerateJWT } from "./JWT";
import { Product } from "./interfaces/ProductInterface";

export const GetProducts = async (limit: number, state: any) => {
  const jwt: string = await GenerateJWT("getLimit");

  await axios
    .get(`/api/v1/products/${limit}`, {
      headers: {
        JWT: jwt,
      },
    })
    .then((data) => {
      const products: Product = data.data.data;
      console.log(products);
      state(products);
    })
    .catch((err: any) => {
      console.error(`Error to get products by limit ${limit} --> ${err}`);
      console.log(err);
      state(0);
    });
};
