// ---------------------------------------------------------------------------
// Datos: localidades turísticas de la provincia de Buenos Aires a hasta 200 km
// de la Ciudad de Buenos Aires (CABA), por ruta.
// Las guías son orientativas y conviene chequear detalles puntuales (fechas de
// eventos, precios, horarios) antes de viajar.
// ---------------------------------------------------------------------------
const DESTINOS = [
  {
    nombre: "Tigre", km: 32, categoria: "rio",
    nota: "Delta, lanchas colectivas y puerto de frutos.",
    historia: "Nació a fines del siglo XIX como puerto de recreo de la alta sociedad porteña, con clubes de remo y regatas de renombre internacional. Hoy es la puerta de entrada al Delta del Paraná.",
    datoCurioso: "El nombre viene de los yaguaretés que los colonizadores llamaban \"tigres\"; habitaron la zona hasta que fueron cazados a principios del siglo XX.",
    comoLlegar: "Tren Mitre desde Retiro hasta estación Tigre, o Panamericana ramal Tigre.",
    cuandoIr: "Todo el año; primavera y otoño para caminatas, verano para lanchas y playas de río.",
    duracion: "Día completo, ideal para no apurar el paseo en lancha.",
    comoMoverse: "El pueblo se recorre a pie; para llegar a las islas del delta hace falta lancha (colectiva o de excursión), no hay puentes ni caminos.",
    itinerario: [
      { momento: "Mañana", actividad: "Tren hasta Tigre y lancha colectiva por los brazos del delta." },
      { momento: "Tarde", actividad: "Puerto de Frutos (artesanías y ferias) y almuerzo frente al río." },
      { momento: "Noche", actividad: "Cena en el Paseo Victorica con vista al río Luján, o vuelta a CABA." },
    ],
    otrosAtractivos: ["Museo del Mate", "Parque de la Costa (parque de diversiones)", "Reserva Natural Río Luján", "Museo de Arte Tigre"],
    eventos: ["Corso de Carnaval sobre el Paseo Victorica, febrero", "Fiesta del Río, verano", "Regatas de remo en el río Luján, marzo"],
    dondeComer: ["Puestos de pescado de río en el Puerto de Frutos", "Restaurantes con terraza en el Paseo Victorica", "Confiterías históricas cerca del Museo de Arte Tigre"],
    dondeAlojarse: ["Hosterías de islas del delta, solo accesibles en lancha", "Hoteles boutique sobre el Paseo Victorica", "Cabañas de fin de semana en Tigre pueblo"],
    tips: ["Comprar el pase de lancha en la estación fluvial, no en agencias de calle", "Ir en semana para evitar las multitudes del Puerto de Frutos", "Llevar protector solar y agua, hay poca sombra en la lancha", "Reservar excursiones a islas con anticipación en temporada alta"],
    presupuesto: "Medio: el tren y la lancha colectiva son económicos; el gasto mayor suele ser el almuerzo y las artesanías.",
  },
  {
    nombre: "San Isidro", km: 28, categoria: "pueblo",
    nota: "Catedral, casco histórico y costa del río.",
    historia: "Fue zona de quintas de fin de semana de familias porteñas desde el siglo XIX y conserva el trazado colonial alrededor de la Catedral. Fue cuna de escritores como Victoria Ocampo.",
    datoCurioso: "La Quinta Los Ombúes, hoy Museo Pueyrredón, perteneció a la familia del general Juan Martín de Pueyrredón y aún conserva árboles centenarios de la época colonial.",
    comoLlegar: "Tren Mitre línea San Isidro desde Retiro, o Av. del Libertador en auto.",
    cuandoIr: "Todo el año; fines de semana hay más movimiento en la peatonal.",
    duracion: "Medio día, combina bien con Tigre.",
    comoMoverse: "Se recorre bien a pie desde la estación de tren; para la costanera hay colectivos locales o se puede ir en bici por la Ribera.",
    itinerario: [
      { momento: "Mañana", actividad: "Catedral de San Isidro, Plaza Mitre y peatonal Ituzaingó." },
      { momento: "Tarde", actividad: "Quinta Los Ombúes (Museo Pueyrredón) y costanera del río." },
      { momento: "Noche", actividad: "Bares de Villa Adelina o regreso en tren a CABA." },
    ],
    otrosAtractivos: ["Museo de Arte Contemporáneo (MACBA)", "Puerto de San Isidro", "Parque Metropolitano de la Ribera Norte", "Club de Golf San Isidro"],
    eventos: ["Carreras en el Hipódromo, según calendario de fines de semana", "Feria de artesanos de la Ribera, fines de semana", "Fiesta patronal de San Isidro Labrador, mayo"],
    dondeComer: ["Bares de la peatonal Ituzaingó con patios al aire libre", "Parrillas tradicionales cerca de la estación", "Cafeterías de especialidad en el microcentro"],
    dondeAlojarse: ["Hoteles boutique cerca de la costa", "Cadenas internacionales sobre la Panamericana"],
    tips: ["Ir un fin de semana para las ferias artesanales de la peatonal", "El Hipódromo tiene carreras algunos sábados, vale chequear cartelera", "Buen combo con Tigre en el mismo día por la cercanía", "Caminar hasta la costanera para el atardecer"],
    presupuesto: "Bajo a medio: al estar tan cerca de CABA, alcanza con el boleto de tren y algo de comida.",
  },
  {
    nombre: "Luján", km: 65, categoria: "pueblo",
    nota: "Basílica y peregrinación, turismo religioso.",
    historia: "Debe su nombre a la leyenda de la Virgen de Luján, venerada en la Basílica desde el siglo XVII. Se convirtió en el centro de peregrinación católica más importante de Argentina.",
    datoCurioso: "La actual Basílica es la tercera construida en el lugar; las dos anteriores se derrumbaron, lo que reforzó entre los fieles la necesidad de un templo a la altura de la devoción.",
    comoLlegar: "Ruta Nacional 7 o Acceso Oeste, aprox. 1 hora en auto; también hay micros directos.",
    cuandoIr: "Todo el año; primer domingo de octubre es la gran peregrinación juvenil.",
    duracion: "Medio día.",
    comoMoverse: "El centro histórico se recorre a pie sin problema; para llegar a estancias cercanas conviene tener auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Basílica de Luján y su museo de ofrendas." },
      { momento: "Mediodía", actividad: "Almuerzo cerca de la plaza principal." },
      { momento: "Tarde", actividad: "Complejo Museográfico Enrique Udaondo y costa del río Luján." },
    ],
    otrosAtractivos: ["Museo de Transporte (dentro del Complejo Udaondo)", "Parque Ameghino", "Zoo Luján (opcional, con debate sobre bienestar animal)", "Miniciudad temática"],
    eventos: ["Peregrinación juvenil a pie desde CABA, primer domingo de octubre", "Fiesta patronal de la Virgen, 8 de mayo", "Peregrinación de los pueblos originarios, mayo"],
    dondeComer: ["Restaurantes de comida casera alrededor de la Basílica", "Confiterías con rosquitas y dulces regionales", "Parrillas sobre la ruta de acceso"],
    dondeAlojarse: ["Hoteles económicos cerca de la Basílica, orientados a peregrinos", "Hosterías de campo en las afueras"],
    tips: ["Evitar el primer domingo de octubre si no se busca la peregrinación masiva (o ir justamente por eso)", "La entrada a la Basílica es libre, se agradecen donaciones", "Combinar con una estancia cercana para un día de campo", "Llevar calzado cómodo, se camina bastante"],
    presupuesto: "Bajo: los principales atractivos religiosos son gratuitos, el gasto es sobre todo comida y traslado.",
  },
  {
    nombre: "Cañuelas", km: 65, categoria: "campo",
    nota: "Estancias y turismo rural cerca de la ciudad.",
    historia: "Pueblo fundado a mediados del siglo XIX en torno a la actividad ganadera, todavía conserva el perfil de \"puerta de la pampa\" con estancias que reciben visitantes desde hace generaciones.",
    datoCurioso: "Fue durante décadas un nudo ferroviario importante; la vieja estación de trenes hoy funciona como centro cultural del partido.",
    comoLlegar: "Autopista Ricchieri y luego Ruta 205, alrededor de 1 hora en auto.",
    cuandoIr: "Primavera y otoño para actividades de campo al aire libre.",
    duracion: "Día completo.",
    comoMoverse: "Es zona rural: moverse entre estancias requiere auto propio o el traslado que ofrece cada establecimiento.",
    itinerario: [
      { momento: "Mañana", actividad: "Llegada a la estancia y recorrida a caballo o en sulky." },
      { momento: "Mediodía", actividad: "Asado criollo con folklore en vivo." },
      { momento: "Tarde", actividad: "Doma, jineteada, mate y tortas fritas antes de volver." },
    ],
    otrosAtractivos: ["Laguna de Cañuelas", "Museo Histórico Municipal", "Antigua estación de trenes (centro cultural)", "Reserva natural municipal"],
    eventos: ["Fiesta Provincial del Ternero, octubre", "Exposición rural de Cañuelas", "Desfile criollo por el aniversario del partido"],
    dondeComer: ["El almuerzo suele estar incluido en el día de campo de la estancia", "Restaurantes de pueblo en el centro de Cañuelas"],
    dondeAlojarse: ["Estancias con hospedaje para pasar la noche", "Alojamientos de pueblo para quienes van solo de paso"],
    tips: ["Reservar el día de campo con anticipación, sobre todo fines de semana", "Preguntar si el paquete incluye traslado desde CABA", "Llevar ropa cómoda y protector solar para actividades a caballo", "Ideal para grupos o familias, suele haber descuento por cantidad"],
    presupuesto: "Medio a alto: el día de campo en estancia (traslado, comida y actividades) suele ser el gasto principal.",
  },
  {
    nombre: "La Plata", km: 56, categoria: "ciudad",
    nota: "Catedral, bosque y trazado urbano único.",
    historia: "Ciudad fundada en 1882 como nueva capital de la provincia, diseñada desde cero con un trazado urbanístico único en diagonales y plazas cada seis cuadras.",
    datoCurioso: "El trazado fue pensado para que ningún punto de la ciudad quedara a más de 700 metros de un espacio verde, algo poco común para una ciudad de fines del siglo XIX.",
    comoLlegar: "Autopista Buenos Aires-La Plata, o tren Roca desde Constitución.",
    cuandoIr: "Todo el año; el Bosque es lindo en otoño y primavera.",
    duracion: "Día completo.",
    comoMoverse: "El casco urbano se recorre bien a pie o en bici gracias al trazado en cuadrícula; hay sistema de bicicletas públicas.",
    itinerario: [
      { momento: "Mañana", actividad: "Catedral de La Plata y Plaza Moreno." },
      { momento: "Mediodía", actividad: "Almuerzo cerca de Plaza San Martín o Diagonal 74." },
      { momento: "Tarde", actividad: "Museo de Ciencias Naturales y Paseo del Bosque." },
    ],
    otrosAtractivos: ["Pasaje Dardo Rocha (centro cultural)", "Observatorio Astronómico", "Jardín Zoológico", "Estadio Único"],
    eventos: ["Aniversario de la fundación de la ciudad, 19 de noviembre", "Fiesta del Estudiante, septiembre", "Ferias de diseño en el Pasaje Dardo Rocha, todo el año"],
    dondeComer: ["Bares notables del casco urbano", "Zona gastronómica de calle 8 o Pasaje Dardo Rocha", "Cervecerías artesanales cerca de la zona universitaria"],
    dondeAlojarse: ["Hoteles del centro cerca de Plaza Moreno", "Hostels orientados a estudiantes, típico de ciudad universitaria"],
    tips: ["Subir a las torres de la Catedral si hay visita habilitada ese día", "El Museo de Ciencias Naturales suele tener fila, conviene ir temprano", "La Plata se recorre fácil a pie o en bici por su trazado en cuadrícula", "Aprovechar la vida universitaria: hay bares con buena relación precio-calidad"],
    presupuesto: "Bajo a medio: varios atractivos (catedral, museo, paseo del bosque) tienen entrada gratuita o muy accesible.",
  },
  {
    nombre: "Zárate", km: 90, categoria: "rio",
    nota: "Costanera sobre el Paraná y puente Zárate-Brazo Largo.",
    historia: "Ciudad portuaria sobre el Paraná de las Palmas, históricamente ligada a la industria naval y frigorífica. El puente Zárate-Brazo Largo, inaugurado en 1977, la conectó definitivamente con Entre Ríos.",
    datoCurioso: "Al momento de su inauguración, el complejo de puentes Zárate-Brazo Largo fue uno de los más largos de Sudamérica construidos sobre un sistema de islas y ríos.",
    comoLlegar: "Ruta Panamericana ramal Escobar hasta Zárate, o tren desde Retiro.",
    cuandoIr: "Primavera y verano para disfrutar la costanera.",
    duracion: "Medio día.",
    comoMoverse: "El centro y la costanera se recorren a pie; para cruzar el puente hacia Entre Ríos hace falta auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Costanera y muelle sobre el Paraná." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado de río en la costa." },
      { momento: "Tarde", actividad: "Museo histórico municipal y mirador del puente Zárate-Brazo Largo." },
    ],
    otrosAtractivos: ["Reserva natural del Paraná de las Palmas", "Parque Municipal", "Zona portuaria e industrial histórica", "Astillero Río Santiago (visitas ocasionales)"],
    eventos: ["Fiesta del Inmigrante", "Regata sobre el Paraná de las Palmas", "Aniversario de la ciudad, agosto"],
    dondeComer: ["Restaurantes de pescado sobre la costanera", "Parrillas del centro de la ciudad"],
    dondeAlojarse: ["Hoteles de paso, ya que suele visitarse en el día", "Opciones de cadena sobre la ruta de acceso"],
    tips: ["Ir en auto si se quiere cruzar el puente hacia Entre Ríos de paseo", "La costanera es agradable para caminar al atardecer", "Buena parada intermedia si se sigue viaje hacia Entre Ríos o Rosario"],
    presupuesto: "Bajo: el paseo por la costanera y el museo son gratuitos, el gasto principal es la comida.",
  },
  {
    nombre: "Capilla del Señor", km: 90, categoria: "pueblo",
    nota: "Pueblo colonial declarado lugar histórico.",
    historia: "Pueblo fundado en el siglo XVIII, declarado lugar histórico nacional por conservar casi intacto su trazado y arquitectura colonial, algo poco común en la provincia.",
    datoCurioso: "Fue declarado \"lugar histórico nacional\" en 1974, uno de los primeros pueblos bonaerenses en recibir esa distinción.",
    comoLlegar: "Ruta 8 hasta Pilar, luego rutas provinciales hacia Capilla del Señor.",
    cuandoIr: "Todo el año; fines de semana hay más oferta gastronómica.",
    duracion: "Medio día.",
    comoMoverse: "El pueblo es chico y se recorre entero a pie en menos de una hora; para estancias cercanas conviene el auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Casco histórico y Plaza Belgrano." },
      { momento: "Mediodía", actividad: "Almuerzo en alguna casona convertida en restaurante." },
      { momento: "Tarde", actividad: "Paseo en sulky por el pueblo o visita a una estancia cercana." },
    ],
    otrosAtractivos: ["Museo Criollo", "Iglesia de la Inmaculada Concepción", "Antiguo molino harinero", "Estancias históricas de la zona"],
    eventos: ["Fiesta patronal, diciembre", "Feria de artesanos, algunos fines de semana", "Desfile de carruajes históricos"],
    dondeComer: ["Casonas coloniales convertidas en restaurantes de comida regional", "Confiterías de pueblo con productos caseros"],
    dondeAlojarse: ["Posadas boutique dentro del casco histórico", "Estancias cercanas con hospedaje"],
    tips: ["Ir en día de semana para recorrerlo con tranquilidad", "Buen combo con San Antonio de Areco (suma kilómetros pero vale la pena)", "Sacar fotos de las fachadas coloniales, de las mejor conservadas de la provincia", "Preguntar por ferias de artesanos de algunos fines de semana"],
    presupuesto: "Bajo a medio: el paseo por el pueblo es gratuito, el gasto principal es comida y algún paseo en sulky.",
  },
  {
    nombre: "San Antonio de Areco", km: 113, categoria: "pueblo",
    nota: "Capital de la tradición gaucha, museos y talabarterías.",
    historia: "Fundado en el siglo XVIII a orillas del río Areco, es reconocido como la cuna de la tradición gaucha argentina, inmortalizada en la novela \"Don Segundo Sombra\" de Ricardo Güiraldes.",
    datoCurioso: "Güiraldes escribió gran parte de esa novela inspirado en los gauchos que conoció en la estancia de su familia, cerca del pueblo.",
    comoLlegar: "Ruta Nacional 8, alrededor de 1h30 en auto; también hay micros directos.",
    cuandoIr: "Todo el año; el Día de la Tradición en noviembre reúne desfiles gauchos.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El casco histórico se recorre a pie sin problema; para estancias alejadas del pueblo se necesita auto o el traslado que organiza cada estancia.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Gauchesco Ricardo Güiraldes y Puente Viejo sobre el río Areco." },
      { momento: "Mediodía", actividad: "Almuerzo en una pulpería o restaurante de campo." },
      { momento: "Tarde", actividad: "Talabarterías y platerías artesanales del centro." },
      { momento: "Noche (si te quedás)", actividad: "Cena en una estancia con espectáculo de folklore." },
    ],
    otrosAtractivos: ["Parque Criollo", "Centro Cultural y Museo Draghi (platería)", "Iglesia Nuestra Señora del Rosario", "Puente Viejo (1857)"],
    eventos: ["Día de la Tradición, segundo fin de semana de noviembre", "Exposición de platería y talabartería", "Fiesta Criolla"],
    dondeComer: ["Pulperías históricas del centro", "Parrillas junto al río Areco", "Panaderías artesanales con dulces regionales"],
    dondeAlojarse: ["Estancias tradicionales con actividades incluidas", "Posadas boutique en el casco histórico"],
    tips: ["El Día de la Tradición (noviembre) tiene desfiles gauchos, pero también mucha gente", "Las talabarterías son de las mejores del país para comprar recuerdos de cuero", "Quedarse una noche en estancia permite disfrutarlo con más calma", "Reservar el almuerzo en pulperías populares los fines de semana"],
    presupuesto: "Medio: el paseo por el pueblo es económico, sube si se suma una estancia con actividades o pernocte.",
  },
  {
    nombre: "Mercedes", km: 100, categoria: "campo",
    nota: "Puerta de acceso a estancias y turismo rural.",
    historia: "Ciudad fundada en 1752, históricamente un centro de comercio agropecuario y punto de partida hacia las estancias del oeste bonaerense.",
    datoCurioso: "Fue durante mucho tiempo un punto clave del Camino Real hacia el oeste, y hoy conserva ese rol como acceso a buena parte de las estancias bonaerenses.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 1h30 en auto.",
    cuandoIr: "Primavera y otoño para recorrer el campo.",
    duracion: "Medio día.",
    comoMoverse: "El centro se recorre a pie; para llegar a las estancias del partido se necesita auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Catedral de Mercedes y centro histórico." },
      { momento: "Mediodía", actividad: "Almuerzo de campo en una estancia cercana." },
      { momento: "Tarde", actividad: "Reserva natural o actividades rurales según la estancia elegida." },
    ],
    otrosAtractivos: ["Museo Histórico Regional", "Laguna de Mercedes", "Templo de Nuestra Señora de las Mercedes", "Reserva natural cercana"],
    eventos: ["Exposición rural de Mercedes", "Fiesta de la Tradición local", "Aniversario fundacional"],
    dondeComer: ["Restaurantes de comida casera del centro", "Almuerzos incluidos en el día de campo de las estancias"],
    dondeAlojarse: ["Estancias con hospedaje para pasar la noche", "Hoteles de paso en el centro de la ciudad"],
    tips: ["Consultar con anticipación qué estancias reciben visitantes de día", "Buena opción de turismo rural sin llegar hasta Cañuelas o Areco", "Llevar ropa para actividades al aire libre"],
    presupuesto: "Medio: similar a Cañuelas, el gasto principal está en el día de campo si se elige esa actividad.",
  },
  {
    nombre: "Chascomús", km: 125, categoria: "rio",
    nota: "Laguna, costanera y pesca deportiva.",
    historia: "Fundada en 1779 alrededor de la laguna homónima, fue escenario de hechos históricos de las luchas por la independencia y hoy es reconocida por la pesca deportiva.",
    datoCurioso: "La laguna fue escenario en 1839 de un combate conocido como \"la revolución de los libres del sur\", durante las luchas civiles del siglo XIX.",
    comoLlegar: "Ruta 2 rumbo a la costa, aproximadamente 1h30 en auto.",
    cuandoIr: "Verano para actividades náuticas, primavera para pesca.",
    duracion: "Día completo.",
    comoMoverse: "El centro y la costanera se recorren a pie; para pesca o kayak conviene alquilar equipo en los clubes de la zona.",
    itinerario: [
      { momento: "Mañana", actividad: "Costanera de la laguna y Museo Pampeano." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado de laguna en la costa." },
      { momento: "Tarde", actividad: "Pesca de pejerrey o paseo en kayak por la laguna." },
    ],
    otrosAtractivos: ["Parque Los Libres del Sur", "Casa de la Cultura", "Reserva natural de la laguna", "Club de pesca local"],
    eventos: ["Fiesta Provincial del Pejerrey, octubre/noviembre", "Regata en la laguna", "Aniversario fundacional, abril"],
    dondeComer: ["Restaurantes de pescado sobre la costanera", "Confiterías del centro histórico"],
    dondeAlojarse: ["Cabañas frente a la laguna", "Hoteles del centro de la ciudad"],
    tips: ["Llevar equipo de pesca propio o alquilar en la zona", "La costanera es un buen lugar para el atardecer", "Combina bien como parada camino a la costa atlántica"],
    presupuesto: "Bajo a medio: el paseo por la costanera es gratis, sube si se suma pesca con guía o cabaña.",
  },
  {
    nombre: "Baradero", km: 150, categoria: "rio",
    nota: "Playas de río y fiesta nacional del remo.",
    historia: "Ciudad fundada en el siglo XIX sobre el río Baradero, célebre por sus playas de río y por ser sede de la Fiesta Nacional del Remo desde 1974.",
    datoCurioso: "La Fiesta Nacional del Remo convirtió a Baradero en una de las sedes más importantes del remo amateur en Argentina.",
    comoLlegar: "Ruta Panamericana ramal Baradero, unas 2 horas en auto.",
    cuandoIr: "Verano para playas de río; enero por la Fiesta Nacional del Remo.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para llegar a las playas y balnearios conviene tener auto o bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa y actividades náuticas sobre el río Baradero." },
      { momento: "Mediodía", actividad: "Almuerzo en un balneario o restaurante de la costa." },
      { momento: "Tarde", actividad: "Costanera y, si coincide con enero, la Fiesta Nacional del Remo." },
    ],
    otrosAtractivos: ["Museo Histórico Municipal", "Reserva natural ribereña", "Club de regatas", "Balnearios municipales"],
    eventos: ["Fiesta Nacional del Remo, enero", "Corso de Carnaval", "Fiesta de la Primavera"],
    dondeComer: ["Balnearios con restaurante sobre el río", "Parrillas del centro de la ciudad"],
    dondeAlojarse: ["Campings organizados sobre la costa", "Cabañas y hosterías familiares"],
    tips: ["Ir en enero si interesa la Fiesta Nacional del Remo, aunque hay más gente", "Reservar camping o cabaña con anticipación en temporada alta", "Buena opción de \"playa\" cercana sin llegar a la costa atlántica"],
    presupuesto: "Bajo a medio: las playas de río son de acceso libre, el gasto es camping/cabaña y comida.",
  },
  {
    nombre: "San Pedro", km: 165, categoria: "rio",
    nota: "Costa del Paraná, quintas de duraznos.",
    historia: "Ciudad fundada en el siglo XVIII, conocida históricamente por sus quintas de duraznos y por la Fiesta Nacional del Durazno que se celebra desde mediados del siglo XX.",
    datoCurioso: "La Fiesta Nacional del Durazno, que se celebra desde 1955, hizo de San Pedro un símbolo de la producción frutícola bonaerense sobre el Paraná.",
    comoLlegar: "Ruta Panamericana ramal Escobar/San Pedro, unas 2 horas en auto.",
    cuandoIr: "Verano para la costa; enero por la Fiesta Nacional del Durazno.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro histórico se recorre a pie; para llegar a las quintas de duraznos conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Costanera y playas sobre el Paraná." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado de río." },
      { momento: "Tarde", actividad: "Quinta de duraznos en temporada (dic-ene) o Museo Almirante Brown." },
    ],
    otrosAtractivos: ["Reserva natural ribereña", "Puerto de frutos local", "Balnearios sobre el Paraná", "Museo Almirante Brown"],
    eventos: ["Fiesta Nacional del Durazno, enero", "Regata sobre el Paraná", "Corso de Carnaval"],
    dondeComer: ["Restaurantes de pescado en la costanera", "Puestos de dulces y conservas de durazno en temporada"],
    dondeAlojarse: ["Cabañas y hosterías sobre la costa", "Campings organizados"],
    tips: ["La cosecha de duraznos es en diciembre-enero, fuera de esa fecha no hay visita a quintas", "Reservar alojamiento con anticipación en enero por la fiesta del durazno", "Buena opción para combinar playa de río y pesca deportiva"],
    presupuesto: "Bajo a medio: similar a Baradero, el mayor gasto es alojamiento en temporada alta.",
  },
  {
    nombre: "Chivilcoy", km: 160, categoria: "campo",
    nota: "Ciudad agrícola con arquitectura de antaño.",
    historia: "Ciudad fundada en 1854, con fuerte identidad agrícola y una arquitectura urbana de principios del siglo XX bien conservada en su casco céntrico.",
    datoCurioso: "Fue una de las primeras ciudades del interior bonaerense en tener alumbrado eléctrico, a fines del siglo XIX, gracias al auge agrícola de la zona.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 2 horas en auto.",
    cuandoIr: "Todo el año, clima templado en primavera y otoño.",
    duracion: "Medio día.",
    comoMoverse: "El centro se recorre a pie sin problema; para estancias cercanas conviene tener auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Catedral y plaza central." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro de la ciudad." },
      { momento: "Tarde", actividad: "Museo de Bellas Artes y paseo por la arquitectura histórica." },
    ],
    otrosAtractivos: ["Plaza San Martín", "Antiguo molino harinero convertido en museo", "Reserva natural cercana", "Museo de Bellas Artes"],
    eventos: ["Exposición rural de Chivilcoy", "Fiesta Provincial del Trabajador Rural", "Aniversario fundacional, enero"],
    dondeComer: ["Restaurantes de comida casera del centro", "Parrillas tradicionales"],
    dondeAlojarse: ["Hoteles del centro de la ciudad", "Estancias cercanas para turismo rural"],
    tips: ["Buen destino para quienes buscan una ciudad tranquila, sin \"gran atractivo\" puntual", "Combinar con alguna estancia cercana para sumar actividades de campo", "La arquitectura del centro se disfruta caminando sin apuro"],
    presupuesto: "Bajo: pocos atractivos pagos, el gasto principal es la comida.",
  },
  {
    nombre: "Dolores", km: 200, categoria: "pueblo",
    nota: "Casco histórico y museos camino a la costa.",
    historia: "Fundada en 1818, fue uno de los primeros pueblos de la provincia tras la independencia y hoy es una parada tradicional en el camino a la costa atlántica.",
    datoCurioso: "En 1839 fue escenario de un levantamiento contra Juan Manuel de Rosas, uno de los primeros del interior bonaerense, con un lugar destacado en la historia política provincial.",
    comoLlegar: "Ruta 2 camino a la costa atlántica, unas 2h30 en auto.",
    cuandoIr: "Buena parada camino a la costa en cualquier época.",
    duracion: "Medio día.",
    comoMoverse: "El centro histórico se recorre a pie; es una parada de descanso típica para quienes siguen viaje en auto hacia la costa.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo de Autos Antiguos, uno de los más importantes del país." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro histórico." },
      { momento: "Tarde", actividad: "Catedral, plaza principal y compras de artesanías." },
    ],
    otrosAtractivos: ["Museo Libres del Sur", "Parque Sarmiento", "Catedral de Dolores", "Reserva natural cercana"],
    eventos: ["Aniversario fundacional, octubre", "Fiesta patronal", "Exposición de autos clásicos vinculada al museo"],
    dondeComer: ["Restaurantes y confiterías del centro histórico", "Parrillas sobre la ruta de acceso"],
    dondeAlojarse: ["Hoteles de paso, ideal para quienes siguen viaje a la costa", "Hosterías del centro para quienes se quedan"],
    tips: ["Es la última parada \"de provincia\" antes de los balnearios de la costa", "El Museo de Autos Antiguos es infaltable para los fanáticos de los clásicos", "Buen lugar para cargar combustible y descansar en un viaje más largo"],
    presupuesto: "Bajo: mayormente una parada de paso, el gasto es comida y la entrada accesible al museo.",
  },
];

const CATEGORIAS = [
  { id: "todas", label: "Todas", icon: "map-pin" },
  { id: "playa", label: "Playa", icon: "waves" },
  { id: "sierra", label: "Sierra", icon: "mountain" },
  { id: "rio", label: "Río", icon: "sailboat" },
  { id: "campo", label: "Campo", icon: "trees" },
  { id: "pueblo", label: "Pueblo", icon: "landmark" },
  { id: "ciudad", label: "Ciudad", icon: "gauge" },
];

const MAX_KM = 200;

// --- Iconos SVG mínimos (stroke, estilo lucide) ---------------------------
const ICONS = {
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  waves: '<path d="M2 6c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/><path d="M2 12c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/><path d="M2 18c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/>',
  mountain: '<path d="m8 21 4-13 4 13"/><path d="m2 21 7-17 4 8.5"/><path d="M14.5 12 18 5l4 16"/>',
  sailboat: '<path d="M2 20a5 5 0 0 0 8 0"/><path d="M11 20 8 3l7 8"/><path d="M13 20 3 12l10-2"/>',
  trees: '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
  landmark: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  car: '<path d="M19 17h2v-4l-3-5H6l-3 5v4h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17h10"/>',
  "calendar-days": '<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  sparkles: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  scroll: '<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
};

function icon(name, size = 14, color = "currentColor") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// --- Estado -----------------------------------------------------------------
let distancia = 100;
let categoria = "todas";

const el = {
  distanciaValor: document.getElementById("distancia-valor"),
  slider: document.getElementById("slider"),
  ruler: document.getElementById("ruler"),
  filtros: document.getElementById("filtros"),
  contador: document.getElementById("contador"),
  lista: document.getElementById("lista"),
  vacio: document.getElementById("vacio"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.getElementById("modal"),
};

function render() {
  el.distanciaValor.textContent = distancia;
  el.slider.value = distancia;

  const enRuta = DESTINOS.filter((d) => categoria === "todas" || d.categoria === categoria);
  const progresoPct = Math.min((distancia / MAX_KM) * 100, 100);
  el.ruler.innerHTML = `
    <div class="ruler-track"></div>
    <div class="ruler-progress" style="width:${progresoPct}%"></div>
    ${enRuta
      .map((d) => {
        const left = (d.km / MAX_KM) * 100;
        const activo = d.km <= distancia;
        return `<div class="ruler-dot ${activo ? "activo" : ""}" style="left:${left}%" title="${d.nombre} · ${d.km} km"></div>`;
      })
      .join("")}
    <div class="ruler-label ruler-label-left">0 km</div>
    <div class="ruler-label ruler-label-right">${MAX_KM} km</div>
  `;

  el.filtros.innerHTML = CATEGORIAS.map(
    (c) => `
    <button class="chip ${categoria === c.id ? "chip-activo" : ""}" data-cat="${c.id}">
      ${icon(c.icon, 14)} ${c.label}
    </button>`
  ).join("");
  el.filtros.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      categoria = btn.dataset.cat;
      render();
    });
  });

  const resultados = DESTINOS.filter((d) => d.km <= distancia)
    .filter((d) => categoria === "todas" || d.categoria === categoria)
    .sort((a, b) => a.km - b.km);

  el.contador.textContent = `${resultados.length} ${resultados.length === 1 ? "destino encontrado" : "destinos encontrados"}`;

  if (resultados.length === 0) {
    el.lista.style.display = "none";
    el.vacio.style.display = "block";
  } else {
    el.vacio.style.display = "none";
    el.lista.style.display = "flex";
    el.lista.innerHTML = resultados
      .map(
        (d) => `
      <button class="card" data-nombre="${d.nombre}">
        <div class="card-km">
          <span class="card-km-num">${d.km}</span>
          <span class="card-km-unit">km</span>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3>${d.nombre}</h3>
            ${icon(CATEGORIAS.find((c) => c.id === d.categoria)?.icon || "map-pin", 14, "#7C9473")}
          </div>
          <p>${d.nota}</p>
          <span class="card-link">Ver guía →</span>
        </div>
      </button>`
      )
      .join("");
    el.lista.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const destino = DESTINOS.find((d) => d.nombre === card.dataset.nombre);
        abrirModal(destino);
      });
    });
  }
}

function seccionLista(iconName, titulo, items) {
  return `
    <div class="modal-subhead">${icon(iconName, 14)} ${titulo}</div>
    <ul class="modal-lista">
      ${items.map((it) => `<li>${it}</li>`).join("")}
    </ul>
  `;
}

function abrirModal(d) {
  el.modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${d.km} km desde CABA</div>
      <button id="modal-close" aria-label="Cerrar guía">${icon("x", 20)}</button>
    </div>
    <h2 class="modal-title">${d.nombre}</h2>
    <p class="modal-nota">${d.nota}</p>

    <div class="modal-subhead">${icon("scroll", 14)} Un poco de historia</div>
    <p class="modal-parrafo">${d.historia}</p>

    <div class="modal-subhead">${icon("lightbulb", 14)} Dato curioso</div>
    <p class="modal-parrafo">${d.datoCurioso}</p>

    <div class="modal-info">
      <div class="info-row">
        ${icon("car", 16, "#7C9473")}
        <div>
          <div class="info-label">Cómo llegar</div>
          <div class="info-value">${d.comoLlegar}</div>
        </div>
      </div>
      <div class="info-row">
        ${icon("compass", 16, "#7C9473")}
        <div>
          <div class="info-label">Cómo moverse en el lugar</div>
          <div class="info-value">${d.comoMoverse}</div>
        </div>
      </div>
      <div class="info-row">
        ${icon("calendar-days", 16, "#7C9473")}
        <div>
          <div class="info-label">Cuándo ir</div>
          <div class="info-value">${d.cuandoIr}</div>
        </div>
      </div>
      <div class="info-row">
        ${icon("clock", 16, "#7C9473")}
        <div>
          <div class="info-label">Duración sugerida</div>
          <div class="info-value">${d.duracion}</div>
        </div>
      </div>
    </div>

    <div class="modal-subhead">${icon("sparkles", 14)} Itinerario sugerido</div>
    <ul class="modal-timeline">
      ${d.itinerario.map((paso) => `<li><span class="timeline-momento">${paso.momento}</span>${paso.actividad}</li>`).join("")}
    </ul>

    ${seccionLista("map-pin", "Otros atractivos", d.otrosAtractivos)}
    ${seccionLista("calendar-days", "Eventos y fechas especiales", d.eventos)}
    ${seccionLista("utensils", "Dónde comer", d.dondeComer)}
    ${seccionLista("bed", "Dónde alojarse", d.dondeAlojarse)}
    ${seccionLista("map-pin", "Tips locales", d.tips)}

    <div class="modal-subhead">${icon("wallet", 14)} Presupuesto estimado</div>
    <p class="modal-parrafo modal-presupuesto">${d.presupuesto}</p>
  `;
  el.modalOverlay.classList.add("visible");
  document.getElementById("modal-close").addEventListener("click", cerrarModal);
}

function cerrarModal() {
  el.modalOverlay.classList.remove("visible");
}

el.modalOverlay.addEventListener("click", (e) => {
  if (e.target === el.modalOverlay) cerrarModal();
});

el.slider.addEventListener("input", (e) => {
  distancia = Number(e.target.value);
  render();
});

render();

// --- Registro del service worker (PWA) --------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((err) => {
      console.warn("No se pudo registrar el service worker:", err);
    });
  });
}
