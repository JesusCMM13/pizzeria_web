<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'
</script>

<template>
  <dl class="horario">
    <div v-for="h in pizzeria.horario" :key="h.dias" class="horario__fila">
      <dt>{{ h.dias }}</dt>
      <dd :class="{ 'horario__cerrado': h.horas === 'Cerrado' }">{{ h.horas }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.horario { margin: 0; }
.horario__fila {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 1.5rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--humo-3);
}
dt { font-weight: 600; }
dd { margin: 0; color: var(--masa-suave); font-variant-numeric: tabular-nums; }
.horario__cerrado { font-style: italic; }
</style>
