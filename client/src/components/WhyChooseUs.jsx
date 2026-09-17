import { BriefcaseBusiness, Globe, Handshake, Leaf, PackageCheck, ShieldCheck, Truck, Zap } from 'lucide-react';

const features = [
  { title: 'Premium Quality', detail: 'Stringent inspection from farm selection to export packing.', icon: ShieldCheck },
  { title: 'Reliable Supply', detail: 'Consistent sourcing and bulk capacity for long-term partnership.', icon: PackageCheck },
  { title: 'Competitive Pricing', detail: 'Value-driven procurement and efficient export operations.', icon: Zap },
  { title: 'Global Export', detail: 'Support for international procurement and shipping coordination.', icon: Globe },
  { title: 'On-Time Delivery', detail: 'Logistics planning aimed at timely and dependable fulfillment.', icon: Truck },
  { title: 'Sustainable Sourcing', detail: 'Responsible farm relationships and environmentally conscious practices.', icon: Leaf },
  { title: 'Customer Support', detail: 'Responsive communication and support through every stage.', icon: Handshake },
  { title: 'Professional Service', detail: 'Business-ready processes and export documentation support.', icon: BriefcaseBusiness },
];

const WhyChooseUs = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Why Choose Us</p>
      <h2 className="section-title">Reliable coconut trading from trusted sources.</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map(({ title, detail, icon: Icon }) => (
          <div key={title} className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm hover:shadow-lg transition">
            <div className="mb-4 inline-flex rounded-2xl bg-coconut-green text-white p-3">
              <Icon size={22} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-coconut-green-dark">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
