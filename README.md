# IMDB Clone - Movies App

## Overview
IMDB Clone is a React-based movie application that replicates core features of IMDB, allowing users to browse trending movies, manage a personal watchlist, and explore movie details. The application fetches real-time data from The Movie Database (TMDB) API.

## 🚀 Technologies Used

### Frontend
- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.6.0** - Declarative routing for React applications
- **Vite 6.3.5** - Next-generation frontend tooling
- **Axios 1.9.0** - Promise-based HTTP client for API requests

### Styling
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.7** - Vite plugin for Tailwind CSS

### Development Tools
- **ESLint 9.25.0** - JavaScript linting utility
- **TypeScript Definitions** - For React and React DOM type safety

## 📦 Project Structure

```
IMDB-clone/
├── MOVIES-APP/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner/          # Hero banner component
│   │   │   ├── MovieCard/       # Individual movie card
│   │   │   ├── Movies/          # Movies listing component
│   │   │   ├── Navbar/          # Navigation component
│   │   │   ├── Pagination/      # Pagination controls
│   │   │   └── WatchList/       # Watchlist management
│   │   ├── utility/
│   │   │   └── Genre.js         # Genre utilities
│   │   ├── assets/              # Static assets
│   │   ├── App.jsx              # Main application component
│   │   ├── App.css              # Application styles
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # Application entry point
│   ├── public/                  # Public assets
│   ├── package.json             # Dependencies and scripts
│   ├── vite.config.js          # Vite configuration
│   ├── eslint.config.js        # ESLint configuration
│   └── index.html              # HTML template
├── package.json                # Root dependencies
└── README.md                   # Project documentation
```

## 🛠️ Project Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/venkateswarareddychalla/IMDB-Clone.git
   cd IMDB-clone
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Navigate to the movies app**
   ```bash
   cd MOVIES-APP
   ```

4. **Install app dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` (Vite's default port)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## ✨ Features

### Core Functionality
- **Trending Movies** - Browse popular movies from TMDB API
- **Watchlist Management** - Add/remove movies to personal watchlist
- **Local Storage** - Persistent watchlist storage
- **Pagination** - Navigate through multiple pages of results
- **Responsive Design** - Mobile-friendly interface

### Components
- **Banner** - Hero section with featured content
- **MovieCard** - Individual movie display with poster and details
- **Movies** - Main movies listing with API integration
- **Navbar** - Navigation with routing
- **Pagination** - Page navigation controls
- **WatchList** - Personal movie collection management

## 🔧 API Integration

The application uses The Movie Database (TMDB) API:
- **Base URL**: `https://api.themoviedb.org/3/`
- **Endpoint**: `/movie/popular`
- **Authentication**: API key-based authentication
- **Features**: Real-time movie data, pagination support

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Responsive design** using Tailwind's breakpoints
- **Custom components** with consistent design system
- **Modern UI** with clean, intuitive interface

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- The Movie Database (TMDB) for providing the movie data API
- React and Vite teams for excellent development tools
- Tailwind CSS for the utility-first CSS framework
