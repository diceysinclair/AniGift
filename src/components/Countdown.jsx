import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let valentinesDay = new Date(currentYear, 1, 14) // February 14
      
      // If Valentine's Day has passed this year, calculate for next year
      if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14)
      }
      
      const difference = valentinesDay - now
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBox = ({ value, label }) => (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl p-6 shadow-xl"
    >
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold text-white mb-2"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-white text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-vibes text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Counting Down to Next Valentine's Day
        </h2>
        <p className="text-white mb-12 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Every day with you feels like Valentine's Day ❤️
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  )
}

export default Countdown
