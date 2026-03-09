# 🚀 Personal Portfolio — Digital Tech Solutions

A sleek, dark-themed personal portfolio website with neon blue aesthetics, 3D particle animations, and professional sections for showcasing your services and projects.

## ✨ Features

- **3D Particle Canvas** — Interactive particle field with perspective grid in the hero section
- **Custom Cursor** — Neon glowing cursor with smooth trailing ring
- **Typewriter Effect** — Animated role cycling (Web Developer, Digital Marketer, etc.)
- **Scroll Animations** — Elements fade/slide in as you scroll
- **Expandable Project Cards** — Accordion-style project case studies
- **Contact Form** — Ready to connect to any email service
- **Fully Responsive** — Works on all screen sizes
- **Vercel-Ready** — Static export configured for instant deployment

## 🎨 Design System

| Variable | Value | Use |
|----------|-------|-----|
| `--neon` | `#00D4FF` | Accent color, glows, highlights |
| `--bg-900` | `#020408` | Main background |
| `--bg-800` | `#060D14` | Section alternating background |
| `--bg-700` | `#0A1628` | Card backgrounds |
| `--text-primary` | `#E8F4FF` | Body text |
| `--text-secondary` | `#7DA8C8` | Muted text |
| Font Display | `Orbitron` | Headings, logo, numbers |
| Font Body | `Syne` | Body copy, descriptions |
| Font Mono | `JetBrains Mono` | Tags, labels, code |

## 🛠 Tech Stack

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Vanilla Canvas API** for 3D animations
- **CSS Animations** for transitions

## 📦 Installation

```bash
# Clone or download the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Personalizing Your Portfolio

### 1. Your Name & Logo
- Open `components/Navbar.tsx` → Change `<YN />` to your initials
- Open `components/Hero.tsx` → Replace `YOUR NAME` with your actual name
- Open `app/layout.tsx` → Update metadata title/description

### 2. Your Photo
- Open `components/About.tsx` → Find the `{/* ✏️ EDIT */}` comment
- Replace the placeholder with: `<img src="/your-photo.jpg" alt="Your Name" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />`
- Drop your photo into the `/public` folder

### 3. Bio & Skills
- Open `components/About.tsx` → Edit the `<p>` bio paragraphs
- Adjust the `skills` array with your actual technology stack

### 4. Services
- Open `components/Services.tsx` → Edit the `services` array
- Update titles, descriptions, benefits, and tech tags

### 5. Projects
- Open `components/Projects.tsx` → Edit the `projects` array
- Add real results, descriptions, and link `href` in the "View Case Study" button

### 6. Contact Information
- Open `components/Contact.tsx` → Update `contactInfo` array with your email, LinkedIn, GitHub

### 7. Roles (Typewriter)
- Open `components/Hero.tsx` → Edit the `roles` array at the top

### 8. Connect Contact Form
Replace the placeholder in `Contact.tsx` `handleSubmit` with a real service:

```typescript
// Option A: Formspree (free)
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState),
})

// Option B: EmailJS
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formState, 'PUBLIC_KEY')
```

## 🚀 Deployment on Vercel

### Option 1: One-Click Deploy (GitHub → Vercel)

1. Push this code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub

3. Click **"Add New Project"** → Import your repository

4. Vercel auto-detects Next.js → Click **"Deploy"**

5. Your site is live! 🎉

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page assembly
├── components/
│   ├── Cursor.tsx          # Custom animated cursor
│   ├── Navbar.tsx          # Sticky navigation with scroll detection
│   ├── Hero.tsx            # 3D particle canvas + typewriter hero
│   ├── About.tsx           # Bio, skills, strengths
│   ├── Services.tsx        # 6 service cards with hover effects
│   ├── Projects.tsx        # Expandable project case studies
│   ├── Contact.tsx         # Contact form + info
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets (add your photo here)
├── next.config.js          # Next.js config (static export)
├── tailwind.config.js      # Tailwind customization
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎨 Customizing Colors

All colors are CSS variables in `app/globals.css`. To change the theme:

```css
:root {
  --neon: #00D4FF;        /* Change this for a different accent */
  --bg-900: #020408;      /* Main background */
}
```

Want purple instead? Change `--neon` to `#A855F7`. Want green? Use `#00FF88`.

## 📝 License

Feel free to use this template for your personal portfolio.
