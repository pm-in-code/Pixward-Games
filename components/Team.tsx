import Image from 'next/image';

// Assets exported from Figma MCP for Team block
const imgVadym = 'http://localhost:3845/assets/6f1089aa231c1a0d9eea0de793580b7d403eba89.png';
const imgRoman = 'http://localhost:3845/assets/29bff4be12a190970131811367f53382bdd98f5c.png';
const imgKamila = 'http://localhost:3845/assets/33085e6f949b7d19c1646a174f331cc8c676f755.png';
const imgAndy = 'http://localhost:3845/assets/611748b217e350fc307f99e7db8d5a37d4958c91.png';
const imgDima = 'http://localhost:3845/assets/9385dbbcfb21ba773f08fd709144b0247d6c0c73.png';

type Member = {
  name: string;
  title: string;
  note?: string;
  photo: string;
};

const MEMBERS: Member[] = [
  { name: 'Vadym', title: 'CEO', photo: imgVadym },
  { name: 'Roman', title: 'Blockchain Lead', note: 'Ex-Axel', photo: imgRoman },
  { name: 'Kamila', title: 'Co-Founder', note: 'Ex-GameLoft', photo: imgKamila },
  { name: 'Andy', title: 'CPO', note: 'Ex-SnapChat', photo: imgAndy },
  { name: 'Dima', title: 'PM', photo: imgDima },
  { name: 'Vadym', title: 'CEO', photo: imgVadym },
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


