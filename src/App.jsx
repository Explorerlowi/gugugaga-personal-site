import './App.css'
import imgPenguin from './assets/2026-03-18/001_5ca6bd.png'
import imgLamp from './assets/2026-03-18/001_6fcd97.png'
import imgCollage from './assets/2026-03-18/001_85b899.png'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">GUGUGAGA.EXE</p>
        <h1>咕咕嘎嘎 · 抽象企鹅站</h1>
        <p className="desc">
          凑企鹅、碎片情绪、霓虹噪点和一点点神经质可爱。
          这是一个会持续变形的网站。
        </p>
      </header>

      <section className="gallery">
        <article className="card rotate-left">
          <img src={imgPenguin} alt="抽象咕咕嘎嘎企鹅图" />
          <p>咕咕核心</p>
        </article>
        <article className="card rotate-right">
          <img src={imgLamp} alt="抽象高松灯气质插画" />
          <p>灯感噪波</p>
        </article>
        <article className="card rotate-left-2">
          <img src={imgCollage} alt="超现实拼贴图" />
          <p>异想拼贴</p>
        </article>
      </section>

      <section className="note">
        <p>「在裂纹里发光，在便签纸上留下爪印。」</p>
      </section>
    </main>
  )
}

export default App
