# Web de la pizzería (Nuxt 4 + Vue 3)

Web estática con Inicio, Carta, Galería y Contacto. Los pedidos y reservas van por WhatsApp o teléfono, sin backend.

## Probar en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # genera la web estática en .output/public
```

## Cambiar el contenido

Todo está en **`app/data/pizzeria.ts`**: nombre, lema, carta con precios, horario, teléfono, WhatsApp, dirección, coordenadas del mapa, Instagram y enlace de delivery.

- **WhatsApp**: el número va en formato internacional sin `+` ni espacios (`34612345678`).
- **Delivery**: si `delivery.url` está vacío, el botón no aparece.
- **Mapa**: busca el local en openstreetmap.org, clic derecho → "Mostrar dirección" y copia latitud y longitud.
- **Fotos**: mete las fotos reales en `public/fotos/` (mejor .jpg o .webp de unos 1600 px de ancho) y cambia los nombres en `galeria`. Borra los `.svg` de ejemplo.
- **Logo y favicon**: `app/components/LogoHorno.vue` y `public/favicon.svg`.
- **Colores y tipografías**: variables al principio de `app/assets/css/main.css`.

## Publicar en GitHub Pages con dominio propio

???
