import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import InquiryForm from '../components/InquiryForm';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Unable to fetch product', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <LoadingSpinner label="Loading product details..." />;
  if (!product) return <div className="mx-auto max-w-3xl py-20 text-center text-slate-600">Product not found.</div>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/products" className="mb-8 inline-block text-sm font-medium text-coconut-green">
        ← Back to products
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">{product.category}</p>
          <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

          <div className="mt-8 grid gap-4 rounded-2xl bg-green-50 p-5 text-sm text-slate-700">
            <div><span className="font-semibold text-coconut-green-dark">MOQ:</span> {product.minimumOrderQuantity || '1 container'}</div>
            <div><span className="font-semibold text-coconut-green-dark">Availability:</span> {product.availability || 'Available'}</div>
            <div><span className="font-semibold text-coconut-green-dark">Export Markets:</span> {product.exportMarkets?.join(', ') || 'Asia, Middle East, Europe, Africa'}</div>
          </div>

          <button type="button" onClick={() => setShowInquiry(true)} className="btn-primary mt-8">
            Send Inquiry
          </button>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-coconut-green-dark">Specifications</h2>
          <div className="mt-6 space-y-4">
            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 border-b border-slate-100 pb-2 text-sm text-slate-700">
                <span className="font-semibold text-coconut-green-dark">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-coconut-green-dark">Packaging & Availability</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <span className="font-semibold text-coconut-green-dark">Packaging:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {(product.packaging || []).map((item) => (
                  <span key={item} className="rounded-full bg-coconut-green-light px-3 py-1 text-xs font-medium text-coconut-green-dark">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-semibold text-coconut-green-dark">Minimum Order Quantity:</span> {product.minimumOrderQuantity || '1 container'}
            </div>
            <div>
              <span className="font-semibold text-coconut-green-dark">Available Export Regions:</span> {product.exportMarkets?.join(', ') || 'Regional and international markets'}
            </div>
          </div>
        </div>
      </div>

      {showInquiry && (
        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-coconut-green-dark">Request a quote for {product.name}</h2>
          </div>
          <InquiryForm productName={product.name} onClose={() => setShowInquiry(false)} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
