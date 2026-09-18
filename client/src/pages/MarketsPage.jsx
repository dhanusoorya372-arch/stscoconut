const markets = [
  'Erode',
  'Thirupur',
  'Coimbatore',
  'Namakkal',
  'karur',
  'gobichettipalayam',
  'Global importers and bulk buyers',
];

const MarketsPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Export Markets</p>
      <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">Supporting international demand with dependable export solutions.</h1>
    </div>

    <div className="mt-12 rounded-[30px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-lg">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {markets.map((market, index) => (
          <div key={market} className="rounded-3xl border border-white bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-coconut-green text-lg font-bold text-white">
              {index + 1}
            </div>
            <h2 className="text-2xl font-semibold text-coconut-green-dark">{market}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Structured sourcing and supply support for international buyers seeking consistent coconut products and trustworthy trade partners.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MarketsPage;
