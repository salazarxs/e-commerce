import axios from "axios";
import { GenerateJWT } from "./JWT";

export const
    GetProducts = async (limit, state) => {

        const jwt = await GenerateJWT('getLimit');

        await axios.get(`/api/v1/products/${limit}`, {
            headers: {
                JWT: jwt
            }
        })
            .then(data => {
                const products = data.data;
                console.log(data)
                state(products.body.data);
            })
            .catch(err => {
                console.error(`Error to get products by limit ${limit} --> ${err}`);
                console.log(err)
                state(0);
            });
    };