<script setup lang="ts">
import { pizzeria } from '~/data/pizzeria'

const c = pizzeria.contacto

useHead({
  titleTemplate: (t) => (t ? `${t} | ${pizzeria.nombre}` : `${pizzeria.nombre}, ${pizzeria.tipo.toLowerCase()}`),
  // Datos estructurados: ayudan a que Google muestre horario, dirección y teléfono
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: pizzeria.nombre,
        servesCuisine: 'Pizza',
        telephone: c.telefono,
        email: c.email,
        address: { '@type': 'PostalAddress', streetAddress: c.direccion, addressLocality: c.ciudad, addressCountry: 'ES' },
        geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
        sameAs: [c.instagram],
      }),
    },
  ],
})

useSeoMeta({
  description: pizzeria.lema,
  ogType: 'website',
  ogTitle: pizzeria.nombre,
  ogDescription: pizzeria.lema,
})
</script>

<template>
  <a href="#contenido" class="saltar">Saltar al contenido</a>
  <SiteHeader />
  <main id="contenido">
    <NuxtPage />
  </main>
  <SiteFooter />
</template>
