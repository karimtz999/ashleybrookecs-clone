
export const HeroContent = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-6 md:px-8 mt-12 md:mt-24 pb-12">
      {/* 12-Column Layout Grid (u-grid-custom) */}
      <div className="grid grid-cols-12 gap-y-12 md:gap-8 items-end">
        
        {/* Subtext Paragraph (div.hero_home_subtext_wrap) */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <p className="text-sm md:text-base leading-snug text-neutral-900 font-normal max-w-85">
            Led by a hyper-proactive perfectionist, PR Strategist turned Producer turned Creative Director who refuses to stay in a single lane.
          </p>
        </div>
        {/* Fixed Badge */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#FF3917] text-white flex flex-col items-center py-4 px-2 z-50 rounded-l-sm">
          <span className="font-bold text-sm mb-6">W.</span>
          <span className="text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
            Site of the Day
          </span>
        </div>

        {/* Hero Headline & CTA (div.hero_home_half_wrap) */}
        <div className="col-span-12 md:col-span-7 lg:col-start-6 flex flex-col items-start gap-8 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.12] text-black -translate-x-6.25 translate-y-3.75">
            A creative studio merging systems-thinking with storytelling for brands, agencies, and film
          </h1>

          <button className="bg-black text-white font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-[#E63917] transition-colors duration-200 cursor-pointer inline-flex items-center gap-2">
            <span>ABOUT US</span>
            <span className="text-sm leading-none">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
};