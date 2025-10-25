import { useState } from "react";

export default function Timeline() {
  const items = [
    {
      date: "12.10.2025",
      title: "Початок проєкту",
      desc: "Старт досліджень та формування команди.",
    },
    {
      date: "15.11.2025",
      title: "Перша версія",
      desc: "Випуск першого прототипу продукту.",
    },
    {
      date: "01.01.2026",
      title: "Офіційний реліз",
      desc: "Запуск публічної версії з основними функціями.",
    },
    {
      date: "10.03.2026",
      title: "Оновлення",
      desc: "Додано інтеграцію з AI і покращений інтерфейс.",
    },
    {
      date: "12.10.2025",
      title: "Початок проєкту",
      desc: "Старт досліджень та формування команди.",
    },
    {
      date: "15.11.2025",
      title: "Перша версія",
      desc: "Випуск першого прототипу продукту.",
    },
    {
      date: "01.01.2026",
      title: "Офіційний реліз",
      desc: "Запуск публічної версії з основними функціями.",
    },
    {
      date: "10.03.2026",
      title: "Оновлення",
      desc: "Додано інтеграцію з AI і покращений інтерфейс.",
    },
  ];

  const [active, setActive] = useState(items.length-1);

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex flex-row-reverse items-center gap-10 px-20 py-5 min-w-max">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`relative flex flex-col items-center cursor-pointer transition-transform duration-300 ${
              active === index ? "scale-110" : "scale-90 opacity-70"
            }`}
          >
            <div>
              <img
                src="https://placehold.co/150x100/png"
                alt=""
                className="mb-5 rounded-lg"
              />
            </div>

            {/* Лінія між точками */}
            {index !== items.length && (
              <div className="absolute top-33 left-1/2 w-[140%] h-[2px] bg-gray-300 z-0 -translate-x-1/2 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-300 -translate-x-2 rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.293 4.293a1 1 0 011.414 0L21 10.586a1 1 0 010 1.414l-6.293 6.293a1 1 0 01-1.414-1.414L17.586 12H3a1 1 0 110-2h14.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}

            {/* Коло */}
            <div
              className={`z-10 h-6 w-6 rounded-full border-4 transition-all duration-300 ${
                active === index
                  ? "bg-blue-500 border-blue-400"
                  : "bg-gray-400 border-gray-300"
              }`}
            ></div>

            {/* Дата */}
            <p className="text-sm mt-2 text-gray-500">{item.date}</p>

            {/* Контент */}
            <div
              className={`mt-4 text-center transition-all duration-300 ${
                active === index ? "opacity-100" : "opacity-60"
              }`}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-[220px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
