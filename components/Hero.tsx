import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const title = "egolab.ai";
  
  return (
    <div className="text-center max-w-5xl mx-auto w-full flex flex-col items-center">
      {/* Main Title - Fixed clipping issue for 'g' descender by adjusting overflow and padding */}
      {/* Reduced mb-8 to mb-2 to pull the description up */}
      <div className="flex overflow-visible mb-2 pb-8 pt-2">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.4 + i * 0.05,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-7xl md:text-8xl lg:text-[11rem] font-extrabold tracking-tighter title-glow leading-[1.1] select-none inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Description container moved up by reducing margins above */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        className="space-y-3"
      >
        <p className="text-lg md:text-xl text-zinc-400 font-light tracking-wide">
          the <span className="italic text-white">egocentric</span> data lab for embodied AI.
        </p>
        <p className="text-sm md:text-base text-zinc-600 font-light max-w-2xl mx-auto tracking-[0.15em] uppercase">
          licensed first-person video from real industrial environments.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;