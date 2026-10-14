<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'
useHead({ title: 'Galería' })

const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
const fotos = pizzeria.galeria.map((f) => ({ ...f, src: base + f.src }))

const dialogo = ref<HTMLDialogElement | null>(null)
const actual = ref(0)

function abrir(i: number) {
  actual.value = i
  dialogo.value?.showModal()
}
function mover(paso: number) {
  actual.value = (actual.value + paso + fotos.length) % fotos.length
}
function tecla(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') mover(1)
  if (e.key === 'ArrowLeft') mover(-1)
}
</script>

<template>
  <section class="bloque">
    <div class="contenedor">
      <h1 class="titulo">El horno, la masa y la casa</h1>
      <p>Toca una foto para verla en grande.</p>

      <ul class="rejilla">
        <li v-for="(f, i) in fotos" :key="f.src" :class="`rejilla__item rejilla__item--${i % 6}`">
          <button class="rejilla__boton" :aria-label="`Ampliar: ${f.alt}`" @click="abrir(i)">
            <img :src="f.src" :alt="f.alt" loading="lazy" />
          </button>
        </li>
      </ul>
    </div>

    <dialog ref="dialogo" class="visor" aria-label="Foto ampliada" @keydown="tecla" @click.self="dialogo?.close()">
      <figure>
        <img :src="fotos[actual]?.src" :alt="fotos[actual]?.alt" />
        <figcaption>{{ fotos[actual]?.alt }}</figcaption>
      </figure>
      <div class="visor__controles">
        <button class="boton boton--linea" @click="mover(-1)">Anterior</button>
        <span>{{ actual + 1 }} de {{ fotos.length }}</span>
        <button class="boton boton--linea" @click="mover(1)">Siguiente</button>
      </div>
      <button class="visor__cerrar" aria-label="Cerrar" @click="dialogo?.close()">
        <Icono nombre="cerrar" />
      </button>
    </dialog>
  </section>
</template>

<style scoped>
.titulo { font-size: var(--t-2xl); }

.rejilla {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 9rem;
  gap: 0.75rem;
}
/* Mosaico irregular para que no parezca una cuadrícula de catálogo */
.rejilla__item--0 { grid-column: span 4; grid-row: span 3; }
.rejilla__item--1 { grid-column: span 2; grid-row: span 3; }
.rejilla__item--2 { grid-column: span 2; grid-row: span 2; }
.rejilla__item--3 { grid-column: span 4; grid-row: span 2; }
.rejilla__item--4 { grid-column: span 4; grid-row: span 2; }
.rejilla__item--5 { grid-column: span 2; grid-row: span 2; }

.rejilla__boton {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: var(--radio);
  overflow: hidden;
  cursor: zoom-in;
  background: var(--humo-2);
}
.rejilla__boton img { width: 100%; height: 100%; object-fit: cover; }

@media (max-width: 44rem) {
  .rejilla { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 8rem; }
  .rejilla__item { grid-column: span 1 !important; grid-row: span 1 !important; }
  .rejilla__item--0 { grid-column: span 2 !important; grid-row: span 2 !important; }
}

.visor {
  max-width: min(60rem, 94vw);
  width: 100%;
  border: 0;
  border-radius: var(--radio);
  padding: 1rem;
  background: var(--humo-2);
  color: var(--masa);
}
.visor::backdrop { background: rgba(20, 14, 11, 0.85); }
.visor figure { margin: 0; }
.visor img { width: 100%; max-height: 72vh; object-fit: contain; border-radius: 4px; }
.visor figcaption { margin-top: 0.75rem; color: var(--masa-suave); }
.visor__controles { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1rem; }
.visor__cerrar {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
  background: var(--humo);
  color: var(--masa);
  cursor: pointer;
  display: grid;
  place-items: center;
}
.visor__cerrar svg { width: 1.3rem; height: 1.3rem; }
</style>
