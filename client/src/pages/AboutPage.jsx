import { imagePaths } from '../assets/imagePaths';

const values = [
  {
    title: 'Mission',
    description: 'To supply high-quality coconuts and coconut-based products with dependable service and responsible sourcing.',
  },
  {
    title: 'Vision',
    description: 'To build strong global partnerships by delivering freshness, consistency, and value to customers around the world.',
  },
  {
    title: 'Customer Commitment',
    description: 'To respond quickly, communicate clearly, and meet buyer expectations with professionalism and care.',
  },
  {
    title: 'Quality Commitment',
    description: 'To maintain strict quality standards through inspection, hygiene, and traceable supply-chain processes.',
  },
];

const AboutPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">About STS Traders</p>
      <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">Sourcing natural freshness with global export capability.</h1>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl shadow-lg">
        <img src={imagePaths.plantation} alt="Coconut trees and tropical farm landscape" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg leading-8 text-slate-600">
          STS Traders is a coconut import and export company focused on sourcing fresh, premium-quality coconut products from trusted coconut-growing regions. We work with producers, processors, and global buyers to deliver dependable supply, competitive value, and export-ready service.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Our approach combines sustainable sourcing, disciplined quality control, and reliable logistics support to help businesses meet the needs of both local and international markets.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {values.map(({ title, description }) => (
        <div key={title} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-coconut-green-dark">{title}</h2>
          <p className="text-sm leading-6 text-slate-600">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutPage;
