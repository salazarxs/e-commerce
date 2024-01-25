

export default function ServerSide() {
  const [products, setProducts] = useState();
  const router = useRouter();

  useEffect(() => {
    const limit = 4;
    if (!products) {
      GetProducts(limit, setProducts);
    }

  }, [products]);
  return (
    <main className={styles.main}>
      <div className={styles.containerBannerHome}>
        <div className={styles.ctaBanner}>
          <h1>The nature candle</h1>
          <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
          <button className={styles.btnCta}
            onClick={() => router.push('/products')}
          >Discovery our collection</button>
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
