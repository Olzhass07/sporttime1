const programs = [

  {
    id: "massgain",
    title: "Масса жинау бағдарламасы (Hypertrophy Training)",
    description: "Базалық және оқшауланған жаттығулар арқылы бұлшықет массасын ұлғайту.",
    image: "../public/massgain.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Жим лежа",
            description: "Кеуде, трицепс және алдыңғы дельта бұлшықеттерін дамытуға арналған классикалық жаттығу.",
            duration: "3-4 минуты на подход",
            sets: "4 подхода по 8-12 повторений",
            gif: "/massgain.gif",
            gifId: "massgain-1"  // Уникальный ID для первой гифки
          },
          {
            name: "Тяга штанги в наклоне",
            description: "Арқа мен артқы иық бұлшықеттерін дамытуға арналған жаттығу.",
            duration: "2-3 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/barbell-row.gif",
            gifId: "massgain-2"  // Уникальный ID для второй гифки
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Приседания со штангой",
            description: "Сан, бөксе және артқы сан бұлшықеттеріне арналған базалық жаттығу.",
            duration: "4-5 минут на подход",
            sets: "4 подхода по 8-10 повторений",
            gif: "/squats.gif",
            gifId: "massgain-3"  // Уникальный ID для третьей гифки
          },
          {
            name: "Румынская тяга",
            description: "Артқы сан және бөксе бұлшықеттерін дамытуға арналған жаттығу.",
            duration: "3-4 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/romanian-deadlift.gif",
            gifId: "massgain-4"  // Уникальный ID для четвертой гифки
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Жим гантелей сидя",
            description: "Иық бұлшықеттерін дамытуға арналған жаттығу.",
            duration: "2-3 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/dumbbell-shoulder-press.gif",
            gifId: "massgain-5"  // Уникальный ID для пятой гифки
          },
          {
            name: "Подъем на бицепс",
            description: "Бицепс бұлшықеттерін дамытуға арналған жаттығу.",
            duration: "1-2 минуты на подход",
            sets: "3 подхода по 12-15 повторений",
            gif: "/bicep-curl.gif",
            gifId: "massgain-6"  // Уникальный ID для шестой гифки
          },
        ],
      },
    ],
  },
  {
    id: "fatloss",
    title: "Артық салмақты тастау бағдарламасы (Fat Loss)",
    description: "Кардио және жоғары интенсивті жаттығулар арқылы майды азайту.",
    image: "../public/losefat.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Бег на месте",
            description: "Төзімділікті арттыру және калорияны жағуға арналған кардио жаттығу.",
            duration: "5-10 минут",
            sets: "1 подход",
            gif: "/running.gif",
            gifId: "fatloss-1"
          },
          {
            name: "Прыжки со скакалкой",
            description: "Майды жағу мен координацияны жақсартуға арналған жаттығу.",
            duration: "3-5 минут",
            sets: "3 подхода",
            gif: "/jump-rope.gif",
            gifId: "fatloss-2"
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Бёрпи",
            description: "Барлық денеге арналған күрделі жаттығу, калорияны жақсы жағады.",
            duration: "2-3 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/burpee.gif",
            gifId: "fatloss-3"
          },
          {
            name: "Планка с приподнятием ног",
            description: "Қор бұлшықеттерін нығайтуға арналған жаттығу.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/plank.gif",
            gifId: "fatloss-4"
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Выпады с гантелями",
            description: "Аяқ пен бөксені нығайтуға арналған жаттығу.",
            duration: "3-4 минуты",
            sets: "3 подхода по 12 повторений",
            gif: "/lunges.gif",
            gifId: "fatloss-5"
          },
          {
            name: "Скалолаз",
            description: "Қор мен аяқ бұлшықеттеріне арналған кардио жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/mountain-climber.gif",
            gifId: "fatloss-6"
          },
        ],
      },
    ],
  },
  {
    id: "strength",
    title: "Күшті жақсарту бағдарламасы (Strength Training)",
    description: "Жалпы физикалық форма мен икемділікті дамыту.",
    image: "../public/strenght.webp",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Становая тяга",
            description: "Бүкіл дене күшін дамытуға арналған негізгі жаттығу.",
            duration: "4-5 минут",
            sets: "4 подхода по 6-8 повторений",
            gif: "/deadlift.gif",
            gifId: "strength-1"
          },
          {
            name: "Жим штанги стоя",
            description: "Иық пен трицепсті дамытуға арналған жаттығу.",
            duration: "3-4 минуты",
            sets: "3 подхода по 8-10 повторений",
            gif: "/overhead-press.gif",
            gifId: "strength-2"
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Тяга штанги к поясу",
            description: "Арқаны нығайтуға арналған жаттығу.",
            duration: "3-4 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/barbell-row1.gif",
            gifId: "strength-3"
          },
          {
            name: "Подтягивания",
            description: "Арқа бұлшықеттерін дамытуға арналған жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода по максимуму",
            gif: "/pull-ups.gif",
            gifId: "strength-4"
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Приседания со штангой",
            description: "Аяқ пен бөксе бұлшықеттеріне арналған негізгі жаттығу.",
            duration: "4-5 минут",
            sets: "4 подхода по 8-10 повторений",
            gif: "/squats1.gif",
            gifId: "strength-5"
          },
          {
            name: "Жим лежа",
            description: "Кеуде бұлшықеттеріне арналған жаттығу.",
            duration: "3-4 минуты",
            sets: "4 подхода по 8-10 повторений",
            gif: "/bench-press1.gif",
            gifId: "strength-6"
          },
        ],
      },
    ],
  },
  
  {
    id: "endurance",
    title: "Төзімділікті жақсарту бағдарламасы (Endurance Training)",
    description: "Жалпы төзімділікті және жүрек-қантамыр жүйесін жақсарту.",
    image: "../public/endurance.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Бег на длинные дистанции",
            description: "Төзімділікті арттыру және жүрек-қантамыр жүйесін нығайтуға арналған жаттығу.",
            duration: "30-40 минут",
            sets: "1 подход",
            gif: "/long-distance-run.gif",
            gifId: "endurance-1"
          },
          {
            name: "Прыжки на месте",
            description: "Аяқтарды нығайту және төзімділікті арттыруға арналған жаттығу.",
            duration: "5 минут",
            sets: "3 подхода",
            gif: "/jumping.gif",
            gifId: "endurance-2"
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Интервальный бег",
            description: "Төзімділікті арттыру үшін жылдам және баяу жүгіруді ауыстырып орындау.",
            duration: "20 минут",
            sets: "1 подход",
            gif: "/interval-run.gif",
            gifId: "endurance-3"
          },
          {
            name: "Скалолаз",
            description: "Қарын мен аяқ бұлшықеттеріне арналған кардио жаттығуы.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/mountain-climber1.gif",
            gifId: "endurance-4"
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Прыжки через скакалку",
            description: "Төзімділікті арттыру және калорияны жағуға арналған жаттығу.",
            duration: "10 минут",
            sets: "1 подход",
            gif: "/jump-rope1.gif",
            gifId: "endurance-5"
          },
          {
            name: "Бёрпи",
            description: "Бүкіл денеге арналған кешенді жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/burpee.gif",
            gifId: "endurance-6"
          },
        ],
      },
    ],
  },
  
  {
    id: "flexibility",
    title: "Икемділікті жақсарту бағдарламасы (Flexibility Training)",
    description: "Икемділік пен қозғалыс аясын жақсарту.",
    image: "../public/flexibility.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Наклоны вперед",
            description: "Санның артқы бөлігін созуға арналған жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/forward-bend.gif",
            gifId: "flexibility-1"
          },
          {
            name: "Растяжка плеч",
            description: "Иық буындарының икемділігін жақсартуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/shoulder-stretch.gif",
            gifId: "flexibility-2"
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Поза кобры",
            description: "Арқаны созып, белді нығайтуға арналған жаттығу.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/cobra-pose.gif",
            gifId: "flexibility-3"
          },
          {
            name: "Растяжка квадрицепсов",
            description: "Санның алдыңғы бөлігін созуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/quad-stretch.jpeg",
            gifId: "flexibility-4"
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Поза бабочки",
            description: "Санның ішкі бөлігін созуға арналған жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/butterfly-pose.gif",
            gifId: "flexibility-5"
          },
          {
            name: "Растяжка подколенных сухожилий",
            description: "Санның артқы бөлігінің икемділігін жақсартуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/hamstring-stretch.jpeg",
            gifId: "flexibility-6"
          },
        ],
      },
    ],
  },
  
  {
    id: "rehabilitation",
    title: "Реабилитацияға арналған бағдарлама (Rehabilitation Training)",
    description: "Бұлшықеттерді нығайтып, қозғалысты қалпына келтіруге арналған жеңіл жаттығулар.",
    image: "../public/rehabilitation.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Подъем ног лежа",
            description: "Сан бұлшықеттерін нығайтуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/leg-raise.gif",
            gifId: "rehabilitation-1"
          },
          {
            name: "Растяжка спины",
            description: "Арқадағы кернеуді босатуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/back-stretch.gif",
            gifId: "rehabilitation-2"
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Повороты корпуса",
            description: "Омыртқаның қозғалыс аясын жақсартуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/torso-twist.gif",
            gifId: "rehabilitation-3"
          },
          {
            name: "Растяжка шеи",
            description: "Мойындағы кернеуді төмендетуге арналған жаттығу.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/neck-stretch.gif",
            gifId: "rehabilitation-4"
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Мостик",
            description: "Бөксе мен бел бұлшықеттерін нығайтуға арналған жаттығу.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/bridge.gif",
            gifId: "rehabilitation-5"
          },
          {
            name: "Растяжка икроножных мышц",
            description: "Балтыр бұлшықеттерінің икемділігін жақсартуға арналған жаттығу.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/calf-stretch.gif",
            gifId: "rehabilitation-6"
          },
        ],
      },
    ],
  },

  ];    
  export default programs;