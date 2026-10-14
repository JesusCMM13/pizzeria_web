<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'
const anio = new Date().getFullYear()
</script>

<template>
  <footer class="pie">
    <div class="contenedor pie__rejilla">
      <div>
        <p class="pie__nombre">{{ pizzeria.nombre }}</p>
        <p>{{ pizzeria.tipo }} desde {{ pizzeria.anioFundacion }}.</p>
      </div>
      <address>
        {{ pizzeria.contacto.direccion }}<br />
        {{ pizzeria.contacto.ciudad }}<br />
        <a :href="`tel:${pizzeria.contacto.telefono.replace(/\s/g, '')}`">{{ pizzeria.contacto.telefono }}</a>
      </address>
      <div class="pie__redes">
        <a :href="pizzeria.contacto.instagram" target="_blank" rel="noopener">
          <Icono nombre="instagram" /> Instagram
        </a>
        <a :href="`mailto:${pizzeria.contacto.email}`">{{ pizzeria.contacto.email }}</a>
      </div>
    </div>
    <div class="contenedor pie__legal">
      <p>© {{ anio }} {{ pizzeria.nombre }}. {{ pizzeria.avisoAlergenos }}</p>
    </div>
  </footer>
</template>

<style scoped>
.pie {
  background: #221a16;
  border-top: 1px solid var(--humo-3);
  padding-top: 3rem;
  color: var(--masa-suave);
  font-size: var(--t-s);
}
.pie__rejilla {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 2rem;
}
.pie__nombre { font-family: var(--f-display); font-size: var(--t-xl); color: var(--masa); margin-bottom: 0.25rem; }
address { font-style: normal; line-height: 1.8; }
.pie__redes { display: flex; flex-direction: column; gap: 0.6rem; }
.pie__redes a { display: inline-flex; align-items: center; gap: 0.45rem; }
.pie__redes svg { width: 1.2rem; height: 1.2rem; }
.pie__legal { margin-top: 2.5rem; padding-block: 1.25rem; border-top: 1px solid var(--humo-3); }
.pie__legal p { max-width: none; margin: 0; font-size: var(--t-xs); }
</style>
