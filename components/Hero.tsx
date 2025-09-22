import Image from 'next/image';
import { HERO } from '@/constants/content';
import Controller from '@/public/assets/images/Controller.webp';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(128,64,255,0.15),_transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-black text-5xl md:text-7xl">
            <span className="bg-clip-text text-transparent bg-hero-gradient">$BFT</span> One Token
            <span className="block">To Rule The Arena</span>
          </h1>
          <p className="mt-6 text-xl text-white/80">
            <span className="bg-clip-text text-transparent bg-hero-gradient font-black text-3xl mr-2">3+</span>
            most famous games
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#cta" className="rounded-full bg-white/10 px-6 py-3 font-medium hover:bg-white/20">{HERO.cta}</a>
            <a href="#games" className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10">Explore</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] md:max-w-none">
          <Image
            src={Controller}
            alt="Controller"
            className="rounded-xl"
            width={642}
            height={614}
            priority
          />
        </div>
      </div>
    </section>
  );
}

