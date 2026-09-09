import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.loop = true
    audio.volume = 0.7

    audio
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (audio.paused) {
      await audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-song.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b46a] bg-[#fffdf9] text-[#a52f35] shadow-lg"
      >
        {isPlaying ? '||' : '▶'}
      </button>
    </>
  )
}
