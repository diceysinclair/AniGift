import { motion } from 'framer-motion'

const GoogleForm = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-vibes text-center text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Share Your Thoughts With Me 💌
        </h2>
        
        <p className="text-center text-white text-lg mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          I'd love to hear what's on your heart
        </p>
        
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-white">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdTvKygxmpX1w_HWSb7GNG0EG6eMP-yg8Xghqc21NaWz4uv_A/viewform?usp=pp_url&entry.408499887=Yes&embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-2xl"
          >
            Loading…
          </iframe>
        </div>
      </motion.div>
    </section>
  )
}

export default GoogleForm
