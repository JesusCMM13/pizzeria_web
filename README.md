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

1. Crea un repo en GitHub y sube el proyecto a la rama `main`.
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Edita `public/CNAME` con el dominio real (p. ej. `www.pizzerialabrasa.es`). Una sola línea, sin `https://`.
4. En el panel DNS de donde compraste el dominio:
   - `www` → registro **CNAME** apuntando a `TU-USUARIO.github.io`
   - Dominio raíz (`pizzerialabrasa.es`) → registros **A** a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. En **Settings → Pages** escribe el dominio en *Custom domain*, espera a que se valide el DNS y marca **Enforce HTTPS**.

Cada `git push` a `main` vuelve a publicar la web automáticamente (pestaña *Actions*).

> Si algún día la publicas sin dominio propio, en `usuario.github.io/nombre-repo`, cambia `app.baseURL` en `nuxt.config.ts` a `'/nombre-repo/'` y borra `public/CNAME`.
