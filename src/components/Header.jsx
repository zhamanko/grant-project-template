import { Link } from "react-router-dom";

import MobileMenu from "./MenuBar.jsx";

export default function Header() {

  return (
    <>
      <header className="w-full h-20 bg-gray-300 flex items-center justify-around">
        <div>
          <h1 className="font-bold">LOGO</h1>
        </div>

        <br className="flex-1" />
        <nav className="hidden md:block">
          <ul className="flex gap-5">
            <Link to="/">Головна</Link>
            <Link to="/news">Новини</Link>
            <Link to="/gallery">Галерея</Link>
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
}
