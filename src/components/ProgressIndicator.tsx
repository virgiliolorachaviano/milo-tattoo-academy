'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ProgressIndicatorProps } from '@/types';

export default function ProgressIndicator({ 
  progress, 
  label = "Progreso de aprendizaje",
  className = ""
}: ProgressIndicatorProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${Math.min(Math.max(progress, 0), 100)}%` });
  }, [progress, controls]);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {Math.round(progress)}%
          </span>
        </div>
      )}
      <div 
        className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}
