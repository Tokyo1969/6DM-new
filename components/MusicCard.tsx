interface MusicCardProps {
  title: string;
  cover: string;
  link?: string;
}

export default function MusicCard({ title, cover, link }: MusicCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-md p-4 transition hover:scale-105 hover:shadow-lg">
      <img src={cover} alt={title} className="rounded-xl mb-4 w-full h-48 object-cover" />
      <h3 className="text-gold text-lg font-semibold text-center">{title}</h3>
    </div>
  );
}