<script setup lang="ts"></script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Привет, я <span class="highlight">LiveisFPV</span> 👋</h1>
      <p>
        Я начинающий backend-разработчик, увлечён Go и Python. Это мой сайт, где я делюсь своими
        проектами и навыками.
      </p>
      <div class="cta-row">
        <RouterLink class="btn btn-accent" to="/projects">Посмотреть проекты</RouterLink>
      </div>
    </section>

    <section class="info">
      <div class="info-card">
        <h2>Проекты</h2>
        <p>5 крупных проекта</p>
        <p>Множество малых учебных проектов</p>
      </div>
      <div class="info-card">
        <h2>Хакатоны</h2>
        <p>Призер областных хакатонов, финалист всеросийского</p>
        <p>Участие в более 10 хакатонах</p>
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
  background: linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 70%, white 30%));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  background: linear-gradient(135deg, var(--surface-soft), var(--color-background));
  padding: 2rem;
  border-radius: 1.5rem;
  min-width: 250px;
  max-width: 350px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-1);
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
  background: linear-gradient(135deg, var(--surface-soft), var(--color-background));
  padding: 2rem;
  border-radius: 1.5rem;
  min-width: 250px;
  max-width: 350px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-1);
  text-align: center;
  transition: transform 0.3s ease;
}

.cta-row {
  margin-top: 1.25rem;
  display: flex;
  justify-content: center;
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
</style>
