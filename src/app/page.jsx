"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import HorizontalCard from "@/components/HorizontalCard";
import { GetProducts } from "./helpers/GetProducts";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const limit = 4;
    GetProducts(limit, setProducts);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.containerBannerHome}>
        <div className={styles.ctaBanner}>
          <h1>The nature candle</h1>
          <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
          <button className={styles.btnCta}>Discovery our collection</button>
        </div>
      </div>
      <div className={styles.productsHome}>
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones</p>
        <div className={styles.products}>
          {products && products.length ?
            <>
              {
                products.map(product => (
                  <HorizontalCard
                    key={product.id}
                    productID={product.id}
                    productName={product.productName}
                    img={product.productImage}
                    price={product.price}
                  />


                ))
              }
              <Link
                href={'/products'}
                className={styles.seeMoreProducts}
              >See more</Link>
            </>
            : 'Loading products...'
          }

        </div>
      </div>
    </main >
  );
}
