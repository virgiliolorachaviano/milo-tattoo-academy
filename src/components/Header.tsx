'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { navItems } from '@/data';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4" role="navigation" aria-label="Navegación principal">
        <div className="text-2xl font-bold">
          <Link href="/" onClick={closeMenu} className="focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-opacity-50 rounded">
            Milo Tattoo Academy
          </Link>
        </div>
        
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-opacity-50"
          onClick={toggleMenu}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
        
        <ul
          id="mobile-menu"
          className={`${
            open ? 'block' : 'hidden'
          } md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
          role="menu"
        >
          {navItems.map((item) => (
            <li key={item.id || item.name} role="none">
              <Link 
                href={item.href} 
                onClick={closeMenu}
                className="block text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-opacity-50 rounded px-2 py-1"
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
