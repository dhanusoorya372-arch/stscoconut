import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-100 text-slate-800">
    <AdminNavbar />
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-5 md:p-8">{children}</main>
    </div>
  </div>
);

export default AdminLayout;
