# DeepWork Timer ⚡

A beautiful, modern deep work timer web application with session tracking and elegant animations. Built with React, TypeScript, and Anime.js.

## ✨ Features

- **Beautiful Timer Interface**: Circular progress indicator with smooth anime.js animations
- **Pomodoro-style Timer**: Work sessions, short breaks, and long breaks
- **Session Logging**: Automatically tracks completed deep work sessions
- **Session History**: View your deep work progress with multiple filter options
- **Local Storage**: All data persists across browser sessions
- **Responsive Design**: Works perfectly on desktop and mobile
- **Modern Tech Stack**: Built with React 18, TypeScript, and Tailwind CSS

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

The app is ready for instant deployment to Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Deep Work Timer app"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the settings from `vercel.json`
   - Deploy with one click!

3. **Environment Variables**: None required - the app uses localStorage

## 🏗️ Architecture

### Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite (fastest modern bundler)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animations**: Anime.js v4 for smooth UI animations
- **Storage**: Browser localStorage for session persistence
- **Deployment**: Vercel-optimized configuration

### Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # App navigation
│   ├── Timer/
│   │   ├── index.tsx          # Main timer component
│   │   ├── TimerDisplay.tsx   # Timer UI with animations
│   │   └── CircularProgress.tsx # Animated progress ring
│   └── SessionHistory/
│       ├── index.tsx          # History page
│       ├── SessionCard.tsx    # Individual session display
│       └── SessionStats.tsx   # Statistics overview
├── hooks/
│   ├── useTimer.ts           # Timer logic and state
│   └── useLocalStorage.ts    # localStorage management
├── types/
│   └── session.ts           # TypeScript interfaces
└── utils/
    └── timeFormat.ts        # Time formatting utilities
```

## 🎨 Features in Detail

### Timer Interface
- Circular progress indicator with smooth animations
- Color-coded modes (work: red, break: green, long break: blue)
- Start/pause/reset controls with hover animations
- Session counter and mode display

### Session History
- Comprehensive statistics (total sessions, total time, today, this week)
- Filterable session list (all, today, week, month)
- Detailed session cards with duration, timestamps, and metadata
- Animated entry transitions

### Data Persistence
- All sessions saved to localStorage
- Settings persistence across browser sessions
- Cross-tab synchronization
- Graceful error handling

## 🛠️ Customization

### Timer Settings
Default Pomodoro settings can be modified in `src/hooks/useTimer.ts`:
- Work duration: 25 minutes
- Short break: 5 minutes
- Long break: 15 minutes
- Sessions until long break: 4

### Styling
- Tailwind CSS classes for easy customization
- Color scheme defined in component files
- Animation timing in anime.js configurations

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Dependencies

- React 19.1.1
- TypeScript 5.8+
- Vite 7.1+
- Anime.js 4.1+
- Tailwind CSS 4.1+

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ using modern web technologies. Ready to deploy and help you achieve deep work focus!
