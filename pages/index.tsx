import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Metrics from '@/components/Metrics';
import Footer from '@/components/Footer';
import CarouselSlide from '@/components/CarouselSlide';
import Team from '@/components/Team';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import { SEO } from '@/constants/content';

import IMG1 from '@/public/assets/BossFighters/BF_KeyArt.jpg';
import IMG2 from '@/public/assets/Cubox/Cubox KeyArt.png';
import IMG3 from '@/public/assets/Kingless Land/KL_KeyArt_banner2.png';

// Дополнительные изображения для карусели
import BF_SCREEN_1 from '@/public/assets/BossFighters/BF_Screen_1.jpg';
import BF_SCREEN_2 from '@/public/assets/BossFighters/BF_Screen_2.jpg';
import BF_SCREEN_3 from '@/public/assets/BossFighters/BF_Screen_3.jpg';
import BF_VR_GIF from '@/public/assets/BossFighters/BF_Asymmetrical Multiplayer Battles_VR.gif';
import BF_PHYSICS_GIF from '@/public/assets/BossFighters/BF_Physics-Based Combat and Environment Interaction.gif';
import BF_WEAPONS_GIF from '@/public/assets/BossFighters/BF_Weapons & Gadgets Arsenal_PC.gif';

// Логотипы игр
import BOSS_FIGHTERS_LOGO from '@/public/assets/BossFighters/BFAward1.png';
import CUBOX_LOGO from '@/public/assets/Cubox/CuboxLogo.png';
import KINGLESS_LOGO from '@/public/assets/Kingless Land/kingless-logo.svg';

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
              images={[IMG1, BF_SCREEN_1, BF_SCREEN_2, BF_SCREEN_3, BF_VR_GIF, BF_PHYSICS_GIF, BF_WEAPONS_GIF]}
              genres={["Action","Strategy","RPG"]}
              logo={BOSS_FIGHTERS_LOGO}
            />
            <CarouselSlide
              heading="Cubox.io"
              description="Cubox.io is a thrilling adventure where you build, fight, and explore unique biomes. Choose paths like Winter or Hell, battle fierce monsters, and customize your playstyle with powerful gear. Lead armies, craft, and create your dream home. Join friends or guilds, conquer challenges, and uncover endless surprises in this ever-evolving world."
              background={IMG2}
              genres={["Action","Strategy","RPG"]}
              logo={CUBOX_LOGO}
            />
            <CarouselSlide
              heading="Kingless Land"
              description="Land Without a King is an open-world wargame where turn-based tactical battles, military strategy, and RPG mechanics intersect on equal footing. Choose your path from 6 character classes, build a mighty army, and claim what is yours — by right of blood or by right of the sword!"
              background={IMG3}
              genres={["Action","Strategy","RPG"]}
              logo={KINGLESS_LOGO}
            />
          </div>
        </section>
        <Features />
        <Team />
        <Metrics />
        <PreRegistrationForm />
      </main>
      <Footer />
    </>
  );
}

