<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="mobile-header">
      <button class="hamburger" @click="toggleMenu">☰</button>

      <img src="./assets/avatar.jpg" alt="Avatar" class="logo" />
    </div>

    <div class="wrapper" :class="{ open: isMenuOpen }">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Инфо</RouterLink>
        <RouterLink to="/projects">Проекты</RouterLink>
      </nav>
      <img src="./assets/avatar.jpg" alt="Avatar" class="logo" id="logo" />
    </div>
  </header>
  <RouterView />
  <footer>
    <a href="https://github.com/LiveisFpv" class="icon">
      <img src="./assets/github.png" alt="Github" class="icon animate-bounce-in" />
    </a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 50;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  backdrop-filter: saturate(140%) blur(8px);
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  font-size: 0.95rem;
  text-align: center;
  align-items: center;
  animation: fromUp 0.6s ease-in-out;
}

nav a {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  border: 1px solid transparent;
  color: var(--vt-c-text-light-2);
}

nav a:hover {
  color: var(--color-heading);
  background: var(--surface-soft);
  border-color: var(--glass-border);
}

nav a.router-link-exact-active {
  color: white;
  background: linear-gradient(
    135deg,
    var(--color-accent),
    color-mix(in oklab, var(--color-accent) 70%, white 30%)
  );
  border-color: transparent;
  box-shadow: var(--shadow-1);
}

.none {
  display: none;
}

.logo {
  width: 64px;
  height: 64px;
  border-radius: 64px;
}

.icon {
  width: 32px;
  height: 32px;
  border-radius: 32px;
}

nav a:hover {
  transform: translateY(-1px);
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--glass-bg);
  border-top: 1px solid var(--glass-border);
  backdrop-filter: saturate(140%) blur(8px);
  z-index: 40;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (min-width: 768px) {
  nav {
    margin-left: 1rem;
  }
  .logo {
    width: 76px;
    height: 76px;
    border-radius: 80px;
  }
}
.mobile-header {
  display: none;
  padding: 0.5rem 0.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  backdrop-filter: saturate(140%) blur(8px);
}

.hamburger {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-right: auto;
  padding: 0.5rem;
}

@media (max-width: 500px) {
  .wrapper {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .wrapper.open {
    display: flex;
  }

  nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .logo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  #logo {
    display: none;
  }
}

@keyframes fromUp {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
