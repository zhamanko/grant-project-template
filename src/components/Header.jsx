import { NavLink } from "react-router-dom";

import MobileMenu from "./MenuBar.jsx";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 bg-gray-300 flex items-center justify-around">
        <div>
          <h1 className="font-bold">LOGO</h1>
        </div>

        <br className="flex-1" />
        <nav className="hidden md:flex gap-6 text-gray-700">
          <NavLink
            to="/grant-project-template/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Головна
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Новини
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Галерея
          </NavLink>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
}
