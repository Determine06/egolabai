
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  // Hardcoded to 2026 as per user request
  const year = 2026;
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1.5 }}
      className="fixed bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-center z-40 text-[10px] tracking-[0.3em] text-zinc-600 uppercase font-medium"
    >
      {/* Left side: Copyright */}
      <div className="order-2 md:order-1 mt-4 md:mt-0 hover:text-white transition-all duration-500 cursor-default">
        egolab.ai © {year}
      </div>

      {/* Center: Email */}
      <div className="order-1 md:order-2">
        <motion.a 
          href="mailto:hello@egolab.ai" 
          whileHover={{ scale: 1.02, color: '#ffffff' }}
          className="hover:text-white transition-colors duration-500 block"
        >
          hello@egolab.ai
        </motion.a>
      </div>

      {/* Right side: Legal */}
      <div className="order-3 flex gap-8 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors duration-500">
          privacy
        </a>
        <a href="#" className="hover:text-white transition-colors duration-500">
          terms
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;