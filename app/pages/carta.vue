<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'
useHead({ title: 'Carta' })
useSeoMeta({ description: `Carta de ${pizzeria.nombre}: pizzas de horno de leña, entrantes, postres y bebidas.` })
</script>

<template>
  <div class="estraza">
    <div class="contenedor carta">
      <header class="carta__cabecera">
        <h1>La carta</h1>
        <p>Todas las pizzas miden unos 30 cm y salen del horno de una en una.</p>
      </header>

      <nav class="carta__indice" aria-label="Secciones de la carta">
        <a v-for="s in pizzeria.carta" :key="s.id" :href="`#${s.id}`">{{ s.titulo }}</a>
      </nav>

      <section
        v-for="s in pizzeria.carta"
        :id="s.id"
        :key="s.id"
        class="carta__seccion"
        :aria-labelledby="`t-${s.id}`"
      >
        <div class="carta__titulo">
          <h2 :id="`t-${s.id}`">{{ s.titulo }}</h2>
          <p v-if="s.nota">{{ s.nota }}</p>
        </div>
        <ListaPlatos :platos="s.platos" />
      </section>

      <footer class="carta__pie">
        <p>{{ pizzeria.avisoAlergenos }} IVA incluido.</p>
      </footer>
    </div>
  </div>

  <section class="bloque">
    <div class="contenedor pedir">
      <h2>¿Ya lo tienes claro?</h2>
      <p>Pídela para recoger o resérvanos mesa y te la sacamos recién hecha.</p>
      <BotonesPedido con-reserva />
    </div>
  </section>
</template>

<style scoped>
.carta { padding-block: clamp(2.5rem, 7vw, 5rem); max-width: 60rem; }
.carta__cabecera h1 { font-size: var(--t-3xl); margin-bottom: 0.3em; }
.carta__cabecera p { font-size: var(--t-l); }

.carta__indice {
  position: sticky;
  top: 4.25rem;
  z-index: 5;
  display: flex;
  gap: 0.4rem 1.4rem;
  overflow-x: auto;
  padding: 0.9rem 0;
  margin-block: 1.5rem 2.5rem;
  background: var(--estraza);
  border-block: 2px solid var(--estraza-tinta);
  scrollbar-width: none;
}
.carta__indice a { white-space: nowrap; text-decoration: none; }
.carta__indice a:hover { text-decoration: underline; }

.carta__seccion {
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1.5rem 3rem;
  padding-block: 2.5rem;
  border-bottom: 1px dashed var(--estraza-linea);
  scroll-margin-top: 8.5rem;
}
.carta__titulo h2 { font-size: var(--t-xl); }
.carta__titulo p { font-size: var(--t-s); }
.carta__pie { padding-top: 2rem; font-size: var(--t-s); }

.pedir { text-align: center; display: grid; justify-items: center; }
.pedir p { margin-bottom: 1.75rem; }

@media (max-width: 44rem) {
  .carta__seccion { grid-template-columns: 1fr; }
}
</style>
