import { motion } from 'framer-motion'
import { FaHeart, FaChevronDown } from 'react-icons/fa'

const Hero = ({ onSurpriseClick, showSurprise }) => {
  const handleSurpriseClick = () => {
    onSurpriseClick()
    // Smooth scroll to next section after a short delay
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }, 1000)
  }
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
        >
          Happy Valentine's Day,
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-vibes text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
        >
          Anita Queen Wasty ❤️
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Every moment with you is a treasure. You make my world brighter, my heart fuller, and my life complete.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurpriseClick}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-all flex items-center gap-3 mx-auto"
        >
          <FaHeart className="animate-pulse" />
          Click for a Surprise
          <FaHeart className="animate-pulse" />
        </motion.button>
        
        {/* Scroll indicator - shows after surprise is clicked */}
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col items-center"
          >
            <p className="text-white text-lg mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Scroll down for your surprise! 💕
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              <FaChevronDown />
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Animated background hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          <FaHeart size={Math.random() * 40 + 20} />
        </motion.div>
      ))}
    </section>
  )
}

export default Hero
