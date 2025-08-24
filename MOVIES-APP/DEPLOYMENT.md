# Vercel Deployment Guide

## Prerequisites
- Node.js installed
- Vercel CLI installed (`npm install -g vercel` or use `npx vercel`)

## Deployment Steps

### Option 1: Using Vercel CLI
1. Navigate to the project directory:
   ```bash
   cd MOVIES-APP
   ```

2. Deploy to Vercel:
   ```bash
   npx vercel
   ```

3. Follow the prompts:
   - Set up and deploy: `Y`
   - Link to existing project: `N` (create new)
   - Project name: (press enter for default)
   - Directory: `.` (current directory)
   - Override settings: `N`

### Option 2: Using Vercel Dashboard
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the Vite configuration
5. Deploy with default settings

### Environment Variables (if needed)
If your app requires API keys or environment variables:
1. Add them in Vercel dashboard under Project Settings > Environment Variables
2. Or use `.env.local` file for local development

## Build Configuration
- The project uses Vite for building
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

## Custom Domain (Optional)
After deployment, you can add a custom domain in the Vercel dashboard under Project Settings > Domains.
