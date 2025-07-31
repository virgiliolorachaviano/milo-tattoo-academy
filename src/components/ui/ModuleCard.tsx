'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModuleCardProps {
  title: string;
  description: string;
}

export default function ModuleCard({ title, description }: ModuleCardProps): ReactNode {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card-interactive"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
