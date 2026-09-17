import { useEffect, useState } from 'react';
import { deleteInquiry, fetchInquiries, updateInquiryStatus } from '../services/api';

const statuses = ['New', 'Contacted', 'Processing', 'Completed', 'Cancelled'];

const AdminInquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const loadInquiries = async () => {
    try {
      const { data } = await fetchInquiries();
      setInquiries(data);
    } catch (error) {
      console.error('Unable to fetch inquiries', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateInquiryStatus(id, status);
      setMessage('Inquiry status updated.');
      loadInquiries();
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Unable to update inquiry status.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInquiry(id);
      setMessage('Inquiry removed.');
      loadInquiries();
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Unable to delete inquiry.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800">Inquiry Management</h1>
        {message && <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{message}</div>}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {loading ? (
          <div className="text-slate-500">Loading inquiries...</div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div key={inquiry._id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-slate-800">{inquiry.customerName}</div>
                    <div className="text-sm text-slate-500">{inquiry.product} • {inquiry.companyName || 'Individual Buyer'}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                    <button type="button" onClick={() => handleDelete(inquiry._id)} className="btn-primary bg-red-500 hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                  <div>Email: {inquiry.email}</div>
                  <div>Phone: {inquiry.phone}</div>
                  <div>Country: {inquiry.country}</div>
                  <div>Quantity: {inquiry.quantity}</div>
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold">Message:</span> {inquiry.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInquiriesPage;
