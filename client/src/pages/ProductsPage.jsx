import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Unable to fetch products', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Products</p>
        <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">Premium coconut products for global supply.</h1>
      </div>

      <div className="mt-12">
        <ProductGrid products={products} loading={loading} />
      </div>
    </div>
  );
};

export default ProductsPage;
