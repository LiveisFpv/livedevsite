<template>
  <div class="projects">
    <h1>Проекты</h1>
    <div class="project-list">
      <section
        v-for="project in projectsStore.getProjectsByCategory('projects')"
        :key="project.id"
        class="project-card"
      >
        <h2>{{ project.emoji }} {{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p v-if="project.stack"><strong>Стек:</strong> {{ project.stack }}</p>
        <p v-if="project.features"><strong>Особенности:</strong> {{ project.features }}</p>
        <p v-if="project.learned"><strong>Чему научился:</strong> {{ project.learned }}</p>
        <p v-if="project.frameworks"><strong>Фреймворки:</strong> {{ project.frameworks }}</p>
        <div v-if="project.githubLink" class="link">
          <a :href="project.githubLink" target="_blank">Исходный код</a>
        </div>
      </section>
    </div>
  </div>
  <div class="projects">
    <h1>Хакатоны</h1>
    <div class="project-list">
      <section
        v-for="project in projectsStore.getProjectsByCategory('hackathons')"
        :key="project.id"
        class="project-card"
      >
        <h2>{{ project.emoji }} {{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p v-if="project.stack"><strong>Стек:</strong> {{ project.stack }}</p>
        <p v-if="project.features"><strong>Особенности:</strong> {{ project.features }}</p>
        <p v-if="project.learned"><strong>Чему научился:</strong> {{ project.learned }}</p>
        <p v-if="project.frameworks"><strong>Фреймворки:</strong> {{ project.frameworks }}</p>
        <div v-if="project.githubLink" class="link">
          <a :href="project.githubLink" target="_blank">Исходный код</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
</script>

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
  background: linear-gradient(135deg, var(--color-background-soft), var(--color-background));
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
