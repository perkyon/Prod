import { InteractiveLogo } from "./InteractiveLogo";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1755237449468-e70840025313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwY3JhZnRpbmclMjB2aWRlbyUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU2ODkwNTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`
          }}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated gradient overlay for more dynamic feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <InteractiveLogo />
      </div>
    </section>
  );
}