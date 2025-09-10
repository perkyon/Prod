export function InteractiveLogo() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Logo Container - No animations */}
      <div className="relative flex items-center justify-center z-20 px-4">
        <span
          className="inline-block text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] select-none text-center leading-[0.8]"
          style={{
            fontFamily: 'Arial Black, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "#000000",
          }}
        >
          BURO
        </span>
      </div>
    </div>
  );
}