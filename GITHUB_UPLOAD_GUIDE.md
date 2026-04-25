# 🚀 GitHub Upload Guide - Sujeet Kumar Portfolio

## 📋 Step-by-Step Instructions to Upload to GitHub

### 🔧 Prerequisites
- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your system
- Your portfolio project is ready (already committed locally)

---

## 🌐 Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click the "+" icon** in the top right corner
4. **Select "New repository"**
5. **Fill in repository details**:
   - **Repository name**: `portfolio` or `sujeet-kumar-portfolio`
   - **Description**: `Salesforce Developer Portfolio - Modern React Application`
   - **Visibility**: Choose **Public** (recommended for portfolio)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** check "Add .gitignore" (we already have one)
6. **Click "Create repository"**

---

## 🔗 Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you a page with commands. **Use the "…or push an existing repository from the command line" section:**

```bash
# Run these commands in your terminal (in the portfolio folder):
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## 📤 Step 3: Push Your Code to GitHub

### Option A: Using the commands above (recommended)
```bash
cd d:\portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Option B: Manual approach
```bash
cd d:\portfolio
git remote -v  # Check if remote is added
git push origin main
```

---

## 🌐 Step 4: Deploy to GitHub Pages (Optional but Recommended)

### Method 1: Using GitHub Pages (Free)

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section**
4. **Under "Build and deployment", select "Deploy from a branch"**
5. **Source**: Deploy from a branch
6. **Branch**: `main`
7. **Folder**: `/root` (or `/dist` if you build first)
8. **Click "Save"**

### Method 2: Build and Deploy (Better for React Apps)

1. **Install gh-pages**:
```bash
cd d:\portfolio
npm install --save-dev gh-pages
```

2. **Update vite.config.js**:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line
  build: {
    outDir: 'dist'
  }
})
```

3. **Add deploy scripts to package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**:
```bash
npm run deploy
```

---

## 🎯 Step 5: Verify Your Portfolio

### Check Local Version
```bash
cd d:\portfolio
npm run dev
```
Visit: `http://localhost:5173`

### Check GitHub Version
- Wait a few minutes for GitHub Pages to deploy
- Visit: `https://YOUR_USERNAME.github.io/portfolio`

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Issue 1: "Authentication failed"
**Solution**: Set up GitHub Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with "repo" permissions
3. Use token as password when pushing

#### Issue 2: "404 Not Found" on GitHub Pages
**Solution**: 
1. Check repository name spelling
2. Make sure GitHub Pages is enabled in Settings
3. Wait 5-10 minutes for deployment

#### Issue 3: "Permission denied"
**Solution**:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Issue 4: White screen on GitHub Pages
**Solution**: Update `vite.config.js` with correct `base` path:
```javascript
base: '/repository-name/',
```

---

## 📱 Alternative Deployment Options

### Netlify (Easiest)
1. Go to https://netlify.com
2. Drag and drop your `dist` folder
3. Or connect your GitHub repository

### Vercel (Also Easy)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel auto-detects React and deploys

---

## ✅ Final Checklist

Before you finish, make sure:

- [ ] Repository is created on GitHub
- [ ] Code is pushed successfully
- [ ] GitHub Pages is enabled (if using)
- [ ] Portfolio loads correctly online
- [ ] All links work (Trailhead, LinkedIn, etc.)
- [ ] CV download works
- [ ] Automation tools download works
- [ ] Mobile version looks good

---

## 🎉 Congratulations!

Once completed, you'll have:
- ✅ Professional portfolio online
- ✅ Live URL to share with employers
- ✅ Version control with Git
- ✅ Backup of your code
- ✅ Platform for future updates

### Your Portfolio URLs:
- **GitHub Repository**: https://github.com/YOUR_USERNAME/portfolio
- **GitHub Pages**: https://YOUR_USERNAME.github.io/portfolio
- **Direct link to share**: https://YOUR_USERNAME.github.io/portfolio

---

## 📞 Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Search Google for the specific error message
3. Ask for help on Stack Overflow
4. Contact me for portfolio-specific issues

**Happy coding! 🚀**
