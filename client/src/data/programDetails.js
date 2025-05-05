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
            },
            {
              name: "Тяга штанги в наклоне",
              description: "Арқа мен артқы иық бұлшықеттерін дамытуға арналған жаттығу.",
              duration: "2-3 минуты на подход",
              sets: "3 подхода по 10-12 повторений",
              gif: "/barbell-row.gif",
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
            },
            {
              name: "Румынская тяга",
              description: "Артқы сан және бөксе бұлшықеттерін дамытуға арналған жаттығу.",
              duration: "3-4 минуты на подход",
              sets: "3 подхода по 10-12 повторений",
              gif: "/romanian-deadlift.gif",
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
            },
            {
              name: "Подъем на бицепс",
              description: "Бицепс бұлшықеттерін дамытуға арналған жаттығу.",
              duration: "1-2 минуты на подход",
              sets: "3 подхода по 12-15 повторений",
              gif: "/bicep-curl.gif",
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
            },
            {
              name: "Прыжки со скакалкой",
              description: "Майды жағу мен координацияны жақсартуға арналған жаттығу.",
              duration: "3-5 минут",
              sets: "3 подхода",
              gif: "/jump-rope.gif",
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
            },
            {
              name: "Планка с приподнятием ног",
              description: "Қор бұлшықеттерін нығайтуға арналған жаттығу.",
              duration: "1-2 минуты",
              sets: "3 подхода",
              gif: "/plank.gif",
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
            },
            {
              name: "Скалолаз",
              description: "Қор мен аяқ бұлшықеттеріне арналған кардио жаттығу.",
              duration: "2-3 минуты",
              sets: "3 подхода",
              gif: "/mountain-climber.gif",
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
            },
            {
              name: "Жим штанги стоя",
              description: "Иық пен трицепсті дамытуға арналған жаттығу.",
              duration: "3-4 минуты",
              sets: "3 подхода по 8-10 повторений",
              gif: "/overhead-press.gif",
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
            },
            {
              name: "Подтягивания",
              description: "Арқа бұлшықеттерін дамытуға арналған жаттығу.",
              duration: "2-3 минуты",
              sets: "3 подхода по максимуму",
              gif: "/pull-ups.gif",
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
            },
            {
              name: "Жим лежа",
              description: "Кеуде бұлшықеттеріне арналған жаттығу.",
              duration: "3-4 минуты",
              sets: "4 подхода по 8-10 повторений",
              gif: "/bench-press1.gif",
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
            },
            {
              name: "Прыжки на месте",
              description: "Аяқтарды нығайту және төзімділікті арттыруға арналған жаттығу.",
              duration: "5 минут",
              sets: "3 подхода",
              gif: "/jumping.gif",
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
            },
            {
              name: "Скалолаз",
              description: "Қарын мен аяқ бұлшықеттеріне арналған кардио жаттығуы.",
              duration: "2-3 минуты",
              sets: "3 подхода",
              gif: "/mountain-climber1.gif",
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
            },
            {
              name: "Бёрпи",
              description: "Бүкіл денеге арналған кешенді жаттығу.",
              duration: "2-3 минуты",
              sets: "3 подхода по 10 повторений",
              gif: "/burpee.gif",
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
            },
            {
              name: "Растяжка плеч",
              description: "Иық буындарының икемділігін жақсартуға арналған жаттығу.",
              duration: "2 минуты",
              sets: "3 подхода",
              gif: "/shoulder-stretch.gif",
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
            },
            {
              name: "Растяжка квадрицепсов",
              description: "Санның алдыңғы бөлігін созуға арналған жаттығу.",
              duration: "2 минуты",
              sets: "3 подхода",
              gif: "/quad-stretch.jpeg",
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
            },
            {
              name: "Растяжка подколенных сухожилий",
              description: "Санның артқы бөлігінің икемділігін жақсартуға арналған жаттығу.",
              duration: "2 минуты",
              sets: "3 подхода",
              gif: "/hamstring-stretch.jpeg",
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
            },
            {
              name: "Растяжка спины",
              description: "Арқадағы кернеуді босатуға арналған жаттығу.",
              duration: "2 минуты",
              sets: "3 подхода",
              gif: "/back-stretch.gif",
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
            },
            {
              name: "Растяжка шеи",
              description: "Мойындағы кернеуді төмендетуге арналған жаттығу.",
              duration: "1-2 минуты",
              sets: "3 подхода",
              gif: "/neck-stretch.gif",
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
            },
            {
              name: "Растяжка икроножных мышц",
              description: "Балтыр бұлшықеттерінің икемділігін жақсартуға арналған жаттығу.",
              duration: "2 минуты",
              sets: "3 подхода",
              gif: "/calf-stretch.gif",
            },
          ],
        },
      ],
    }
  ];    
  export default programs;