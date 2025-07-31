'use client';

import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
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
