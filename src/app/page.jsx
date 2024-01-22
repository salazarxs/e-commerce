import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.containerBannerHome}>
        <div className={styles.ctaBanner}>
          <h1>The nature candle</h1>
          <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
          <button className={styles.btnCta}>Discovery our collection</button>
        </div>
      </div>
      <div className="productsHome">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones</p>
        <div className="products">

        </div>
      </div>
    </main>
  );
}
