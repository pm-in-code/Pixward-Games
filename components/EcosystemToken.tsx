import Image from 'next/image';

// Импорт иконки токена
import TokenIcon from '@/public/assets/token-icon.svg';

export default function EcosystemToken() {
  return (
    <section id="token" className="mx-auto max-w-7xl px-4 py-16">
      {/* Top Banner */}
      <div className="mb-8 flex justify-end">
        <div className="rounded-full bg-gradient-to-r from-purple-500 to-green-500 px-8 py-3">
          <span className="text-sm font-bold text-white uppercase tracking-wide">
            ONE TOKEN. MANY GAMES. SINGLE ECONOMY.
          </span>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - Token Graphic */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 blur-3xl scale-150" />
            
            {/* Token Icon */}
            <div className="relative z-10">
              <Image
                src={TokenIcon}
                alt="Ecosystem Token"
                width={300}
                height={300}
                className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          {/* Main Title */}
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            SOME INFO ABOUT ECOSYSTEM TOKEN
          </h2>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                Pay with token for <span className="font-bold text-green-400">Arcade & services</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                Built-in <span className="font-bold">Twitch</span> Extension support for <span className="font-bold text-green-400">streaming</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                <span className="font-bold text-green-400">Many genres - all platforms:</span> PC, Meta Quest VR, mobile, and browser games for everyone!
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                Capped player earning. Uncapped player <span className="font-bold text-green-400">spending</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                Extensive <span className="font-bold text-green-400">partnership, KOL and gaming guilds network</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-full bg-purple-500/20 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <p className="text-white">
                Robust Web2 and <span className="font-bold text-green-400">Web3 Monetisation</span> for diverse and sustainable revenue stream.
              </p>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-white">Token Distribution</h3>
            <div className="flex items-center gap-8">
              {/* Pie Chart */}
              <div className="relative h-32 w-32">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  {/* 70% Player Rewards - Light Blue */}
                  <path
                    d="M 50 50 L 50 0 A 50 50 0 1 1 15.45 85.45 Z"
                    fill="#60A5FA"
                    className="drop-shadow-lg"
                  />
                  {/* 20% Marketing & Community - Yellow */}
                  <path
                    d="M 50 50 L 15.45 85.45 A 50 50 0 0 1 50 50 Z"
                    fill="#FDE047"
                    className="drop-shadow-lg"
                  />
                  {/* 10% Ecosystem & Liquidity - Pink */}
                  <path
                    d="M 50 50 L 50 0 A 50 50 0 0 1 50 50 Z"
                    fill="#F472B6"
                    className="drop-shadow-lg"
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded bg-blue-400" />
                  <span className="text-white">70% Player Rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded bg-yellow-400" />
                  <span className="text-white">20% Marketing & Community</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded bg-pink-400" />
                  <span className="text-white">10% Ecosystem & Liquidity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
