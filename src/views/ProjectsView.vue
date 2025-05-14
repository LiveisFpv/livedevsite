<template>
  <div class="projects">
    <h1>Проекты</h1>
    <div class="project-list">
      <section class="project-card">
        <h2>🎵 Discord-Bot</h2>
        <p>
          Многофункциональный бот для Discord с поддержкой музыки, мемов и простого
          администрирования.
        </p>
        <p><strong>Стек:</strong> Python, Docker.</p>
        <p>
          <strong>Чему научился:</strong> асинхронное программирование, работа с API Discord и
          Reddit, деплою через Docker и рефакторингу.
        </p>
        <div class="link">
          <a href="https://github.com/LiveisFpv/NekoBot-Lite" target="_blank">Исходный код</a>
        </div>
      </section>

      <section class="project-card">
        <h2>🔍 Система семантического поиска</h2>
        <p>
          В разработке. Система для поиска научных публикаций с использованием внешнего цитирования
          и нейросетей.
        </p>
        <p><strong>Стек:</strong> Go, Python, PostgreSQL, Docker, ELK.</p>
        <p>
          <strong>Особенности:</strong> чистая архитектура, gRPC между сервисами, векторный поиск.
        </p>
        <div class="link">
          <a href="https://github.com/LiveisFpv/VKR_docs" target="_blank">Исходный код</a>
        </div>
      </section>

      <section class="project-card">
        <h2>👨‍🎓 Мелкие проекты</h2>
        <p>Учебные и мелкие собственные проекты</p>
        <p><strong>Стек:</strong> Python, PHP, C/C++, Java, Assembler, Go, MySQL, PostgreSQL.</p>
        <p><strong>Фреймворки:</strong> PyQt, Flask, Gin, Java Spring, Symfony.</p>
      </section>
    </div>
  </div>
  <div class="projects">
    <h1>Хакатоны</h1>
    <div class="project-list">
      <section class="project-card">
        <h2>🏆 Система для соревнований</h2>
        <p>
          Разработка системы ФСП для автоматизации и сбора информации соревнований по
          программированию.
        </p>
        <p><strong>Frontend:</strong> Vue, TypeScript.</p>
        <p><strong>Backend:</strong> Go, Gin, PostgreSQL, Minio S3.</p>
        <p><strong>Роль в команде:</strong> Backend-разработчик Golang.</p>
        <p>
          <strong>Особенности:</strong> чистая архитектура, уведомеления пользователей через ТГ и
          email, автоматическая генерация сертификатов.
        </p>
        <div class="link">
          <a href="https://github.com/LiveisFpv/PP_omnia_64" target="_blank">Исходный код</a>
        </div>
      </section>

      <section class="project-card">
        <h2>🏃‍♀️ Фитнес приложение</h2>
        <p>
          Разработка сайта для педоставления индивидуальных тренировок и питания в зависимост и от
          пользователя.
        </p>
        <p><strong>Frontend:</strong> Vue, TypeScript, Vite.</p>
        <p><strong>Backend:</strong> Go, Gin, gRPC, PostgreSQL.</p>
        <p><strong>Роль в команде:</strong> Backend-разработчик Golang, TeamLead.</p>
        <p>
          <strong>Особенности:</strong> микросервисная архитектура, автоматическая генерация рациона
          и тренировок. Автоматический деплой на VPS.
        </p>
        <p>
          <strong>Чему научился:</strong> разрабатывать микросервисную архитектуру, авторизация
          Oauth2.0, делать конфиги Nginx.
        </p>
        <div class="link">
          <a href="https://github.com/LiveisFpv/Fitness_hack" target="_blank">Исходный код</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: 3rem 1rem;
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
}

.projects h1 {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.project-card {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 1.5rem;
  min-width: 250px;
  max-width: 550px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: justify;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h2 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  text-align: center;
}

.project-card p {
  color: var(--vt-c-text-light-2);
  font-size: 1rem;
}

.project-card strong {
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
}

.project-card a {
  font-size: 1rem;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}
.project-card a:hover {
  transform: scale(1.1);
  font-weight: 600;
}
.link {
  text-align: center;
  padding: 5px;
}
</style>
