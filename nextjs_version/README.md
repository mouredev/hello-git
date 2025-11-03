# Hello Git & GitHub - Next.js Website

Modern Next.js website for the Hello Git & GitHub course by MoureDev.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static Export (GitHub Pages ready)

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/mouredev/hello-git.git
cd hello-git/nextjs_version
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `/out` directory.

### Start Production Server
```bash
npm start
```
Runs the production build locally.

### Lint Code
```bash
npm run lint
```
Checks code quality with ESLint.

## 📁 Project Structure

```
nextjs_version/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── lessons/           # Lessons page
│   ├── about/             # About page
│   └── book/              # Book page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── FeatureCard.tsx    # Feature card
│   └── LessonCard.tsx     # Lesson card
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
└── next.config.js         # Next.js config
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Static export ready
- ✅ Accessible components

## 📄 Pages

- **Home** (`/`) - Landing page with course overview
- **Lessons** (`/lessons`) - Course lessons catalog
- **Book** (`/book`) - Book information and purchase
- **About** (`/about`) - About the course and author

## 🎨 Color Palette

- **Git Orange**: `#F14E32`
- **Git Red**: `#DE4C36`
- **Git Dark**: `#2C2C2C`
- **GitHub Purple**: `#6E5494`
- **GitHub Dark**: `#24292E`
- **GitHub Blue**: `#0366D6`

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `/out` directory to GitHub Pages

### Vercel

1. Connect your repository to Vercel
2. Vercel will auto-detect Next.js and deploy

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is part of the Hello Git & GitHub course by MoureDev.

## 🔗 Links

- [Course Repository](https://github.com/mouredev/hello-git)
- [MoureDev Website](https://mouredev.com)
- [YouTube](https://youtube.com/@mouredev)
- [Twitch](https://twitch.tv/mouredev)

## 👨‍💻 Author

**MoureDev** - Brais Moure
- Website: [mouredev.com](https://mouredev.com)
- Twitter: [@mouredev](https://twitter.com/mouredev)
- YouTube: [@mouredev](https://youtube.com/@mouredev)

---

Made with ❤️ for the developer community
