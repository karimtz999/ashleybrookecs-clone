import { Preloader } from '../components/Preloader';
import { HeroContent } from '../components/HeroContent';
import { SectionOne } from '../components/SectionOne';

export default function App() {
  return (
    <Preloader>
      <main className="min-h-[200vh] bg-white text-black relative flex flex-col">
        {/* Main Hero Content */}
        <HeroContent />

        {/* Spacer for scrolling preview */}
        <section className="w-full max-w-350 mx-auto px-6 md:px-8 mt-32 min-h-screen flex flex-col gap-8">
          {/* Section 1 Component */}
          <SectionOne />

          <h2 className="text-2xl font-mono uppercase text-[#FF3917]">
            Selected Works
          </h2>
        </section>
      </main>
    </Preloader>
  );
}