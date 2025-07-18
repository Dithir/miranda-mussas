import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
    const [isGaleriaOpen, setIsGaleriaOpen] = useState(false);

    return(
        <nav className="bg-rose-400 w-full p-0 flex justify-center">
        <ul className="flex">
          <li className="relative">
            <Link 
              to="/" 
              className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors"
            >
              Home
            </Link>
          </li>
          
          {/* Dropdown Menu */}
          <li 
            className="relative"
            onMouseEnter={() => setIsGaleriaOpen(true)}
            onMouseLeave={() => setIsGaleriaOpen(false)}
          >
            <button className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors">
              Galería ▼
            </button>
            {isGaleriaOpen && (
              <ul className="absolute top-full left-0 min-w-full bg-rose-400 shadow-lg z-10">
                <li>
                  <Link 
                    to="/galeria" 
                    className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors whitespace-nowrap"
                  >
                    Uwus
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/galeria/obra1" 
                    className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors whitespace-nowrap"
                  >
                    Obra 1
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/galeria/obra2" 
                    className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors whitespace-nowrap"
                  >
                    Obra 2
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/galeria/obra3" 
                    className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors whitespace-nowrap"
                  >
                    Obra 3
                  </Link>
                </li>
              </ul>
            )}
          </li>
          
          <li className="relative">
            <Link 
              to="/about" 
              className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors"
            >
              Nosotros
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/contact" 
              className="block p-3 px-7 border border-rose-200 bg-rose-400 hover:bg-pink-300 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    )
}