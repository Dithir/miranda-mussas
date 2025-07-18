import { Link } from "react-router";
import { useState } from "react";

export default function Navbar2(){
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const mainNavItems = [
        { name: "Home", path: "/" },
        { name: "Galería", path: "/gallery", dropdown: [
            { name: "Boda", path: "/gallery/boda" },
            { name: "Graduaciones", path: "/gallery/graduaciones" },
            { name: "Disfraces", path: "/gallery/disfraces" },

        ] },
        { name: "Nosotros", path: "/about",  },
        { name: "Contacto", path: "/contact" },
    ];

    return(<>
            <nav>
                <ul className="flex">
                    {mainNavItems.map(item => (
                        <li 
                            key={item.name} 
                            className="relative"
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link 
                                to={item.path}
                                className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors"
                            >
                                {item.name} {item.dropdown && "▼"}
                            </Link>
                            
                            {/* Dropdown Content */}
                            {item.dropdown && openDropdown === item.name && (
                                <ul className="absolute top-full left-0 min-w-full bg-rose-400 shadow-lg z-10">
                                    {item.dropdown.map(dropdownItem => (
                                        <li key={dropdownItem.name}>
                                            <Link 
                                                to={dropdownItem.path}
                                                className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors whitespace-nowrap"
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>)
}