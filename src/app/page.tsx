'use client';

import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';
import CulturalTimeline from '../components/CulturalTimeline';
import VideoPlayer from '../components/VideoPlayer';
import ProgressIndicator from '../components/ProgressIndicator';
import { modules } from '@/data';
import { Module } from '@/types';

export default function Page() {
  const handleModuleClick = (module: Module) => {
    console.log(`Clicked module: ${module.title}`);
    // Future: Navigate to module detail page
  };

  return (
    <>
      <Header />
      <main className="px-4 py-8 max-w-6xl mx-auto pt-20"> {/* Added pt-20 for fixed header spacing */}
        <section className="text-center">
          <h1 className="text-4xl font-bold gradient-text">Milo Tattoo Academy</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Aprende el arte del tatuaje a tu propio ritmo.
          </p>
        </section>

        <section id="modules" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {modules.map((module) => (
            <ModuleCard 
              key={module.id || module.title} 
              module={module} 
              onClick={handleModuleClick}
            />
          ))}
        </section>

        <section id="history" className="mt-12">
          <CulturalTimeline />
        </section>

        <section id="videos" className="mt-12">
          <VideoPlayer 
            src="/videos/introduccion.mp4" 
            title="Video de Introducción"
            autoPlay={false}
            controls={true}
            loop={false}
          />
        </section>

        <section id="progress" className="mt-12">
          <ProgressIndicator 
            progress={33} 
            label="Tu progreso general" 
          />
        </section>
      </main>
    </>
  );
}
