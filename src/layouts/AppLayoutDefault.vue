<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AppLayoutDefault',
})
</script>

<template>
  <div class="layout-default">
    <header>
      <nav>
        <RouterLink to="/" class="logo-link">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
          <span>Web Dev Lab</span>
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/testing">Testing</RouterLink>
          <RouterLink to="/accessibility">Accessibility</RouterLink>
          <RouterLink to="/security">Security</RouterLink>
          <RouterLink to="/advanced-js">Advanced JS</RouterLink>
          <RouterLink to="/advanced-css">Advanced CSS</RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.2rem;
}

.logo {
  display: block;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-links a:hover {
  background-color: var(--color-background-mute);
}

.nav-links a.router-link-active {
  background-color: var(--color-background-mute);
  font-weight: 500;
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
  }
}
</style>

<style scoped></style>
