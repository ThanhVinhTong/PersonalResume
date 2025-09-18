# Vincent Portfolio Website

A modern, responsive personal resume website built with React, TypeScript, and Vite. This project showcases my professional profile, experiences, and projects with a clean, interactive interface.

## ✨ Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive UI**: Smooth animations and transitions using Tailwind CSS
- **Dynamic Content**: 
  - GitHub API integration for live project data
  - Real-time project updates from your repositories
  - Featured projects with detailed descriptions
- **Professional Sections**:
  - Resume Header with contact information
  - Professional Experience timeline
  - Featured Projects showcase
  - Skills & Qualifications
  - Contact Form with EmailJS integration

## 🚀 Technologies Used

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (Font Awesome)

### UI Components
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Pre-built component library
- **Lucide React** - Beautiful icons

### External Services
- **GitHub API** - Live repository data
- **EmailJS** - Contact form functionality

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── contact-section.tsx # Contact form
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Navigation header
│   ├── personal-projects.tsx # Projects showcase
│   ├── professional-experience.tsx # Work experience
│   ├── resume-header.tsx  # Main header
│   └── skills-qualifications.tsx # Skills section
├── styles/
│   └── globals.css        # Global styles
├── App.tsx               # Main app component
├── main.tsx             # Entry point
└── index.css            # Base styles
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ThanhVinhTong/vincent-portfolio.git
cd vincent-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 🎯 Key Features

### 📱 Single Page Application (SPA) with Tabbed Navigation
- **5 Interactive Tabs**: Clean, intuitive navigation between different sections
  - **Overview**: Professional summary with key statistics and welcome message
  - **Experience**: Detailed work history and professional timeline
  - **Projects**: Featured projects showcase + dynamic GitHub repository loading
  - **Skills**: Technical skills, qualifications, and achievements
  - **Contact**: Interactive contact form with EmailJS integration
- **Smooth Animations**: Motion-powered transitions between tabs with fade-in effects
- **Icon-Enhanced Navigation**: Each tab features relevant icons for better UX

### 🔄 Dynamic Project Loading
- **GitHub API Integration**: Automatically fetches your live repository data
- **Smart Filtering**: Excludes featured projects from the dynamic list
- **Rich Project Cards**: Shows star counts, descriptions, tech stacks, and live demo links
- **Real-time Updates**: Automatically reflects new projects when you push to GitHub
- **Loading States**: Professional loading indicators and error handling

### 📱 Responsive Design & Performance
- **Mobile-First Approach**: Optimized for all screen sizes and devices
- **Touch-Friendly**: Intuitive touch interactions on mobile and tablet
- **Fast Loading**: Vite-powered build system for optimal performance
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Accessibility**: Built with Radix UI for screen reader compatibility

## 🔧 Configuration

### GitHub API Integration
The project automatically fetches your repositories from:
```
https://api.github.com/users/ThanhVinhTong/repos
```

### EmailJS Setup
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `contact-section.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Thanh Vinh Tong**
- GitHub: [@ThanhVinhTong](https://github.com/ThanhVinhTong)
- LinkedIn: https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/
- Email: vincent.tong369@gmail.com

---

⭐ If you found this project helpful, please give it a star!