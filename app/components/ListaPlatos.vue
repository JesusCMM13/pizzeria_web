<script setup lang="ts">
import { precio, type Plato } from '~/data/pizzeria'
defineProps<{ platos: Plato[] }>()
</script>

<template>
  <ul class="platos">
    <li v-for="p in platos" :key="p.nombre" class="plato">
      <!-- Nombre ……… precio, como en una carta de toda la vida -->
      <div class="plato__linea">
        <h3 class="plato__nombre">
          {{ p.nombre }}
          <span v-if="p.destacado" class="plato__casa">de la casa</span>
        </h3>
        <span class="plato__puntos" aria-hidden="true" />
        <span class="plato__precio">{{ precio(p.precio) }}</span>
      </div>
      <p class="plato__desc">{{ p.descripcion }}</p>
      <ul v-if="p.etiquetas?.length" class="plato__etiquetas">
        <li v-for="e in p.etiquetas" :key="e">{{ e }}</li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.platos { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.6rem; }
.plato__linea { display: flex; align-items: baseline; gap: 0.6rem; }
.plato__nombre {
  font-family: var(--f-display);
  font-size: var(--t-l);
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.2rem 0.6rem;
}
.plato__casa {
  font-family: var(--f-texto);
  font-size: var(--t-xs);
  font-weight: 600;
  font-style: italic;
  color: var(--tomate);
}
.plato__puntos {
  flex: 1;
  min-width: 1.5rem;
  border-bottom: 2px dotted currentColor;
  opacity: 0.45;
  transform: translateY(-0.3em);
}
.plato__precio { font-weight: 600; font-variant-numeric: tabular-nums; white-space: nowrap; }
.plato__desc { margin: 0.3rem 0 0; opacity: 0.85; font-size: var(--t-s); max-width: 52ch; }
.plato__etiquetas { list-style: none; display: flex; gap: 0.4rem; margin: 0.5rem 0 0; padding: 0; }
.plato__etiquetas li {
  font-size: var(--t-xs);
  font-weight: 500;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  border: 1px solid currentColor;
  opacity: 0.8;
}
</style>
