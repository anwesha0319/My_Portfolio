# Anwesha Chatterjee - Portfolio

A modern, animated portfolio website showcasing my work in AI, machine learning, and full-stack development.

## 🚀 Built With

- **Framework**: [Next.js 16](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Web Animations API
- **3D Effects**: [Three.js](https://threejs.org/) (Fuzzy Critter Footer)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font) & [Noto Serif Devanagari/Bengali](https://fonts.google.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## ✨ Features

- 🎨 Animated Journey timeline with drawing path effect
- 📂 3D folder cards with paper reveal on hover
- 🐾 Interactive fuzzy creatures footer with physics
- 📧 Contact form with Formspree integration
- 🎭 Smooth scroll animations and transitions
- 📱 Fully responsive design
- ♿ Accessible (ARIA labels, keyboard navigation, reduced motion support)

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anwesha0319/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── fonts/             # Custom fonts
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── theme.css          # CSS variables and animations
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Contact.tsx       # Contact section with form
│   ├── Footer.tsx        # Footer with fuzzy critters
│   ├── HeroAboutSection.tsx
│   ├── Journey.tsx       # Animated timeline
│   ├── Projects.tsx      # Project showcase with folders
│   └── Skills.tsx        # Skills grid
├── data/
│   └── content.ts        # Site content and metadata
├── public/               # Static assets (images)
└── package.json
```

## 🎨 Customization

### Content

Edit `data/content.ts` to update:
- Personal information
- Projects
- Skills
- Journey/Experience
- Social links

### Styling

- **Colors**: Modify CSS variables in `app/theme.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Animations**: Adjust Framer Motion variants in component files

### Contact Form

The contact form uses [Formspree](https://formspree.io/). Update the form endpoint in `components/Contact.tsx`:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  // ...
});
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: anwesha0319@gmail.com
- **LinkedIn**: [Anwesha Chatterjee](https://www.linkedin.com/in/anwesha-chatterjee-567547251)
- **GitHub**: [@anwesha0319](https://github.com/anwesha0319)

---

Built with 💜 by Anwesha Chatterjee
