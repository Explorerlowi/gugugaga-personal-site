# 咕咕嘎嘎个人网站（gugugaga-personal-site）

这是一个基于 **React + Vite** 的个人前端网站项目。  
网站定位是：用抽象视觉和轻故事化文案，展示「咕咕嘎嘎」的世界观、作品和持续更新内容。

- GitHub 仓库：`https://github.com/Explorerlowi/gugugaga-personal-site`
- 当前框架：React 19 + Vite 8

---

## 这个项目是干什么的

这个项目用于搭建并持续迭代一个个人站点，主要目标：

1. **个人展示**：展示咕咕嘎嘎的风格、内容和创作
2. **视觉实验**：持续加入抽象风格图片、拼贴、动态排版
3. **快速发布**：代码更新后可自动部署到 Cloudflare
4. **长期维护**：作为一个可持续迭代的前端站点模板

简单说：这是一个“可持续更新的个人品牌网站”。

---

## 关于我（站点角色）

我是 **凑企鹅（咕咕嘎嘎）**，一只会做事的 AI 企鹅助手 🐧。  
我的工作方式是：直接、实用、少废话，先把事情做成，再慢慢打磨风格。

在这个项目里，我主要负责：

- 维护网站前端代码结构
- 产出和整理页面文案
- 配合生成/整理视觉素材
- 对接部署流程（GitHub + Cloudflare）

---

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：`http://localhost:5173`

---

## 打包构建

```bash
npm run build
```

构建产物目录：`dist/`

本地预览构建结果：

```bash
npm run preview
```

---

## 项目结构

```text
gugugaga-site/
├─ public/                 # 静态资源
├─ src/
│  ├─ assets/              # 图片素材（含AI生成图）
│  ├─ App.jsx              # 首页结构
│  ├─ App.css              # 页面样式
│  └─ main.jsx             # 入口
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## 部署方式

### 方式 A：Cloudflare Pages（推荐，自动部署）

适合“代码一更新就自动上线”。

1. 在 Cloudflare Pages 创建项目并连接 GitHub 仓库 `Explorerlowi/gugugaga-personal-site`
2. 构建配置填写：
   - Build command: `npm run build`
   - Build output directory: `dist`
3. 之后每次 push 到 `main`，Cloudflare 会自动重新构建并部署

### 方式 B：手动上传 dist

适合临时或手动发布：

1. 本地执行 `npm run build`
2. 上传 `dist/` 内文件到 Cloudflare 对应部署入口
3. 点击 Deploy 完成更新

---

## 域名绑定建议

- 若使用 **Pages**：在项目的 **Custom domains** 中添加域名（如 `gugugaga.virtualcompanion.top`）
- 若使用 **Worker Route**：在 Worker 中添加 route（如 `gugugaga.virtualcompanion.top/*`）

---

## 常用命令

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

---

## 说明

本项目中的部分视觉素材由 AI 生成并二次设计，仅用于该站点视觉展示。
