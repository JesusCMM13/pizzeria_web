<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'
useHead({ title: 'Contacto y horario' })

const c = pizzeria.contacto
const d = 0.004
const mapa = `https://www.openstreetmap.org/export/embed.html?bbox=${c.lng - d},${c.lat - d},${c.lng + d},${c.lat + d}&layer=mapnik&marker=${c.lat},${c.lng}`
const comoLlegar = `https://www.openstreetmap.org/directions?to=${c.lat},${c.lng}`
</script>

<template>
  <section class="bloque">
    <div class="contenedor contacto">
      <div class="contacto__info">
        <h1>Ven, llama o escríbenos</h1>

        <div class="dato">
          <h2>Pedidos y reservas</h2>
          <p>Por WhatsApp o por teléfono. Para recoger te decimos la hora exacta en la que estará lista.</p>
          <BotonesPedido con-reserva />
        </div>

        <div class="dato">
          <h2>Dirección</h2>
          <address>
            {{ c.direccion }}<br />{{ c.ciudad }}
          </address>
          <a :href="comoLlegar" target="_blank" rel="noopener">Cómo llegar</a>
        </div>

        <div class="dato">
          <h2>Horario</h2>
          <TablaHorario />
        </div>

        <div class="dato">
          <h2>Otros contactos</h2>
          <p>
            <a :href="`mailto:${c.email}`">{{ c.email }}</a><br />
            <a :href="c.instagram" target="_blank" rel="noopener">Síguenos en Instagram</a>
          </p>
        </div>
      </div>

      <div class="contacto__mapa">
        <iframe :src="mapa" title="Mapa con la ubicación de la pizzería" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}
h1 { font-size: var(--t-2xl); margin-bottom: 1.5rem; }
.dato { padding-block: 1.5rem; border-top: 1px solid var(--humo-3); }
.dato h2 { font-size: var(--t-l); }
address { font-style: normal; font-size: var(--t-l); line-height: 1.5; margin-bottom: 0.5rem; }

.contacto__mapa {
  position: sticky;
  top: 6rem;
  border-radius: 50% 50% var(--radio) var(--radio) / 18% 18% var(--radio) var(--radio);
  overflow: hidden;
  border: 6px solid #6a3a26;
  aspect-ratio: 4 / 5;
}
.contacto__mapa iframe { width: 100%; height: 100%; border: 0; display: block; filter: sepia(0.25); }

@media (max-width: 52rem) {
  .contacto { grid-template-columns: 1fr; }
  .contacto__mapa { position: static; aspect-ratio: 1; }
}
</style>
