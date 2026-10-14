<script setup lang="ts">
import { pizzeria, enlaceWhatsApp, enlaceTelefono } from '~/data/pizzeria'
defineProps<{ conReserva?: boolean }>()
const delivery = pizzeria.contacto.delivery
</script>

<template>
  <div class="grupo-botones">
    <a
      class="boton boton--brasa"
      :href="enlaceWhatsApp(`Hola, quiero hacer un pedido para recoger en ${pizzeria.nombre}:`)"
      target="_blank"
      rel="noopener"
    >
      <Icono nombre="whatsapp" /> Pedir por WhatsApp
    </a>
    <a class="boton boton--linea" :href="enlaceTelefono()">
      <Icono nombre="telefono" /> Llamar
    </a>
    <a
      v-if="conReserva"
      class="boton boton--linea"
      :href="enlaceWhatsApp(`Hola, quiero reservar mesa en ${pizzeria.nombre}. Día: , hora: , personas: `)"
      target="_blank"
      rel="noopener"
    >
      <Icono nombre="reloj" /> Reservar mesa
    </a>
    <a v-if="delivery.url" class="boton boton--linea" :href="delivery.url" target="_blank" rel="noopener">
      <Icono nombre="moto" /> A domicilio con {{ delivery.nombre }}
    </a>
  </div>
</template>
