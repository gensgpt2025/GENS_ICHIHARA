import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GENS ICHIHARA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">スケジュール</a></li>
                  <li><a className="dropdown-item" href="#">試合結果</a></li>
                  <li><a className="dropdown-item" href="#">メンバー</a></li>
                  <li><a className="dropdown-item" href="#">お問い合わせ</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-1 fw-bold">GENS ICHIHARA</h1>
          <h2 className="display-4 mt-3">Switch Zero, Fight Hard.</h2>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="team-intro-section container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="display-5 mb-4">チーム紹介</h2>
            <p className="lead">
              GENS ICHIHARAは、情熱とチームワークを胸に、フットサルの頂点を目指すプロフェッショナルチームです。
              私たちは、日々の厳しいトレーニングを通じて技術と精神を磨き、常に最高のパフォーマンスを発揮することをお約束します。
              「Switch Zero, Fight Hard.」をスローガンに、どんな困難にも立ち向かい、勝利のために全力を尽くします。
            </p>
            <p>
              地域社会との連携も大切にし、フットサルを通じてスポーツの楽しさや感動を共有する活動にも積極的に取り組んでいます。
              応援してくださる全ての皆様に感謝し、期待に応えるべく、これからも進化し続けます。
            </p>
          </div>
          <div className="col-md-6">
            <img src="/logo_GENS.JPEG" alt="Team Logo" className="img-fluid rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* Episode/Video Section */}
      <section className="video-section bg-light py-5">
        <div className="container">
          <h2 className="text-center display-5 mb-5">エピソード</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <video controls className="w-100">
                  <source src="/images/GENS ICHIHARA Episode.0.MP4" type="video/mp4" />
                  お使いのブラウザは動画タグをサポートしていません。
                </video>
                <div className="card-body">
                  <h5 className="card-title">Episode 0: 始まり</h5>
                  <p className="card-text">チーム結成の舞台裏と、選手たちの初期の挑戦を追ったドキュメンタリー。</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <video controls className="w-100">
                  <source src="/images/GENS ICHIHARA Episode.1.MP4" type="video/mp4" />
                  お使いのブラウザは動画タグをサポートしていません。
                </video>
                <div className="card-body">
                  <h5 className="card-title">Episode 1: 成長の軌跡</h5>
                  <p className="card-text">シーズン中の苦難と、それを乗り越えて成長していくチームの姿を描く。</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <video controls className="w-100">
                  <source src="/images/GENS ICHIHARA Episode.2.MP4" type="video/mp4" />
                  お使いのブラウザは動画タグをサポートしていません。
                </video>
                <div className="card-body">
                  <h5 className="card-title">Episode 2: 勝利への道</h5>
                  <p className="card-text">重要な試合での戦略と、勝利への執念を捉えた感動的なエピソード。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section container my-5 py-5">
        <h2 className="text-center display-5 mb-5">ギャラリー</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="/images/Episode_0.png" alt="Gallery Image 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="/images/Episode_1.png" alt="Gallery Image 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="/images/Episode_2.png" alt="Gallery Image 3" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6 mb-4">
            <img src="/images/rogo.PNG" alt="Gallery Image 4" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6 mb-4">
            <img src="/images/Logo1980x1080.png" alt="Gallery Image 5" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="action-buttons-section bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center display-5 mb-5">アクション</h2>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mb-4">
              <a href="#" className="btn btn-outline-light btn-lg w-100 py-3">
                スケジュール
              </a>
            </div>
            <div className="col-md-3 text-center mb-4">
              <a href="#" className="btn btn-outline-light btn-lg w-100 py-3">
                試合結果
              </a>
            </div>
            <div className="col-md-3 text-center mb-4">
              <a href="#" className="btn btn-outline-light btn-lg w-100 py-3">
                メンバー
              </a>
            </div>
            <div className="col-md-3 text-center mb-4">
              <a href="#" className="btn btn-outline-light btn-lg w-100 py-3">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 CWG. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
