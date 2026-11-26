# Invitación XV años (Alicia en el País de las Maravillas)

React + Vite + Tailwind v4, con pnpm.

## Correr
    pnpm install
    pnpm dev

## Editar
- Textos, fecha, horarios, mapas, música e imágenes: `src/config/invitation.js`
- Colores y tipografías: `@theme` en `src/index.css`
- Fotos de la galería (carrusel): `public/gallery/` + lista `gallery.photos` en el config
- Cada pantalla es un componente en `src/sections/`
- Imágenes: guárdalas en `public/images/` y pon la ruta en `images` (ej. `"/images/reloj.png"`).
  Mientras estén vacías se ven recuadros punteados. Al terminar pon `showPlaceholders: false`.
- Fondos de pantalla: `public/backgrounds/` (rutas en `backgrounds` dentro de `src/config/invitation.js`)
- Animaciones: `Reveal`, `AnimatedText`, `Backdrop` y `Carousel` en `src/components/`; los estilos están en `src/index.css`
- Música: `public/music/cancion.mp3`

## Publicar
    pnpm build   # carpeta dist/
