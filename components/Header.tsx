import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const founders = [
    { name: 'nishchay', url: 'https://www.linkedin.com/in/nishchay-jaiswal-b2329b233/' },
    { name: 'varun', url: 'https://www.linkedin.com/in/varun--pareek/' },
    { name: 'raghav', url: 'https://www.linkedin.com/in/raghav-samani/' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full p-12 flex justify-center z-40">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="flex gap-12 md:gap-24 pt-[15px]"
      >
        {founders.map((founder) => (
          <a 
            key={founder.name}
            href={founder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors duration-500 text-[14px] tracking-[0.2em] lowercase font-medium"
          >
            {founder.name}
          </a>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;