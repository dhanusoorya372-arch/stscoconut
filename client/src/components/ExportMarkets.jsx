const markets = ['Asia', 'Middle East', 'Europe', 'Africa', 'Global Buyers'];
import { imagePaths } from '../assets/imagePaths';

const ExportMarkets = () => (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Export Markets</p>
    <h2 className="section-title">Connecting supplier strength to global demand.</h2>

    <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative overflow-hidden rounded-[30px] border border-green-100 bg-gradient-to-br from-green-50 via-white to-coconut-cream p-10 shadow-lg">
        <a href={imagePaths.export} target="_blank" rel="noreferrer" aria-label="Open export-ready coconut shipment image">
          <img src={imagePaths.export} alt="Export-ready coconut shipment" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        </a>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(93,138,102,0.28) 0, transparent 1px)', backgroundSize: '22px 22px' }} />
        <div className="relative">
          <div className="mx-auto grid h-[340px] max-w-[600px] place-items-center rounded-full border-[18px] border-white/70 bg-white/50 shadow-inner">
            <div className="grid grid-cols-3 gap-6 text-center text-sm font-semibold text-coconut-green-dark">
              {markets.map((market) => (
                <div key={market} className="rounded-full border border-green-200 bg-white/80 px-5 py-3 shadow-sm">
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {markets.map((market, index) => (
          <div key={market} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coconut-green text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <div className="text-xl font-semibold text-coconut-green-dark">{market}</div>
                <p className="text-sm text-slate-600">International buyer support and structured export planning.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExportMarkets;
