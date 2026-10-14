/**
 * ─────────────────────────────────────────────────────────────
 *  TODO EL CONTENIDO DE LA WEB ESTÁ AQUÍ.
 *  Cambia los datos de ejemplo por los reales de la pizzería
 *  y la web se actualiza sola (nombre, carta, horario, contacto…).
 * ─────────────────────────────────────────────────────────────
 */

export interface Plato {
  nombre: string
  descripcion: string
  precio: number
  /** Opcional: marca un plato como recomendación de la casa */
  destacado?: boolean
  /** Opcional: etiquetas cortas, p. ej. 'Vegetariana', 'Picante' */
  etiquetas?: string[]
}

export interface SeccionCarta {
  id: string
  titulo: string
  nota?: string
  platos: Plato[]
}

export const pizzeria = {
  nombre: 'La Brasa',
  tipo: 'Pizzería de horno de leña',
  lema: 'Masa de 48 horas, horno de leña de encina y ni un minuto de prisa.',
  descripcion:
    'Hacemos la masa cada mañana y la dejamos fermentar dos días. Luego entra al horno a 450 °C y en noventa segundos sale con el borde inflado y tostado. Así de sencillo, así cada día.',
  anioFundacion: 2014,

  contacto: {
    telefono: '+34 600 000 000',
    // Número en formato internacional sin '+' ni espacios, para WhatsApp
    whatsapp: '34600000000',
    email: 'hola@labrasa.es',
    direccion: 'Calle del Horno 12',
    ciudad: '00000 Tu Ciudad',
    // Coordenadas del local (búscalo en openstreetmap.org → clic derecho → "Mostrar dirección")
    lat: 40.4168,
    lng: -3.7038,
    instagram: 'https://instagram.com/',
    // Pon el enlace de la plataforma de reparto, o deja '' para ocultar el botón
    delivery: { nombre: 'Glovo', url: '' },
  },

  horario: [
    { dias: 'Lunes', horas: 'Cerrado' },
    { dias: 'Martes a jueves', horas: '20:00 – 23:30' },
    { dias: 'Viernes y sábado', horas: '13:30 – 16:00 y 20:00 – 00:30' },
    { dias: 'Domingo', horas: '13:30 – 16:30 y 20:00 – 23:30' },
  ],

  carta: [
    {
      id: 'rojas',
      titulo: 'Pizzas rojas',
      nota: 'Base de tomate San Marzano triturado a mano.',
      platos: [
        { nombre: 'Margherita', descripcion: 'Tomate, fior di latte, albahaca fresca y aceite de oliva virgen extra.', precio: 9.5, etiquetas: ['Vegetariana'] },
        { nombre: 'Marinara', descripcion: 'Tomate, ajo laminado, orégano y aceite. Sin queso, como en Nápoles.', precio: 8, etiquetas: ['Vegana'] },
        { nombre: 'Diavola', descripcion: 'Tomate, fior di latte, salami picante y un hilo de miel de romero.', precio: 12.5, etiquetas: ['Picante'], destacado: true },
        { nombre: 'Leña y setas', descripcion: 'Tomate, mozzarella, setas de temporada salteadas y tomillo.', precio: 12, etiquetas: ['Vegetariana'] },
        { nombre: 'Ibérica', descripcion: 'Tomate, mozzarella, jamón ibérico al salir del horno y rúcula.', precio: 14.5, destacado: true },
      ],
    },
    {
      id: 'blancas',
      titulo: 'Pizzas blancas',
      nota: 'Sin tomate: base de crema de queso o aceite.',
      platos: [
        { nombre: 'Cuatro quesos', descripcion: 'Mozzarella, gorgonzola, parmesano y queso de cabra payoyo.', precio: 13, etiquetas: ['Vegetariana'] },
        { nombre: 'Patata y romero', descripcion: 'Patata en lámina fina, romero, cebolla roja y pecorino.', precio: 11.5, etiquetas: ['Vegetariana'] },
        { nombre: 'Mortadela y pistacho', descripcion: 'Fior di latte, mortadela de Bolonia, burrata y pistacho tostado.', precio: 14, destacado: true },
      ],
    },
    {
      id: 'entrantes',
      titulo: 'Para empezar',
      platos: [
        { nombre: 'Pan de horno', descripcion: 'Nuestra masa al horno con aceite, sal en escamas y romero.', precio: 4 },
        { nombre: 'Burrata', descripcion: 'Con tomate asado, albahaca y pan de horno.', precio: 10 },
        { nombre: 'Ensalada de la huerta', descripcion: 'Hojas verdes, tomate, aceitunas, cebolleta y vinagreta de limón.', precio: 8, etiquetas: ['Vegana'] },
      ],
    },
    {
      id: 'postres',
      titulo: 'Postres',
      platos: [
        { nombre: 'Tiramisú de la casa', descripcion: 'Hecho cada mañana, con café de especialidad.', precio: 5.5 },
        { nombre: 'Calzone de Nutella', descripcion: 'Para compartir, con azúcar glas y avellana.', precio: 7 },
      ],
    },
    {
      id: 'bebidas',
      titulo: 'Bebidas',
      platos: [
        { nombre: 'Cerveza artesana', descripcion: 'Pregunta por la de esta semana.', precio: 3.5 },
        { nombre: 'Vino tinto de la casa', descripcion: 'Copa / botella.', precio: 3 },
        { nombre: 'Refrescos y agua', descripcion: 'Con gas, sin gas, de toda la vida.', precio: 2.2 },
      ],
    },
  ] satisfies SeccionCarta[],

  // Fotos: pon las imágenes en /public/fotos/ y cambia los nombres aquí.
  galeria: [
    { src: '/fotos/foto-1.svg', alt: 'El horno de leña encendido' },
    { src: '/fotos/foto-2.svg', alt: 'Una Margherita recién salida del horno' },
    { src: '/fotos/foto-3.svg', alt: 'Estirando la masa sobre el mármol' },
    { src: '/fotos/foto-4.svg', alt: 'El comedor por la noche' },
    { src: '/fotos/foto-5.svg', alt: 'Ingredientes frescos sobre la barra' },
    { src: '/fotos/foto-6.svg', alt: 'La terraza en verano' },
  ],

  avisoAlergenos:
    'Tenemos a tu disposición la información sobre alérgenos de cada plato. Pídela al hacer tu pedido.',
}

export const precio = (n: number) =>
  n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })

export const enlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/${pizzeria.contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`

export const enlaceTelefono = () => `tel:${pizzeria.contacto.telefono.replace(/\s/g, '')}`
