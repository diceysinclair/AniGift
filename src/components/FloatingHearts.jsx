import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const FloatingHearts = () => {
  const hearts = [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    size: Math.random() * 15 + 10
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300 opacity-30"
          style={{ 
            left: `${heart.left}%`,
            bottom: '-10%'
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 50]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <FaHeart size={heart.size} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
