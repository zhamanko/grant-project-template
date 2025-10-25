export default function Header() {
  return (
    <>
      <header className="w-full h-20 bg-gray-300 flex items-center justify-around">
        <div>
          <h1>LOGO</h1>
        </div>
        <br className="flex-1"/>
        <nav>
          <ul className="flex gap-5">
            <li>Головна</li>
            <li>Новити</li>
            <li>Події</li>
            <li>Галерея</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
