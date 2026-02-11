import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Reasons = () => {
  const reasons = [
    "Your smile lights up my entire world",
    "The way you laugh at my silly jokes",
    "How you understand me without words",
    "Your kindness and compassionate heart",
    "The way you make me feel safe and loved",
    "Your beautiful eyes that I get lost in",
    "How you support my dreams and goals",
    "The little things you do that show you care",
    "Your strength and courage inspire me",
    "The way you make ordinary moments magical",
    "How you accept me for who I am",
    "Your warmth and gentle touch",
    "The adventures we share together",
    "How you make me want to be better",
    "Simply because you're YOU ❤️"
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-vibes text-center text-white mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Reasons I Love You 💖
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border-2 border-white flex items-start gap-4"
            >
              <FaHeart className="text-red-400 text-2xl flex-shrink-0 mt-1 animate-pulse" />
              <p className="text-gray-800 text-lg font-medium">{reason}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Reasons
