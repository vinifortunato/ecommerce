import { CartHandler, Header, PaymentHandler } from '@src/components';
import Head from 'next/head';
import { PageStyle } from '@src/styles';

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <PageStyle.Container>
          <CartHandler />
          <PaymentHandler />
        </PageStyle.Container>
      </main>
    </>
  );
};

export default ProductPage;
