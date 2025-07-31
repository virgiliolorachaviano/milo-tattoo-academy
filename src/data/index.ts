import { Module, TimelineEvent, NavItem } from '@/types';

export const modules: Module[] = [
  {
    title: 'Bitácora Personal',
    description: 'Lleva un registro de tu aprendizaje y progreso.',
    id: 'bitacora',
  },
  {
    title: 'Historia & Cultura',
    description: 'Descubre la historia y cultura del tatuaje.',
    id: 'historia',
  },
  {
    title: 'Técnicas',
    description: 'Aprende técnicas profesionales paso a paso.',
    id: 'tecnicas',
  },
];

export const timelineEvents: TimelineEvent[] = [
  { 
    year: '3000 A.C.', 
    text: 'Primeros tatuajes en momias egipcias.',
    id: 'egypt'
  },
  { 
    year: '700', 
    text: 'Polinesios perfeccionan el tatuaje tribal.',
    id: 'polynesia'
  },
  { 
    year: '1700', 
    text: 'El tatuaje llega a Occidente a través de exploradores.',
    id: 'western'
  },
  { 
    year: '1900', 
    text: 'Primeras máquinas de tatuar modernas.',
    id: 'machines'
  },
  { 
    year: '2000', 
    text: 'El tatuaje se convierte en arte mainstream.',
    id: 'mainstream'
  },
];

export const navItems: NavItem[] = [
  { name: 'Inicio', href: '/', id: 'home' },
  { name: 'Módulos', href: '#modules', id: 'modules' },
  { name: 'Historia', href: '#history', id: 'history' },
  { name: 'Videos', href: '#videos', id: 'videos' },
  { name: 'Progreso', href: '#progress', id: 'progress' },
];