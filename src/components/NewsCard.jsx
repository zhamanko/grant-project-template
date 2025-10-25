export default function NewsCard({ img, title, description, date }) {
  return (
    <div
      className="
        bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition
        flex flex-col p-4 w-120
      "
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 mb-2">{description}...</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
}
