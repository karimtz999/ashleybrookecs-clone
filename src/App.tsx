import { HeroContent } from '../components/HeroContent';
import { SectionOne } from '../components/SectionOne';
import { Preloader } from '../components/Preloader';
import { Siteofday } from '../components/Siteofday';

export default function App() {
  return (
    <main className="min-h-[200vh] bg-white text-black relative flex flex-col">
      <Siteofday />
      <Preloader>
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
      </Preloader>
    </main>
  );
}