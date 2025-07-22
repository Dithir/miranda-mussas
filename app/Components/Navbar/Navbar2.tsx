import { Link } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Navbar2(){
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openDropdownMobile, setOpenDropdownMobile] = useState<string | null>(null);

    const arrow = <FontAwesomeIcon icon={faChevronDown} />

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

    function toggleMobileDropdown(itemName: string){
        setOpenDropdownMobile(prev => prev === itemName ? null : itemName);
    }

    return(<>


            {/* Small Screens */}


            <nav className="block sm:hidden w-full">
                <ul className="flex flex-col">
                    {mainNavItems.map(item => (
                        <li 
                            key={item.name} 
                            className="relative text-center z-10"

                        >
                            <Link 
                                to={item.path}
                                className="relative z-10 block p-1.5 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors"
                            >
                                {item.name} <span
                                    onClick={e => {
                                        e.stopPropagation();
                                        e.preventDefault(); 
                                        toggleMobileDropdown(item.name);
                                        }}
                                >{item.dropdown && arrow}</span>
                            </Link>
                            
                            {/* Dropdown Content */}
                            {item.dropdown && openDropdownMobile === item.name && (
                                <ul className="top-full left-0 min-w-full bg-rose-600 shadow-lg z-0">
                                    {item.dropdown.map(dropdownItem => (
                                        <li key={dropdownItem.name}>
                                            <Link 
                                                to={dropdownItem.path}
                                                className={`animate-slide z-0 block p-1.5 px-7 text-left border border-black bg-rose-500/70 hover:bg-pink-400 transition-colors whitespace-nowrap`}
                                            >
                                                -{dropdownItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

                    {/* Big Screens */}

            <nav className="hidden sm:block">
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
                                {item.name} {item.dropdown && arrow}
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