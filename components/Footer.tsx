import { SOCIALS } from '@/constants/content';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-center justify-between gap-6">
        <p className="text-white/60">© {new Date().getFullYear()} BOSS FIGHTERS</p>
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.name} className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

