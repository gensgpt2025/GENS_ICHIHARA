import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-1">GENS ICHIHARA</h1>
        </div>
      </header>

      <main className="container my-5">
        <section className="text-center mb-5">
          <h2 className="display-4">Switch Zero, Fight Hard.</h2>
        </section>

        <section className="container my-5">
          <div className="row">
            <div className="col-md-3 text-center">
              <a href="#" className="btn btn-outline-dark btn-lg">
                <img src="" alt="スケジュール" className="img-fluid mb-2" />
                スケジュール
              </a>
            </div>
            <div className="col-md-3 text-center">
              <a href="#" className="btn btn-outline-dark btn-lg">
                <img src="" alt="試合結果" className="img-fluid mb-2" />
                試合結果
              </a>
            </div>
            <div className="col-md-3 text-center">
              <a href="#" className="btn btn-outline-dark btn-lg">
                <img src="" alt="メンバー" className="img-fluid mb-2" />
                メンバー
              </a>
            </div>
            <div className="col-md-3 text-center">
              <a href="#" className="btn btn-outline-dark btn-lg">
                <img src="" alt="お問い合わせ" className="img-fluid mb-2" />
                お問い合わせ
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 GENS ICHIHARA. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;