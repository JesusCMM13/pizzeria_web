<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'

useHead({ title: '' })

const destacados = pizzeria.carta.flatMap((s) => s.platos).filter((p) => p.destacado)
</script>

<template>
  <section class="portada">
    <div class="contenedor portada__rejilla">
      <div class="portada__texto">
        <p class="portada__tipo">{{ pizzeria.tipo }}</p>
        <h1 class="portada__nombre">{{ pizzeria.nombre }}</h1>
        <p class="portada__lema">{{ pizzeria.lema }}</p>
        <BotonesPedido />
      </div>
      <BocaHorno class="portada__horno" />
    </div>
  </section>

  <section class="estraza bloque" aria-labelledby="t-casa">
    <div class="contenedor casa">
      <div class="casa__intro">
        <h2 id="t-casa">Lo que más sale del horno</h2>
        <p>{{ pizzeria.descripcion }}</p>
        <NuxtLink to="/carta" class="casa__enlace">Ver la carta completa</NuxtLink>
      </div>
      <ListaPlatos :platos="destacados" />
    </div>
  </section>

  <section class="bloque" aria-labelledby="t-horario">
    <div class="contenedor visita">
      <div>
        <h2 id="t-horario">Cuándo encendemos el horno</h2>
        <TablaHorario />
      </div>
      <div class="visita__donde">
        <h2>Dónde estamos</h2>
        <p class="visita__dir">
          <Icono nombre="mapa" />
          <span>{{ pizzeria.contacto.direccion }}<br />{{ pizzeria.contacto.ciudad }}</span>
        </p>
        <p>Ven a por tu pizza, pídela para recoger o resérvanos una mesa.</p>
        <BotonesPedido con-reserva />
        <NuxtLink to="/contacto" class="visita__mapa">Ver mapa y cómo llegar</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portada {
  padding-block: clamp(2.5rem, 7vw, 5rem) 0;
  overflow: hidden;
}
.portada__rejilla {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: end;
  gap: clamp(2rem, 5vw, 4rem);
}
.portada__texto { padding-bottom: clamp(2rem, 6vw, 5rem); }
.portada__tipo { color: var(--brasa-viva); font-weight: 500; margin-bottom: 0.4rem; }
.portada__nombre {
  font-size: var(--t-3xl);
  line-height: 0.95;
  margin-bottom: 1.5rem;
  color: var(--masa);
}
.portada__lema { font-size: var(--t-l); line-height: 1.5; max-width: 30ch; margin-bottom: 2rem; }

@media (max-width: 52rem) {
  .portada__rejilla { grid-template-columns: 1fr; }
  .portada__texto { padding-bottom: 0; }
  .portada__horno { max-width: 24rem; }
}

.casa {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}
.casa__enlace { color: var(--estraza-tinta); font-weight: 600; }
.casa__enlace:hover { color: var(--tomate); }

.visita {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 5rem);
}
.visita h2 { font-size: var(--t-xl); }
.visita__dir { display: flex; gap: 0.6rem; font-size: var(--t-l); line-height: 1.4; }
.visita__dir svg { width: 1.5rem; height: 1.5rem; flex: none; color: var(--brasa); margin-top: 0.15rem; }
.visita__mapa { display: inline-block; margin-top: 1.25rem; }

@media (max-width: 52rem) {
  .casa, .visita { grid-template-columns: 1fr; }
}
</style>
