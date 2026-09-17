import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ErrorMessage from './ErrorMessage';
import { submitContactMessage } from '../services/api';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_STATE);
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
      await submitContactMessage(form);
      setSuccess('Your message has been sent successfully. Our team will get back to you soon.');
      setForm(INITIAL_STATE);
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl bg-coconut-forest p-8 text-white shadow-xl">
        <h3 className="text-3xl font-bold">Contact STS Traders</h3>
        <p className="mt-4 text-green-100">Tell us about your coconut sourcing needs and we’ll respond with the right solution.</p>

        <div className="mt-8 space-y-5 text-sm text-green-50">
          <div className="flex items-start gap-3"><MapPin className="mt-1" size={18}/> <span>YOUR_COMPANY_ADDRESS</span></div>
          <div className="flex items-center gap-3"><Phone size={18}/> <span>YOUR_PHONE_NUMBER</span></div>
          <div className="flex items-center gap-3"><Mail size={18}/> <span>YOUR_EMAIL@example.com</span></div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="font-semibold">Business Hours</div>
          <div className="mt-2 text-green-100">Monday - Saturday: 9:00 AM - 6:00 PM</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-green-100 bg-white p-8 shadow-lg">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Subject
            <input name="subject" value={form.subject} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>
        </div>

        <label className="mt-5 block text-sm font-medium text-slate-700">
          Message
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
        </label>

        {error && <div className="mt-5"><ErrorMessage message={error} /></div>}
        {success && <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>}

        <button type="submit" disabled={loading} className="btn-primary mt-6 w-full justify-center">
          {loading ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
