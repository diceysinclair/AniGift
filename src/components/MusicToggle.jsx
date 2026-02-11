import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMusic, FaVolumeMute } from 'react-icons/fa'

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        {/* Add your romantic music file here */}
        {/* <source src="/music/romantic.mp3" type="audio/mpeg" /> */}
      </audio>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <FaMusic className="text-pink-500 text-2xl animate-pulse" />
        ) : (
          <FaVolumeMute className="text-gray-500 text-2xl" />
        )}
      </motion.button>
      
      <p className="fixed top-24 right-6 z-50 text-xs text-gray-500 bg-white/70 px-3 py-1 rounded-full">
        Add music file to enable
      </p>
    </>
  )
}

export default MusicToggle
