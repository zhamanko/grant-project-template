import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
      date: "20.05.2026",
      title: "Наступний етап",
      desc: "Покращення аналітики та звітності.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
        style={{ padding: "0px", paddingLeft: "10px" }}
      >
        {[...items].reverse().map((item, index) => (
          <SwiperSlide style={{ display: "block" }} key={index}>
            <div className="relative flex flex-col items-center cursor-pointer transition-transform duration-300">
              <img
                src="https://placehold.co/200x120/png"
                alt=""
                className="mb-5 rounded-xl shadow"
              />

              {/* Коло + стрілка */}
              <div className="w-full relative flex justify-center items-center">
                {/* Коло */}
                <div
                  className={`z-10 rounded-full border-4 transition-all duration-300 h-6 w-6 ${
                    index === 0
                      ? " bg-blue-400 border-blue-300"
                      : " bg-blue-200 border-blue-100"
                  }`}
                ></div>

                {/* Стрілка тільки для першого */}
                {index === 0 && (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="absolute -translate-y-1/2 top-1/2 -left-2 w-5 h-5 text-gray-300 size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                )}

                {/* Лінія */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 z-0 -translate-y-1/2"></div>
              </div>

              {/* Дата */}
              <p className="text-sm mt-2 text-gray-500">{item.date}</p>

              {/* Контент */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
