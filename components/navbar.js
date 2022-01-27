import Link from "next/link";
import Button from "./ui/buttons/button";
import Image from "next/image";

const buttonMenu = () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 w-full bg-white z-i-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <Link href="/">
                <a
                 
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <span className="font-black text-zinc-900 text-2xl">
                    Indentado
                  </span>
                </a>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1"></div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <a className="py-5 px-3 text-zinc-700 hover:text-pink-600 transition-colors">
                Proyectos
              </a>
            </Link>
            <Link href="/">
              <a className="py-5 px-3 text-zinc-700 hover:text-pink-600 transition-colors">
                Documentacion
              </a>
            </Link>
            <Button href={"/"}>Contacto</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={buttonMenu} className="mobile-menu-button">
              menu
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu hidden md:hidden bg-zinc-900 rounded transition ease-in-out delay-150">
        <Link href="/">
          <a className="block py-2 px-3 text-zinc-100 hover:text-pink-600 transition-colors">
            Proyectos
          </a>
        </Link>
        <Link href="/">
          <a className=" block py-2 px-3 text-zinc-100 hover:text-pink-600 transition-colors">
            Documentacion
          </a>
        </Link>
      </div>
    </nav>
  );
}
