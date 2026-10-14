<template>
  <!-- La pieza protagonista: la boca del horno, que "se enciende" al cargar la página -->
  <div class="horno" role="img" aria-label="Pizza dentro del horno de leña">
    <div class="horno__boca">
      <div class="horno__brasa" />
      <svg class="horno__pizza" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="borde" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stop-color="#e9b46a" />
            <stop offset="92%" stop-color="#c98a3c" />
            <stop offset="100%" stop-color="#8a5a2b" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="96" fill="url(#borde)" />
        <circle cx="100" cy="100" r="80" fill="#b83a26" />
        <!-- ampollas tostadas del borde -->
        <g fill="#4a2a17" opacity=".75">
          <ellipse cx="38" cy="62" rx="6" ry="4" />
          <ellipse cx="160" cy="58" rx="5" ry="3.5" />
          <ellipse cx="172" cy="128" rx="6" ry="4" />
          <ellipse cx="60" cy="168" rx="5" ry="3" />
          <ellipse cx="128" cy="180" rx="4" ry="3" />
        </g>
        <!-- mozzarella -->
        <g fill="#f6efe0">
          <path d="M70 72c10-8 26-4 26 8s-14 18-26 12-8-14 0-20z" />
          <path d="M120 66c12-4 22 6 18 16s-18 10-22 2 0-16 4-18z" />
          <path d="M100 112c12-6 26 2 24 14s-18 14-26 8-8-18 2-22z" />
          <path d="M54 118c8-6 20-2 20 8s-10 14-18 10-8-14-2-18z" />
          <path d="M136 120c8-2 16 6 12 14s-14 6-16 0 0-12 4-14z" />
        </g>
        <!-- albahaca -->
        <g fill="#4f6b2c">
          <path d="M84 96c6-10 18-10 22-4-6 8-16 10-22 4z" />
          <path d="M126 100c2-10 12-14 18-10-2 10-12 14-18 10z" />
          <path d="M80 140c4-8 14-10 18-6-4 8-12 10-18 6z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.horno {
  position: relative;
  aspect-ratio: 1 / 0.92;
  width: 100%;
  max-width: 34rem;
  margin-inline: auto;
  /* Ladrillo refractario: arco exterior */
  border-radius: 50% 50% 0 0 / 58% 58% 0 0;
  background:
    repeating-linear-gradient(0deg, transparent 0 26px, rgba(0, 0, 0, 0.22) 26px 28px),
    repeating-linear-gradient(90deg, transparent 0 52px, rgba(0, 0, 0, 0.18) 52px 54px),
    linear-gradient(160deg, #8a4f33, #6a3a26 60%, #4e2a1c);
  padding: 9% 9% 0;
  box-shadow: inset 0 -12px 0 #3a2219;
}
.horno__boca {
  position: relative;
  height: 100%;
  border-radius: 50% 50% 0 0 / 62% 62% 0 0;
  background: #140e0b;
  overflow: hidden;
  display: grid;
  place-items: end center;
}
.horno__brasa {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 30% at 22% 100%, #f5c063 0%, #e0731f 35%, transparent 70%),
    radial-gradient(ellipse 80% 70% at 50% 100%, rgba(234, 162, 58, 0.6), transparent 72%);
  animation: encender 2.4s ease-out both;
}
.horno__pizza {
  position: relative;
  width: 76%;
  margin-bottom: 4%;
  transform: perspective(500px) rotateX(58deg);
  transform-origin: bottom center;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.6));
}
@keyframes encender {
  0% { opacity: 0; }
  35% { opacity: 0.55; }
  45% { opacity: 0.4; }
  100% { opacity: 1; }
}
</style>
