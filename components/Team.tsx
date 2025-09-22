import Image from 'next/image';

import Vadym from '@/public/assets/images/team/Vadym.webp';
import Roman from '@/public/assets/images/team/Roman.webp';
import Kamila from '@/public/assets/images/team/Kamila.webp';
import Andy from '@/public/assets/images/team/Andy.webp';
import Dima from '@/public/assets/images/team/Dima.webp';

type Member = {
  name: string;
  title: string;
  note?: string;
  photo: any;
};

const MEMBERS: Member[] = [
  { name: 'Vadym', title: 'CEO', photo: Vadym },
  { name: 'Roman', title: 'Blockchain Lead', note: 'Ex-Axel', photo: Roman },
  { name: 'Kamila', title: 'Co-Founder', note: 'Ex-GameLoft', photo: Kamila },
  { name: 'Andy', title: 'CPO', note: 'Ex-SnapChat', photo: Andy },
  { name: 'Dima', title: 'PM', photo: Dima },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-24">
      <h2 className="mb-8 text-center heading-bebas text-5xl md:text-6xl">Team</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {MEMBERS.map((m, idx) => (
          <article key={`${m.name}-${idx}`} className="text-center">
            <div className="mx-auto w-[190px]">
              <Image
                src={m.photo}
                alt={`${m.name} photo`}
                width={190}
                height={190}
                className="h-[190px] w-[190px] rounded-md object-cover"
              />
            </div>
            <p className="mt-2 font-extrabold">{m.name}, {m.title}</p>
            {m.note ? <p className="text-white/70 text-sm">{m.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}


