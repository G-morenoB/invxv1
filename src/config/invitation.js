/**
 * ─────────────────────────────────────────────────────────────
 *  TODA LA INFORMACIÓN DE LA INVITACIÓN VIVE AQUÍ
 *  Edita textos, fecha, horarios, música e imágenes en este archivo.
 * ─────────────────────────────────────────────────────────────
 */
export const invitation = {
  // Portada
  title: "Mis XV años",
  name: "Sofía",

  // Fecha y hora de la ceremonia (la cuenta regresiva y el calendario la usan).
  // month: 1 = enero ... 12 = diciembre. hour en formato 24 h.
  event: { year: 2027, month: 3, day: 6, hour: 15, minute: 0 },

  // Música de fondo: coloca tu archivo en /public/music/ y ajusta el nombre.
  music: { src: "/music/cancion.mp3", volume: 0.6 },

  // true  → los espacios vacíos muestran un recuadro punteado con su nombre.
  // false → los espacios sin imagen no se ven (úsalo al terminar).
  showPlaceholders: true,

  intro: {
    buttonLabel: "Dale clic para empezar la magia",
    paragraphs: [
      "Hay historias y personas que no voy a olvidar y recuerdos como este que siempre voy a guardar.",
      "Porque son parte de mi vida es mi deseo que compartan conmigo este día tan especial.",
    ],
  },

  saveTheDate: { title: "Save the date" },

  countdown: { title: "Solo faltan", finished: "¡Llegó el gran día!" },

  ceremony: {
    title: "Ceremonia religiosa",
    place: "XXXXXX XXXXXXX",
    address: "XXXXX XXXX",
    time: "3:00 PM",
    buttonLabel: "Ver ubicación",
    mapUrl: "https://maps.google.com", // ← pega aquí el enlace de Google Maps
  },

  reception: {
    title: "Recepción",
    place: "XXXXXX XXXXXXX",
    address: "XXXXX XXXX",
    time: "4:00 PM",
    buttonLabel: "Ver ubicación",
    mapUrl: "https://maps.google.com",
  },

  gallery: {
    title: "Galería",
    // Rutas de tus fotos (guárdalas en /public/gallery/). Agrega o quita las que quieras.
    // Mientras estén vacías se ven recuadros punteados.
    photos: ["", "", "", "", ""],
    autoplayMs: 4500, // tiempo entre fotos; 0 = sin avance automático
  },

  gift: {
    title: "Sugerencia de regalo",
    type: "Lluvia de sobres",
    note: "En el evento podrás encontrar una caja",
  },

  parents: {
    intro: "Acompañada siempre por el amor de mis padres:",
    mother: ["XXXXX XXXXXXX", "XXXXXXX XXXXXX"],
    father: ["XXXXX XXXXXXX", "XXXXXXX XXXXXX"],
    thanks: "Gracias a quienes hacen este día aún más especial con su amor y compañía.",
  },

  /**
   * ─── FONDOS DE PANTALLA ───
   * Guárdalos en /public/backgrounds/. Para cambiar uno, reemplaza el archivo
   * o cambia la ruta. Si una ruta queda vacía se usa un color liso.
   */
  backgrounds: {
    cover: "/backgrounds/portada.jpg",
    countdown: "/backgrounds/cuenta-regresiva.jpg",
    gift: "/backgrounds/regalo.jpg",
    gallery: "/backgrounds/galeria.jpg",
    parents: "/backgrounds/padres.jpg",
  },

  /**
   * ─── IMÁGENES ───
   * Cada clave es un espacio. Pon la ruta de tu imagen (PNG con fondo transparente
   * de preferencia) guardada en /public/images/, por ejemplo: "/images/reloj.png".
   * Si la dejas vacía ("") se muestra el recuadro punteado.
   */
  images: {
    // Portada
    coverTopLeft: "", // reloj de bolsillo
    coverTopRight: "/images/carta.jpe", // cartas
    coverBottomLeft: "/images/naipe.jpe", // naipes / sombrero
    coverBottomRight: "", // frasco azul / taza
    // Intro
    introTopLeft: "", // cartas y rosa
    introMiddleLeft: "", // sombrero de copa
    introRight: "", // rosas rojas
    introBottomRight: "", // cartas
    // Save the date
    saveTopRight: "", // frasco "Drink me"
    saveLeft: "", // rosa azul
    // Cuenta regresiva
    countdownRabbit: "", // conejo blanco
    // Eventos
    ceremonyImage: "", // libros, taza, reloj
    receptionImage: "", // sombrero con naipes
    // Regalo
    giftRabbit: "", // conejo con trompeta
    giftBag: "", // bolsas de regalo
    // Padres
    parentsTopLeft: "", // carta
    parentsTopRight: "", // corona
    parentsLeft: "", // libro / naipe
    parentsBottomLeft: "", // cartas
    parentsBottomRight: "", // cartas
  },
};
