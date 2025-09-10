import { motion } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div 
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50,
              rotateX: -90
            },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 0.05 
}: TypewriterTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + i * speed,
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}