import MusicCard from "@/components/MusicCard";

const musicData = [
  {
    title: "Utwór 1",
    cover: "https://via.placeholder.com/300x300.png?text=6DM",
    link: "#",
  },
  {
    title: "Utwór 2",
    cover: "https://via.placeholder.com/300x300.png?text=6DM",
    link: "#",
  },
];

export default function Music() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-gold">Muzyka</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {musicData.map((track, i) => (
          <MusicCard key={i} {...track} />
        ))}
      </div>
    </div>
  );
}