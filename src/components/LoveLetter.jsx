import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoveLetter = () => {
  const fullText = `My Dearest Anita Queen,

From the moment you walked into my life, everything changed. You brought color to my gray days, music to my silence, and meaning to my existence.

Your smile is the sunrise that brightens my mornings. Your laughter is the melody that plays in my heart. Your love is the warmth that keeps me going through every challenge.

Anita, I love the way you understand me without words, the way you support my dreams, and the way you make ordinary moments extraordinary. With you, I've found my home, my peace, and my forever.

You truly are a Queen in every sense - graceful, strong, and absolutely beautiful. Thank you for being you, for loving me, and for making every day feel like Valentine's Day.

Forever yours,
Your Love ❤️`

  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-vibes text-center text-red-600 mb-8 drop-shadow-sm">
              A Letter From My Heart
            </h2>
            
            <div className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap font-serif">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default LoveLetter
