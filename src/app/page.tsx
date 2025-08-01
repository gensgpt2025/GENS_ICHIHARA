"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-8 fixed top-0 left-0 bg-gray-900/50 backdrop-blur-lg z-10 border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#FFA500' }}>GENS ICHIHARA</div>
          <ul className="flex space-x-8 text-lg items-center">
            <li><a href="#" className="relative group pb-1" style={{ color: '#FFA500' }}>
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#about" className="relative group pb-1" style={{ color: '#FFA500' }}>
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#members" className="relative group pb-1" style={{ color: '#FFA500' }}>
              <span>Members</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#matches" className="relative group pb-1" style={{ color: '#FFA500' }}>
              <span>Matches</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
          </ul>
        </nav>
      </header>

      <div className="flex items-center justify-center flex-grow bg-black">
        <motion.h1
        className="text-[8vw] font-bold tracking-widest text-center"
        style={{ color: '#FFA500', textShadow: '0 0 2px #FFFACD, 0 0 4px #FFFACD, 0 0 6px #FFFACD, 0 0 8px #FFFACD, 0 0 10px #FFFACD, 0 0 12px #FFFACD, 0 0 14px #FFFACD' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        GENS ICHIHARA<br />
        <span className="text-[4vw] font-normal" style={{ color: '#FFA500' }}>futsal official</span>
      </motion.h1>
    </div>
  </div>
  );
}