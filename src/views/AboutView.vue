<template>
  <div class="about">
    <section class="intro">
      <h1>Обо мне</h1>
      <p>
        Привет! Я <strong>LiveisFPV</strong>. Увлекаюсь backend-разработкой и люблю изучать новые
        технологии.
      </p>
      <p>Основной стек: <strong>Go, Python, PostgreSQL, Docker</strong>.</p>
      <p>
        Я принимал участие в нескольких хакатонах, где получил опыт командной разработки и быстрой
        реализации идей. Несколько из них принесли мне призовое место на региональном уровне. А
        также выход на всеросийский уровень.
      </p>
      <p>
        Сейчас я работаю над системой семантического поиска научных статей и изучаю архитектуру
        сервисов и работу с большими данными.
      </p>
    </section>

    <section class="skills">
      <h2>Навыки</h2>
      <ul>
        <li>Основные Языки: Go, Python</li>
        <li>Средний уровень: TS, C/C++</li>
        <li>Начальный уровень: PHP, Java, JS</li>
        <li>Инструменты: Docker, Git, PostgreSQL, Redis, RabbitMQ, Linux, MySQL, GitActions</li>
        <li>Фреймворки: Gin, Flask, gRPC, FastApi</li>
        <li>Другие навыки: работа в команде, проектирование API и структуры БД, CI/CD</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease;
}

.intro,
.skills {
  background: linear-gradient(135deg, var(--surface-soft), var(--color-background));
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-1);
  margin-bottom: 2rem;
}

h1,
h2 {
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  text-align: center;
}

p,
li {
  font-size: 1.1rem;
  color: var(--vt-c-text-light-2);
  line-height: 1.7;
  margin-bottom: 1rem;
}

strong {
  color: var(--color-heading);
  font-weight: 600;
}

ul {
  padding-left: 1.25rem;
  list-style: disc;
}

@media (max-width: 600px) {
  .about {
    padding: 2rem 1rem;
  }

  p,
  li {
    font-size: 1rem;
  }
}

@media (min-width: 700px) {
  .skills ul {
    columns: 2;
    column-gap: 2rem;
  }
}
</style>
