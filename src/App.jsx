import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import Reasons from './components/Reasons'
import Proposal from './components/Proposal'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Preload the image
  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.src = '/Images/Anita.jpeg'
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Loading screen */}
      {!imageLoaded && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-pink-600 text-xl font-vibes">Loading your surprise... 💕</p>
          </div>
        </div>
      )}
      
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/Images/Anita.jpeg" 
          alt="Background"
          className="w-full h-full object-cover"
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-pink-500/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <FloatingHearts />
        
        <Hero onSurpriseClick={() => setShowSurprise(true)} showSurprise={showSurprise} />
        
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
