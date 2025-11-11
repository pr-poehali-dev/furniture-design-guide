import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const courseModules = [
    {
      title: 'Модуль 1: Основы дизайна мебели',
      weeks: '1-3 недели',
      topics: [
        'История мебельного дизайна',
        'Основные стили и направления',
        'Эргономика и антропометрия',
        'Материаловедение'
      ],
      lectures: [
        {
          title: 'Введение в дизайн мебели',
          duration: '45 мин',
          content: 'Обзор профессии дизайнера мебели. Основные задачи и компетенции специалиста. Взаимодействие с производством, маркетингом и продажами. Этапы проектирования от идеи до серийного производства.'
        },
        {
          title: 'История мебельного искусства',
          duration: '60 мин',
          content: 'Эволюция мебели от античности до современности. Стили: барокко, рококо, классицизм, модерн, баухаус, скандинавский дизайн. Знаковые дизайнеры: Чарльз Макинтош, Ле Корбюзье, Арне Якобсен, Филипп Старк. Анализ культовых предметов мебели XX-XXI века.'
        },
        {
          title: 'Эргономика и антропометрия',
          duration: '50 мин',
          content: 'Антропометрические данные и процентили населения. Эргономические требования к мебели различного назначения: стулья, столы, кровати, системы хранения. ГОСТ и международные стандарты. Зоны досягаемости и углы наклона. Психология восприятия комфорта.'
        },
        {
          title: 'Материаловедение',
          duration: '55 мин',
          content: 'Классификация материалов для мебели. Древесина: породы, свойства, области применения. ДСП, МДФ, фанера: технологии производства и характеристики. Современные композиты. Металлы и пластики. Экологические аспекты выбора материалов.'
        }
      ]
    },
    {
      title: 'Модуль 2: Проектирование',
      weeks: '4-6 недели',
      topics: [
        'Техническое черчение',
        'CAD-программы для мебели',
        'Конструктивные решения',
        'Разработка чертежей'
      ],
      lectures: [
        {
          title: 'Основы технического черчения',
          duration: '60 мин',
          content: 'ЕСКД: системы проектной документации. Виды, разрезы, сечения. Масштабы и линии чертежа. Нанесение размеров и допусков. Условные обозначения материалов. Деталировка и спецификации. Требования к оформлению документации.'
        },
        {
          title: 'CAD для мебельщиков',
          duration: '90 мин',
          content: 'Обзор программ: AutoCAD, SolidWorks, Fusion 360, Базис-Мебельщик. Создание 2D-чертежей и 3D-моделей. Параметрическое моделирование. Библиотеки фурнитуры. Автоматическая генерация деталировки и карт раскроя. Рендеринг и визуализация.'
        },
        {
          title: 'Конструкции и узлы',
          duration: '70 мин',
          content: 'Типы мебельных конструкций: каркасные, корпусные, щитовые. Соединения: шип-паз, конфирмат, шкант, эксцентриковая стяжка, ласточкин хвост. Фурнитура: петли, направляющие, механизмы трансформации. Усиление конструкций. Расчет нагрузок.'
        },
        {
          title: 'От эскиза к рабочему проекту',
          duration: '50 мин',
          content: 'Этапы разработки проекта мебели. Эскизное проектирование: поиск формы и пропорций. Технический проект: детализация конструкции. Рабочий проект: полный комплект документации для производства. Согласование с заказчиком и технологами.'
        }
      ]
    },
    {
      title: 'Модуль 3: Материалы и технологии',
      weeks: '7-9 недели',
      topics: [
        'Древесина и древесные материалы',
        'Металл в мебели',
        'Современные композитные материалы',
        'Технологии производства'
      ],
      lectures: [
        {
          title: 'Древесина в мебельном производстве',
          duration: '65 мин',
          content: 'Строение и свойства древесины. Твердые и мягкие породы: дуб, бук, ясень, сосна, береза. Пороки древесины и их влияние на качество. Сушка и хранение. Массив vs шпон. Защитная обработка: морение, лакирование, масла и воски.'
        },
        {
          title: 'Плитные материалы',
          duration: '50 мин',
          content: 'ДСП: классы эмиссии, ламинирование, кромкование. МДФ: свойства, фрезеровка, окраска. Фанера: сорта, применение в мебели. OSB и другие материалы. Выбор материала под задачу. Экономика использования плит. Оптимизация раскроя.'
        },
        {
          title: 'Металл и пластики',
          duration: '55 мин',
          content: 'Сталь и алюминий в мебели: профили, листы, трубы. Технологии обработки металла: резка, гибка, сварка, порошковая окраска. Пластики: полипропилен, акрил, поликарбонат. Стекло в мебели. Комбинированные материалы. Современные тренды в материалах.'
        },
        {
          title: 'Технологии производства',
          duration: '60 мин',
          content: 'Столярное производство: станки и операции. ЧПУ-обработка: фрезерование, сверление, раскрой. Гибка и формовка. Сборка: ручная и автоматизированная. Отделка поверхностей. Контроль качества. Упаковка и логистика. Производство на заказ vs массовое.'
        }
      ]
    },
    {
      title: 'Модуль 4: Практическая реализация',
      weeks: '10-12 недели',
      topics: [
        'От эскиза к прототипу',
        'Работа с производством',
        'Презентация проекта',
        'Защита итоговой работы'
      ],
      lectures: [
        {
          title: 'Прототипирование',
          duration: '55 мин',
          content: 'Создание макетов и прототипов. Масштабные модели. Полноразмерные макеты для тестирования эргономики. Материалы для прототипов: картон, пенокартон, дерево. 3D-печать в мебельном дизайне. Тестирование и итерации. Доработка по результатам тестов.'
        },
        {
          title: 'Взаимодействие с производством',
          duration: '50 мин',
          content: 'Передача проекта в производство. Технологический аудит: возможности и ограничения производства. Корректировка проекта под оборудование. Расчет себестоимости. Запуск пилотной партии. Выявление и устранение проблем. Оптимизация для серии.'
        },
        {
          title: 'Презентация и маркетинг',
          duration: '45 мин',
          content: 'Подготовка презентационных материалов. Фотосъемка мебели: основы предметной съемки. 3D-визуализация для каталогов. Создание презентаций для заказчиков. Storytelling в дизайне. Позиционирование продукта. Участие в выставках.'
        },
        {
          title: 'Защита проекта',
          duration: '30 мин',
          content: 'Структура итоговой работы. Описание концепции и обоснование решений. Демонстрация технической документации. Презентация макета или фотографий. Ответы на вопросы комиссии. Критерии оценки проектов. Типичные ошибки при защите.'
        }
      ]
    }
  ];

  const materials = [
    {
      category: 'Презентации',
      items: [
        { 
          title: 'Стили мебели XX века', 
          format: 'PDF',
          description: 'Иллюстрированный обзор основных стилей: модерн, ар-деко, баухаус, скандинавский дизайн, постмодернизм. Примеры знаковых предметов и их авторов. Влияние стилей на современный дизайн.'
        },
        { 
          title: 'Материалы в современной мебели', 
          format: 'PDF',
          description: 'Сравнительные характеристики материалов: прочность, долговечность, экологичность, цена. Таблицы свойств древесины различных пород. Примеры применения композитов. Тренды в материалах 2024-2025.'
        },
        { 
          title: 'Конструкции и узлы', 
          format: 'PDF',
          description: 'Детальные схемы основных типов соединений. Фотографии узлов в разобранном виде. Расчет прочности соединений. Рекомендации по выбору фурнитуры. Примеры конструктивных ошибок.'
        },
        { 
          title: 'Эргономика жилых пространств', 
          format: 'PDF',
          description: 'Антропометрические таблицы для разных возрастных групп. Зоны комфорта в различных помещениях. Стандарты высоты столов, стульев, кроватей. Эргономика кухни и ванной комнаты.'
        }
      ]
    },
    {
      category: 'Чертежи и схемы',
      items: [
        { 
          title: 'Стандартные размеры мебели', 
          format: 'DWG',
          description: 'Коллекция чертежей типовой мебели с размерами по ГОСТу. Стулья, столы, шкафы, кровати. Файлы в форматах DWG и PDF. Можно использовать как основу для собственных проектов.'
        },
        { 
          title: 'Библиотека узлов и соединений', 
          format: 'DWG',
          description: 'Более 50 типов мебельных соединений с деталировкой. Шиповые, на эксцентриках, на конфирматах. Узлы для каркасной и корпусной мебели. Примеры усиления конструкций.'
        },
        { 
          title: 'Примеры проектов', 
          format: 'PDF',
          description: 'Полные комплекты рабочей документации реальных проектов: обеденный стол, стеллаж, кресло, комод. Общие виды, деталировка, спецификации. Можно использовать для изучения правильного оформления.'
        },
        { 
          title: 'Шаблоны фурнитуры', 
          format: 'DWG',
          description: 'CAD-блоки популярной мебельной фурнитуры: петли Blum и Hettich, направляющие, подъемные механизмы, ручки. Сэкономит время при проектировании.'
        }
      ]
    },
    {
      category: 'Справочные материалы',
      items: [
        { 
          title: 'ГОСТ на мебель', 
          format: 'PDF',
          description: 'Сборник актуальных ГОСТов: общие технические условия, методы испытаний, требования безопасности, функциональные размеры. Обязательно к изучению перед проектированием.'
        },
        { 
          title: 'Каталоги фурнитуры', 
          format: 'PDF',
          description: 'Каталоги ведущих производителей фурнитуры: Blum, Hettich, Grass, Hafele. Технические характеристики, схемы монтажа, рекомендации по применению.'
        },
        { 
          title: 'Таблицы раскроя', 
          format: 'XLS',
          description: 'Excel-шаблоны для расчета оптимального раскроя плитных материалов. Минимизация отходов. Учет текстуры и направления волокон.'
        }
      ]
    }
  ];

  const assignments = [
    {
      title: 'Задание 1: Анализ существующей мебели',
      deadline: 'Неделя 2',
      description: 'Выберите предмет мебели (стул, стол, шкаф или другое изделие) и проведите его детальный профессиональный анализ.',
      tasks: [
        'Определите стиль и эпоху создания предмета',
        'Проанализируйте конструкцию: тип каркаса, соединения, использованная фурнитура',
        'Изучите материалы: порода древесины, тип обработки, отделка',
        'Оцените эргономику: соответствие антропометрическим данным, удобство использования',
        'Выявите сильные стороны и недостатки конструкции',
        'Сделайте обмерочные эскизы с основными размерами'
      ],
      deliverables: [
        'Презентация (12-15 слайдов) с фотографиями и схемами',
        'Эскизы и обмерочные чертежи',
        'Письменный анализ (2-3 страницы текста)',
        'Выводы и рекомендации по возможному улучшению'
      ],
      criteria: [
        'Полнота анализа — 30%',
        'Качество эскизов и чертежей — 25%',
        'Глубина исследования материалов — 20%',
        'Оценка эргономики — 15%',
        'Оформление презентации — 10%'
      ]
    },
    {
      title: 'Задание 2: Эскизный проект',
      deadline: 'Неделя 5',
      description: 'Разработайте эскизный проект предмета мебели по одной из тем: рабочий стул, журнальный столик, или полка. Проект должен учитывать эргономику, функциональность и эстетику.',
      tasks: [
        'Сформулируйте концепцию: целевая аудитория, стиль, идея',
        'Создайте серию эскизов (минимум 8-10 вариантов)',
        'Выберите оптимальный вариант и доработайте его',
        'Учтите эргономические требования и антропометрию',
        'Проработайте пропорции и детали',
        'Выберите материалы и обоснуйте выбор'
      ],
      deliverables: [
        'Концепция проекта (описание идеи, референсы, mood board)',
        'Поисковые эскизы (8-10 вариантов)',
        'Проработанный эскиз финального варианта (вид спереди, сбоку, сверху)',
        'Описание конструкции и материалов',
        'Обоснование эргономических решений'
      ],
      criteria: [
        'Оригинальность концепции — 25%',
        'Разнообразие поисковых эскизов — 20%',
        'Проработка финального варианта — 25%',
        'Учет эргономики — 20%',
        'Обоснование решений — 10%'
      ]
    },
    {
      title: 'Задание 3: Технический проект',
      deadline: 'Неделя 8',
      description: 'На основе эскизного проекта (Задание 2) подготовьте полный комплект технической документации, необходимой для изготовления изделия на производстве.',
      tasks: [
        'Разработайте общий вид изделия (3 проекции)',
        'Создайте деталировку: чертежи всех деталей с размерами',
        'Составьте спецификацию материалов и фурнитуры',
        'Укажите технологию обработки ключевых деталей',
        'Проработайте узлы соединений',
        'Оформите документацию по ЕСКД'
      ],
      deliverables: [
        'Чертеж общего вида (формат А3) — 3 проекции',
        'Деталировка (все детали с размерами)',
        'Спецификация материалов (ГОСТ 2.108-68)',
        'Чертежи ключевых узлов и соединений',
        'Технологические указания',
        'Все файлы в формате DWG или PDF'
      ],
      criteria: [
        'Правильность выполнения чертежей — 30%',
        'Полнота деталировки — 25%',
        'Корректность спецификации — 20%',
        'Проработка узлов — 15%',
        'Соответствие ЕСКД — 10%'
      ]
    },
    {
      title: 'Задание 4: Итоговый проект',
      deadline: 'Неделя 12',
      description: 'Завершите разработку проекта, создайте макет или 3D-визуализацию и подготовьте презентацию для защиты перед комиссией.',
      tasks: [
        'Доработайте техническую документацию с учетом замечаний',
        'Создайте макет (масштабный или полноразмерный) ИЛИ фотореалистичную 3D-визуализацию',
        'Подготовьте презентацию проекта (структура, визуальное оформление)',
        'Рассчитайте примерную себестоимость изделия',
        'Опишите технологию производства',
        'Подготовьтесь к ответам на вопросы комиссии'
      ],
      deliverables: [
        'Полный комплект технической документации (доработанный)',
        'Макет ИЛИ 3D-визуализация (не менее 5 ракурсов)',
        'Презентация (20-25 слайдов)',
        'Расчет себестоимости',
        'Описание технологического процесса',
        'Пояснительная записка (5-7 страниц)'
      ],
      criteria: [
        'Качество проработки проекта — 30%',
        'Макет/визуализация — 25%',
        'Презентация и защита — 20%',
        'Экономическое обоснование — 15%',
        'Документация — 10%'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Дизайн мебели</h1>
              <p className="text-sm text-muted-foreground">Электронное образовательное пособие</p>
            </div>
            <nav className="flex gap-6">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="font-medium"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeSection === 'program' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('program')}
                className="font-medium"
              >
                <Icon name="BookOpen" size={16} className="mr-2" />
                Программа курса
              </Button>
              <Button 
                variant={activeSection === 'materials' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('materials')}
                className="font-medium"
              >
                <Icon name="Library" size={16} className="mr-2" />
                Материалы
              </Button>
              <Button 
                variant={activeSection === 'assignments' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('assignments')}
                className="font-medium"
              >
                <Icon name="ClipboardList" size={16} className="mr-2" />
                Задания
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-5xl font-bold text-primary">Добро пожаловать</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Электронное пособие по дизайну мебели — это комплексный образовательный курс, 
                объединяющий теоретические знания и практические навыки проектирования мебели.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="GraduationCap" size={32} className="text-accent mb-2" />
                  <CardTitle>12 недель обучения</CardTitle>
                  <CardDescription>Полный курс от основ до защиты проекта</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="FileText" size={32} className="text-accent mb-2" />
                  <CardTitle>4 практических задания</CardTitle>
                  <CardDescription>Разработка реальных проектов мебели</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Award" size={32} className="text-accent mb-2" />
                  <CardTitle>Итоговая работа</CardTitle>
                  <CardDescription>Защита собственного проекта</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/9c9a170f-50fd-4d22-a42a-284dad9d72e9/files/2d4d281d-d960-4d22-886e-7ca77d86fffd.jpg" 
                  alt="Дизайн мебели" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/9c9a170f-50fd-4d22-a42a-284dad9d72e9/files/2418fb92-5ab3-4c89-9bb0-77c4de2aa616.jpg" 
                  alt="Эргономика" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </section>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl">О курсе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Курс «Дизайн мебели» предназначен для студентов, желающих освоить профессию дизайнера мебели. 
                  В программе курса теоретические основы дизайна, изучение материалов и технологий, 
                  освоение CAD-программ и развитие практических навыков проектирования.
                </p>
                <p>
                  В течение 12 недель вы пройдете путь от изучения истории мебели до разработки 
                  и защиты собственного проекта. Программа включает видеолекции, практические задания, 
                  работу с чертежами и создание прототипов.
                </p>
                <p>
                  По завершении курса вы получите комплексные знания о проектировании мебели, 
                  научитесь работать с технической документацией, освоите современные инструменты 
                  и сможете создавать профессиональные проекты для производства.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="User" size={24} className="text-accent mb-2" />
                <CardTitle>Преподаватель курса</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Марина Владимировна Соколова</strong> — дизайнер мебели с 15-летним опытом работы. 
                  Выпускница МГХПА им. С.Г. Строганова. Работала с ведущими мебельными фабриками России. 
                  Автор более 200 реализованных проектов.
                </p>
                <p className="text-muted-foreground">
                  Специализация: проектирование корпусной и мягкой мебели, мебель на заказ, 
                  авторские коллекции. Преподает с 2015 года.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'program' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Программа курса</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Курс состоит из 4 модулей, каждый из которых включает видеолекции, 
                презентации и практические задания
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {courseModules.map((module, idx) => (
                <AccordionItem key={idx} value={`module-${idx}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.weeks}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-14 space-y-6 pt-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Темы модуля:</h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="flex items-start gap-2">
                              <Icon name="Check" size={16} className="text-accent mt-1 shrink-0" />
                              <span className="text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Лекции:</h4>
                        <div className="space-y-3">
                          {module.lectures.map((lecture, lectureIdx) => (
                            <Card key={lectureIdx} className="bg-muted/30">
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between gap-4">
                                  <CardTitle className="text-base">{lecture.title}</CardTitle>
                                  <span className="text-sm text-muted-foreground shrink-0 flex items-center gap-1">
                                    <Icon name="Clock" size={14} />
                                    {lecture.duration}
                                  </span>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {lecture.content}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {activeSection === 'materials' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Учебные материалы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Коллекция презентаций, чертежей, справочников и других материалов для изучения
              </p>
            </div>

            <Tabs defaultValue="presentations" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
                <TabsTrigger value="presentations">Презентации</TabsTrigger>
                <TabsTrigger value="drawings">Чертежи</TabsTrigger>
                <TabsTrigger value="references">Справочники</TabsTrigger>
              </TabsList>

              <TabsContent value="presentations" className="space-y-4">
                {materials.filter(m => m.category === 'Презентации')[0]?.items.map((item, idx) => (
                  <Card key={idx} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <Icon name="FileText" size={24} className="text-accent" />
                            <CardTitle>{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-sm leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                            {item.format}
                          </span>
                          <Button size="sm" variant="outline">
                            <Icon name="Download" size={14} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="drawings" className="space-y-4">
                {materials.filter(m => m.category === 'Чертежи и схемы')[0]?.items.map((item, idx) => (
                  <Card key={idx} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <Icon name="Pencil" size={24} className="text-accent" />
                            <CardTitle>{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-sm leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                            {item.format}
                          </span>
                          <Button size="sm" variant="outline">
                            <Icon name="Download" size={14} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="references" className="space-y-4">
                {materials.filter(m => m.category === 'Справочные материалы')[0]?.items.map((item, idx) => (
                  <Card key={idx} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <Icon name="BookOpen" size={24} className="text-accent" />
                            <CardTitle>{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-sm leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                            {item.format}
                          </span>
                          <Button size="sm" variant="outline">
                            <Icon name="Download" size={14} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'assignments' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Практические задания</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Четыре масштабных практических задания для закрепления теории и развития навыков
              </p>
            </div>

            <div className="space-y-6">
              {assignments.map((assignment, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="bg-accent/5 border-b px-6 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Icon name="Calendar" size={14} />
                            Срок сдачи: {assignment.deadline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Icon name="Target" size={18} />
                        Описание задания
                      </h4>
                      <p className="text-muted-foreground">{assignment.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Icon name="ListChecks" size={18} />
                        Что нужно сделать
                      </h4>
                      <ul className="space-y-2">
                        {assignment.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={16} className="text-accent mt-1 shrink-0" />
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Icon name="PackageCheck" size={18} />
                        Что нужно сдать
                      </h4>
                      <ul className="space-y-2">
                        {assignment.deliverables.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <Icon name="FileCheck" size={16} className="text-accent mt-1 shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Icon name="Scale" size={18} />
                        Критерии оценки
                      </h4>
                      <ul className="space-y-2">
                        {assignment.criteria.map((criterion, critIdx) => (
                          <li key={critIdx} className="flex items-start gap-2">
                            <Icon name="Star" size={16} className="text-accent mt-1 shrink-0" />
                            <span className="text-sm text-muted-foreground">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Электронное образовательное пособие по дизайну мебели</p>
          <p className="mt-2">© 2024 Все материалы защищены авторским правом</p>
        </div>
      </footer>
    </div>
  );
}