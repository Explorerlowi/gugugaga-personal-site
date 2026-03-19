import './App.css'
import imgPenguin from './assets/2026-03-18/001_5ca6bd.png'
import imgLamp from './assets/2026-03-18/001_6fcd97.png'
import imgCollage from './assets/2026-03-18/001_85b899.png'
import imgDriftPenguin from './assets/2026-03-19/drift-penguin.jpg'
import imgEndfieldPenguin from './assets/2026-03-19/endfield-penguin.jpg'
import videoEndfieldPenguin from './assets/2026-03-19/endfield-penguin.mp4'

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

const driftItems = [
  { id: 1, top: '8%', left: '4%', size: '112px', duration: '16s', delay: '-3s', xMid: '34px', yMid: '-24px', xEnd: '10px', yEnd: '20px', tilt: '-10deg' },
  { id: 2, top: '12%', left: '22%', size: '88px', duration: '13s', delay: '-8s', xMid: '-30px', yMid: '28px', xEnd: '18px', yEnd: '-12px', tilt: '12deg' },
  { id: 3, top: '6%', left: '44%', size: '132px', duration: '18s', delay: '-5s', xMid: '26px', yMid: '34px', xEnd: '-16px', yEnd: '-18px', tilt: '-14deg' },
  { id: 4, top: '16%', left: '70%', size: '96px', duration: '14s', delay: '-11s', xMid: '-22px', yMid: '-30px', xEnd: '22px', yEnd: '14px', tilt: '9deg' },
  { id: 5, top: '35%', left: '10%', size: '126px', duration: '19s', delay: '-7s', xMid: '28px', yMid: '-20px', xEnd: '-12px', yEnd: '24px', tilt: '-8deg' },
  { id: 6, top: '42%', left: '32%', size: '92px', duration: '12s', delay: '-2s', xMid: '-18px', yMid: '22px', xEnd: '24px', yEnd: '-14px', tilt: '11deg' },
  { id: 7, top: '38%', left: '54%', size: '118px', duration: '17s', delay: '-10s', xMid: '20px', yMid: '-34px', xEnd: '-18px', yEnd: '12px', tilt: '-12deg' },
  { id: 8, top: '48%', left: '78%', size: '84px', duration: '11s', delay: '-6s', xMid: '-24px', yMid: '18px', xEnd: '12px', yEnd: '-20px', tilt: '10deg' },
  { id: 9, top: '68%', left: '18%', size: '104px', duration: '15s', delay: '-12s', xMid: '24px', yMid: '-16px', xEnd: '-10px', yEnd: '18px', tilt: '-9deg' },
  { id: 10, top: '70%', left: '60%', size: '138px', duration: '20s', delay: '-4s', xMid: '-32px', yMid: '-28px', xEnd: '14px', yEnd: '24px', tilt: '13deg' },
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
          <a href="#drift-show">漂浮企鹅</a>
          <a href="#gallery">图像切片</a>
          <a href="#endfield-drop">新素材</a>
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

      <section className="drift-section" id="drift-show" aria-labelledby="drift-title">
        <div className="drift-copy">
          <p className="section-kicker">漂浮企鹅</p>
          <h2 id="drift-title">一整池会飘来飘去的企鹅分身</h2>
          <p className="section-text">
            同一张企鹅图被拆成不同节奏和轨迹，在这块区域里持续漂移。把鼠标停在任意一只上面，
            它就会暂时停住，离开后继续晃回自己的航线。
          </p>
        </div>

        <div
          className="drift-stage"
          role="list"
          aria-label="漂浮企鹅互动展示，悬停单个企鹅可以暂停其漂浮动画"
        >
          {driftItems.map((item) => (
            <figure
              className="drift-item"
              key={item.id}
              role="listitem"
              style={{
                '--top': item.top,
                '--left': item.left,
                '--size': item.size,
                '--duration': item.duration,
                '--delay': item.delay,
                '--x-mid': item.xMid,
                '--y-mid': item.yMid,
                '--x-end': item.xEnd,
                '--y-end': item.yEnd,
                '--tilt': item.tilt,
              }}
              aria-label={`漂浮企鹅 ${item.id}`}
            >
              <div className="drift-bob">
                <img src={imgDriftPenguin} alt={`漂浮中的企鹅分身 ${item.id}`} />
              </div>
            </figure>
          ))}
        </div>
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

      <section className="drop" id="endfield-drop" aria-label="新上传素材">
        <div className="drop-heading">
          <p className="section-kicker">今日新素材</p>
          <h2>明日方舟终末地 · 企鹅化现场</h2>
          <p className="section-text">
            你刚发来的视频和图片我都放上来了：一边是“管理员被同化成企鹅”的现场录像，
            一边是双企鹅定格图，直接挂在首页内容流里。
          </p>
        </div>

        <div className="drop-grid">
          <article className="drop-card">
            <video controls playsInline preload="metadata" poster={imgEndfieldPenguin}>
              <source src={videoEndfieldPenguin} type="video/mp4" />
              你的浏览器不支持 video 标签。
            </video>
            <div className="drop-card-body">
              <p className="card-tone">视频切片</p>
              <h3>管理员，欢迎加入企鹅阵营</h3>
              <p className="card-text">
                雪原、洗脑台词、企鹅化变身、最后全员同化，梗浓度直接拉满。
              </p>
            </div>
          </article>

          <article className="drop-card">
            <img src={imgEndfieldPenguin} alt="终末地企鹅化双人定格图" />
            <div className="drop-card-body">
              <p className="card-tone">图片切片</p>
              <h3>双企鹅定格</h3>
              <p className="card-text">
                一张图就把“我是凑企鹅”的世界观钉死在首页，够抽象也够可爱。
              </p>
            </div>
          </article>
        </div>
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
