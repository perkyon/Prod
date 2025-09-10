import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function InteractiveCard({ 
  children, 
  className = "",
  intensity = 1 
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [15 * intensity, -15 * intensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-15 * intensity, 15 * intensity]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        {children}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-inherit bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}