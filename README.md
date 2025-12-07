# Marilag - Boracay Travel Experience

A beautiful, modern travel website showcasing the paradise island of Boracay, Philippines. Built with React, TypeScript, and Tailwind CSS.

## Features

- Stunning hero section with parallax-style imagery
- Smooth scroll animations and reveal effects
- Responsive design for all devices
- Beach-inspired color scheme (turquoise & sandy tones)
- Interactive navigation with scroll-based header styling
- Beautiful typography with Playfair Display and Inter fonts

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** CSS transitions with Intersection Observer
- **Routing:** React Router DOM

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── Header.tsx       # Navigation header with scroll effect
│   ├── HeroSection.tsx  # Main hero banner
│   ├── ExperiencesSection.tsx  # Adventure, Culture, Relaxation cards
│   ├── AboutSection.tsx # "A Place to Be" section
│   ├── StorySection.tsx # "In Love With Boracay" section
│   ├── Footer.tsx       # Site footer
│   └── ExperienceCard.tsx  # Reusable card component
├── hooks/
│   └── useReveal.ts     # Scroll reveal animation hook
├── pages/
│   ├── Index.tsx        # Home page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions
└── index.css            # Global styles and CSS variables
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd bora

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Customization

### Colors

The beach color scheme is defined in `src/index.css` using CSS custom properties:

- **Primary (Turquoise):** `--sage` variables (hue 195)
- **Cream/Sand:** `--cream` variables (hue 40)
- **Earth tones:** `--earth` variables (hue 25)

### Images

Hero and section images are stored in `public/hero/`:
- `1.jpg` - Hero background
- `2.jpg` - "In Love With Boracay" section
- `3.jpg` - "A Place to Be" section
- `4-6.jpg` - Experience cards

## License

MIT License
