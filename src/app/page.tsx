"use client";
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // ヘッダーの高さ (pt-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // モバイルメニューを閉じる
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-8 fixed top-0 left-0 bg-gray-900/50 backdrop-blur-lg z-10 border-b border-white/10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#FFA500' }}>GENS ICHIHARA</div>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-xl items-center">
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'top')}>
              <span>Home</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'about')}>
              <span>About</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'news')}>
              <span>News</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'team')}>
              <span>Team</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'media')}>
              <span>Media</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'sponsors')}>
              <span>Sponsors</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'contact')}>
              <span>Contact</span>
            </a></li>
            <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 group-hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'privacy-terms')}>
              <span>PRIVACY / TERMS</span>
            </a></li>
          </ul>
        </nav>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/90 backdrop-blur-lg py-4">
            <ul className="flex flex-col items-center space-y-4 text-xl">
              <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'top')}>
                <span>Home</span>
              </a></li>
              <li><a href="#" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'about')}>
                <span>About</span>
              </a></li>
              <li><a href="#news" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'news')}>
                <span>News</span>
              </a></li>
              <li><a href="#team" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'team')}>
                <span>Team</span>
              </a></li>
              <li><a href="#media" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'media')}>
                <span>Media</span>
              </a></li>
              <li><a href="#sponsors" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'sponsors')}>
                <span>Sponsors</span>
              </a></li>
              <li><a href="#contact" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'contact')}>
                <span>Contact</span>
              </a></li>
              <li><a href="#privacy-terms" className="relative block py-2 px-4 rounded-md transition-colors duration-300 hover:bg-white/10" style={{ color: '#FFA500' }} onClick={(e) => handleScroll(e, 'privacy-terms')}>
                <span>PRIVACY / TERMS</span>
              </a></li>
            </ul>
          </div>
        )}
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
            <Image src="/1.png" alt="About Us Image" width={750} height={450} className="rounded-lg shadow-lg" objectFit="contain" layout="intrinsic" />
          </div>
          <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#FFA500' }}>About Us</h2>
            <p className="mb-4">
              GENS ICHIHARA（ゲンズ イチハラ） は、千葉県市原市を拠点とするフットサルクラブです。<br />
              私たちは 献身・誠実・尊重・感謝 の4つを行動指針として、<br />
              “Switch Zero, Fight Hard.”　─ 0秒で気持ちとプレーを切り替え、球際で戦い抜くスタイルを体現します。
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#FFA500' }}>Emblem Story</h2>
            <p>
              ・　"燃え上がる炎" ― 揺るがぬ情熱<br />
              ・　"王冠" ― 高みへ挑戦する志<br />
              ・　"ゴールドの六角形" ― 仲間と築く盤石の絆<br />
              ・　“2025” ― 創設の証と未来への決意
              </p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#FFA500' }}>Our Pledge</h2>
            <p className="mb-4">
              やらずに後悔したくない。挑戦に年齢は関係ない。<br />
              チームに関わるすべての人がひとつになり、挑戦の火 を絶やすことなく、ともに頂点を目指しましょう。
            </p>
          </div>
        </div>
      </motion.section>
      {/* News Section */}
      <motion.section
        id="news"
        className="py-32 px-8 flex items-center justify-center bg-black/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>News</h2>
          <p>最新情報がここに表示されます。</p>
          {/* Placeholder for news items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">ニュースタイトル 1</h3>
              <p className="text-gray-400 text-sm">2025年8月1日</p>
              <p className="mt-4">ニュースの概要がここに表示されます。詳細はこちらをクリック。</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">ニュースタイトル 2</h3>
              <p className="text-gray-400 text-sm">2025年7月25日</p>
              <p className="mt-4">ニュースの概要がここに表示されます。詳細はこちらをクリック。</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">ニュースタイトル 3</h3>
              <p className="text-gray-400 text-sm">2025年7月18日</p>
              <p className="mt-4">ニュースの概要がここに表示されます。詳細はこちらをクリック。</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        className="py-32 px-8 flex items-center justify-center bg-gray-900/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>Team</h2>
          <p>チームメンバーの紹介がここに表示されます。</p>
          {/* Placeholder for team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Member 1" width={150} height={150} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">メンバー名 1</h3>
              <p className="text-gray-400">ポジション</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Member 2" width={150} height={150} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">メンバー名 2</h3>
              <p className="text-gray-400">ポジション</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Member 3" width={150} height={150} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">メンバー名 3</h3>
              <p className="text-gray-400">ポジション</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Member 4" width={150} height={150} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">メンバー名 4</h3>
              <p className="text-gray-400">ポジション</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Media Section */}
      <motion.section
        id="media"
        className="py-32 px-8 flex items-center justify-center bg-black/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>Media</h2>
          <p>メディア掲載情報やギャラリーがここに表示されます。</p>
          {/* Placeholder for media content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">メディアタイトル 1</h3>
              <p className="text-gray-400 text-sm">2025年8月1日</p>
              <p className="mt-4">メディアコンテンツの概要。</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">メディアタイトル 2</h3>
              <p className="text-gray-400 text-sm">2025年7月20日</p>
              <p className="mt-4">メディアコンテンツの概要。</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">メディアタイトル 3</h3>
              <p className="text-gray-400 text-sm">2025年7月10日</p>
              <p className="mt-4">メディアコンテンツの概要。</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.section
        id="sponsors"
        className="py-32 px-8 flex items-center justify-center bg-gray-900/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>Sponsors</h2>
          <p>スポンサー企業様のご紹介です。</p>
          {/* Placeholder for sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Sponsor 1" width={150} height={100} className="mb-4" />
              <h3 className="text-xl font-bold">スポンサー名 1</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Sponsor 2" width={150} height={100} className="mb-4" />
              <h3 className="text-xl font-bold">スポンサー名 2</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Sponsor 3" width={150} height={100} className="mb-4" />
              <h3 className="text-xl font-bold">スポンサー名 3</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/file.svg" alt="Sponsor 4" width={150} height={100} className="mb-4" />
              <h3 className="text-xl font-bold">スポンサー名 4</h3>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-32 px-8 flex items-center justify-center bg-black/50 backdrop-blur-lg scroll-mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>Contact</h2>
          <p>お問い合わせはこちらから。</p>
          {/* Placeholder for contact form or information */}
          <div className="mt-8">
            <p className="text-lg">メールアドレス: info@gensichihara.com</p>
            <p className="text-lg">SNSリンクなど</p>
          </div>
        </div>
      </motion.section>

      {/* PRIVACY / TERMS Section */}
      <motion.section
        id="privacy-terms"
        className="py-32 px-8 flex items-center justify-center bg-gray-900/50 backdrop-blur-lg scroll-mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#FFA500' }}>PRIVACY / TERMS</h2>
          <p>プライバシーポリシーと利用規約がここに表示されます。</p>
          {/* Placeholder for privacy policy and terms */}
          <div className="mt-8 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">プライバシーポリシー</h3>
            <p className="mb-4">
              当サイトは、お客様の個人情報の保護を最優先に考えています。
              収集した個人情報は、サービスの提供、改善、およびお客様への情報提供のためにのみ利用し、
              お客様の同意なく第三者に開示することはありません。
            </p>
            <h3 className="text-2xl font-bold mb-4">利用規約</h3>
            <p className="mb-4">
              当サイトのご利用にあたっては、以下の利用規約にご同意いただく必要があります。
              当サイトのコンテンツは、情報提供を目的としており、その正確性、完全性、
              有用性について保証するものではありません。
            </p>
          </div>
        </div>
      </motion.section>
  </div>
  );
}
