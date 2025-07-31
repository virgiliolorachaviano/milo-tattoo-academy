'use client';

import { motion } from 'framer-motion';
import { timelineEvents } from '@/data';

export default function CulturalTimeline() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Historia del Tatuaje</h2>
      <ul className="space-y-4" role="list">
        {timelineEvents.map((event, index) => (
          <motion.li
            key={event.id || event.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            role="listitem"
          >
            <div className="font-bold mb-1" aria-label={`Año ${event.year}`}>
              {event.year}
            </div>
            <p>{event.text}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
