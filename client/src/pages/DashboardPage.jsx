import { useEffect, useState } from 'react';
import { fetchInquiries, fetchProducts } from '../services/api';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsRes, inquiriesRes] = await Promise.all([fetchProducts(), fetchInquiries()]);
        setProducts(productsRes.data);
        setInquiries(inquiriesRes.data);
      } catch (error) {
        console.error('Unable to load dashboard data', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const totals = {
    products: products.length,
    inquiries: inquiries.length,
    contacts: inquiries.filter((item) => item.status === 'New').length,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
      </div>

      {loading ? (
        <div className="text-slate-600">Loading dashboard...</div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-coconut-green-dark p-6 text-white shadow-lg">
              <div className="text-sm uppercase tracking-[0.2em] text-green-100">Total Products</div>
              <div className="mt-3 text-4xl font-bold">{totals.products}</div>
            </div>
            <div className="rounded-2xl bg-coconut-green p-6 text-white shadow-lg">
              <div className="text-sm uppercase tracking-[0.2em] text-green-50">Total Inquiries</div>
              <div className="mt-3 text-4xl font-bold">{totals.inquiries}</div>
            </div>
            <div className="rounded-2xl bg-slate-800 p-6 text-white shadow-lg">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-300">New Inquiries</div>
              <div className="mt-3 text-4xl font-bold">{totals.contacts}</div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">Recent Inquiries</h2>
              <div className="mt-6 space-y-4">
                {inquiries.slice(0, 5).map((item) => (
                  <div key={item._id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold text-slate-800">{item.customerName}</div>
                        <div className="text-sm text-slate-500">{item.product}</div>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{item.status}</span>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{item.email}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">Inquiry Stats</h2>
              <div className="mt-6 space-y-4">
                {['New', 'Contacted', 'Processing', 'Completed', 'Cancelled'].map((status) => {
                  const value = inquiries.filter((item) => item.status === status).length;
                  return (
                    <div key={status} className="flex items-center justify-between text-sm text-slate-700">
                      <span>{status}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
