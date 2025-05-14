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

  <footer>
    <a href="https://github.com/LiveisFpv" class="icon">
      <img src="./assets/github.png" alt="Github" class="icon animate-bounce-in" />
    </a>
  </footer>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  margin-top: 0.5rem;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  animation: fromUp 1s ease-in-out;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
  transform: scale(1.1);
  font-weight: 600;
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out;
}

footer {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-soft);
  z-index: 100;
  animation: appear 1s ease-in-out;
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
    margin-left: -1rem;
  }
  .logo {
    width: 76px;
    height: 76px;
    border-radius: 80px;
  }
}
.mobile-header {
  display: none;
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
    gap: 15px;
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
