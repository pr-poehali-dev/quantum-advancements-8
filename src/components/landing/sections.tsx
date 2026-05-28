import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <div className="flex flex-col gap-6">
        <img
          src="https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/7c857464-fd6f-4a38-81a1-af692112a73f.png"
          alt="ЛЕД АВТО"
          className="h-24 md:h-32 lg:h-40 w-auto object-contain"
          style={{ filter: 'invert(1) hue-rotate(180deg) saturate(15) contrast(1.4) brightness(1.2)' }}
        />
        <Badge variant="outline" className="text-white border-white w-fit">Студия автосвета</Badge>
      </div>
    ),
    title: "Свет, который меняет всё.",
    showButton: true,
    buttonText: 'Записаться'
  },
  {
    id: 'quality',
    title: 'Качество — наш стандарт.',
    content: 'Мы используем только сертифицированные LED-компоненты от ведущих производителей. Каждая установка проходит многоступенчатый контроль — мы не выдаём автомобиль, пока не убедимся в идеальном результате.'
  },
  {
    id: 'advantages',
    title: 'Почему LED Авто?',
    content: 'Опыт более 5 лет, сотни довольных клиентов и гарантия на все виды работ. Мы знаем автосвет от и до — от замены ламп до полной оптической настройки фар.'
  },
  {
    id: 'services',
    title: 'Что мы делаем',
    content: 'Установка LED и bi-led модулей, полировка и бронирование фар, регулировка света, ксенон и адаптивная оптика. Всё — в одном месте, быстро и с гарантией.'
  },
  {
    id: 'cta',
    title: 'Запишитесь сегодня.',
    content: 'Первичная консультация бесплатно. Мастера студии LED Авто подберут оптимальное решение для вашего автомобиля и сделают свет ярче, чище и безопаснее.',
    showButton: true,
    buttonText: 'Записаться'
  },
]