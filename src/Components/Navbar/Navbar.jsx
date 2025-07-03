import { useState } from "react";
import {

    Heart,
    Home,
    Info,
    Menu,
    Search,
    ShoppingCart,
    User,
    X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Top bar */}
            <div className="bg-[#272343] h-[45px] w-full px-4 flex justify-between items-center text-white text-sm font-inter">

                <div className="flex items-center gap-4">

                    <Link >Preguntas Frecuentes</Link>
                    <Link  className="flex items-center gap-1">
                        <Info size={16} /> ¿Necesitas ayuda?
                    </Link>
                </div>
            </div>

            {/* Middle bar */}
            <div className="bg-[#f0f2f3] py-4 px-4 w-full">
                <div className="flex items-center justify-between lg:container mx-auto">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl md:text-3xl text-black font-bold flex items-center gap-2"
                    >
                        <Home size="2rem" color="blue" /> TecnoStore
                    </Link>

                    {/* Search */}
                    <form className="hidden md:block w-full max-w-md relative ml-4">
                        <input
                            type="text"
                            placeholder="Buscar productos tecnológicos..."
                            className="w-full h-11 pl-4 pr-12 rounded-lg bg-white"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <Search size="1.2rem" color="#272343" />
                        </button>
                    </form>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="relative">
                            <ShoppingCart />
                            <span className="absolute -top-2 -right-2 bg-[#029fae] text-white text-xs rounded-full px-1.5">
                                2
                            </span>
                        </button>
                        <button>
                            <Heart />
                        </button>
                        <div className="relative group">
                            <User />
                            <div className="hidden absolute right-0 bg-white shadow-md p-2 rounded-md group-hover:block z-10">
                                <Link to="/">Mi Cuenta</Link>
                                <br />
                                <Link to="/">Cerrar Sesión</Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Bottom nav */}
            <nav className="bg-white border-t border-b border-gray-200">
                <div className="lg:container mx-auto flex items-center justify-between px-4 py-3">
                    <div className="hidden md:flex items-center gap-8">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-sm font-medium text-[#029fae]">
                                <Menu size={18} /> Todas las categorías
                            </button>
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded p-2 z-10 w-48">
                                <li className="py-1 hover:text-[#029fae]">Laptops</li>
                                <li className="py-1 hover:text-[#029fae]">Auriculares</li>
                                <li className="py-1 hover:text-[#029fae]">Accesorios</li>
                                <li className="py-1 hover:text-[#029fae]">Monitores</li>
                            </ul>
                        </div>
                        <NavLink to="/" className="text-sm text-[#636270] hover:text-[#029fae]">Inicio</NavLink>
                        <NavLink to="/" className="text-sm text-[#636270] hover:text-[#029fae]">Tienda</NavLink>
                        <NavLink to="/" className="text-sm text-[#636270] hover:text-[#029fae]">Producto</NavLink>
                        <NavLink to="/" className="text-sm text-[#636270] hover:text-[#029fae]">Nosotros</NavLink>
                    </div>

                    <p className="text-sm text-[#636270] hidden md:block">
                        Contacto: <span className="text-[#272343]">(808) 555-0111</span>
                    </p>
                </div>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <form className="mb-4">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="w-full h-10 rounded-md px-3 border"
                            />
                        </form>
                        <div className="flex flex-col gap-2">
                            <Link to="/">Inicio</Link>
                            <Link to="/">Tienda</Link>
                            <Link to="/">Producto</Link>
                            <Link to="/">Nosotros</Link>
                            <Link to="/">Mi Cuenta</Link>
                            <Link to="/">Cerrar sesión</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
