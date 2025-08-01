"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.h1
        className="text-[8vw] font-bold tracking-widest text-center"
        style={{ color: '#FFA500', textShadow: '0 0 2px #FFD700, 0 0 4px #FFD700, 0 0 6px #FFD700, 0 0 8px #FFD700, 0 0 10px #FFD700, 0 0 12px #FFD700, 0 0 14px #FFD700' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        GENS ICHIHARA<br />
        <span className="text-[4vw] font-normal" style={{ color: '#FFA500' }}>futsal official</span>
      </motion.h1>
    </div>
  );
}