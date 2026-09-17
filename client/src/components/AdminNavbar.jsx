import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-8">
      <div>
        <div className="text-lg font-bold text-coconut-green-dark">STS Traders</div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Admin dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden text-right md:block">
          <div className="text-sm font-semibold text-slate-800">{user?.name || 'Admin'}</div>
          <div className="text-xs text-slate-500">{user?.email || ''}</div>
        </div>
        <button type="button" onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
