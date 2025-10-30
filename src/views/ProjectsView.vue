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
  max-width: 1200px;
  margin-inline: auto;
}

.projects h1 {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 520px));
  gap: 1.75rem;
  align-items: stretch;
  justify-content: center;
}

.project-card {
  background: linear-gradient(135deg, var(--surface-soft), var(--color-background));
  padding: 1.5rem 1.25rem;
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-1);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  text-align: justify;
  margin-inline: auto;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-2);
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
  color: var(--color-accent);
  transition: 0.2s ease;
  padding: 3px 4px;
  border-radius: 8px;
}
.project-card a:hover {
  transform: translateY(-1px);
  background: var(--surface-soft);
  border: 1px solid var(--glass-border);
}
.link {
  text-align: center;
  padding: 5px;
}
</style>
