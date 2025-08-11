import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Timer } from './components/Timer'
import { SessionHistory } from './components/SessionHistory'

function App() {
  const [currentView, setCurrentView] = useState<'timer' | 'history'>('timer')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <div className="pt-20">
        {currentView === 'timer' ? <Timer /> : <SessionHistory />}
      </div>
    </div>
  )
}

export default App
