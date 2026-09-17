import { CheckCircle2, Droplets, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { imagePaths } from '../assets/imagePaths';

const qualityPoints = [
  { title: 'Quality Inspection', text: 'Careful inspection across origin, processing, and export readiness.', icon: CheckCircle2 },
  { title: 'Hygienic Handling', text: 'Safe handling practices that preserve freshness and product integrity.', icon: ShieldCheck },
  { title: 'Proper Packaging', text: 'Packaging designed to maintain quality through shipping and transit.', icon: Truck },
  { title: 'Sustainable Farming', text: 'Supporting responsible agriculture and long-term farm stability.', icon: Leaf },
  { title: 'Responsible Sourcing', text: 'Ensuring clean supply networks and responsible business practices.', icon: Droplets },
  { title: 'Supply-Chain Quality Control', text: 'Active monitoring and process checks across the full chain.', icon: CheckCircle2 },
];

const QualitySection = () => (
  <section className="bg-coconut-cream py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Quality & Sustainability</p>
      <h2 className="section-title">Built on quality, care, and responsible sourcing.</h2>
      <div className="mb-12 mt-8 overflow-hidden rounded-[28px] shadow-lg">
        <a href={imagePaths.quality} target="_blank" rel="noreferrer">
          <img src={imagePaths.quality} alt="Fresh coconuts prepared for quality inspection" className="h-64 w-full object-cover md:h-80" />
        </a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {qualityPoints.map(({ title, text, icon: Icon }) => (
          <div key={title} className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-coconut-green-light p-3 text-coconut-green-dark">
              <Icon size={22} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-coconut-green-dark">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualitySection;
