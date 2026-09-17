import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imagePaths } from '../assets/imagePaths';

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-coconut-forest text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imagePaths.hero})`,
      }}
    />
    <div className="absolute inset-0 bg-coconut-forest/75" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,213,186,0.28),transparent_40%)]" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
          <Leaf size={16} />
          Trusted Coconut Supply Partner
        </div>
        <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
          Nature’s Freshness, Delivered Worldwide.
        </h1>
        <p className="mt-6 max-w-xl text-base text-green-50 md:text-xl">
          STS Traders — Trusted Coconut Import & Export Solutions from Farm to Global Markets.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/products" className="btn-primary bg-white text-coconut-green-dark hover:bg-green-50">
            Explore Products <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link to="/contact" className="btn-secondary border-white bg-transparent text-white hover:bg-white hover:text-coconut-green-dark">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/15 p-5">
            <div className="text-3xl font-bold">Global</div>
            <div className="mt-2 text-sm text-green-100">Export-ready sourcing</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-5">
            <div className="text-3xl font-bold">Quality</div>
            <div className="mt-2 text-sm text-green-100">Inspection and control</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-5">
            <div className="text-3xl font-bold">Fresh</div>
            <div className="mt-2 text-sm text-green-100">Farm-to-market supply</div>
          </div>
          <div className="rounded-2xl bg-white/15 p-5">
            <div className="text-3xl font-bold">Reliable</div>
            <div className="mt-2 text-sm text-green-100">Timely international logistics</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
