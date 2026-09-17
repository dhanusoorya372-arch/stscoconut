const aboutPoints = [
  'Professional coconut import and export sourcing',
  'Consistent quality standards and traceability',
  'Sustainable farm partnerships and responsible sourcing',
  'Global trade support for bulk and retail buyers',
];

import { imagePaths } from '../assets/imagePaths';

const AboutSection = () => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="overflow-hidden rounded-[28px] shadow-xl">
        <a href={imagePaths.plantation} target="_blank" rel="noreferrer">
          <img
            src={imagePaths.plantation}
            alt="Coconut plantation with trees and harvest"
            className="h-[500px] w-full object-cover"
          />
        </a>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">About STS Traders</p>
        <h2 className="section-title text-left text-4xl md:text-5xl">Trusted coconut sourcing for global markets.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          STS Traders is a professional coconut import and export company specializing in sourcing, processing, supplying, and exporting coconut products to domestic and international markets.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aboutPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-medium text-coconut-green-dark">
              {point}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-coconut-forest p-4 text-white">
            <div className="text-2xl font-bold">Mission</div>
            <p className="mt-2 text-sm text-green-100">To supply fresh, dependable coconut products to growing markets worldwide.</p>
          </div>
          <div className="rounded-2xl bg-coconut-green p-4 text-white">
            <div className="text-2xl font-bold">Vision</div>
            <p className="mt-2 text-sm text-green-50">To become a trusted global partner in premium coconut trading and export.</p>
          </div>
          <div className="rounded-2xl bg-coconut-green-dark p-4 text-white">
            <div className="text-2xl font-bold">Commitment</div>
            <p className="mt-2 text-sm text-green-100">Quality, sustainability, and service across every shipment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
