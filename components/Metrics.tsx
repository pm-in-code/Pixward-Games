import { METRICS } from '@/constants/content';

export default function Metrics() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-center">OUR <span className="bg-clip-text text-transparent bg-hero-gradient">Metrics</span></h2>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {METRICS.map((m) => (
          <article key={m.label} className="rounded-2xl bg-white/5 p-6 text-center">
            <p className="text-white/70">{m.label}</p>
            <p className="mt-2 text-3xl font-extrabold">{m.value}</p>
            <p className="mt-1 text-white/60">{m.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

