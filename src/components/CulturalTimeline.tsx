"use client";

import { motion } from 'framer-motion';

export default function CulturalTimeline() {
  const events = [
    { year: '3000 A.C.', text: 'Primeros tatuajes en momias egipcias.' },
    { year: '700', text: 'Polinesios perfeccionan el tatuaje tribal.' },
    { year: '1700', text: 'El tatuaje llega a Occidente a través de exploradores.' },
    { year: '1900', text: 'Primeras máquinas de tatuar modernas.' },
    { year: '2000', text: 'El tatuaje se convierte en arte mainstream.' },
  ];
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Historia del Tatuaje</h2>
      <ul className="space-y-4">
        {events.map(({ year, text }, index) => (
          <motion.li
            key={year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <div className="font-bold mb-1">{year}</div>
            <p>{text}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
