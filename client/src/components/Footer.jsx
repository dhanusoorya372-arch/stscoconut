import { Mail, MapPin, Phone } from 'lucide-react';

const company = {
  address: 'YOUR_COMPANY_ADDRESS',
  phone: 'YOUR_PHONE_NUMBER',
  email: 'YOUR_EMAIL@example.com',
};

const Footer = () => (
  <footer className="bg-coconut-forest text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coconut-green text-lg font-bold text-white">S</div>
          <div>
            <div className="text-xl font-bold">STS Traders</div>
            <div className="text-xs uppercase tracking-[0.2em] text-green-200">Coconut Exporter</div>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm text-green-50/80">
          Trusted coconut import and export solutions from farm to global markets with a focus on freshness, quality, and reliable supply.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-green-50/80">
          <li>About</li>
          <li>Products</li>
          <li>Why Choose Us</li>
          <li>Export Markets</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Contact</h3>
        <ul className="mt-4 space-y-3 text-sm text-green-50/80">
          <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5" /><p>Sullikaradu, Getticheviyur, Erode</p></li>
          <li className="flex items-center gap-3"><Phone size={16} /><p>9788853564</p></li>
          <li className="flex items-center gap-3"><Mail size={16} /><p>ststraders@gmail.com</p></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 py-4 text-center text-sm text-green-50/70">
      © STS TRADERS  மினியப்பன் துணை 
    </div>
  </footer>
);

export default Footer;
