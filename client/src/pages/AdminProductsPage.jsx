import { useEffect, useState } from 'react';
import { createProduct, deleteProduct, fetchProducts, updateProduct } from '../services/api';

const emptyForm = {
  name: '',
  description: '',
  category: '',
  image: '',
  specifications: '',
  packaging: '',
  minimumOrderQuantity: '',
  availability: 'Available',
  exportMarkets: '',
};

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const loadProducts = async () => {
    try {
      const { data } = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Unable to load products', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      specifications: form.specifications
        ? Object.fromEntries(form.specifications.split(',').map((item) => item.split(':').map((part) => part.trim())).filter((pair) => pair.length === 2))
        : {},
      packaging: form.packaging ? form.packaging.split(',').map((item) => item.trim()).filter(Boolean) : [],
      exportMarkets: form.exportMarkets ? form.exportMarkets.split(',').map((item) => item.trim()).filter(Boolean) : [],
    };

    try {
      if (editingId) {
        await updateProduct(editingId, payload);
      } else {
        await createProduct(payload);
      }
      setForm(emptyForm);
      setEditingId(null);
      setMessage(editingId ? 'Product updated successfully.' : 'Product added successfully.');
      loadProducts();
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Unable to save product.');
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      description: product.description,
      category: product.category,
      image: product.image,
      specifications: Object.entries(product.specifications || {}).map(([key, value]) => `${key}:${value}`).join(', '),
      packaging: (product.packaging || []).join(', '),
      minimumOrderQuantity: product.minimumOrderQuantity,
      availability: product.availability,
      exportMarkets: (product.exportMarkets || []).join(', '),
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setMessage('Product deleted successfully.');
      loadProducts();
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Unable to delete product.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800">Product Management</h1>
        {message && <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{message}</div>}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Product Name
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Description
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" rows={4} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Category
          <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Image URL
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Specifications (key:value, key:value)
          <input value={form.specifications} onChange={(e) => setForm({ ...form, specifications: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Packaging
          <input value={form.packaging} onChange={(e) => setForm({ ...form, packaging: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          MOQ
          <input value={form.minimumOrderQuantity} onChange={(e) => setForm({ ...form, minimumOrderQuantity: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Availability
          <input value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Export Markets
          <input value={form.exportMarkets} onChange={(e) => setForm({ ...form, exportMarkets: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>

        <div className="md:col-span-2 flex justify-end gap-3">
          {editingId && (
            <button type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }} className="btn-secondary">
              Cancel
            </button>
          )}
          <button type="submit" className="btn-primary">
            {editingId ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">Current Products</h2>
        {loading ? (
          <div className="mt-4 text-slate-500">Loading products...</div>
        ) : (
          <div className="mt-6 space-y-4">
            {products.map((product) => (
              <div key={product._id} className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div>
                    <div className="font-semibold text-slate-800">{product.name}</div>
                    <div className="text-sm text-slate-500">{product.category}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => handleEdit(product)} className="btn-secondary">Edit</button>
                  <button type="button" onClick={() => handleDelete(product._id)} className="btn-primary bg-red-500 hover:bg-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProductsPage;
