import Link from "next/link";
import Button from "./ui/buttons/button";

const buttonMenu = () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

export default function Navbar() {
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <span className="font-black text-zinc-900 text-2xl">
                  Indentado
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <a className="py-5 px-3 text-zinc-700 hover:text-pink-600 transition-colors">
                  Proyectos
                </a>
              </Link>
              <Link href="/">
                <a
                 
                  className="py-5 px-3 text-zinc-700 hover:text-pink-600 transition-colors"
                >
                  Documentación
                </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3 text-zinc-700 hover:text-pink-600 transition-colors">
              Github
            </a>
            <Button href={"/"}>Contacto</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={buttonMenu} className="mobile-menu-button">
              menu
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  );
}
