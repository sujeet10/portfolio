# 🚀 Sujeet Kumar - Salesforce Developer Portfolio

A modern, responsive portfolio website showcasing Salesforce expertise, web development skills, and automation tools built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎯 **Salesforce Expertise**: Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, Agentforce
- 🌐 **Web Development**: React, JavaScript, Node.js, HTML/CSS
- 🤖 **Automation Tools**: HTA-based Salesforce automation suite
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern Animations**: Dynamic effects and smooth transitions
- 📄 **CV Download**: Professional resume download functionality
- 🔗 **Trailhead Integration**: Direct link to Salesforce Trailhead profile

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, JavaScript ES6+
- **Styling**: Tailwind CSS, CSS animations
- **Icons**: React Icons, Custom SVGs
- **Build Tools**: Vite, PostCSS
- **Deployment**: Ready for GitHub Pages, Netlify, Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── automation.hta     # HTA automation suite
│   └── Sujeet_Kumar_CV.txt # Professional CV
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx       # Hero section with animations
│   │   ├── About.jsx      # About section
│   │   ├── Skills.jsx     # Skills showcase
│   │   ├── Projects.jsx   # Projects portfolio
│   │   ├── WebDev.jsx     # Web development section
│   │   ├── Automation.jsx # Automation tools section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Navbar.jsx     # Navigation bar
│   │   └── Footer.jsx     # Footer component
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles and animations
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.js         # Vite configuration
```

## 🎨 Customization

### Updating Personal Information

Edit the following files to customize your portfolio:

- **Hero.jsx**: Update name, title, contact info
- **About.jsx**: Update experience, education, certifications
- **Projects.jsx**: Add/update your projects
- **Contact.jsx**: Update contact details
- **Navbar.jsx**: Update navigation links

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      // Add your custom colors
    }
  }
}
```

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import your project to Vercel
3. Vercel will automatically detect and deploy

## 📧 Contact

- **Email**: sujeetkumar06043@example.com
- **LinkedIn**: [linkedin.com/in/sujeetkumar06043](https://linkedin.com/in/sujeetkumar06043)
- **Trailhead**: [trailblazer/sk10m](https://www.salesforce.com/trailblazer/sk10m)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⭐ Show Your Support

If you find this portfolio template helpful, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ by Sujeet Kumar**
