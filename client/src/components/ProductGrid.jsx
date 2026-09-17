import ProductCard from './ProductCard';

const ProductGrid = ({ products = [], loading }) => {
  if (loading) {
    return <div className="py-10 text-center text-coconut-green-dark">Loading products...</div>;
  }

  if (!products.length) {
    return <div className="py-10 text-center text-slate-600">No products available right now.</div>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id || product.slug} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
