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
      ]
    }
  ];

  const materials = [
    {
      category: 'Лекции',
      items: [
        { title: 'Введение в дизайн мебели', duration: '45 мин', format: 'Видео' },
        { title: 'История мебельного искусства', duration: '60 мин', format: 'Видео' },
        { title: 'Эргономика в дизайне', duration: '40 мин', format: 'Видео' }
      ]
    },
    {
      category: 'Презентации',
      items: [
        { title: 'Стили мебели XX века', duration: '—', format: 'PDF' },
        { title: 'Материалы в современной мебели', duration: '—', format: 'PDF' },
        { title: 'Конструкции и узлы', duration: '—', format: 'PDF' }
      ]
    },
    {
      category: 'Чертежи и схемы',
      items: [
        { title: 'Стандартные размеры мебели', duration: '—', format: 'DWG' },
        { title: 'Узлы и соединения', duration: '—', format: 'DWG' },
        { title: 'Примеры проектов', duration: '—', format: 'PDF' }
      ]
    }
  ];

  const assignments = [
    {
      title: 'Задание 1: Анализ существующей мебели',
      deadline: 'Неделя 2',
      description: 'Выберите предмет мебели и проведите его детальный анализ: стиль, конструкция, материалы, эргономика.',
      deliverables: ['Презентация (10-15 слайдов)', 'Эскизы и фотографии', 'Письменный анализ']
    },
    {
      title: 'Задание 2: Эскизный проект',
      deadline: 'Неделя 5',
      description: 'Разработайте эскизный проект мебели по выбранной теме. Учтите эргономику и функциональность.',
      deliverables: ['Эскизы (минимум 5)', 'Описание концепции', 'Обоснование решений']
    },
    {
      title: 'Задание 3: Технический проект',
      deadline: 'Неделя 8',
      description: 'Подготовьте полный комплект рабочих чертежей разработанного изделия.',
      deliverables: ['Чертежи общего вида', 'Деталировка', 'Спецификация материалов']
    },
    {
      title: 'Задание 4: Итоговый проект',
      deadline: 'Неделя 12',
      description: 'Завершите разработку проекта и подготовьте презентацию для защиты.',
      deliverables: ['Презентация проекта', 'Полный комплект документации', '3D-визуализация или макет']
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
                  В программе курса — изучение истории мебельного искусства, основ эргономики, материаловедения, 
                  конструирования и технологий производства.
                </p>
                <p>
                  Особое внимание уделяется практической работе: студенты разрабатывают собственные проекты 
                  от эскиза до технической документации, учатся работать с CAD-системами и презентовать свои идеи.
                </p>
              </CardContent>
            </Card>

            <section>
              <h3 className="text-3xl font-bold text-primary mb-6">Преподаватель курса</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={48} className="text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Иванов Алексей Петрович</h4>
                      <p className="text-muted-foreground">
                        Кандидат искусствоведения, доцент кафедры дизайна
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Опыт преподавания: 15 лет. Автор более 30 реализованных проектов в области мебельного дизайна. 
                        Победитель международных конкурсов дизайна.
                      </p>
                      <div className="flex gap-4 pt-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Mail" size={16} className="mr-2" />
                          a.ivanov@university.ru
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Phone" size={16} className="mr-2" />
                          +7 (495) 123-45-67
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'program' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-primary">Программа курса</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Курс рассчитан на 12 недель обучения и включает 4 основных модуля. 
                Каждый модуль завершается практическим заданием.
              </p>
            </div>

            <div className="grid gap-6">
              {courseModules.map((module, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          {module.weeks}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-accent">{index + 1}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-3">
                          <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={24} className="text-accent" />
                  Результаты обучения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Владение теоретическими основами дизайна мебели и понимание исторического контекста</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Умение разрабатывать эргономичные и функциональные мебельные конструкции</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Навыки работы с CAD-программами и подготовки технической документации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Способность презентовать и защищать собственные дизайн-проекты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'materials' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-primary">Учебные материалы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Все необходимые материалы для успешного освоения курса: видеолекции, 
                презентации, чертежи и справочная литература.
              </p>
            </div>

            <Tabs defaultValue="lectures" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="lectures">Лекции</TabsTrigger>
                <TabsTrigger value="presentations">Презентации</TabsTrigger>
                <TabsTrigger value="drawings">Чертежи</TabsTrigger>
              </TabsList>

              <TabsContent value="lectures" className="space-y-4">
                {materials[0].items.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon name="Video" size={24} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.duration}</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          <Icon name="Play" size={16} className="mr-2" />
                          Смотреть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="presentations" className="space-y-4">
                {materials[1].items.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon name="FileText" size={24} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">Формат: {item.format}</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="drawings" className="space-y-4">
                {materials[2].items.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon name="Ruler" size={24} className="text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">Формат: {item.format}</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" size={24} />
                    Рекомендованная литература
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li>• Бартенев Ю.В. «Форма и материал»</li>
                    <li>• Соболев Н.Н. «Стили в мебели»</li>
                    <li>• Грашин А.А. «Дизайн и основы композиции»</li>
                    <li>• Михайлов С.М. «Основы дизайна»</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Globe" size={24} />
                    Полезные ресурсы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li>• Базы данных мебельных стандартов</li>
                    <li>• Библиотеки 3D-моделей мебели</li>
                    <li>• Каталоги современных материалов</li>
                    <li>• Архивы международных выставок</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'assignments' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-primary">Практические задания</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Четыре ключевых практических задания для закрепления теоретических знаний 
                и развития профессиональных навыков дизайнера мебели.
              </p>
            </div>

            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/9c9a170f-50fd-4d22-a42a-284dad9d72e9/files/594f6394-dc87-4c0e-83d7-dd3af17c9a8b.jpg" 
                alt="Примеры мебели" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {assignments.map((assignment, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-accent">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Icon name="Clock" size={14} />
                          Срок сдачи: {assignment.deadline}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Описание задания:</h4>
                        <p className="text-muted-foreground">{assignment.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Требуемые материалы для сдачи:</h4>
                        <ul className="space-y-2">
                          {assignment.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <Icon name="CheckSquare" size={16} className="text-accent" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button variant="default">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить работу
                        </Button>
                        <Button variant="outline">
                          <Icon name="FileDown" size={16} className="mr-2" />
                          Скачать задание
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="bg-muted/30 mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Критерии оценивания
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={20} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Соответствие требованиям (30%)</p>
                    <p className="text-sm text-muted-foreground">Выполнение всех пунктов технического задания</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={20} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Креативность решения (25%)</p>
                    <p className="text-sm text-muted-foreground">Оригинальность и новизна предложенных идей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={20} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Техническая проработка (25%)</p>
                    <p className="text-sm text-muted-foreground">Качество чертежей и документации</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={20} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">Презентация (20%)</p>
                    <p className="text-sm text-muted-foreground">Качество оформления и защиты проекта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Кафедра дизайна</p>
              <p className="text-sm text-muted-foreground">Университет искусств и дизайна</p>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
