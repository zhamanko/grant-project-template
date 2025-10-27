export default function Gallary() {

    const images = [
        "https://placehold.co/400x300/png",
        "https://placehold.co/500x600/png",
        "https://placehold.co/400x200/png",
        "https://placehold.co/400x600/png",
        "https://placehold.co/400x800/png",
        "https://placehold.co/600x500/png",
        "https://placehold.co/400x300/png",
        "https://placehold.co/500x600/png",
        "https://placehold.co/400x200/png",
        "https://placehold.co/400x600/png",
        "https://placehold.co/400x800/png",
        "https://placehold.co/600x500/png",
    ];

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full mb-4 rounded-lg shadow transition-transform duration-300 hover:scale-102"
          />
        ))}
      </div>
    </>
  );
}
