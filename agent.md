# PCCoE LFDT Club - Project Overview & Developer Guide

Welcome! This document provides a complete guide to the **PCCoE LFDT Club** website. Read this to understand the project structure, stack, files, routes, and development workflow.

---

## 🚀 1. Tech Stack & Architecture

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & 3D**:
  - [Framer Motion](https://www.framer.com/motion/) / `motion`
  - [Three.js](https://threejs.org/) / `@react-three/fiber` / `@react-three/drei` / `ogl` (for interactive 3D WebGL backgrounds and Orbs)
- **Database & Authentication**: Firebase & Firebase Admin SDK (`react-firebase-hooks` for reactive state)
- **Third-Party Integrations**:
  - EmailJS (`@emailjs/browser`) for contact form processing
  - Vercel Analytics & Speed Insights for performance tracking
  - Lenis (`lenis`) for smooth scrolling

---

## 📁 2. Directory Structure

```text
lfdt/
├── public/                 # Static assets served at root (logos, team photos, animations)
│   ├── favicon/            # Multi-size favicons and web manifests
│   ├── fonts/              # Custom fonts
│   ├── assets/             # Structured assets folder containing images and videos
│   │   ├── images/
│   │   └── videos/
│   └── loading.mp4         # Preloader video
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   │   ├── about/          # About LFDT and PCCoE chapter page
│   │   ├── achievements/   # Pull requests, workshops, and recognition
│   │   ├── admin/          # Admin dashboards & panels
│   │   ├── api/            # Serverless API routes
│   │   ├── auth/           # Login, registration, and forgot-password flows
│   │   ├── contact/        # Contact form with EmailJS integration
│   │   ├── events/         # Events listing & Build-A-Thon details
│   │   ├── profile/        # User profile page
│   │   ├── team/           # HOD, Faculty Sponsors, and Student Leads
│   │   ├── globals.css     # Tailwind v4 globals & custom animations
│   │   ├── layout.tsx      # Main layout wrapper
│   │   └── page.tsx        # Homepage (Hero, About, CTA, Logos)
│   ├── components/         # Reusable UI elements
│   │   ├── auth/           # Auth form components
│   │   ├── background/     # Particle systems, canvas layers
│   │   ├── sections/       # Major landing page sections
│   │   ├── ui/             # Core UI atoms (dialogs, aurora backgrounds, spotlight cards)
│   │   ├── Orb.tsx         # Interactive 3D WebGL orb canvas
│   │   ├── PixelBlast.tsx  # Particle explosion effects
│   │   └── DecryptedText.tsx # Matrix-style text decrypt animations
│   ├── contexts/           # React contexts (e.g., AuthContext)
│   ├── data/               # Static datasets (member lists, timeline events, cube coordinates)
│   ├── hooks/              # Custom hooks (e.g., useLoadingScreen, useAuth)
│   ├── lib/                # Config files for Firebase, API helpers
│   └── middleware.ts       # Page/Route protection middleware
├── firebase.json           # Firebase configuration
├── firestore.rules         # Security rules for Cloud Firestore
└── tsconfig.json           # TypeScript configuration
```

---

## 🌐 3. Main Routes & Features

1. **Homepage (`/`)**:
   - Features the interactive 3D WebGL Orb (`Orb.tsx`), a version/announcement badge for "Build-A-Thon 2025", and call-to-actions.
   - Embeds `AboutSection`, `EventsSection`, and `CTASection`.
2. **About Page (`/about`)**:
   - Details the Linux Foundation Decentralized Trust (LFDT) mission and how the PCCoE Student Chapter coordinates projects.
3. **Achievements Page (`/achievements`)**:
   - Showcases student contributions to open-source projects like Hyperledger Fabric and Besu, workshops conducted, and community milestones.
4. **Events Page (`/events`)**:
   - Details upcoming/past hackathons, workshops, and weekly meetups.
5. **Team Page (`/team`)**:
   - Showcases HODs, coordinators, and student contributors with links to GitHub/LinkedIn profiles.
6. **Contact Page (`/contact`)**:
   - Interactive EmailJS form for inquiries.
7. **Auth / Admin Portal (`/auth`, `/admin`)**:
   - Login and registration paths backed by Firebase Auth and Firestore role-based access.

---

## 🛠️ 4. Key Components & Visuals

- **[Orb.tsx](file:///d:/GIT-REPOS/LFDT/src/components/Orb.tsx)**: Creates a stunning 3D WebGL noise-deformed sphere using Three.js and custom shaders.
- **[DecryptedText.tsx](file:///d:/GIT-REPOS/LFDT/src/components/DecryptedText.tsx)**: Matrix decrypt/reveal animation for headers.
- **[PixelBlast.tsx](file:///d:/GIT-REPOS/LFDT/src/components/PixelBlast.tsx)**: High-performance canvas-based particle explosion effect.
- **[BackgroundParticles.tsx](file:///d:/GIT-REPOS/LFDT/src/components/BackgroundParticles.tsx)**: Floating stars/nodes supporting interactive connections on mouse hover.

---

## 🔧 5. Development Workflow

### Commands
- **Install Dependencies**: `npm install`
- **Run Locally (Dev mode with Turbopack)**: `npm run dev`
- **Build Production**: `npm run build`
- **Start Production Server**: `npm run start`
- **Lint Code**: `npm run lint`

### Firebase Management
- The security rules for Firestore are located in [firestore.rules](file:///d:/GIT-REPOS/LFDT/firestore.rules).
- Configuration credentials are read via environment variables mapping to Firebase configurations in [config.ts](file:///d:/GIT-REPOS/LFDT/src/lib/firebase/config.ts).
