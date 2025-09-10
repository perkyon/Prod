import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-12">
        <span
          className="text-[8rem] md:text-[12rem] select-none"
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

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 text-sm font-medium text-foreground">
        {Math.round(progress)}%
      </div>
    </div>
  );
}