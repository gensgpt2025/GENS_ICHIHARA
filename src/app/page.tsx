"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-8 fixed top-0 left-0 bg-gray-900/50 backdrop-blur-lg z-10 border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#FFA500' }}>GENS ICHIHARA</div>
          <ul className="flex space-x-8 text-xl items-center">
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }}>
              <span>Home</span>
            </a></li>
            <li><a href="#about" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }}>
              <span>About</span>
            </a></li>
            <li><a href="#members" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }}>
              <span>Members</span>
            </a></li>
            <li><a href="#matches" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }}>
              <span>Matches</span>
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

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 px-8 flex items-center justify-center bg-gray-900/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-12 p-8 rounded-lg shadow-xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/1.png" alt="About Us Image" width={500} height={300} className="rounded-lg shadow-lg" objectFit="contain" layout="intrinsic" />
          </div>
          <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#FFA500' }}>About Us</h2>
            <p className="mb-4">
              献身・誠実・尊重・感謝をポリシーとするフットサルチームです。私たちは、フットサルを通じて地域社会に貢献し、
              スポーツの楽しさと感動を共有することを目指しています。情熱とチームワークを胸に、常に高みを目指し続けます。
            </p>
            <p>
              チームは経験豊富な選手から初心者まで、幅広いレベルのメンバーで構成されており、
              互いに協力し合いながら成長できる環境を提供しています。練習試合や公式戦への参加はもちろん、
              地域イベントへの貢献も積極的に行っています。
            </p>
          </div>
        </div>
      </motion.section>
  </div>
  );
}