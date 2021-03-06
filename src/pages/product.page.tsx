import { Header } from '@src/components';
import { cartActions } from '@src/store/modules/cart';
import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { PageStyle } from '@src/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const products: Array<Product> = useSelector(({ products }: AppState) => products);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { id } = router.query;
    const target = products.find((product) => product.id === Number(id));
    setProduct(target);
  }, [products, router]);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    dispatch(cartActions.addProduct(product));
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <PageStyle.Container>
          {product ? (
            <>
              <h1>{product.title}</h1>
              <button type="button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </>
          ) : (
            <p>Produto não encontrado.</p>
          )}
        </PageStyle.Container>
      </main>
    </>
  );
};


export default ProductPage;
