'use client';

import { motion } from 'framer-motion';
import { Module } from '@/types';

interface ModuleCardProps {
  module: Module;
  onClick?: (module: Module) => void;
}

export default function ModuleCard({ module, onClick }: ModuleCardProps) {
  const handleClick = () => {
    onClick?.(module);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-opacity-50"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Módulo: ${module.title}. ${module.description}`}
    >
      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
      {module.completed && (
        <div className="mt-2 text-green-600 dark:text-green-400 text-sm">
          ✓ Completado
        </div>
      )}
    </motion.div>
  );
}
