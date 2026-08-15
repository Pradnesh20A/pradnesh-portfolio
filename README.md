# Pradnesh A — Portfolio

A premium, modern, responsive personal portfolio website showcasing my work as an AI/ML Developer and Software Engineer.

## 🚀 Live Demo

[pradnesh20a.github.io/pradnesh-portfolio](https://pradnesh20a.github.io/pradnesh-portfolio/)

## ✨ Features

- **Dark-first premium design** with glassmorphism, gradient accents, and subtle grid patterns
- **Animated hero section** with canvas-based neural network particle effect
- **Interactive skills section** with category filters and color-coded groups
- **Featured projects** with GitHub integration and category badges
- **AI pipeline visualization** — Documents → Enterprise AI Applications flow diagram
- **Professional timeline** for experience and education
- **Fully responsive** — optimized for desktop, tablet, and mobile
- **Smooth animations** via Framer Motion with `prefers-reduced-motion` support
- **SEO optimized** with Open Graph, meta tags, semantic HTML
- **Fast performance** — no unnecessary dependencies, lazy animations

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling & design system |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── AnimatedBackground.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   ├── SectionWrapper.tsx
│   └── StatusBadge.tsx
├── data/             # Centralized content data
│   ├── education.ts
│   ├── experience.ts
│   ├── personal.ts
│   ├── projects.ts
│   ├── services.ts
│   └── skills.ts
├── sections/         # Page sections
│   ├── About.tsx
│   ├── AIFlow.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── GitHub.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   └── Skills.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Pradnesh20A/pradnesh-portfolio.git
cd pradnesh-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## ⚙️ Configuration

Copy `.env.example` to `.env` and update with your details:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAIL` | Contact email address |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL |
| `VITE_GITHUB_URL` | GitHub profile URL |
| `VITE_GITHUB_USERNAME` | GitHub username |

## 🚀 Deployment (GitHub Pages)

The project is configured for GitHub Pages deployment.

1. Push code to the `main` branch
2. Build: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

Or use GitHub Actions for automated deployment.

## 📸 Screenshots

> Screenshots will be added after deployment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
