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
          <div
            key={i}
            className="relative group mb-4 break-inside-avoid overflow-hidden rounded-lg shadow"
          >
            <img
              src={src}
              alt=""
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
            <a
              href={src}
              className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 bg-black/60 text-white text-center text-sm py-2 transition-transform duration-300"
            >
              {src}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
