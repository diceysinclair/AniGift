import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Your actual photos
  const memories = [
    { id: 1, title: 'My Beautiful Love', image: '/Images/Anita.jpeg' },
    { id: 2, title: 'Every Moment With You', image: '/Images/Anita.jpeg' },
    { id: 3, title: 'You Make Me Smile', image: '/Images/Anita.jpeg' },
    { id: 4, title: 'Forever My Heart', image: '/Images/Anita.jpeg' },
    { id: 5, title: 'My Everything', image: '/Images/Anita.jpeg' },
    { id: 6, title: 'Love of My Life', image: '/Images/Anita.jpeg' },
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-vibes text-center text-red-500 mb-12">
          Our Beautiful Memories 💕
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => setSelectedImage(memory)}
              className="aspect-square rounded-2xl shadow-lg cursor-pointer overflow-hidden relative group"
            >
              <img 
                src={memory.image} 
                alt={memory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-4">
                <p className="text-white text-center font-semibold text-sm md:text-base drop-shadow-lg">
                  {memory.title}
                </p>
              </div>
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 p-3 rounded-full hover:bg-white transition-all z-10"
              >
                <FaTimes className="text-gray-800" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-2xl font-semibold text-center">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Memories
