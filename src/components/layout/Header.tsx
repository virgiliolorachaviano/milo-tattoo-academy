"use client";
import Link from 'next/link';
import { useState, ReactNode } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface NavItem {
  name: string;
  href: string;
}

export default function Header(): ReactNode {
  const [open, setOpen] = useState<boolean>(false);
  const navItems: NavItem[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Módulos', href: '#modules' },
    { name: 'Historia', href: '#history' },
    { name: 'Videos', href: '#videos' },
    { name: 'Progreso', href: '#progress' },
  ];
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Milo Tattoo Academy</div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        <ul
          className={`${open ? 'block' : 'hidden'} md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="nav-link">
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
