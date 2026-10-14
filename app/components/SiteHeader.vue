<script setup lang="ts">
import { pizzeria, enlaceWhatsApp } from '~/data/pizzeria'

const abierto = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (abierto.value = false))

const enlaces = [
  { to: '/carta', texto: 'Carta' },
  { to: '/galeria', texto: 'Galería' },
  { to: '/contacto', texto: 'Contacto' },
]
</script>

<template>
  <header class="cabecera">
    <div class="contenedor cabecera__fila">
      <NuxtLink to="/" class="marca" aria-label="Inicio">
        <LogoHorno class="marca__logo" />
        <span>{{ pizzeria.nombre }}</span>
      </NuxtLink>

      <button
        class="cabecera__toggle"
        :aria-expanded="abierto"
        aria-controls="nav-principal"
        @click="abierto = !abierto"
      >
        <Icono :nombre="abierto ? 'cerrar' : 'menu'" />
        <span class="sr">Menú</span>
      </button>

      <nav id="nav-principal" class="nav" :class="{ 'nav--abierto': abierto }" aria-label="Principal">
        <NuxtLink v-for="e in enlaces" :key="e.to" :to="e.to" class="nav__enlace">{{ e.texto }}</NuxtLink>
        <a
          class="boton boton--brasa nav__cta"
          :href="enlaceWhatsApp(`Hola, quiero hacer un pedido en ${pizzeria.nombre}:`)"
          target="_blank"
          rel="noopener"
        >
          <Icono nombre="whatsapp" /> Pedir
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.cabecera {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--humo) 92%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--humo-3);
}
.cabecera__fila {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.25rem;
  gap: 1rem;
}
.marca {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--f-display);
  font-size: var(--t-xl);
  color: var(--masa);
  text-decoration: none;
}
.marca__logo { width: 2.1rem; height: 2.1rem; }

.nav { display: flex; align-items: center; gap: 1.75rem; }
.nav__enlace {
  color: var(--masa);
  text-decoration: none;
  font-weight: 500;
  padding-block: 0.3rem;
  border-bottom: 2px solid transparent;
}
.nav__enlace:hover { color: var(--brasa-viva); }
.nav__enlace.router-link-active { border-bottom-color: var(--brasa); }
.nav__cta { padding: 0.6rem 1.1rem; }

.cabecera__toggle {
  display: none;
  background: none;
  border: 0;
  color: var(--masa);
  padding: 0.4rem;
  cursor: pointer;
}
.cabecera__toggle svg { width: 1.8rem; height: 1.8rem; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }

@media (max-width: 44rem) {
  .cabecera__toggle { display: block; }
  .nav {
    display: none;
    position: absolute;
    inset: 100% 0 auto 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem var(--gutter) 1.25rem;
    background: var(--humo);
    border-bottom: 1px solid var(--humo-3);
  }
  .nav--abierto { display: flex; }
  .nav__enlace { padding: 0.9rem 0; border-bottom: 1px solid var(--humo-3); font-size: var(--t-l); }
  .nav__enlace.router-link-active { border-bottom-color: var(--humo-3); color: var(--brasa-viva); }
  .nav__cta { margin-top: 1rem; justify-content: center; }
}
</style>
