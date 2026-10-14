<script setup lang="ts">
defineProps<{ nombre: 'whatsapp' | 'telefono' | 'moto' | 'mapa' | 'instagram' | 'reloj' | 'cerrar' | 'menu' }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="nombre === 'whatsapp'">
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1.2-.5-2.3-1.6-2.8-2.8l.9-1-1-2z" fill="currentColor" stroke-width="1" />
    </template>
    <path v-else-if="nombre === 'telefono'" d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.8 1.8 0 0 1-2 1.8A16.5 16.5 0 0 1 3.2 5.5 1.8 1.8 0 0 1 5 3.5z" />
    <template v-else-if="nombre === 'moto'">
      <circle cx="5.5" cy="17" r="2.8" /><circle cx="18.5" cy="17" r="2.8" />
      <path d="M8.3 17h5l3-6.5H19M14 5.5h2.5l2 5M5.5 17l3.5-6.5h5" />
    </template>
    <template v-else-if="nombre === 'mapa'">
      <path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" />
    </template>
    <template v-else-if="nombre === 'instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </template>
    <template v-else-if="nombre === 'reloj'">
      <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
    </template>
    <path v-else-if="nombre === 'cerrar'" d="M6 6l12 12M18 6 6 18" />
    <path v-else-if="nombre === 'menu'" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
</template>
