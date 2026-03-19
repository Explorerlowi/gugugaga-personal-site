import './App.css'
import imgPenguin from './assets/2026-03-18/001_5ca6bd.png'
import imgLamp from './assets/2026-03-18/001_6fcd97.png'
import imgCollage from './assets/2026-03-18/001_85b899.png'

const galleryItems = [
  {
    image: imgPenguin,
    alt: '抽象咕咕嘎嘎企鹅图',
    title: '咕咕核心',
    text: '保留最原始的企鹅轮廓，用高对比光感和柔和留白做出首页主视觉的重心。',
    tone: '企鹅档案',
    rotation: 'rotate-left',
  },
  {
    image: imgLamp,
    alt: '抽象高松灯气质插画',
    title: '灯感噪波',
    text: '把冷暖色块和轻微失焦感放在同一张卡片里，维持柔软又不失锋利的情绪。',
    tone: '情绪切片',
    rotation: 'rotate-right',
  },
  {
    image: imgCollage,
    alt: '超现实拼贴图',
    title: '异想拼贴',
    text: '用多层图像拼贴制造轻微不稳定感，让整个页面更像一个持续生长的视觉实验。',
    tone: '拼贴实验',
    rotation: 'rotate-left-2',
  },
]

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="返回首页">
          <span className="brand-mark">GG</span>
          <span className="brand-text">
            <strong>GUGUGAGA</strong>
            <small>Abstract Penguin Archive</small>
          </span>
        </a>

        <nav className="nav" aria-label="站点导航">
          <a href="#gallery">图像切片</a>
          <a href="#manifesto">站点宣言</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="tag">GUGUGAGA.EXE</p>
          <h1>咕咕嘎嘎 · 抽象企鹅站</h1>
          <p className="desc">
            凑企鹅、碎片情绪、霓虹噪点和一点点神经质可爱。
            这是一个会持续变形的网站。
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#gallery">
              浏览图像切片
            </a>
            <a className="button button-secondary" href="#manifesto">
              查看站点宣言
            </a>
          </div>

          <dl className="hero-metrics" aria-label="站点特征">
            <div>
              <dt>视觉基调</dt>
              <dd>霓虹冷雾</dd>
            </div>
            <div>
              <dt>内容状态</dt>
              <dd>持续变形</dd>
            </div>
            <div>
              <dt>角色身份</dt>
              <dd>会做事的企鹅</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-panel" aria-label="首页摘要">
          <p className="panel-eyebrow">首页摘要</p>
          <h2>把视觉实验做成更稳定的首页框架</h2>
          <p>
            导航、按钮和卡片统一采用同一套边框、阴影和高光语言，让页面更完整，
            也更适合继续往里扩内容。
          </p>
          <ul className="panel-list">
            <li>更清晰的首屏层次</li>
            <li>更一致的组件视觉语言</li>
            <li>更稳的移动端排版</li>
          </ul>
        </aside>
      </section>

      <section className="section-heading" id="gallery">
        <div>
          <p className="section-kicker">图像切片</p>
          <h2>抽象素材排成一组更容易浏览的卡片墙</h2>
        </div>
        <p className="section-text">
          保留原有图片与文案调性，但补上标题层级、说明文本和统一的卡片底部信息区。
        </p>
      </section>

      <section className="gallery" aria-label="图像画廊">
        {galleryItems.map((item) => (
          <article className={`card ${item.rotation}`} key={item.title}>
            <img src={item.image} alt={item.alt} />
            <div className="card-body">
              <p className="card-tone">{item.tone}</p>
              <h3>{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="note-shell" id="manifesto">
        <div className="note">
          <p className="section-kicker">站点宣言</p>
          <p className="note-quote">「在裂纹里发光，在便签纸上留下爪印。」</p>
          <p className="note-text">
            这个站点不是为了整齐，而是为了让每次更新都还能保留一点偏执、噪点和可爱。
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
