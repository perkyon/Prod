export interface Project {
  id: string;
  title: string;
  category: 'horeca' | 'home-office';
  categoryDisplay: string;
  image: string;
  description: string;
  shortDescription: string;
  details: {
    area: string;
    duration: string;
    year: string;
    location: string;
  };
  gallery: string[];
  clientTask?: string;
  solution?: string[];
  workMoments?: string[];
  result?: string[];
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'SURF COFFEE',
    category: 'horeca',
    categoryDisplay: 'HoReCa',
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NzY3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Функциональная кухня с обеденной зоной, сочетающаяся с открытой гостиной",
    description: "Создать функциональную кухню с обеденной зоной, сочетающуюся с открытой гостиной, с максимальным использованием пространства и скрытыми системами хранения.",
    details: {
      area: "120 м²",
      duration: "28 дней",
      year: "2023",
      location: "Москва"
    },
    gallery: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NzY3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZGVzaWdufGVufDF8fHx8MTc1Njg1NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2Nzg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать функциональную кухню с обеденной зоной, сочетающуюся с открытой гостиной, с максимальным использованием пространства и скрытыми системами хранения.",
    solution: [
      "Разработали дизайн-проект с учётом стиля квартиры (современный минимализм с элементами теплого дерева).",
      "Использовали комбинацию МДФ с матовой эмалью и шпоном дуба.",
      "Столешница из кварцевого камня — инженерный материал для рабочих зон с удлинённым сроком эксплуатации.",
      "Скрытая механика подъёма фасадов (Blum Aventos) и доводчики на всех выдвижных ящиках."
    ],
    workMoments: [
      "На замерах выяснили, что стены имеют отклонение до 2 см — внесли корректировки и размеры модулей.",
      "Клиент хотел встроить технику, которая не была учтена в первоначальном проекте — оперативно внесли изменения.",
      "В процессе монтажа обнаружили, что розетки в рабочей зоне сдвинуты на 10 см — сделали скрытую доработку электрики."
    ],
    result: [
      "Проект выполнен «под ключ» за 28 календарных дней",
      "Клиент получил готовую кухню, полностью соответствующую изначальному замыслу, с гарантией 5 лет на всю фурнитуру и материалы."
    ]
  },
  {
    id: '2',
    title: 'ЛОББИ ОТЕЛЯ',
    category: 'horeca',
    categoryDisplay: 'HoReCa',
    image: "https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZGVzaWdufGVufDF8fHx8MTc1Njg1NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Элегантный лобби отеля с премиальной отделкой и авторской мебелью",
    description: "Создать представительное лобби пятизвездочного отеля с использованием натуральных материалов и эксклюзивной мебели для создания атмосферы роскоши и комфорта.",
    details: {
      area: "200 м²",
      duration: "45 дней",
      year: "2023",
      location: "Сочи"
    },
    gallery: [
      "https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZGVzaWdufGVufDF8fHx8MTc1Njg1NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NzY3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать представительное лобби пятизвездочного отеля, которое произведёт впечатление на гостей с первых секунд пребывания. Необходимо использовать премиальные материалы и создать атмосферу роскоши и комфорта.",
    solution: [
      "Разработали дизайн-концепцию в стиле современной классики с использованием натуральных материалов.",
      "Применили мрамор Calacatta Gold для стойки ресепшн и элементов декора.",
      "Изготовили авторскую мебель из массива ореха с бронзовой фурнитурой.",
      "Создали многоуровневую систему освещения с хрустальными светильниками и скрытой LED-подсветкой."
    ],
    workMoments: [
      "Высота потолков оказалась на 20 см меньше заявленной — пересчитали пропорции и адаптировали дизайн люстр.",
      "Заказчик в процессе работы захотел добавить зону для работы с ноутбуками — интегрировали рабочие места в общую концепцию.",
      "Мраморные плиты имели отличия в рисунке — тщательно подобрали совпадающие по тону и структуре элементы."
    ],
    result: [
      "Лобби стало визитной карточкой отеля и получило высокие оценки гостей",
      "Создана атмосфера премиального сервиса, которая соответствует статусу пятизвездочного отеля."
    ]
  },
  {
    id: '3',
    title: 'РЕСТОРАН',
    category: 'horeca',
    categoryDisplay: 'HoReCa',
    image: "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2Nzg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Современный ресторан с открытой кухней и продуманным зонированием",
    description: "Создать современный ресторан с открытой кухней, максимальным использованием пространства и атмосферным освещением для комфорта гостей.",
    details: {
      area: "150 м²",
      duration: "35 дней",
      year: "2024",
      location: "Москва"
    },
    gallery: [
      "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2Nzg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать современный ресторан быстрого питания премиум-класса с открытой кухней, где гости смогут наблюдать за процессом приготовления. Максимально использовать площадь для посадочных мест при сохранении комфорта.",
    solution: [
      "Спроектировали открытую кухню с витражным ограждением для демонстрации процесса готовки.",
      "Использовали модульную мебель для оптимизации рассадки (от 2 до 8 человек за столом).",
      "Применили звукопоглощающие панели из натурального дерева для комфортной акустики.",
      "Создали трекинговую систему освещения с возможностью регулировки интенсивности."
    ],
    workMoments: [
      "Вентиляционная система требовала дополнительных мощностей — согласовали изменения с инженерами здания.",
      "Заказчик попросил увеличить количество мест на 15% — оптимизировали планировку без потери комфорта.",
      "В процессе поставки мебели выяснилось, что столы на 2 см шире заказанных — подкорректировали расстановку."
    ],
    result: [
      "Ресторан открылся в срок и сразу получил высокую посещаемость",
      "Концепция открытой кухни стала изюминкой заведения и привлекает постоянных гостей."
    ]
  },
  {
    id: '4',
    title: 'СОВРЕМЕННАЯ КУХНЯ',
    category: 'home-office',
    categoryDisplay: 'Дом и офис',
    image: "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1Njg1Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Стильная кухня с островом и встроенной техникой премиум-класса",
    description: "Создать современную кухню с островом, интегрированной техникой и максимальной функциональностью в минималистичном стиле.",
    details: {
      area: "30 м²",
      duration: "18 дней",
      year: "2024",
      location: "Москва"
    },
    gallery: [
      "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1Njg1Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать современную функциональную кухню с островом для семьи из 4 человек. Встроить всю необходимую технику премиум-класса, сохранив минималистичный дизайн без лишних деталей.",
    solution: [
      "Спроектировали кухонный остров с интегрированной варочной панелью и системой вытяжки.",
      "Использовали фасады из МДФ с покрытием soft-touch в цвете 'каменно-серый'.",
      "Установили скрытые ручки push-to-open для сохранения минималистичного вида.",
      "Столешница из кварцевого агломерата толщиной 40 мм с интегрированной мойкой."
    ],
    workMoments: [
      "Газовая труба проходила не там, где планировали — перепроектировали расположение варочной панели.",
      "Заказчик захотел добавить винный шкаф — нашли место в высоких шкафах без нарушения концепции.",
      "Размеры холодильника оказались больше заявленных — подкорректировали размеры ниши."
    ],
    result: [
      "Кухня стала центром семейной жизни и идеально подходит для готовки и общения",
      "Все техника интегрирована незаметно, сохранен минималистичный стиль интерьера."
    ]
  },
  {
    id: '5',
    title: 'СТОЛОВАЯ',
    category: 'home-office',
    categoryDisplay: 'Дом и офис',
    image: "https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc1NjczMDIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Элегантная столовая с авторской мебелью и камином",
    description: "Создать элегантное пространство для семейных обедов и торжественных ужинов с авторской мебелью и атмосферным освещением.",
    details: {
      area: "25 м²",
      duration: "15 дней",
      year: "2024",
      location: "Санкт-Петербург"
    },
    gallery: [
      "https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc1NjczMDIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать элегантную столовую для семейных ужинов и приема гостей. Необходимо разместить стол на 8 персон, буфет для посуды и создать уютную атмосферу с помощью освещения и декора.",
    solution: [
      "Изготовили обеденный стол из массива ореха с возможностью трансформации на 6-8 персон.",
      "Спроектировали встроенный буфет с витриной для демонстрации красивой посуды.",
      "Установили подвесную люстру с диммером и дополнительную подсветку в нишах.",
      "Добавили декоративный камин с порталом из натурального камня."
    ],
    workMoments: [
      "Высота потолка была недостаточной для выбранной люстры — нашли альтернативную модель с аналогичным дизайном.",
      "Заказчица попросила добавить место для фортепиано — перепланировали расстановку мебели.",
      "Камин требовал дополнительного согласования с управляющей компанией — оформили все разрешения."
    ],
    result: [
      "Столовая стала любимым местом семьи для торжественных ужинов и встреч с друзьями",
      "Созданная атмосфера элегантности и уюта идеально подходит как для семейных, так и для официальных мероприятий."
    ]
  },
  {
    id: '6',
    title: 'СПАЛЬНЯ',
    category: 'home-office',
    categoryDisplay: 'Дом и офис',
    image: "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1Njg1NjAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Уютная спальня с гардеробной и рабочей зоной",
    description: "Создать уютную спальню в теплых тонах с максимально функциональными системами хранения и ко��фортн��м освещением.",
    details: {
      area: "20 м²",
      duration: "12 дней",
      year: "2024",
      location: "Москва"
    },
    gallery: [
      "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1Njg1NjAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать уютную спальню для молодой пары с максимальными возможностями для хранения вещей. Интегрировать небольшую рабочую зону и обеспечить качественное освещение для чтения.",
    solution: [
      "Спроектировали кровать с интегрированными прикроватными тумбами и скрытыми ящиками.",
      "Создали гардеробную систему во всю стену с разными типами хранения.",
      "Установили рабочее место у окна с выдвижной столешницей.",
      "Реализовали многоуровневое освещение: общее, рабочее и для чтения в кровати."
    ],
    workMoments: [
      "Оказалось, что батарея отопления мешает установке рабочего стола — сделали обводку и интегрировали её в дизайн.",
      "Заказчики попросили добавить зеркало в полный рост — встроили его в дверцу гардероба.",
      "При доставке кровати выяснилось, что она не проходит в лифт — разобрали и собрали на месте."
    ],
    result: [
      "Спальня стала идеальным местом для отдыха и работы с максимальной функциональностью",
      "Созданные системы хранения позволили убрать весь текстиль и личные вещи, сохранив минимализм."
    ]
  },
  {
    id: '7',
    title: 'БАР',
    category: 'horeca',
    categoryDisplay: 'HoReCa',
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODg3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Современный коктейльный бар с авторской барной стойкой",
    description: "Создать стильный коктейльный бар с профессиональной барной стойкой, винотекой и атмосферным освещением.",
    details: {
      area: "80 м²",
      duration: "30 дней",
      year: "2024",
      location: "Краснодар"
    },
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODg3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Создать современный коктейльный бар с винотекой на 100 сортов вина, профессиональной барной стойкой и уютной зоной для 40 гостей. Атмосфера должна располагать к долгим беседам.",
    solution: [
      "Спроектировали L-образную барную стойку из натурального дуба с медными вставками.",
      "Создали климатическую винотеку с подсветкой и системой контроля температуры.",
      "Использовали тёмные тона в сочетании с тёплым освещением для создания камерной атмосферы.",
      "Установили звукоизоляцию и систему вентиляции для комфорта гостей."
    ],
    workMoments: [
      "Система кондиционирования для винотеки потребовала усиления электропроводки — согласовали с управляющей компанией.",
      "Заказчик захотел добавить сцену для живой музыки — переработали план без потери посадочных мест.",
      "Барная стойка оказалась тяжелее расчётного — дополнительно усилили основание."
    ],
    result: [
      "Бар стал популярным местом встреч ценителей качественных напитков",
      "Винотека и профессиональная барная стойка позволили создать уникальные авторские коктейли."
    ]
  },
  {
    id: '8',
    title: 'ДОМАШНИЙ ОФИС',
    category: 'home-office',
    categoryDisplay: 'Дом и офис',
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwZGVzaWdufGVufDF8fHx8MTc1Njg4NzIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    shortDescription: "Функциональный домашний офис с библиотекой и переговорной зоной",
    description: "Создать продуктивное рабочее пространство дома с профессиональным оборудованием, библиотекой и зоной для видеоконференций.",
    details: {
      area: "18 м²",
      duration: "10 дней",
      year: "2024",
      location: "Москва"
    },
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwZGVzaWdufGVufDF8fHx8MTc1Njg4NzIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    clientTask: "Обустроить полноценный домашний офис для руководителя IT-компании. Необходимо разместить два рабочих места, библиотеку, зону для видеоконференций и место для отдыха.",
    solution: [
      "Создали Г-образную рабочую зону с двумя мониторами и профессиональным освещением.",
      "Спроектировали встроенную библиотеку во всю стену с лестницей-стремянкой.",
      "Обустроили переговорную зону с качественной акустикой и видеооборудованием.",
      "Добавили мини-кухню с кофе-машиной и зону отдыха с кожаным креслом."
    ],
    workMoments: [
      "Потребовалось провести дополнительные интернет-линии для стабильной связи — проложили кабели скрыто.",
      "Заказчик попросил добавить сейф для документов — интегрировали его в библиотечные стеллажи.",
      "Звукоизоляция потребовала больше материалов чем планировалось — дополнительно утеплили стены."
    ],
    result: [
      "Офис стал полноценной заменой корпоративному рабочему месту с высокой продуктивностью",
      "Созданная атмосфера способству��т кон��ентрации и эффективной работе в любое время дня."
    ]
  }
];