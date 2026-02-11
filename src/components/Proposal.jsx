import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import Confetti from './Confetti'

const Proposal = () => {
  const [showCelebration, setShowCelebration] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleYesClick = () => {
    setShowCelebration(true)
    
    // Submit to Google Form
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdTvKygxmpX1w_HWSb7GNG0EG6eMP-yg8Xghqc21NaWz4uv_A/formResponse'
    const formData = new FormData()
    formData.append('entry.408499887', 'Yes')
    
    // Send the form data
    fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).catch(err => console.log('Form submitted'))
  }

  const handleNoHover = () => {
    // Move the "No" button to a random position
    const maxX = 200
    const maxY = 100
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    })
  }

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-7xl font-vibes text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
        >
          Anita, Will You Be My Valentine Forever?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-white mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          My Queen, you make every day magical. I want to spend all my Valentine's Days with you. 💕
        </motion.p>

        {!showCelebration ? (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-pink-300 transition-all flex items-center gap-3"
            >
              <FaHeart className="animate-pulse" />
              YES 💖
              <FaHeart className="animate-pulse" />
            </motion.button>
            
            <motion.button
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="bg-gray-300 text-gray-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg opacity-50"
            >
              Maybe Later
            </motion.button>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-8xl"
              >
                💖
              </motion.div>
              
              <h3 className="text-4xl md:text-6xl font-vibes text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                I knew you'd say yes! 🎉
              </h3>
              
              <p className="text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                You've made me the happiest person alive! ❤️
              </p>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-6xl"
              >
                🌹
              </motion.div>
              
              <p className="text-xl text-white italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Forever and always, my love 💕
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {showCelebration && <Confetti />}
    </section>
  )
}

export default Proposal
