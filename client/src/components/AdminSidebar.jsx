import { LayoutDashboard, Package, Inbox, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/products', label: 'Products', icon: Package },
  { to: '/admin/inquiries', label: 'Inquiries', icon: Inbox },
];

const AdminSidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="hidden h-[calc(100vh-72px)] w-72 border-r border-slate-200 bg-slate-900 p-5 text-white md:block">
      <div className="mb-8 text-xl font-bold">STS Admin</div>
      <nav className="space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive ? 'bg-green-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="mt-8 flex w-full items-center gap-3 rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800"
        onClick={logout}
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
