import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/api';
import { useAuth } from '../context/AuthContext';
import ErrorMessage from '../components/ErrorMessage';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: 'admin@ststraders.com', password: 'admin123' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await loginAdmin(form);
      login(data, data.token);
      navigate('/admin');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="w-full max-w-md rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-coconut-green-dark text-2xl font-bold text-white">S</div>
          <h1 className="mt-4 text-3xl font-bold text-coconut-green-dark">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input type="password" name="password" value={form.password} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-coconut-green" />
          </label>

          {error && <ErrorMessage message={error} />}

          <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
