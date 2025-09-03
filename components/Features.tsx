import { FEATURES } from '@/constants/content';

export default function Features() {
  return (
    <section id="token" className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-center">
        <span className="bg-clip-text text-transparent bg-hero-gradient">ONE TOKEN</span>.
        <span className="mx-1">MANY GAMES.</span>
        <span className="opacity-90">SINGLE ECONOMY.</span>
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f} className="rounded-3xl bg-white/5 p-6">
            <p className="text-white/90">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

