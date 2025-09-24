import Image from 'next/image';
import { useState } from 'react';

type SlideProps = {
  heading: string;
  description: string;
  genres?: string[];
  background: string; // remote image url
  logo?: string; // top-right small logo
  images?: string[]; // array of images for carousel
};

export default function CarouselSlide({ heading, description, genres = ['Action', 'Strategy', 'RPG'], background, logo, images }: SlideProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use images array if provided, otherwise fallback to single background
  const carouselImages = images && images.length > 0 ? images : [background];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white/10">
      <Image
        src={carouselImages[currentImageIndex]}
        alt={`${heading} background ${currentImageIndex + 1}`}
        width={1708}
        height={732}
        className="aspect-[16/9] h-auto w-full object-cover transition-opacity duration-300"
        priority={false}
      />
      {/* dark gradient like in Figma card */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65" />

      {/* top-right tiny logo */}
      {logo ? (
        <div className="absolute right-6 top-6">
          <Image src={logo} alt="logo" width={96} height={40} className="h-10 w-24 object-contain" />
        </div>
      ) : null}

      {/* overlay content */}
      <div className="absolute inset-x-6 bottom-6 max-w-xl">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{heading}</h3>
        {genres?.length ? (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/80">
            {genres.map((g, i) => (
              <span key={g} className="flex items-center gap-2">
                {i > 0 ? <span className="inline-block h-1 w-1 rounded-full bg-white/70" /> : null}
                <span>{g}</span>
              </span>
            ))}
          </div>
        ) : null}
        <p className="mt-3 text-white/85 text-sm md:text-base leading-relaxed">{description}</p>

        {/* bottom controls - now functional */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={prevImage}
              aria-label="previous" 
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              disabled={carouselImages.length <= 1}
            >
              ‹
            </button>
            <button 
              onClick={nextImage}
              aria-label="next" 
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              disabled={carouselImages.length <= 1}
            >
              ›
            </button>
            {/* Image indicator dots */}
            <div className="ml-2 flex gap-1">
              {carouselImages.map((_, index) => (
                <span 
                  key={index}
                  className={`inline-block h-2 w-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
          <a href="#cta" className="rounded-full bg-white/15 backdrop-blur px-5 py-2 text-sm font-medium hover:bg-white/25">
            Pre-registration
          </a>
        </div>
      </div>
    </article>
  );
}

