<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
import { ref } from 'vue'

defineOptions({
  name: 'AppLayoutDefault',
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
    <header class="bg-white shadow h-16 flex items-center relative">
      <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <RouterLink to="/" class="logo-link">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
            <span>Web Dev Lab</span>
          </RouterLink>

          <!-- Mobile menu button -->
          <button
            class="lg:hidden flex items-center p-2"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Desktop navigation -->
          <div class="nav-links hidden lg:flex">
            <RouterLink to="/testing">Testing</RouterLink>
            <RouterLink to="/accessibility">Accessibility</RouterLink>
            <RouterLink to="/security">Security</RouterLink>
            <RouterLink to="/advanced-js">Advanced JS</RouterLink>
            <RouterLink to="/advanced-css">Advanced CSS</RouterLink>
          </div>
        </div>

        <!-- Mobile navigation -->
        <div
          v-show="isMobileMenuOpen"
          class="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4 z-50"
        >
          <div class="flex flex-col space-y-2">
            <RouterLink
              v-for="link in [
                { to: '/testing', text: 'Testing' },
                { to: '/accessibility', text: 'Accessibility' },
                { to: '/security', text: 'Security' },
                { to: '/advanced-js', text: 'Advanced JS' },
                { to: '/advanced-css', text: 'Advanced CSS' },
              ]"
              :key="link.to"
              :to="link.to"
              class="block py-2"
              @click="isMobileMenuOpen = false"
            >
              {{ link.text }}
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-4 flex-grow">
      <slot></slot>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
/* .layout-default {
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
} */

nav {
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
  display: none; /* Hide by default on mobile */
  gap: 1rem;
  align-items: center;
}

/* Show on desktop */
@media (min-width: 1024px) {
  .nav-links {
    display: flex;
  }
}

@media (max-width: 1024px) {
  .nav-links a {
    width: 100%;
    padding: 0.75rem 1rem;
  }
}

.nav-links a {
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-radius: 1rem; /* Köşe yuvarlama */

  transition: background-color 0.2s;
}

.nav-links a:hover {
  background-color: #f2f2f2;
}

.nav-links a.router-link-active {
  background-color: #f2f2f2;
  color: blueviolet;
}

/* main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
} */

@media (max-width: 1024px) {
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
