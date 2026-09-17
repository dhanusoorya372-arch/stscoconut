const reasons = [
  'Premium quality assurance and source verification',
  'Reliable supply chain and export planning',
  'Market-driven pricing and competitive value',
  'Strong communication and customer support',
  'Timely delivery and shipment coordination',
  'Responsible sourcing and sustainability focus',
  'Professional service for wholesale and industrial buyers',
  'Flexible solutions for international procurement',
];

const WhyUsPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Why Choose Us</p>
      <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">A dependable partner for coconut sourcing and export.</h1>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {reasons.map((reason) => (
        <div key={reason} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coconut-green text-white">✓</div>
          <p className="text-base font-medium leading-7 text-slate-700">{reason}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyUsPage;
