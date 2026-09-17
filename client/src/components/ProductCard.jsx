import { ArrowRight, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <article className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-60 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-coconut-green-dark">
        {product.category}
      </span>
    </div>

    <div className="p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-coconut-green-dark">{product.name}</h3>
        <PackageCheck className="text-coconut-green" size={18} />
      </div>

      <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p>

      <div className="mb-5 space-y-2 text-sm text-slate-700">
        <div>
          <span className="font-semibold text-coconut-green-dark">MOQ:</span> {product.minimumOrderQuantity || '1 container'}
        </div>
        <div>
          <span className="font-semibold text-coconut-green-dark">Availability:</span> {product.availability || 'Available'}
        </div>
      </div>

      <div className="flex gap-3">
        <Link to={`/products/${product._id}`} className="btn-secondary flex-1">
          View Details
        </Link>
        <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn-primary flex-1">
          Send Inquiry
        </Link>
      </div>
    </div>
  </article>
);

export default ProductCard;
