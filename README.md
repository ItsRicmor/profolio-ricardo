# Ricardo Morataya — Portfolio

Personal portfolio showcasing my journey as an aspiring Software Architect. Built with modern web technologies and following clean architecture principles.

🌐 **Live Site**: [ricmor.dev](https://ricmor.dev)

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Testing**: [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

## ✨ Features

- ⚡ **SSG (Static Site Generation)** - Pre-rendered pages for optimal SEO
- 🎨 **Dark/Light Mode** - System preference detection with manual toggle
- 📱 **Fully Responsive** - Mobile-first design approach
- 🖼️ **Optimized Images** - Next.js Image component with automatic optimization
- ♿ **Accessible** - WCAG compliant components
- 🔍 **SEO Ready** - Comprehensive metadata, Open Graph, and JSON-LD
- 🧪 **Unit Tests** - Component and hook testing with Vitest
- 🎭 **Smooth Animations** - Intersection Observer-based scroll animations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/
│   ├── atoms/             # Basic UI components
│   ├── molecules/         # Composite components
│   ├── organisms/         # Complex sections
│   └── ui/                # shadcn/ui components
├── contexts/              # React contexts (Theme)
├── data/                  # Static data (projects, experience, blog)
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
└── types/                 # TypeScript definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ItsRicmor/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run test       # Run tests
npm run test:watch # Run tests in watch mode
```

## 🏗️ Architecture

This project follows **Clean Architecture** principles:

- **Separation of Concerns**: Components are organized by atomic design
- **Dependency Rule**: Inner layers don't depend on outer layers
- **Client/Server Boundary**: Clear distinction with `"use client"` directives
- **Type Safety**: Full TypeScript coverage with strict mode

## 🎨 Design Philosophy

- **Minimalist Aesthetic**: Clean, professional design with architectural motifs
- **Blueprint Theme**: Technical diagrams and grid overlays
- **Monospace Accents**: Code-style typography for labels
- **Smooth Interactions**: Subtle animations and transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📫 Contact

- **LinkedIn**: [ricardo-morataya-sandoval](https://www.linkedin.com/in/ricardo-morataya-sandoval)
- **GitHub**: [@ItsRicmor](https://github.com/ItsRicmor)
- **Email**: ricardojms1999@gmail.com

---

Built with ❤️ by Ricardo Morataya
