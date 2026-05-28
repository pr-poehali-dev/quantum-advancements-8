import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/ui/icon'

interface GalleryProps {
  images: string[]
  isActive: boolean
}

export default function Gallery({ images, isActive }: GalleryProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const close = useCallback(() => setOpenIdx(null), [])
  const next = useCallback(() => {
    setOpenIdx((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])
  const prev = useCallback(() => {
    setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])

  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    // Блокируем скролл фона
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx, close, next, prev])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev()
      else next()
    }
    touchStartX.current = null
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl max-h-[50vh] sm:max-h-[55vh] overflow-y-auto pr-1 sm:pr-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setOpenIdx(idx)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-800 hover:border-[#E30613] active:border-[#E30613] transition-all touch-manipulation"
          >
            <img
              src={src}
              alt={`Работа ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4 safe-top safe-bottom"
          >
            <button
              onClick={(e) => { e.stopPropagation(); close() }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#E30613] active:bg-[#E30613] flex items-center justify-center text-white transition-colors touch-manipulation"
              aria-label="Закрыть"
            >
              <Icon name="X" size={22} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#E30613] active:bg-[#E30613] flex items-center justify-center text-white transition-colors touch-manipulation"
              aria-label="Предыдущее"
            >
              <Icon name="ChevronLeft" size={26} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#E30613] active:bg-[#E30613] flex items-center justify-center text-white transition-colors touch-manipulation"
              aria-label="Следующее"
            >
              <Icon name="ChevronRight" size={26} />
            </button>

            <motion.img
              key={openIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[openIdx]}
              alt={`Работа ${openIdx + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg select-none"
              draggable={false}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 text-white text-xs sm:text-sm font-medium">
              {openIdx + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
