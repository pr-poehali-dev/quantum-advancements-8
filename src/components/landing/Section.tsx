import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import Gallery from "./Gallery"
import type { SectionProps } from "@/types"

const contactButtons = [
  { label: 'Позвонить', href: 'tel:+79505516240', icon: 'Phone' },
  { label: 'Telegram', href: 'https://t.me/Ledavtoekb', icon: 'Send' },
  { label: 'MAX', href: 'https://max.ru/+79505516240', icon: 'MessageCircle' },
  { label: 'Как добраться', href: 'https://yandex.ru/maps/-/CPHEqVKN', icon: 'MapPin' },
]

export default function Section({ id, title, subtitle, content, isActive, showButton, gallery }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className={`font-bold leading-[1.1] tracking-tight max-w-4xl text-white ${
          gallery
            ? 'text-3xl md:text-5xl lg:text-6xl'
            : 'text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem]'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className={`max-w-2xl mt-4 text-neutral-400 ${
            gallery ? 'text-base md:text-lg' : 'text-lg md:text-xl lg:text-2xl mt-6'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {gallery && gallery.length > 0 && (
        <Gallery images={gallery} isActive={isActive} />
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-4"
        >
          {contactButtons.map((btn) => (
            <Button
              key={btn.label}
              asChild
              variant="outline"
              size="lg"
              className="text-[#E30613] bg-transparent border-[#E30613] hover:bg-[#E30613] hover:text-white transition-colors gap-2"
            >
              <a href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <Icon name={btn.icon} size={20} />
                {btn.label}
              </a>
            </Button>
          ))}
        </motion.div>
      )}
    </section>
  )
}