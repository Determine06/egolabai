import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full bg-black text-white selection:bg-white selection:text-black flex flex-col relative overflow-hidden">
      {/* Subtle overlay to ensure text readability */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-40 z-5" />

      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 z-10 w-full h-full">
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default App;