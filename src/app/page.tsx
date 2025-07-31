import Image from 'next/image';

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
          <h1 className="text-[20rem] font-extrabold text-gold tracking-wider leading-none" style={{ textShadow: '0 0 40px #FFD700' }}>
            GENS ICHIHARA
          </h1>
          <p className="text-8xl font-semibold text-vibrant-red tracking-widest" style={{ textShadow: '0 0 20px #DC2626' }}>
            Futsal official
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-8 text-center bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} GENS ICHIHARA. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}