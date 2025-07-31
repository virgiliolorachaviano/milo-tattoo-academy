'use client';

import { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ProgressIndicatorProps {
  progress: number;
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps): ReactNode {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${progress}%` });
  }, [progress, controls]);

  return (
    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
