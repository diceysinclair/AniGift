import { useState } from 'react'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Reasons from './components/Reasons'
import Proposal from './components/Proposal'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [showSurprise, setShowSurprise] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/Images/Anita.jpeg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-pink-500/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <FloatingHearts />
        
        <Hero onSurpriseClick={() => setShowSurprise(true)} />
        
        {showSurprise && (
          <>
            <LoveLetter />
            <Reasons />
            <Proposal />
          </>
        )}
      </div>
    </div>
  )
}

export default App
