# Aldo Santos Group - Corporate Website

Professional corporate website for IT consulting specialized in AI and automation. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack:** Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Fully Responsive:** Mobile-first design, optimized for all devices
- **SEO Optimized:** Meta tags, Open Graph, structured data
- **Blog with MDX:** Dynamic blog with MDX support for rich content
- **High Performance:** Static generation, optimized images, lazy loading
- **Corporate Design:** Clean, professional WordPress premium theme style
- **Service Pages:** Complete sales pages with problem-solution-results structure
- **Contact Forms:** Integrated contact forms with validation

## 📋 Pages

- **Home** (`/`) - Hero, about, services, solutions, results, clients, blog preview
- **Transformation of Processes** (`/transformacao-processos`) - Complete sales page
- **AI Solutions Architecture** (`/arquitetura-solucoes-ia`) - Complete sales page
- **PMO as a Service** (`/pmo-as-service`) - Complete sales page
- **Solutions** (`/solucoes`) - Detailed showcase of proprietary products
- **Blog** (`/blog`) - Blog listing and individual post pages
- **About** (`/sobre`) - Company history, expertise, experience
- **Contact** (`/contato`) - Contact form and information

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Blog:** MDX with gray-matter and next-mdx-remote
- **Icons:** Heroicons (inline SVG)
- **Deployment:** Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd aldosantos
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Home page
│   ├── transformacao-processos/ # Service page
│   ├── arquitetura-solucoes-ia/ # Service page
│   ├── pmo-as-service/          # Service page
│   ├── solucoes/                # Solutions showcase
│   ├── blog/                    # Blog pages
│   ├── sobre/                   # About page
│   └── contato/                 # Contact page
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── CTASection.tsx           # Call-to-action section
│   ├── ServiceCard.tsx          # Service card component
│   ├── ProblemCard.tsx          # Problem card component
│   └── SolutionCard.tsx         # Solution card component
├── content/                      # Content files
│   └── blog/                    # Blog posts in MDX
│       ├── por-que-consultoria-ti-precisa-ia.mdx
│       ├── reduzir-custos-operacionais-automacao.mdx
│       └── rag-vs-finetuning-base-conhecimento.mdx
├── lib/                         # Utility functions
│   └── blog.ts                  # Blog post utilities
├── public/                      # Static assets
│   └── images/                  # Images
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Design System

### Colors

```css
Primary: #3498db   (Corporate Blue)
Secondary: #27ae60 (Green for CTAs)
Accent: #e74c3c    (Red for alerts/problems)
Dark: #2c3e50      (Text color)
Light: #ecf0f1     (Light backgrounds)
BG Light: #f8f9fa  (Section backgrounds)
```

### Typography

- **Headings:** Inter, sans-serif (bold, 600-800 weight)
- **Body:** System fonts (-apple-system, Segoe UI, sans-serif)

### Components

Custom components available:
- `.btn` - Base button style
- `.btn-primary` - Green CTA button
- `.btn-secondary` - Blue button
- `.btn-outline` - Outlined button
- `.card` - Card with shadow
- `.container-custom` - Max-width container with padding
- `.section-padding` - Standard section padding

## 📝 Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "15 Fev 2026"
excerpt: "Brief description of your post"
author: "Aldo Santos"
---

Your content here in Markdown/MDX format...

## Heading 2

Your text with **bold** and *italic*.

[Link text](https://example.com)
```

The post will automatically appear on the blog page.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js - click "Deploy"

3. **Configure Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables

No environment variables required for basic functionality. If you add form submission or analytics, configure them in Vercel dashboard.

## 📱 Contact Integration

WhatsApp links are integrated throughout the site:
- Primary CTA: `https://wa.me/351932786582`
- Links include pre-filled messages for context

To change contact information, update:
- `components/Header.tsx`
- `components/Footer.tsx`
- Each service page's WhatsApp links

## 🔧 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3498db',    // Your primary color
  secondary: '#27ae60',  // Your secondary color
  // ...
}
```

### Change Content

- **Home page:** `app/page.tsx`
- **Service pages:** `app/[service-name]/page.tsx`
- **About page:** `app/sobre/page.tsx`
- **Contact page:** `app/contato/page.tsx`

### Add New Pages

1. Create folder in `app/`: `app/new-page/`
2. Create `page.tsx` inside
3. Add navigation link to `components/Header.tsx`

## 📊 Performance

- **Core Web Vitals:** Optimized for excellent scores
- **Images:** Use Next.js Image component for automatic optimization
- **Fonts:** Self-hosted Google Fonts (Inter) for performance
- **Bundle Size:** Code splitting and tree shaking enabled

## 🔍 SEO

Each page includes:
- Unique `<title>` and `<meta name="description">`
- Open Graph tags for social sharing
- Semantic HTML structure
- Sitemap (auto-generated by Next.js)

## 📧 Contact Form

Contact form is client-side validated. To enable actual form submission:

1. **Option A - Formspree:**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your endpoint
   - Update form action in `app/contato/page.tsx`

2. **Option B - API Route:**
   - Create `app/api/contact/route.ts`
   - Implement email sending logic
   - Update form submission in `app/contato/page.tsx`

## 🛡️ Legal Pages

Create legal pages as needed:
- `app/politica-privacidade/page.tsx` - Privacy Policy
- `app/termos/page.tsx` - Terms of Use

## 📞 Support & Contact

**Aldo Santos**
- Email: lindualdo@hotmail.com
- WhatsApp: +351 932 786 582
- LinkedIn: [linkedin.com/in/lindualdo](https://linkedin.com/in/lindualdo)
- Location: Lisboa, Portugal

## 📄 License

© 2026 Aldo Santos Group. All rights reserved.

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**

For deployment help or customization, contact: lindualdo@hotmail.com
