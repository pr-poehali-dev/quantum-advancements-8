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
    title: "Будь ярче — освещай свой путь.",
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
    id: 'works',
    title: 'Наши работы',
    content: 'Реальные результаты до и после. Полировка, замена оптики, установка би-LED линз — каждая фара получает новую жизнь.',
    gallery: [
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/96420c7f-f032-42c7-b752-b1e174d11717.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/79b6a8d8-1241-401b-8357-732aed795329.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/718ed6d2-423c-4687-affe-8b1b75267855.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/7a99d4f4-5af8-4155-b7ca-9d5d7a5c98f9.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/83e7697e-3c23-4aca-af8f-02602958ce8d.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/2568bf3a-673d-449c-b9ae-0844bcdf7f5e.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/17d902fe-2990-4a76-bb73-fab02bb321c0.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/38f855d6-b8db-49a1-86b7-a873f3cdc0e3.png',
      'https://cdn.poehali.dev/projects/6d75a5f8-53a9-4194-bae1-8eab992adfb3/bucket/c8cdc759-ab9c-4e92-a5a1-90463143b3d4.png',
    ]
  },
  {
    id: 'cta',
    title: 'Запишитесь сегодня.',
    content: 'Первичная консультация бесплатно. Приезжайте в нашу студию в Екатеринбурге — мастера LED Авто подберут оптимальное решение для вашего автомобиля и сделают свет ярче, чище и безопаснее.',
    showButton: true,
    buttonText: 'Записаться'
  },
]