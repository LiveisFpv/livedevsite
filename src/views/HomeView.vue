<script setup lang="ts"></script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Привет, я <span class="highlight">LiveisFPV</span> 👋</h1>
      <p>
        Я начинающий backend-разработчик, увлечён Go и Python. Это мой сайт, где я делюсь своими
        проектами и навыками.
      </p>
    </section>

    <section class="info">
      <div class="info-card">
        <h2>Проекты</h2>
        <p>2 крупных проекта</p>
        <p>Множество малых учебных проектов</p>
      </div>
      <div class="info-card">
        <h2>Хакатоны</h2>
        <p>Призер областного хакатона</p>
        <p>Участие в 5 хакатонах</p>
      </div>
      <div class="info-card">
        <h2>1 год</h2>
        <p>Опыт разработки</p>
      </div>
    </section>
    <section class="project">
      <h1>Мои проекты</h1>
      <div class="info">
        <div class="project-card">
          <h2>Discord-Bot</h2>
          <p>Бот для прослушивания музыки и просмотра мемов</p>
          <p>Docker + Python</p>
        </div>
        <div class="project-card">
          <h2>В разработке</h2>
          <p>Система семантического поиска научных статей</p>
          <p>Docker + GO + Python + PG</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 3rem 1rem;
}

.hero {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  animation: fadeIn 1s ease-in-out;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero .highlight {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 800;
}

.hero p {
  font-size: 1.2rem;
  color: var(--vt-c-text-light-2);
}

.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.info h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.info-card {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 1.5rem;
  min-width: 250px;
  max-width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  align-items: center;
  transition: transform 0.3s ease;
  animation: fromLeft 1s ease-in-out;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.info-card p {
  font-size: 1rem;
  color: var(--vt-c-text-light-2);
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  animation: fromRight 1s ease-in-out;
}

.project h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.project-card {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 1.5rem;
  min-width: 250px;
  max-width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.project-card p {
  font-size: 1rem;
  color: var(--vt-c-text-light-2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
