import { Header } from '../components/layout';
import { ModuleCard, CulturalTimeline, VideoPlayer, ProgressIndicator } from '../components/ui';
import { ReactNode } from 'react';

interface Module {
  title: string;
  description: string;
}

const modules: Module[] = [
  {
    title: 'Bitácora Personal',
    description: 'Lleva un registro de tu aprendizaje y progreso.',
  },
  {
    title: 'Historia & Cultura',
    description: 'Descubre la historia y cultura del tatuaje.',
  },
  {
    title: 'Técnicas',
    description: 'Aprende técnicas profesionales paso a paso.',
  },
];

export default function Page(): ReactNode {
  return (
    <>
      <Header />
      <main className="px-4 py-8 max-w-6xl mx-auto">
        <section className="text-center">
          <h1 className="text-4xl font-bold gradient-text">Milo Tattoo Academy</h1>
          <p className="mt-4 text-lg">
            Aprende el arte del tatuaje a tu propio ritmo.
          </p>
        </section>
        <section id="modules" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {modules.map((m) => (
            <ModuleCard key={m.title} title={m.title} description={m.description} />
          ))}
        </section>
        <section id="history" className="mt-12">
          <CulturalTimeline />
        </section>
        <section id="videos" className="mt-12">
          <VideoPlayer src="/videos/introduccion.mp4" />
        </section>
        <section id="progress" className="mt-12">
   <ProgressIndicator progress={33} />
        </section>
      </main>
    </>
  );
}
