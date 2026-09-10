import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/HeroContent';

export default function App() {
  return (
    <main className="min-h-[200vh] bg-white text-black relative flex flex-col">
      {/* 1. Sticky Header with Morphing SVG Logo */}
      <Navbar />

      {/* 2. Main Hero Content */}
      <HeroContent />

      {/* 3. Spacer for scrolling preview */}
      <section className="w-full max-w-350 mx-auto px-6 md:px-8 mt-32 min-h-screen">
        <h2 className="text-2xl font-mono uppercase text-[#FF3917]">Selected Works</h2>
      </section>
    </main>
  );
}