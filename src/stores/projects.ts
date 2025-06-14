import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Project {
  id: number
  title: string
  emoji: string
  description: string
  stack?: string
  features?: string
  frameworks?: string
  learned?: string
  githubLink?: string
  category: 'projects' | 'hackathons'
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: 1,
      title: 'Discord-Bot',
      emoji: '🎵',
      description:
        'Многофункциональный бот для Discord с поддержкой музыки, мемов и простого администрирования.',
      stack: 'Python, Docker.',
      learned:
        'Асинхронное программирование, работа с API Discord и Reddit, деплою через Docker и рефакторингу.',
      githubLink: 'https://github.com/LiveisFpv/NekoBot-Lite',
      category: 'projects',
    },
    {
      id: 7,
      title: 'Система управления стипендиями',
      emoji: '💰',
      description:
        'Система для управления стипендиями студентов с возможностью автоматического начисления с учетом оценок, бюджета и возможностью исправления данных.',
      stack: 'Vue, TypeScript, Vite, Go, Gin, PostgreSQL, Docker.',
      learned: 'Базовые знания Vue, работа с формами и таблицами. Транзакции и функции в БД.',
      githubLink: 'https://github.com/LiveisFpv/Go-web',
      category: 'projects',
    },
    {
      id: 2,
      title: 'Система семантического поиска',
      emoji: '🔍',
      description:
        'В разработке. Система для поиска научных публикаций с использованием внешнего цитирования и нейросетей.',
      stack: 'Go, Python, PostgreSQL, Docker, ELK.',
      features: 'Чистая архитектура, gRPC между сервисами, векторный поиск.',
      githubLink: 'https://github.com/LiveisFpv/VKR_docs',
      category: 'projects',
    },
    {
      id: 3,
      title: 'Мелкие проекты',
      emoji: '👨‍🎓',
      description: 'Учебные и мелкие собственные проекты',
      stack: 'Python, PHP, C/C++, Java, Assembler, Go, MySQL, PostgreSQL, Docker.',
      frameworks: 'PyQt, Flask, Gin, Java Spring, Symfony.',
      category: 'projects',
    },
    {
      id: 4,
      title: 'Система для соревнований',
      emoji: '🏆',
      description:
        'Разработка системы ФСП для автоматизации и сбора информации соревнований по программированию.',
      stack: 'Vue, TypeScript, Go, Gin, PostgreSQL, Minio S3, RabbitMQ, Docker.',
      features:
        'Чистая архитектура, уведомления пользователей через ТГ и email, автоматическая генерация сертификатов.',
      learned: 'Работать с нереляционными БД',
      githubLink: 'https://github.com/LiveisFpv/PP_omnia_64',
      category: 'hackathons',
    },
    {
      id: 5,
      title: 'Фитнес приложение',
      emoji: '🏃‍♀️',
      description:
        'Разработка сайта для педоставления индивидуальных тренировок и питания в зависимости от пользователя.',
      stack: 'Vue, TypeScript, Vite, Go, Gin, gRPC, PostgreSQL, Docker.',
      features:
        'Микросервисная архитектура, автоматическая генерация рациона и тренировок. Автоматический деплой на VPS.',
      learned:
        'Разрабатывать микросервисную архитектуру, авторизация Oauth2.0, делать конфиги Nginx.',
      githubLink: 'https://github.com/LiveisFpv/Fitness_hack',
      category: 'hackathons',
    },
    {
      id: 6,
      title: 'Сервис для создания плана путешествий',
      emoji: '🌍',
      description:
        'Разработка умного сервиса для планирования пушествий с использованием ИИ в зависимости от бюджета и предпочтений пользователя, а также с учетом погоды и времени на посещение.',
      features:
        ' Использование нейросетей для генерации маршрутов и рекомендаций, возжность чата для внесения изменений.',
      learned: 'Работа по API с различными сервисами, взаимодействие между микросервисами.',
      stack: 'Vue, JavaScript, Vite, Go, Gin, PostgreSQL, Python, FastAPI, pyTorch, Docker.',
      category: 'hackathons',
    },
  ])

  const getProjectsByCategory = (category: 'projects' | 'hackathons') => {
    return projects.value.filter((project) => project.category === category)
  }

  // async function fetchProjects() {
  //   const response = await fetch('/api/projects')
  //   projects.value = await response.json()
  // }

  return {
    projects,
    getProjectsByCategory,
  }
})
