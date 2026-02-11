import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Confetti = () => {
  const colors = ['text-pink-400', 'text-red-400', 'text-purple-400', 'text-pink-500', 'text-red-500']
  const confettiPieces = [...Array(50)].map((_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute ${piece.color}`}
          style={{ left: `${piece.left}%`, top: '-10%' }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            rotate: 360 * 3
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <FaHeart size={Math.random() * 20 + 15} />
        </motion.div>
      ))}
    </div>
  )
}

export default Confetti
