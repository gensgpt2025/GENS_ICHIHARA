import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-8 fixed top-0 left-0 bg-gray-900/50 backdrop-blur-lg z-10 border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gold">GENS ICHIHARA</div>
          <ul className="flex space-x-8 text-lg items-center">
            <li><a href="#" className="relative group pb-1">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#about" className="relative group pb-1">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#members" className="relative group pb-1">
              <span>Members</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
            <li><a href="#matches" className="relative group pb-1">
              <span>Matches</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content (Hero Section) */}
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="space-y-6">
          <h1 className="text-[5vw] font-extrabold text-gold tracking-wider leading-none" style={{ textShadow: '0 0 0.8vw #FFD700' }}>
            GENS <span className="text-[2.5vw]">ICHIHARA</span>
          </h1>
          <p className="text-[2vw] font-semibold text-vibrant-red tracking-widest leading-none" style={{ textShadow: '0 0 0.4vw #DC2626' }}>
            Futsal official
          </p>
        </div>
      </main>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-center p-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl space-y-8">
          <h2 className="text-6xl font-extrabold text-gold tracking-wider" style={{ textShadow: '0 0 20px #FFD700' }}>
            About Us
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            GENS ICHIHARAは、市原市を拠点に活動するフットサルチームです。私たちは、フットサルを通じて地域社会に貢献し、
            スポーツの楽しさと感動を共有することを目指しています。情熱とチームワークを胸に、常に高みを目指し続けます。
          </p>
          <div className="flex justify-center items-center space-x-8 mt-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/file.svg" alt="File Icon" width={100} height={100} className="filter drop-shadow-lg" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/globe.svg" alt="Globe Icon" width={100} height={100} className="filter drop-shadow-lg" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} className="filter drop-shadow-lg" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-6 px-8 text-center bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} GENS ICHIHARA. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}