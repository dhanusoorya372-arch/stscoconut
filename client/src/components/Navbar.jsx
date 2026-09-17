import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Markets', to: '/markets' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coconut-green-dark text-lg font-bold text-white">S</div>
          <div>
            <div className="text-lg font-bold tracking-wide text-coconut-green-dark">STS Traders</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-coconut-green">Coconut Exporter</div>
          </div>
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-coconut-green-dark' : 'text-slate-600 hover:text-coconut-green'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <NavLink to="/contact" className="btn-primary">
            Request a Quote
          </NavLink>
        </div>

        <button
          type="button"
          className="rounded-lg border border-coconut-green px-3 py-2 text-coconut-green lg:hidden"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-green-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-coconut-green-light text-coconut-green-dark' : 'text-slate-700 hover:bg-slate-100'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-primary mt-2" onClick={() => setIsOpen(false)}>
              Request a Quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
