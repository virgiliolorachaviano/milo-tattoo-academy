'use client';

import { motion } from 'framer-motion';
import { VideoPlayerProps } from '@/types';

export default function VideoPlayer({ 
  src, 
  title = "Video educativo",
  autoPlay = false,
  controls = true,
  loop = false 
}: VideoPlayerProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}
      <motion.video
        className="w-full rounded-lg shadow-lg"
        src={src}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={autoPlay} // Mute if autoplay is enabled for better UX
        preload="metadata"
        aria-label={title}
      >
        <p>
          Tu navegador no soporta videos HTML5. 
          <a href={src} className="text-primary-pink hover:underline">
            Descarga el video aquí
          </a>.
        </p>
      </motion.video>
    </div>
  );
}
