export const BreakpointIndicator = () => (
  <div className="fixed bottom-6 left-16 z-50 rounded bg-black/80 px-2 py-1 font-mono text-xs text-white">
    <span className="sm:hidden">xs</span>
    <span className="hidden sm:inline md:hidden">sm</span>
    <span className="hidden md:inline lg:hidden">md</span>
    <span className="hidden lg:inline xl:hidden">lg</span>
    <span className="hidden xl:inline 2xl:hidden">xl</span>
    <span className="3xl:hidden! hidden 2xl:inline">2xl</span>
    <span className="3xl:inline 4xl:hidden hidden">3xl</span>
    <span className="4xl:inline hidden">4xl</span>
  </div>
);
