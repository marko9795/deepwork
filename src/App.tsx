import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Timer } from './components/Timer'
import { SessionHistory } from './components/SessionHistory'
import { WhyDeepWork } from './components/WhyDeepWork'

function App() {
  const [currentView, setCurrentView] = useState<'timer' | 'history' | 'why'>('timer')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <div className="pt-20">
        {currentView === 'timer' && <Timer />}
        {currentView === 'history' && <SessionHistory />}
        {currentView === 'why' && <WhyDeepWork onStartTimer={() => setCurrentView('timer')} />}
      </div>
    </div>
  )
}

export default App
