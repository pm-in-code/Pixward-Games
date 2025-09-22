import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Metrics from '@/components/Metrics';
import Footer from '@/components/Footer';
import CarouselSlide from '@/components/CarouselSlide';
import Team from '@/components/Team';
import { SEO } from '@/constants/content';

import IMG1 from '@/public/assets/BossFighters/BF_KeyArt.jpg';
import IMG2 from '@/public/assets/Cubox/Cubox KeyArt.png';
import IMG3 from '@/public/assets/Kingless Land/KL_KeyArt_banner2.png';

const SMALL_LOGO = 'http://localhost:3845/assets/eec6ce7eb84c50316f0eeabb307dc00da5b79e21.png';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <section id="games" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-6 text-center heading-bebas text-5xl md:text-6xl">
            <span className="bg-clip-text text-transparent bg-hero-gradient">3+</span> MOST FAMOUS GAMES
          </h2>
          <div className="grid gap-8">
            <CarouselSlide
              heading="Boss Fighters"
              description="$BFT is the only utility token in BOSS FIGHTERS, fuelling the player-driven economy. Collect $BFT by playing with limited-supply Badges, which generate token rewards and can be upgraded for increased rarity and token yield."
              background={IMG1}
              genres={["Action","Strategy","RPG"]}
              logo={SMALL_LOGO}
            />
            <CarouselSlide
              heading="Boss Fighters"
              description="$BFT is the only utility token in BOSS FIGHTERS, fuelling the player-driven economy. Collect $BFT by playing with limited-supply Badges, which generate token rewards and can be upgraded for increased rarity and token yield."
              background={IMG2}
              genres={["Action","Strategy","RPG"]}
              logo={SMALL_LOGO}
            />
            <CarouselSlide
              heading="Boss Fighters"
              description="$BFT is the only utility token in BOSS FIGHTERS, fuelling the player-driven economy. Collect $BFT by playing with limited-supply Badges, which generate token rewards and can be upgraded for increased rarity and token yield."
              background={IMG3}
              genres={["Action","Strategy","RPG"]}
              logo={SMALL_LOGO}
            />
          </div>
        </section>
        <Features />
        <Team />
        <Metrics />
        <section id="cta" className="mx-auto max-w-7xl px-4 py-16">
          <form className="mx-auto max-w-xl rounded-2xl bg-white/5 p-6" aria-label="Pre-registration form">
            <h3 className="text-center">Pre-registration</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-sm text-white/70">First name</span>
                <input className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Jane" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-white/70">Last name</span>
                <input className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
              </label>
              <label className="md:col-span-2 flex flex-col gap-1">
                <span className="text-sm text-white/70">Email</span>
                <input type="email" className="rounded-lg bg-white/10 p-3 outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-white/10 px-6 py-3 font-medium hover:bg-white/20">Join the waitlist</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

