import { useState } from 'react';
import { submitInquiry } from '../services/api';
import ErrorMessage from './ErrorMessage';

const InquiryForm = ({ productName = '', onClose }) => {
  const [form, setForm] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    product: productName,
    quantity: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await submitInquiry(form);
      setSuccess('Inquiry submitted successfully. We will contact you soon.');
      setForm({
        customerName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        product: productName,
        quantity: '',
        message: '',
      });
      if (onClose) setTimeout(onClose, 1200);
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-green-100 bg-white p-6 shadow-xl">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Customer Name
          <input name="customerName" value={form.customerName} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Company Name
          <input name="companyName" value={form.companyName} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Country
          <input name="country" value={form.country} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Product
          <input name="product" value={form.product} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Quantity
          <input name="quantity" value={form.quantity} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Message
          <textarea name="message" rows={4} value={form.message} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>
      </div>

      {error && <div className="mt-5"><ErrorMessage message={error} /></div>}
      {success && <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>}

      <div className="mt-6 flex justify-end gap-3">
        {onClose && (
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
        )}
        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
