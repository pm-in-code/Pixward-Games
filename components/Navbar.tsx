import Link from 'next/link';
import { NAV_LINKS } from '@/constants/content';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="#home" className="text-xl font-bold">$BFT</Link>
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#cta" className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium hover:bg-white/20">
            Pre-registration
          </a>
        </div>
      </nav>
    </header>
  );
}

