'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps): ReactNode {
  return (
    <motion.video
      className="w-full rounded-lg shadow-lg"
      src={src}
      autoPlay
      controls
      loop
    />
  );
}
