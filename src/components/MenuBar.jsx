import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Блокуємо скрол сторінки при відкритому меню
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Бургер-кнопка */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-7 h-6 flex flex-col justify-center items-center absolute top-7 right-10 z-[60] cursor-pointer"
      >
        <span
          className={`absolute block w-7 h-[2px] bg-gray-700 transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`absolute block w-7 h-[2px] bg-gray-700 transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block w-7 h-[2px] bg-gray-700 transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>

      {/* Бекдроп */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* Меню */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-2/3  sm:w-1/2 bg-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-20">
          <ul className="flex flex-col items-center text-lg gap-6">
            <NavLink onClick={() => setOpen(false)} to="grant-project-template/" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }>
              Головна
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/news" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }>
              Новини
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/gallery" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }>
              Галерея
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}
