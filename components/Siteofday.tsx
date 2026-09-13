export const Siteofday = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 w-12 h-45 font-mono bg-[#cb3015] text-white flex flex-col items-center py-4 px-2 z-1000 rounded-l-sm shadow-md pointer-events-auto">
      <span className="font-sans font-black text-[19px] tracking-tighter mb-4 leading-none">W.</span>
      <span className="text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-bold">
        Site of the Day
      </span>
    </div>
  );
};