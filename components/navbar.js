import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto">
        <div className="sm:flex justify-around">
          <a href="#" className="text-slate-900 text-3xl font-bold p-3">
            in
          </a>
          <ul className="text-zinc-900 sm:self-center font-medium text-base">
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-pink-600 transition-colors">
                Inicio
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-pink-600 transition-colors">
                Proyectos
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-pink-600 transition-colors">
                Documentación
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
