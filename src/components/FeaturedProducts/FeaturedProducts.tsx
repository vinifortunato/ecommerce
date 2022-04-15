import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
  const products: Array<Product> = useSelector(({ products }: AppState) => products);
  const filtered: Array<Product> = products.filter((product: Product) => product.featured);

  const map = filtered.map((product: Product) => {
    return <li key={product.id}>{product.name}</li>;
  });

  return (
    <div>
      <ul>
        {map}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
