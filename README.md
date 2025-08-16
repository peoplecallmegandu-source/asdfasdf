# Aurora Roasters — Demo Coffee Website

A modern, multi-page coffee website demo built with Tailwind CSS utility classes, glassmorphism styling, parallax hero, micro-animations, and interactive components. This project is organized for quick local development and deployment to services like Render.

Project structure

my-project/
├── public/
│   ├── index.html       # Main landing page (hero, roasts, features, quiz, testimonials)
│   ├── about.html       # About / story page
│   └── contact.html     # Contact & forms
├── server/
│   └── index.js         # Minimal Express server (serves static files + API endpoints)
├── package.json         # Dependencies & scripts
├── render.yaml          # Render deployment config
└── README.md            # This file

Highlights & features

- Modern design with glassmorphism, gradients, and layered shadows.
- Full-width layout using w-full / max-w-none to ensure content stretches across the viewport.
- Google Fonts included: Poppins and Merriweather (see comments at top of each HTML file).
- Tailwind CSS utility classes are used throughout via CDN for rapid prototyping.
- Dark mode support with a theme toggle (uses the class-based dark mode from Tailwind).
- Parallax hero image, reveal-on-scroll animations, and subtle micro-interactions.
- Interactive components:
  - Modal (video/story placeholder)
  - Roast intensity slider with progress bar
  - FAQ accordion
  - Mini quiz that recommends a roast
  - Contact form and newsletter subscription with front-end validation and AJAX submission
- Accessibility: focus outlines, aria attributes for key controls, semantic HTML where relevant.
- Server exposes simple API endpoints:
  - POST /api/subscribe — accepts { email }
  - POST /api/contact — accepts { name, email, message }
  These endpoints are intentionally minimal; integrate with your emailing or CRM platform as needed.

Images

- The HTML uses placeholder image tokens of the format:
  https://images.pexels.com/photos/10074343/pexels-photo-10074343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
  The system or deployment environment should replace or fetch images from sources (Unsplash, Pexels). If you have specific images, replace the placeholder src attributes with actual URLs or base64 data URIs.

Local development

1. Requirements
   - Node.js 16+ and npm

2. Install dependencies

   npm install

3. Start the dev server

   npm run dev

   This uses nodemon to watch server files. Visit http://localhost:3000

4. Production start

   npm start

Deploying to Render

- A sample render.yaml is included. Render will run `npm start` for the service. Ensure you set appropriate environment variables and connect a Git repo containing this project.

Customization

- Replace placeholder images (https://images.unsplash.com/photo-1663010363660-d75c1c69958b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw4fHwuLi58ZW58MHwwfHx8MTc1NTM1MzcxNnww&ixlib=rb-4.1.0&q=80&w=1080) with your own assets or CDN links.
- Replace text copy to match your brand voice — the copy included is persuasive, storytelling-driven, and aims to connect emotionally.
- Integrate real subscription/contact backends: Mailchimp, SendGrid, Stripe, or your own CRM.

Accessibility & Performance

- The layout includes keyboard focus styles and aria attributes for interactive components.
- Images are lazy-loaded where applicable and the site uses progressive reveal animations to reduce initial load perception.
- For production, swap the Tailwind CDN for a compiled CSS build (recommended) to reduce unused CSS size and improve TTI.

Notes

- All pages are full-width as required (using container wrappers with w-full and max-w-none). Avoid adding Tailwind max-w-* classes in the root containers if you want full-bleed design.
- The server is intentionally simple for demo purposes. Add authentication, rate-limiting, and proper email sending in production.

Need help

If you'd like custom branding, real images, or integration with your shop (Shopify/Shopware/Shopify Hydrogen/Stripe), tell me more about your needs and I can adapt this project further.

Enjoy your brew!
