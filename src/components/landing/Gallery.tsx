import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/ui/icon'

interface GalleryProps {
  images: string[]
  isActive: boolean
}

export default function Gallery({ images, isActive }: GalleryProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

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
    return () => window.removeEventListener('keydown', onKey)
  }, [openIdx, close, next, prev])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl max-h-[55vh] overflow-y-auto pr-2"
      >
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setOpenIdx(idx)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-800 hover:border-[#E30613] transition-all"
          >
            <img
              src={src}
              alt={`Работа ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={(e) => { e.stopPropagation(); close() }}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E30613] flex items-center justify-center text-white transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E30613] flex items-center justify-center text-white transition-colors"
              aria-label="Предыдущее"
            >
              <Icon name="ChevronLeft" size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E30613] flex items-center justify-center text-white transition-colors"
              aria-label="Следующее"
            >
              <Icon name="ChevronRight" size={28} />
            </button>

            <motion.img
              key={openIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[openIdx]}
              alt={`Работа ${openIdx + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
              {openIdx + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
