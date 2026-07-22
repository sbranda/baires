// ---------------------------------------------------------------------------
// Datos: localidades turísticas de la provincia de Buenos Aires a hasta 200 km
// de la Ciudad de Buenos Aires (CABA), por ruta.
// Las guías son orientativas y conviene chequear detalles puntuales (fechas de
// eventos, precios, horarios) antes de viajar.
// ---------------------------------------------------------------------------
const DESTINOS = [
  {
    nombre: "Tigre", km: 32, categoria: "rio", lat: -34.4264, lng: -58.5796,
    nota: "Delta, lanchas colectivas y puerto de frutos.",
    historia: "El área fue habitada originalmente por comunidades guaraníes que aprovechaban la riqueza del delta para la pesca y la caza. Hacia fines del siglo XIX, con la llegada del ferrocarril, Tigre se transformó en el destino de recreo preferido de la alta sociedad porteña, que instaló clubes de remo y organizó regatas de nivel internacional en los brazos del río. Durante buena parte del siglo XX el turismo masivo se trasladó hacia la costa atlántica y Tigre atravesó una etapa de menor protagonismo, hasta que desde los años 90 recuperó su lugar como destino de fin de semana gracias a la puesta en valor del Puerto de Frutos, los museos y las excursiones en lancha. Hoy sigue siendo la puerta de entrada más conocida al Delta del Paraná, un ecosistema único de islas habitadas todo el año por sus propios pobladores.",
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
    otrosAtractivos: ["Museo del Mate", "Museo Naval de la Nación", "Parque de la Costa (parque de diversiones) y Aquafan (parque acuático)", "Reserva Natural Río Luján"],
    eventos: ["Corso de Carnaval sobre el Paseo Victorica, febrero", "Fiesta del Río, verano", "Regatas de remo en el río Luján, marzo"],
    dondeComer: ["Puestos de pescado de río en el Puerto de Frutos", "Restaurantes con terraza en el Paseo Victorica", "Confiterías históricas cerca del Museo de Arte Tigre"],
    dondeAlojarse: ["Hosterías de islas del delta, solo accesibles en lancha", "Hoteles boutique sobre el Paseo Victorica", "Cabañas de fin de semana en Tigre pueblo"],
    tips: ["Comprar el pase de lancha en la estación fluvial, no en agencias de calle", "Ir en semana para evitar las multitudes del Puerto de Frutos", "Llevar protector solar y agua, hay poca sombra en la lancha", "Reservar excursiones a islas con anticipación en temporada alta"],
    presupuesto: "Medio: el tren y la lancha colectiva son económicos; el gasto mayor suele ser el almuerzo y las artesanías.",
  },
  {
    nombre: "San Isidro", km: 28, categoria: "pueblo", lat: -34.4708, lng: -58.5085,
    nota: "Catedral, casco histórico y costa del río.",
    historia: "Formó parte de las tierras otorgadas a los primeros colonizadores del Río de la Plata, y desde el siglo XVIII se pobló como zona de quintas y chacras para familias porteñas acomodadas. La actual Catedral, construida a fines del siglo XIX en estilo neogótico, se convirtió en el centro simbólico del pueblo, alrededor del cual creció el casco histórico. A comienzos del siglo XX consolidó su perfil residencial y cultural, con intelectuales y artistas que encontraron en sus quintas un refugio tranquilo cerca de la ciudad; la escritora Victoria Ocampo, fundadora de la revista Sur, tuvo allí una de sus residencias. Con las décadas, el partido se expandió hacia el norte y hoy combina el trazado colonial de su centro con zonas residenciales de alto poder adquisitivo y una intensa vida cultural y deportiva.",
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
    otrosAtractivos: ["Villa Ocampo, la casa-museo de Victoria Ocampo en Beccar", "Museo de Arte Contemporáneo (MACBA)", "Parque Natural Municipal Ribera Norte", "Club de Golf San Isidro"],
    eventos: ["Carreras en el Hipódromo, según calendario de fines de semana", "Feria de artesanos de la Ribera, fines de semana", "Fiesta patronal de San Isidro Labrador, mayo"],
    dondeComer: ["Bares de la peatonal Ituzaingó con patios al aire libre", "Parrillas tradicionales cerca de la estación", "Cafeterías de especialidad en el microcentro"],
    dondeAlojarse: ["Hoteles boutique cerca de la costa", "Cadenas internacionales sobre la Panamericana"],
    tips: ["Ir un fin de semana para las ferias artesanales de la peatonal", "Villa Ocampo tiene visitas guiadas viernes, sábados, domingos y feriados", "El Hipódromo tiene carreras algunos sábados, vale chequear cartelera", "Buen combo con Tigre en el mismo día por la cercanía"],
    presupuesto: "Bajo a medio: al estar tan cerca de CABA, alcanza con el boleto de tren y algo de comida.",
  },
  {
    nombre: "Luján", km: 65, categoria: "pueblo", lat: -34.5703, lng: -59.105,
    nota: "Basílica y peregrinación, turismo religioso.",
    historia: "El nombre del pueblo está ligado a una leyenda: en 1630, una carreta que transportaba una imagen de la Virgen se detuvo sin motivo aparente y no volvió a moverse hasta que bajaron la imagen, que quedó como patrona del lugar. Alrededor de esa devoción creció durante los siglos siguientes un poblado que se convirtió en el centro de peregrinación católica más importante del país. La actual Basílica, de estilo neogótico, es la tercera construida en el predio: las dos anteriores no resistieron el paso del tiempo, lo que reforzó entre los fieles la necesidad de un templo a la altura de la devoción popular. Hoy Luján recibe millones de peregrinos por año, sobre todo durante la tradicional caminata de octubre desde Buenos Aires, además de visitantes que se acercan por su patrimonio histórico y sus museos.",
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
    otrosAtractivos: ["Carlos Keen, pueblo gastronómico a 14 km del centro", "Abadía San Benito, monasterio en Jáuregui con dulces artesanales", "Museo de Transporte (dentro del Complejo Udaondo)", "Parque Ameghino"],
    eventos: ["Peregrinación juvenil a pie desde CABA, primer domingo de octubre", "Fiesta patronal de la Virgen, 8 de mayo", "Peregrinación de los pueblos originarios, mayo"],
    dondeComer: ["Restaurantes de comida casera alrededor de la Basílica", "Confiterías con rosquitas y dulces regionales", "Parrillas sobre la ruta de acceso"],
    dondeAlojarse: ["Hoteles económicos cerca de la Basílica, orientados a peregrinos", "Hosterías de campo en las afueras"],
    tips: ["Evitar el primer domingo de octubre si no se busca la peregrinación masiva (o ir justamente por eso)", "La entrada a la Basílica es libre, se agradecen donaciones", "Combinar con una estancia cercana para un día de campo", "Llevar calzado cómodo, se camina bastante"],
    presupuesto: "Bajo: los principales atractivos religiosos son gratuitos, el gasto es sobre todo comida y traslado.",
  },
  {
    nombre: "Cañuelas", km: 65, categoria: "campo", lat: -35.0517, lng: -58.7622,
    nota: "Estancias y turismo rural cerca de la ciudad.",
    historia: "El partido se conformó a mediados del siglo XIX en pleno auge de la actividad ganadera de la llanura pampeana, cuando las estancias comenzaron a organizarse como unidades productivas a gran escala. Durante décadas fue un nudo ferroviario clave para el transporte de hacienda hacia los mercados de Buenos Aires, lo que impulsó el crecimiento del pueblo alrededor de la estación. Con el tiempo, muchas estancias fueron reconvirtiendo parte de su actividad hacia el turismo rural, ofreciendo a los visitantes una experiencia de campo con doma, jineteada y gastronomía criolla. Hoy Cañuelas es uno de los destinos de turismo rural más elegidos cerca de la Ciudad de Buenos Aires, gracias a su cercanía y a la tradición ganadera que todavía se respira en la zona.",
    datoCurioso: "Según la tradición popular, el dulce de leche se inventó por casualidad en 1829 en la Estancia La Caledonia, cerca de Cañuelas, cuando se dejó hervir de más una olla de leche lechada.",
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
    nombre: "La Plata", km: 56, categoria: "ciudad", lat: -34.9215, lng: -57.9545,
    nota: "Catedral, bosque y trazado urbano único.",
    historia: "La ciudad fue fundada en 1882 por el entonces gobernador Dardo Rocha, luego de que Buenos Aires se federalizara y la provincia necesitara una nueva capital. Se la diseñó desde cero como una ciudad moderna para la época, con un trazado en diagonales y una plaza cada seis cuadras que buscaba garantizar espacios verdes accesibles. La construcción de sus edificios emblemáticos, como la Catedral y el Museo de Ciencias Naturales, se pensó como una vidriera del progreso argentino de fines del siglo XIX, en sintonía con el auge agroexportador del país. Con los años, la instalación de la Universidad Nacional de La Plata a comienzos del siglo XX consolidó su perfil de ciudad universitaria, una identidad que conserva hasta hoy y que convive con su rol administrativo como capital provincial.",
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
    otrosAtractivos: ["Casa Curutchet, único edificio de Le Corbusier en Latinoamérica y Patrimonio de la Humanidad", "Pasaje Dardo Rocha (centro cultural) con el MACLA y el MUMART", "Teatro Argentino y Planetario del Bosque", "Observatorio Astronómico"],
    eventos: ["Aniversario de la fundación de la ciudad, 19 de noviembre", "Fiesta del Estudiante, septiembre", "Ferias de diseño en el Pasaje Dardo Rocha, todo el año"],
    dondeComer: ["Bares notables del casco urbano", "Zona gastronómica de calle 8 o Pasaje Dardo Rocha", "Cervecerías artesanales cerca de la zona universitaria"],
    dondeAlojarse: ["Hoteles del centro cerca de Plaza Moreno", "Hostels orientados a estudiantes, típico de ciudad universitaria"],
    tips: ["Subir a las torres de la Catedral si hay visita habilitada ese día", "Casa Curutchet se visita con reserva previa, conviene sacar el turno con anticipación", "El Museo de Ciencias Naturales suele tener fila, conviene ir temprano", "La Plata se recorre fácil a pie o en bici por su trazado en cuadrícula"],
    presupuesto: "Bajo a medio: varios atractivos (catedral, museo, paseo del bosque) tienen entrada gratuita o muy accesible.",
  },
  {
    nombre: "Zárate", km: 90, categoria: "rio", lat: -34.0973, lng: -59.0281,
    nota: "Costanera sobre el Paraná y puente Zárate-Brazo Largo.",
    historia: "La zona se organizó como pueblo a mediados del siglo XIX en torno a la actividad portuaria sobre el Paraná de las Palmas, aprovechando su ubicación estratégica para el comercio fluvial. Durante buena parte del siglo XX, Zárate se consolidó como polo industrial, con astilleros y frigoríficos que emplearon a buena parte de su población y definieron su identidad obrera. La construcción del complejo de puentes Zárate-Brazo Largo, inaugurado en 1977, marcó un antes y un después al conectar la ciudad de forma directa con Entre Ríos y la Mesopotamia. Hoy combina ese pasado industrial y portuario con un perfil más turístico centrado en su costanera y en el paisaje del delta bonaerense.",
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
    nombre: "Capilla del Señor", km: 90, categoria: "pueblo", lat: -34.3494, lng: -59.0839,
    nota: "Pueblo colonial declarado lugar histórico.",
    historia: "El poblado se organizó en torno a una capilla construida en el siglo XVIII, de la que tomó su nombre, en una zona de estancias y postas que servían de descanso a los viajeros que iban hacia el norte de la provincia. A diferencia de otros pueblos bonaerenses que modernizaron su arquitectura con el correr de las décadas, Capilla del Señor conservó casi intacto su trazado colonial, lo que llevó a que en 1994 fuera declarado Bien de Interés Histórico Nacional, el primer \"Pueblo Histórico\" del país con esa distinción. Ese reconocimiento ayudó a preservar sus casonas y calles empedradas, que hoy atraen a quienes buscan una postal poco común dentro de la provincia. El pueblo mantiene además su vínculo con las estancias de la zona, que combinan producción agropecuaria con recepción de visitantes.",
    datoCurioso: "Antes de ser Papa, Jorge Bergoglio se reunió con la comunidad católica del pueblo en el templo parroquial, poco después de ordenarse sacerdote; hoy un pasaje del centro lleva su nombre en su honor.",
    comoLlegar: "Ruta 8 hasta Pilar, luego rutas provinciales hacia Capilla del Señor.",
    cuandoIr: "Todo el año; fines de semana hay más oferta gastronómica.",
    duracion: "Medio día.",
    comoMoverse: "El pueblo es chico y se recorre entero a pie en menos de una hora; para estancias cercanas conviene el auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Casco histórico y Plaza Belgrano." },
      { momento: "Mediodía", actividad: "Almuerzo en alguna casona convertida en restaurante." },
      { momento: "Tarde", actividad: "Paseo en sulky por el pueblo o visita a una estancia cercana." },
    ],
    otrosAtractivos: ["Pulpería Los Ombúes, una de las más antiguas del país", "Los Cardales, pueblo vecino del mismo partido con estación de tren de 1902", "Museo Criollo", "Estancias históricas de la zona"],
    eventos: ["Festejos patronales, 14 de septiembre, la celebración religiosa más antigua de la provincia", "Feria de artesanos, algunos fines de semana", "Desfile de carruajes históricos"],
    dondeComer: ["Casonas coloniales convertidas en restaurantes de comida regional", "Confiterías de pueblo con productos caseros"],
    dondeAlojarse: ["Posadas boutique dentro del casco histórico", "Estancias cercanas con hospedaje"],
    tips: ["Ir en día de semana para recorrerlo con tranquilidad", "Hay excursiones en globo aerostático sobre la zona, conviene reservar con anticipación", "Sacar fotos de las fachadas coloniales, de las mejor conservadas de la provincia", "Preguntar por ferias de artesanos de algunos fines de semana"],
    presupuesto: "Bajo a medio: el paseo por el pueblo es gratuito, el gasto principal es comida y algún paseo en sulky.",
  },
  {
    nombre: "San Antonio de Areco", km: 113, categoria: "pueblo", lat: -34.2597, lng: -59.477,
    nota: "Capital de la tradición gaucha, museos y talabarterías.",
    historia: "Fundado en el siglo XVIII a orillas del río Areco, el pueblo creció al amparo de las estancias ganaderas que dominaban la región pampeana. A comienzos del siglo XX, el escritor Ricardo Güiraldes, hijo de una familia de estancieros de la zona, inmortalizó la vida de los gauchos locales en su novela \"Don Segundo Sombra\", que convirtió al pueblo en un símbolo de la tradición criolla argentina. Ese legado se institucionalizó décadas después con la creación del Museo Gauchesco que lleva su nombre y con la declaración del Día de la Tradición, que desde mediados del siglo XX se celebra cada noviembre con desfiles y jineteadas. Hoy San Antonio de Areco es reconocido como la capital nacional de la tradición gaucha, con una comunidad de talabarteros y plateros que mantiene vivos oficios artesanales de larga data.",
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
    nombre: "Mercedes", km: 100, categoria: "campo", lat: -34.6501, lng: -59.4315,
    nota: "Puerta de acceso a estancias y turismo rural.",
    historia: "La ciudad fue fundada en 1752 como parte de la expansión de la frontera productiva hacia el oeste de la provincia, en una zona que combinaba tierras fértiles con rutas de comercio hacia el interior del país. Durante el siglo XIX se consolidó como centro de comercio agropecuario y punto de partida del histórico Camino Real, que conectaba Buenos Aires con las provincias del oeste. Ese rol de nodo comercial y de tránsito se mantuvo con la llegada del ferrocarril, que reforzó su importancia como centro de servicios para las estancias de la zona. Hoy Mercedes conserva ese perfil como puerta de acceso al turismo rural del oeste bonaerense.",
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
    nombre: "Chascomús", km: 125, categoria: "rio", lat: -35.5716, lng: -58.0126,
    nota: "Laguna, costanera y pesca deportiva.",
    historia: "La ciudad fue fundada en 1779 junto a la laguna homónima, en un punto estratégico para el control del territorio y de las rutas hacia el sur de la provincia. Durante las luchas civiles del siglo XIX, la zona fue escenario de un levantamiento conocido como \"la revolución de los libres del sur\", en 1839, un episodio clave de la resistencia al gobierno de Juan Manuel de Rosas. Con el correr de las décadas, la ciudad desarrolló su identidad en torno a la laguna, que se convirtió en un centro de pesca deportiva reconocido a nivel nacional. Hoy Chascomús combina ese patrimonio histórico con una fuerte impronta de turismo de naturaleza, gracias a la costanera y a la reserva que rodea la laguna.",
    datoCurioso: "La Sociedad de Negros de Chascomús, fundada en 1862 por la hermandad afrodescendiente de la ciudad para celebrar sus bailes y religiosidad, fue reconocida por la UNESCO en 2012 por su valor histórico y cultural.",
    comoLlegar: "Ruta 2 rumbo a la costa, aproximadamente 1h30 en auto.",
    cuandoIr: "Verano para actividades náuticas, primavera para pesca.",
    duracion: "Día completo.",
    comoMoverse: "El centro y la costanera se recorren a pie; para pesca o kayak conviene alquilar equipo en los clubes de la zona.",
    itinerario: [
      { momento: "Mañana", actividad: "Costanera de la laguna y Museo Pampeano." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado de laguna en la costa." },
      { momento: "Tarde", actividad: "Pesca de pejerrey o paseo en kayak por la laguna." },
    ],
    otrosAtractivos: ["Palacio Municipal, obra de Francisco Salamone (1939)", "Sociedad de Negros de Chascomús, reconocida por la UNESCO en 2012", "Parque Los Libres del Sur", "Reserva natural de la laguna"],
    eventos: ["Fiesta Provincial del Pejerrey, octubre/noviembre", "Regata en la laguna", "Aniversario fundacional, abril"],
    dondeComer: ["Restaurantes de pescado sobre la costanera", "Confiterías del centro histórico"],
    dondeAlojarse: ["Cabañas frente a la laguna", "Hoteles del centro de la ciudad"],
    tips: ["Llevar equipo de pesca propio o alquilar en la zona", "La costanera es un buen lugar para el atardecer", "Combina bien como parada camino a la costa atlántica"],
    presupuesto: "Bajo a medio: el paseo por la costanera es gratis, sube si se suma pesca con guía o cabaña.",
  },
  {
    nombre: "Baradero", km: 150, categoria: "rio", lat: -33.8103, lng: -59.5006,
    nota: "Playas de río y fiesta nacional del remo.",
    historia: "El poblado se organizó en el siglo XIX alrededor del río Baradero, aprovechando sus playas naturales y su cercanía con el Paraná para el comercio fluvial. Con el correr de las décadas, la ciudad desarrolló una fuerte tradición vinculada al remo y a los deportes náuticos, que encontró su punto culminante en 1974 con la creación de la Fiesta Nacional del Remo. Ese evento consolidó a Baradero como una de las sedes más importantes del remo amateur del país y atrajo un turismo enfocado en las actividades sobre el río. Hoy la ciudad combina ese perfil deportivo con un turismo de playas de río, popular entre quienes buscan un balneario cercano a Buenos Aires sin llegar hasta la costa atlántica.",
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
    nombre: "San Pedro", km: 165, categoria: "rio", lat: -33.6779, lng: -59.6683,
    nota: "Costa del Paraná, quintas de duraznos.",
    historia: "Fundada en el siglo XVIII sobre la costa del Paraná, la ciudad desarrolló desde temprano una economía basada en la fruticultura, gracias a la fertilidad de sus tierras ribereñas. Las quintas de duraznos se convirtieron en la actividad más identificada con la zona durante el siglo XX, al punto de dar origen en 1955 a la Fiesta Nacional del Durazno, que todavía hoy se celebra cada verano. Ese perfil agrícola convivió siempre con su costado ribereño, con un puerto histórico y una costanera que fueron ganando protagonismo turístico con el correr de las décadas. Hoy San Pedro combina el turismo de playas de río con la actividad frutícola que la distingue dentro de la región del Paraná.",
    datoCurioso: "A 20 km de la ciudad, en Vuelta de Obligado, se libró en 1845 uno de los combates más recordados de la historia argentina: la resistencia criolla al bloqueo naval de Francia y Gran Bretaña sobre el río Paraná.",
    comoLlegar: "Ruta Panamericana ramal Escobar/San Pedro, unas 2 horas en auto.",
    cuandoIr: "Verano para la costa; enero por la Fiesta Nacional del Durazno.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro histórico se recorre a pie; para llegar a las quintas de duraznos conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Costanera y playas sobre el Paraná." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado de río." },
      { momento: "Tarde", actividad: "Quinta de duraznos en temporada (dic-ene) o Museo Almirante Brown." },
    ],
    otrosAtractivos: ["Vuelta de Obligado, sitio del combate naval de 1845 contra el bloqueo anglo-francés", "Reserva natural ribereña", "Puerto de frutos local", "Museo Almirante Brown"],
    eventos: ["Fiesta Nacional del Durazno, enero", "Regata sobre el Paraná", "Corso de Carnaval"],
    dondeComer: ["Restaurantes de pescado en la costanera", "Puestos de dulces y conservas de durazno en temporada"],
    dondeAlojarse: ["Cabañas y hosterías sobre la costa", "Campings organizados"],
    tips: ["La cosecha de duraznos es en diciembre-enero, fuera de esa fecha no hay visita a quintas", "Reservar alojamiento con anticipación en enero por la fiesta del durazno", "Buena opción para combinar playa de río y pesca deportiva"],
    presupuesto: "Bajo a medio: similar a Baradero, el mayor gasto es alojamiento en temporada alta.",
  },
  {
    nombre: "Chivilcoy", km: 160, categoria: "campo", lat: -34.8975, lng: -60.0165,
    nota: "Ciudad agrícola con arquitectura de antaño.",
    historia: "La ciudad fue fundada en 1854 en el marco de la expansión de la frontera agrícola bonaerense hacia el oeste, en tierras que resultaron muy fértiles para el cultivo de cereales. Ese auge agrícola de fines del siglo XIX financió buena parte de la arquitectura urbana que todavía puede verse en su casco céntrico, y llevó a que la ciudad fuera una de las primeras del interior bonaerense en contar con alumbrado eléctrico. Durante el siglo XX, Chivilcoy consolidó su perfil como centro de servicios para la producción agropecuaria de la región, un rol que mantiene hasta la actualidad. Hoy es una ciudad tranquila que conserva ese pasado agrícola en su arquitectura y en la identidad de sus habitantes.",
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
    nombre: "Dolores", km: 200, categoria: "pueblo", lat: -36.3132, lng: -57.6799,
    nota: "Casco histórico y museos camino a la costa.",
    historia: "Fundada en 1818, poco después de la declaración de la independencia argentina, Dolores fue uno de los primeros pueblos organizados en el sur de la provincia de Buenos Aires. En 1839 fue escenario de un levantamiento contra el gobierno de Juan Manuel de Rosas, un episodio que le dio un lugar destacado en la historia política del siglo XIX bonaerense. Con el correr de las décadas, la ciudad se consolidó como centro de servicios para la zona rural circundante y como parada obligada en el camino hacia los balnearios de la costa atlántica. Hoy Dolores combina ese patrimonio histórico, visible en su casco urbano y en museos como el de Autos Antiguos, con su rol tradicional de última parada bonaerense antes de llegar al mar.",
    datoCurioso: "En 1839 fue escenario de un levantamiento contra Juan Manuel de Rosas, uno de los primeros del interior bonaerense, con un lugar destacado en la historia política provincial.",
    comoLlegar: "Ruta 2 camino a la costa atlántica, unas 2h30 en auto.",
    cuandoIr: "Buena parada camino a la costa en cualquier época.",
    duracion: "Medio día.",
    comoMoverse: "El centro histórico se recorre a pie; es una parada de descanso típica para quienes siguen viaje en auto hacia la costa.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo de Autos Antiguos, uno de los más importantes del país." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro histórico." },
      { momento: "Tarde", actividad: "Catedral, plaza principal y compras de artesanías, o una tarde en el Parque Termal Dolores." },
    ],
    otrosAtractivos: ["Parque Termal Dolores, con piletas de agua termal salada y dulce", "Museo Libres del Sur", "Parque Sarmiento", "Catedral de Dolores"],
    eventos: ["Aniversario fundacional, octubre", "Fiesta patronal", "Exposición de autos clásicos vinculada al museo"],
    dondeComer: ["Restaurantes y confiterías del centro histórico", "Parrillas sobre la ruta de acceso"],
    dondeAlojarse: ["Resort termal con piletas propias de agua salada y dulce", "Hoteles de paso, ideal para quienes siguen viaje a la costa", "Hosterías del centro para quienes se quedan"],
    tips: ["Es la última parada \"de provincia\" antes de los balnearios de la costa", "El Museo de Autos Antiguos es infaltable para los fanáticos de los clásicos", "El parque termal cobra entrada por día para no huéspedes, además del acceso incluido si te alojás en sus hoteles", "Buen lugar para cargar combustible y descansar en un viaje más largo"],
    presupuesto: "Bajo si es solo una parada de paso (comida y museo); sube a medio-alto si se suma una entrada o una noche en el complejo termal.",
  },
  {
    nombre: "Nueve de Julio", km: 260, categoria: "campo", lat: -35.4444, lng: -60.8829,
    nota: "Laguna de Gómez y llanura pampeana profunda.",
    historia: "La ciudad se fundó en 1863 como fortín de la línea de frontera de la época, en pleno proceso de expansión de la frontera productiva hacia el oeste pampeano. Con el tiempo, la llegada del ferrocarril consolidó su rol como centro de servicios para una vasta zona agrícola y ganadera. La Laguna de Gómez, en el borde de la ciudad, se convirtió con las décadas en el gran atractivo recreativo del partido. Hoy Nueve de Julio combina su identidad de ciudad agrícola pampeana con un fuerte perfil de turismo de naturaleza en torno a la laguna.",
    datoCurioso: "La Plaza 25 de Mayo de Nueve de Julio, de 16 hectáreas, está considerada una de las plazas más grandes de Sudamérica.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 3 horas en auto.",
    cuandoIr: "Primavera y verano para actividades en la laguna.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la laguna, en el borde de la ciudad, conviene auto o bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Laguna de Gómez, pesca y actividades náuticas." },
      { momento: "Mediodía", actividad: "Almuerzo en la costa de la laguna." },
      { momento: "Tarde", actividad: "Plaza 25 de Mayo y centro histórico." },
    ],
    otrosAtractivos: ["Club Náutico de la laguna", "Museo histórico municipal", "Camping municipal junto a la laguna", "Zona de pesca de pejerrey"],
    eventos: ["Aniversario fundacional, julio", "Exposición rural de Nueve de Julio", "Regatas en la laguna"],
    dondeComer: ["Restaurantes sobre la costa de la laguna", "Parrillas del centro"],
    dondeAlojarse: ["Cabañas frente a la laguna", "Hoteles del centro de la ciudad"],
    tips: ["Llevar equipo de pesca o alquilar en la zona", "La laguna tiene playas de arena aptas para el verano", "Buena parada para romper un viaje más largo hacia el oeste bonaerense"],
    presupuesto: "Bajo a medio: el acceso a la laguna es libre, el gasto principal es cabaña y comida.",
  },
  {
    nombre: "Junín", km: 260, categoria: "ciudad", lat: -34.5838, lng: -60.9463,
    nota: "Laguna urbana y punto de partida hacia el oeste.",
    historia: "La ciudad nació en 1827 como fortín militar en la línea de frontera de la época, en el marco de la expansión del territorio productivo hacia el oeste pampeano. Con la llegada del ferrocarril a fines del siglo XIX se transformó en un nudo ferroviario clave del interior bonaerense. Eva Perón vivió parte de su infancia y adolescencia en Junín antes de mudarse a Buenos Aires, un dato que la ciudad conserva en su memoria histórica. Hoy Junín combina ese pasado con un perfil de ciudad de servicios y una laguna urbana que es su principal espacio de recreación.",
    datoCurioso: "Eva Duarte, luego Eva Perón, vivió su adolescencia en Junín antes de partir a Buenos Aires para iniciar su carrera artística.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 3 horas en auto.",
    cuandoIr: "Todo el año.",
    duracion: "Medio día.",
    comoMoverse: "El centro y la costanera de la laguna se recorren a pie o en bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Laguna de Junín y costanera." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Museos y centro comercial peatonal." },
    ],
    otrosAtractivos: ["Museo Histórico y de Bellas Artes", "Casa donde vivió Eva Perón, hoy espacio cultural", "Costanera de la laguna", "Teatro Municipal"],
    eventos: ["Aniversario fundacional, agosto", "Fiesta de la Primavera"],
    dondeComer: ["Restaurantes de la costanera", "Parrillas y bodegones del centro"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas cerca de la laguna"],
    tips: ["Combina bien como parada camino al oeste bonaerense o La Pampa", "La costanera es agradable para bici o caminata", "Buen punto para cargar combustible en viajes largos"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Azul", km: 300, categoria: "sierra", lat: -36.7767, lng: -59.8585,
    nota: "Ciudad serrana, arquitectura de Salamone.",
    historia: "Fundada en 1832 como fortín de frontera, Azul creció al amparo de la actividad ganadera de la llanura pampeana y de las sierras que la rodean. Durante la primera mitad del siglo XX, el arquitecto ítalo-argentino Francisco Salamone dejó en la región un conjunto de obras monumentales de estilo art decó que hoy son parte del patrimonio arquitectónico bonaerense. La ciudad conservó además su perfil de centro de servicios para el campo circundante. Hoy Azul combina ese patrimonio arquitectónico con paisajes serranos poco conocidos fuera de la región.",
    datoCurioso: "El matadero municipal y el cementerio de Azul, obras de Francisco Salamone, se visitan hoy como piezas de arquitectura monumental más que por su función original.",
    comoLlegar: "Ruta Nacional 3 o Ruta 226, aproximadamente 3h30 en auto.",
    cuandoIr: "Primavera y otoño para recorrer la zona serrana.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las sierras y obras de Salamone en las afueras conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Catedral y centro histórico." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Obras de Salamone (cementerio, matadero) y sierras cercanas." },
    ],
    otrosAtractivos: ["Cementerio y matadero municipal, obras de Francisco Salamone", "Catedral de Azul", "Reserva Paraje Cinco Cerros", "Sierras Bayas, con antiguas canteras"],
    eventos: ["Aniversario fundacional, agosto", "Fiesta de las Colectividades"],
    dondeComer: ["Restaurantes del centro histórico", "Parrillas tradicionales"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas en las sierras cercanas"],
    tips: ["Reservar un guía o tour para las obras de Salamone, dispersas por el partido", "Buena escala camino a Tandil o la costa atlántica", "Llevar auto propio, las distancias dentro del partido son grandes"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "San Clemente del Tuyú", km: 320, categoria: "playa", lat: -36.3556, lng: -56.7238,
    nota: "Playas familiares y parque temático marino.",
    historia: "San Clemente del Tuyú se fundó en 1935 como parte de la expansión de balnearios al norte de Mar del Plata, sobre tierras que antes eran estancias ganaderas. Su desarrollo turístico se consolidó con un perfil familiar y de precios accesibles, distinto al de otros balnearios más exclusivos de la zona. En 1978 se inauguró Mundo Marino, que la convirtió en un destino de referencia para el turismo con niños en toda la costa atlántica. Hoy combina ese parque temático con playas extensas y la reserva de Punta Rasa, en el extremo norte del partido.",
    datoCurioso: "Punta Rasa, en el extremo norte de San Clemente, es el punto donde se juntan el Río de la Plata y el Océano Atlántico, y su faro marca esa transición.",
    comoLlegar: "Ruta 2 y luego Ruta 11, aproximadamente 3h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta; marzo con menos gente.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro y la zona de playas se recorren a pie o en bici; para Punta Rasa conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Mundo Marino, parque temático con fauna acuática." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Playa y paseo por Punta Rasa." },
    ],
    otrosAtractivos: ["Mundo Marino, parque temático con fauna marina", "Termas Marinas Park, con aguas termales saladas junto al mar", "Faro San Antonio, con elevador panorámico", "Reserva natural de Punta Rasa"],
    eventos: ["Temporada de espectáculos en Mundo Marino, verano", "Fiesta del Mar"],
    dondeComer: ["Restaurantes de pescado y mariscos sobre la costa", "Parrillas y pizzerías del centro"],
    dondeAlojarse: ["Hoteles familiares frente al mar", "Cabañas y departamentos de alquiler temporario"],
    tips: ["Reservar entradas a Mundo Marino con anticipación en temporada alta", "Termas Marinas Park funciona todo el año, incluso fuera de temporada de playa", "Es de los balnearios más accesibles en precio de la zona", "Punta Rasa es un buen lugar para el atardecer, algo alejado del centro"],
    presupuesto: "Medio: comparado con otros balnearios de la zona suele ser más accesible; el mayor gasto es la entrada a Mundo Marino.",
  },
  {
    nombre: "Pinamar", km: 340, categoria: "playa", lat: -37.1067, lng: -56.8617,
    nota: "Médanos, bosque implantado y playas de moda.",
    historia: "Pinamar se fundó en 1943 sobre un proyecto del arquitecto Jorge Bunge, que ideó una ciudad balnearia integrada al paisaje de médanos y bosques implantados, a diferencia del trazado en cuadrícula de otros balnearios. Ese diseño original, con calles curvas que respetan la forma natural de las dunas, todavía define la identidad urbana de la ciudad. Con las décadas se convirtió en uno de los balnearios más elegidos por la clase media y alta porteña, con una fuerte oferta gastronómica y de diseño. Hoy combina ese perfil urbano cuidado con extensas playas y el bosque que le da nombre.",
    datoCurioso: "El nombre Pinamar combina \"pino\" y \"mar\", en referencia a los bosques de pinos implantados sobre los médanos para fijar la arena.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4 horas en auto; hay micros y vuelos en temporada.",
    cuandoIr: "Enero y febrero en temporada alta; fines de semana largos en primavera.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro se recorre a pie o en bici; para Cariló u Ostende conviene auto o las bicisendas.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa y balnearios de diseño." },
      { momento: "Mediodía", actividad: "Almuerzo en la zona comercial." },
      { momento: "Tarde", actividad: "Bosque de médanos en bici y compras." },
    ],
    otrosAtractivos: ["Bosque Municipal implantado sobre los médanos", "Zona comercial y de diseño de Avenida Bunge", "Reserva Natural Río de las Piedras", "Ostende, balneario vecino con historia de art nouveau"],
    eventos: ["Fiesta Nacional del Turismo", "Desfiles y eventos de verano en la playa"],
    dondeComer: ["Restaurantes de autor en la zona comercial", "Parrillas y pizzerías frente al mar"],
    dondeAlojarse: ["Hoteles boutique y de cadena frente al mar", "Departamentos y cabañas de alquiler temporario"],
    tips: ["Reservar alojamiento con mucha anticipación para enero", "Las bicisendas conectan Pinamar con Cariló y Ostende", "Fuera de temporada alta los precios bajan bastante"],
    presupuesto: "Medio a alto: es uno de los balnearios más caros de la costa atlántica en enero.",
  },
  {
    nombre: "Cariló", km: 355, categoria: "playa", lat: -37.1667, lng: -56.8931,
    nota: "Bosque frente al mar, el balneario más exclusivo.",
    historia: "Cariló nació en la década de 1930 como un loteo forestado dentro de un bosque de pinos y acacias, pensado desde el inicio como un balneario exclusivo y de baja densidad. A diferencia de otros balnearios de la zona, conservó desde su origen la prohibición de talar árboles y construir sobre las calles de arena, lo que le dio su identidad boscosa característica. Con las décadas se consolidó como uno de los destinos de verano más caros y buscados por la elite porteña. Hoy combina ese perfil exclusivo con playas tranquilas dentro del bosque.",
    datoCurioso: "En Cariló está prohibido asfaltar la mayoría de las calles internas del bosque, que se mantienen de arena para preservar el paisaje original.",
    comoLlegar: "Ruta 2 y Ruta 11 hasta Pinamar, luego unos minutos más al sur.",
    cuandoIr: "Enero y febrero, o fines de semana largos de primavera y otoño.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "Es un lugar hecho para recorrer en bici por las bicisendas del bosque; hay pocas calles asfaltadas para autos.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa dentro del bosque." },
      { momento: "Mediodía", actividad: "Almuerzo en la zona comercial." },
      { momento: "Tarde", actividad: "Bicisendas entre las dunas y compras de diseño." },
    ],
    otrosAtractivos: ["Circuito de compras de diseño (Boulevard Cariló)", "Bicisendas entre las dunas y el bosque", "Reserva de fauna del bosque", "Avistaje de aves"],
    eventos: ["Semana de la Moda de Cariló, verano", "Ferias de diseño en temporada"],
    dondeComer: ["Restaurantes gourmet del boulevard", "Cafés y confiterías dentro del bosque"],
    dondeAlojarse: ["Hoteles boutique de alta gama", "Cabañas de alquiler dentro del bosque"],
    tips: ["Alquilar bicicleta apenas se llega, es la forma más práctica de moverse", "Los precios de enero son de los más altos de la costa", "Buena opción fuera de temporada para tranquilidad y descuentos"],
    presupuesto: "Alto: es uno de los balnearios más caros de la provincia.",
  },
  {
    nombre: "Santa Teresita", km: 340, categoria: "playa", lat: -36.5333, lng: -56.6997,
    nota: "Playas extensas y ambiente familiar.",
    historia: "Santa Teresita se desarrolló a partir de la década de 1940 como un balneario pensado para el turismo familiar de sectores medios, en contraste con el perfil más exclusivo de otros balnearios cercanos como Pinamar. Su costanera y sus playas extensas se consolidaron como el gran atractivo del partido de La Costa. Con el tiempo se convirtió en uno de los destinos preferidos por familias que buscan playas accesibles y buena infraestructura. Hoy combina ese perfil familiar con una oferta gastronómica y comercial extendida a lo largo de la costa.",
    datoCurioso: "Uno de los paseos más conocidos de la costanera de Santa Teresita lleva el nombre del escritor Jorge Bucay, en honor a su vínculo con la ciudad.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "La costanera y el centro se recorren a pie o en bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa." },
      { momento: "Mediodía", actividad: "Almuerzo sobre la costanera." },
      { momento: "Tarde", actividad: "Paseo Jorge Bucay y compras." },
    ],
    otrosAtractivos: ["Paseo Jorge Bucay junto al mar", "Escollera para pesca de costa", "Zona comercial de la Avenida 48", "Playas extensas para deportes"],
    eventos: ["Corso de Carnaval", "Fiesta del Verano"],
    dondeComer: ["Restaurantes y parrillas sobre la costanera", "Heladerías y confiterías de la Avenida 48"],
    dondeAlojarse: ["Hoteles familiares", "Departamentos de alquiler temporario"],
    tips: ["Buena opción para familias con niños chicos por sus playas anchas", "La escollera es un buen lugar para pescar sin embarcación", "Reservar con anticipación en enero"],
    presupuesto: "Bajo a medio: uno de los balnearios más accesibles en precio de la zona.",
  },
  {
    nombre: "Villa Gesell", km: 370, categoria: "playa", lat: -37.2632, lng: -56.9733,
    nota: "Peatonal, médanos y vida nocturna costera.",
    historia: "Villa Gesell nació en 1931 por iniciativa de Carlos Idaho Gesell, quien forestó los médanos con pinos y acacias para fijar la arena y fundó una villa balnearia con una fuerte impronta bohemia y cultural desde sus inicios. Ese espíritu se mantuvo durante buena parte del siglo XX, cuando la ciudad se convirtió en un polo de encuentro para artistas, músicos y jóvenes. Con el tiempo sumó una infraestructura turística más masiva sin perder del todo esa identidad particular. Hoy combina extensos médanos, playas y una vida nocturna intensa en temporada alta.",
    datoCurioso: "Carlos Gesell no solo fundó la villa: también trajo a la Argentina los primeros ejemplares de pino marítimo y acacia para forestar los médanos de la zona.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta; marzo para menos multitudes.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro se recorre a pie; para los médanos del Faro Querandí conviene excursión en 4x4 o cuatriciclo.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa y peatonal Av. 3." },
      { momento: "Mediodía", actividad: "Almuerzo en la peatonal." },
      { momento: "Tarde", actividad: "Excursión a los médanos del Faro Querandí." },
    ],
    otrosAtractivos: ["Reserva Natural Faro Querandí y sus médanos vivos", "Reserva Cultural y Forestal Pinar del Norte", "Parque Zootemático", "Mar de las Pampas y Mar Azul, balnearios vecinos más tranquilos"],
    eventos: ["Semana de teatro y arte en verano", "Desfiles de Carnaval"],
    dondeComer: ["Locales de la peatonal Av. 3", "Parrillas y pizzerías frente al mar"],
    dondeAlojarse: ["Hoteles y cabañas del centro", "Departamentos de alquiler en Mar de las Pampas para más tranquilidad"],
    tips: ["Los médanos del Faro Querandí solo se visitan con excursión organizada, no en auto particular", "Mar de las Pampas y Mar Azul son alternativas más tranquilas a pocos km", "Reservar alojamiento con anticipación en enero"],
    presupuesto: "Medio: variado según zona, con opciones más económicas que en Pinamar o Cariló.",
  },
  {
    nombre: "Tandil", km: 350, categoria: "sierra", lat: -37.3217, lng: -59.1332,
    nota: "Sierras, trekking y la icónica Piedra Movediza.",
    historia: "Tandil fue fundada en 1823 como fortín de la línea de frontera de la época, en las sierras que hoy le dan su identidad paisajística. La ciudad creció al amparo de la actividad ganadera y, más tarde, de la industria de embutidos y quesos que la hizo famosa en todo el país. La Piedra Movediza original, ícono de la ciudad durante más de un siglo, se desprendió y cayó en 1912; hoy una réplica ocupa su lugar en el mismo cerro. Hoy Tandil combina ese patrimonio con un fuerte turismo de sierras, trekking y gastronomía regional.",
    datoCurioso: "La Piedra Movediza original se balanceaba sobre el cerro sin caer durante generaciones, hasta que se desprendió en 1912; la que se ve hoy es una réplica colocada décadas después.",
    comoLlegar: "Ruta 226, aproximadamente 4h30 en auto; también hay micros y vuelos.",
    cuandoIr: "Primavera y otoño para trekking; Semana Santa por las celebraciones religiosas.",
    duracion: "Fin de semana.",
    comoMoverse: "Conviene tener auto propio: las distancias entre atractivos son grandes y el transporte público es limitado.",
    itinerario: [
      { momento: "Mañana", actividad: "Cerro de la Piedra Movediza." },
      { momento: "Mediodía", actividad: "Picadas y fiambres regionales." },
      { momento: "Tarde", actividad: "Cerro El Centinela con aerosilla y vistas panorámicas." },
    ],
    otrosAtractivos: ["Cerro El Centinela, con aerosilla y miradores", "Lago del Fuerte y Balneario del Sol", "Parque Independencia y Cerro del Libertador", "Fábricas de fiambres y quesos artesanales"],
    eventos: ["Semana Santa, con procesiones y actividades religiosas", "Fiesta del Salame Fino Tandilero"],
    dondeComer: ["Restaurantes de picadas con fiambres y quesos locales", "Parrillas de la zona serrana"],
    dondeAlojarse: ["Cabañas en las sierras", "Hoteles del centro de la ciudad"],
    tips: ["Llevar auto propio, hay pocos colectivos hacia los atractivos serranos", "Comprar fiambres y quesos directo en las fábricas para llevar de recuerdo", "El Cerro de la Piedra Movediza tiene bastante escalera, llevar calzado cómodo"],
    presupuesto: "Medio: cabañas y gastronomía regional suelen ser el gasto principal.",
  },
  {
    nombre: "Mar del Plata", km: 400, categoria: "playa", lat: -38.0055, lng: -57.5426,
    nota: "La Feliz: playas, puerto y vida urbana costera.",
    historia: "Mar del Plata nació en la década de 1870 alrededor de un saladero, pero a fines del siglo XIX la elite porteña la convirtió en su balneario de veraneo por excelencia, con mansiones y hoteles de lujo. En las décadas siguientes se transformó en un destino de turismo masivo para sectores populares y de clase media, un proceso que la marcó como \"la ciudad feliz\" de las vacaciones argentinas. Su puerto, uno de los más importantes del país, mantuvo siempre una identidad pesquera e industrial paralela al perfil turístico. Hoy combina esa doble identidad, entre balneario popular y ciudad portuaria, con una intensa vida cultural durante todo el año.",
    datoCurioso: "El puerto de Mar del Plata alberga una de las colonias de lobos marinos más visitadas del país, que se puede observar de cerca desde el muelle de pescadores.",
    comoLlegar: "Ruta 2, aproximadamente 4h30 en auto; también micros, tren y vuelos.",
    cuandoIr: "Enero y febrero en temporada alta; fines de semana largos todo el año.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "La ciudad es grande: conviene combinar caminatas por el centro con colectivo o auto para llegar a las playas del sur.",
    itinerario: [
      { momento: "Mañana", actividad: "Playas Bristol o Varese." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado en el puerto." },
      { momento: "Tarde", actividad: "Paseo por el puerto y los lobos marinos." },
    ],
    otrosAtractivos: ["Puerto y lobos marinos", "Torre Tanque, mirador panorámico", "Bodega Trapiche Costa & Pampa en Chapadmalal, pionera en vinos con influencia oceánica", "Villa Victoria Ocampo (centro cultural)"],
    eventos: ["Temporada de teatro y espectáculos en enero-febrero", "Fiesta Nacional del Mar"],
    dondeComer: ["Restaurantes de pescado en el puerto", "Heladerías y confiterías del centro"],
    dondeAlojarse: ["Hoteles frente al mar en la zona céntrica", "Departamentos de alquiler en los barrios del sur"],
    tips: ["Las playas del sur (Playa Grande, Punta Mogotes) suelen ser más tranquilas que el centro", "Reservar alojamiento con mucha anticipación en enero", "El puerto es un buen plan de medio día, incluso fuera de temporada"],
    presupuesto: "Medio: hay opciones para todos los presupuestos, desde hostels hasta hoteles de lujo.",
  },
  {
    nombre: "Balcarce", km: 445, categoria: "sierra", lat: -37.8481, lng: -58.2531,
    nota: "Sierras y museo del automovilismo.",
    historia: "Balcarce fue fundada en 1873 en una zona de sierras y tierras fértiles del sudeste bonaerense, que con el tiempo se convirtió en una de las principales productoras de papa del país. La ciudad ganó fama nacional como cuna de Juan Manuel Fangio, el piloto argentino pentacampeón mundial de Fórmula 1, cuyo museo hoy es el gran atractivo turístico local. Ese perfil combina con el paisaje serrano de la zona, con cerros, arroyos y cascadas poco conocidos fuera de la región. Hoy Balcarce recibe tanto a fanáticos del automovilismo como a quienes buscan naturaleza y tranquilidad.",
    datoCurioso: "El Museo Fangio funciona en el edificio de un antiguo garaje familiar y exhibe autos originales que compitieron y ganaron campeonatos mundiales de Fórmula 1.",
    comoLlegar: "Ruta 226 desde Tandil o Ruta 55 desde Mar del Plata, aproximadamente 5 horas desde CABA.",
    cuandoIr: "Primavera y otoño para las sierras.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las sierras y cascadas cercanas conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Juan Manuel Fangio." },
      { momento: "Mediodía", actividad: "Almuerzo con productos de papa y carnes locales." },
      { momento: "Tarde", actividad: "Sierras y cascadas cercanas." },
    ],
    otrosAtractivos: ["Museo Juan Manuel Fangio", "Parque Municipal Cerro El Triunfo", "Cascadas y arroyos serranos cercanos", "Circuito de golf"],
    eventos: ["Fiesta Nacional de la Papa", "Festivales del Canto Argentino en el Cerro El Triunfo"],
    dondeComer: ["Restaurantes con platos a base de papa regional", "Parrillas de la zona serrana"],
    dondeAlojarse: ["Cabañas en las sierras cercanas", "Hoteles del centro de la ciudad"],
    tips: ["El Museo Fangio es imperdible incluso para quienes no siguen el automovilismo", "Buena escala entre Tandil y Mar del Plata", "Preguntar por las cascadas cercanas, están poco señalizadas"],
    presupuesto: "Medio.",
  },
  {
    nombre: "Miramar", km: 450, categoria: "playa", lat: -38.268, lng: -57.8397,
    nota: "Bosque, playas tranquilas y golf.",
    historia: "Miramar se fundó en 1888 como uno de los primeros balnearios de la costa atlántica bonaerense, incluso antes de que Mar del Plata consolidara su expansión hacia el sur. Con el tiempo se ganó fama como un destino más tranquilo y familiar, con un extenso vivero forestal que la distingue de otros balnearios de médanos abiertos. Su cercanía con yacimientos paleontológicos sobre los acantilados también le dio un perfil científico particular. Hoy combina playas tranquilas, golf y naturaleza con un ritmo mucho más calmo que el de Mar del Plata.",
    datoCurioso: "Los acantilados al sur de Miramar son un sitio paleontológico reconocido, donde se han encontrado fósiles de megafauna sudamericana como gliptodontes y perezosos gigantes.",
    comoLlegar: "Ruta 2 hasta Mar del Plata y luego Ruta 11, aproximadamente 5 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta; buen destino tranquilo fuera de esas fechas.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro y la costa se recorren a pie o en bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Vivero Florentino Ameghino." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Playa y acantilados paleontológicos." },
    ],
    otrosAtractivos: ["Vivero Florentino Ameghino", "Acantilados con yacimientos paleontológicos", "Cancha de golf frente al mar", "Reserva natural del vivero"],
    eventos: ["Fiesta del Golf de Miramar", "Semana de la Primavera"],
    dondeComer: ["Restaurantes de pescado sobre la costa", "Confiterías del centro"],
    dondeAlojarse: ["Hoteles familiares frente al mar", "Cabañas cerca del vivero"],
    tips: ["Es de los balnearios más tranquilos de la zona, ideal para descansar", "Los acantilados se recorren mejor con marea baja", "Buena opción para combinar golf y playa"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Necochea", km: 470, categoria: "playa", lat: -38.5545, lng: -58.7396,
    nota: "Playas anchas y desembocadura del río Quequén.",
    historia: "Necochea se fundó en 1881 como uno de los primeros balnearios al sur de Buenos Aires, aprovechando la desembocadura del río Quequén y sus extensas playas. El Parque Miguel Lillo, forestado a comienzos del siglo XX, se convirtió en uno de los bosques artificiales más grandes de la costa atlántica y en el gran pulmón verde de la ciudad. Con las décadas, Necochea desarrolló un perfil propio, menos masivo que Mar del Plata, con foco en la naturaleza y los deportes acuáticos. Hoy combina playas anchas, el puerto de Quequén y cabalgatas sobre la costa.",
    datoCurioso: "El Parque Miguel Lillo tiene más de 600 hectáreas de bosque implantado, lo que lo convierte en uno de los más extensos de la costa atlántica bonaerense.",
    comoLlegar: "Ruta 2 y luego Ruta 88, aproximadamente 5h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro y la costa se recorren a pie o en bici; para el puerto de Quequén conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa junto al río Quequén." },
      { momento: "Mediodía", actividad: "Almuerzo de pescado en el puerto." },
      { momento: "Tarde", actividad: "Parque Miguel Lillo y cabalgata por la costa." },
    ],
    otrosAtractivos: ["Parque Miguel Lillo", "Puerto Quequén", "Desembocadura del río Quequén", "Circuito de cabalgatas por la costa"],
    eventos: ["Necochea Bike (cicloturismo)", "Fiesta del Mar"],
    dondeComer: ["Restaurantes de pescado en el puerto", "Parrillas y pizzerías del centro"],
    dondeAlojarse: ["Hoteles frente al mar", "Cabañas cerca del Parque Miguel Lillo"],
    tips: ["El Parque Miguel Lillo tiene bicisendas, conviene alquilar bici", "Las cabalgatas por la playa suelen salir al atardecer", "Buena alternativa más tranquila y natural que Mar del Plata"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Sierra de la Ventana", km: 530, categoria: "sierra", lat: -38.1519, lng: -61.7936,
    nota: "Cerros, arroyos y el histórico Cerro Ventana.",
    historia: "La zona se desarrolló a comienzos del siglo XX alrededor de la estación de ferrocarril, que trajo a las primeras familias veraniegas atraídas por el paisaje serrano, muy distinto al resto de la llanura pampeana. El Cerro Tres Picos, el más alto de la provincia de Buenos Aires, y el Cerro Ventana, con su abertura natural característica, se convirtieron en el gran atractivo de trekking de la región. Con el tiempo, la localidad vecina de Villa Ventana sumó un perfil más boscoso y tranquilo, dentro del mismo sistema serrano. Hoy la comarca combina trekking, arroyos y un ritmo mucho más pausado que el de la costa atlántica.",
    datoCurioso: "El Cerro Ventana debe su nombre a una abertura natural en la roca, cerca de la cima, a través de la cual se puede ver el paisaje del otro lado.",
    comoLlegar: "Ruta 3 y Ruta 76, aproximadamente 6 horas en auto; también hay tren y micros.",
    cuandoIr: "Primavera y otoño para trekking, evitando el calor extremo del verano.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro es chico y se recorre a pie; para los senderos de trekking hace falta auto hasta la base de los cerros.",
    itinerario: [
      { momento: "Mañana", actividad: "Trekking al Cerro Ventana." },
      { momento: "Mediodía", actividad: "Almuerzo de picada serrana." },
      { momento: "Tarde", actividad: "Arroyo Sauce Grande para refrescarse." },
    ],
    otrosAtractivos: ["Saldungaray, pueblo cercano reconocido por ONU Turismo, con cementerio de Salamone y bodega de vinos serranos", "Cerro Tres Picos, el más alto de la provincia de Buenos Aires", "Villa Ventana, pueblo boscoso vecino", "Parque Provincial Ernesto Tornquist"],
    eventos: ["Fiesta del Cordero Serrano", "Temporada de trekking en primavera"],
    dondeComer: ["Restaurantes de picadas y comida de campo", "Confiterías de Villa Ventana"],
    dondeAlojarse: ["Cabañas en Villa Ventana", "Hosterías en Sierra de la Ventana pueblo"],
    tips: ["El trekking al Cerro Ventana requiere buen estado físico y calzado de montaña", "Consultar el estado del sendero antes de salir, se cierra en días de mucho viento", "Villa Ventana es una buena base más tranquila que el pueblo principal"],
    presupuesto: "Medio: cabañas y comida regional son el gasto principal, el acceso a los senderos suele ser gratuito o de bajo costo.",
  },
  {
    nombre: "Carhué", km: 520, categoria: "rio", lat: -37.1811, lng: -62.7328,
    nota: "Termas sobre el lago Epecuén y el pueblo fantasma de Villa Epecuén.",
    historia: "Carhué se fundó en 1876 como fortín de la línea de frontera de la época, en el límite entre la provincia de Buenos Aires y La Pampa. A pocos kilómetros, sobre la orilla del lago Epecuén, se desarrolló desde 1920 la Villa Epecuén, un balneario termal que en sus mejores años recibió miles de turistas atraídos por las propiedades curativas del agua, comparables a las del Mar Muerto. En 1985 una crecida rompió el dique de contención y el lago inundó por completo la villa, que quedó bajo el agua durante más de veinte años. Cuando el agua bajó, dejó al descubierto las ruinas fantasmales del pueblo, que hoy es uno de los sitios más visitados de la región.",
    datoCurioso: "En enero de 2017, 1.941 personas tomadas de la mano flotaron juntas en el lago Epecuén y batieron un récord Guinness, gracias a la altísima salinidad del agua que permite flotar sin esfuerzo.",
    comoLlegar: "Ruta Provincial 60 desde Bolívar y Guaminí, aproximadamente 6 horas en auto desde CABA; también hay micros de larga distancia.",
    cuandoIr: "Todo el año para las termas; el verano suma la pileta al aire libre con agua del lago.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro de Carhué se recorre a pie; para las ruinas de Villa Epecuén, a unos 7 km, conviene auto o excursión organizada.",
    itinerario: [
      { momento: "Mañana", actividad: "Ruinas de Villa Epecuén, el pueblo fantasma que quedó bajo el lago." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro de Carhué." },
      { momento: "Tarde", actividad: "Piletas termales sobre el lago Epecuén." },
    ],
    otrosAtractivos: ["Ruinas de Villa Epecuén, el pueblo fantasma", "Museo Regional Dr. Adolfo Alsina", "Obras del arquitecto Francisco Salamone en la zona", "Avistaje de aves en la costa del lago"],
    eventos: ["Aniversario de la ciudad", "Temporada termal de verano con pileta al aire libre"],
    dondeComer: ["Restaurantes del centro de Carhué", "Confiterías cerca de la costanera del lago"],
    dondeAlojarse: ["Hoteles con spa termal propio", "Cabañas y campings junto al lago"],
    tips: ["Las ruinas de Villa Epecuén se recorren mejor con calzado cerrado, el terreno es irregular", "Reservar el ingreso a las termas, sobre todo los fines de semana", "Es un viaje largo desde CABA, conviene planearlo como fin de semana completo o combinarlo con Sierra de la Ventana"],
    presupuesto: "Medio: el ingreso a las termas y el alojamiento con spa son el gasto principal; las ruinas de Epecuén son de acceso libre o de muy bajo costo.",
  },
  {
    nombre: "General Belgrano", km: 160, categoria: "rio", lat: -35.7592, lng: -58.5019,
    nota: "Termas del Salado, el complejo termal más cercano a CABA.",
    historia: "General Belgrano nació en 1871 alrededor de la estación de tren \"Salado\", sobre el río homónimo, en una zona de campos fértiles del sur bonaerense. Durante décadas fue conocido principalmente como un destino de pesca y descanso junto al río, sin mayor desarrollo turístico. En 2012 la inauguración de las Termas del Salado, alimentadas por aguas descubiertas en los años 40 tras una perforación petrolera fallida, cambió por completo su perfil y lo convirtió en el complejo termal más cercano a la Ciudad de Buenos Aires. Hoy combina ese atractivo termal con el ritmo tranquilo de pueblo y el paisaje del río Salado.",
    datoCurioso: "Las aguas de las Termas del Salado se descubrieron por casualidad en la década de 1940, durante una perforación petrolera que no encontró petróleo pero sí una vertiente termal a 965 metros de profundidad.",
    comoLlegar: "Autopista Ricchieri y luego Rutas Provinciales 41 y 29, aproximadamente 2 horas en auto.",
    cuandoIr: "Todo el año; las termas funcionan en cualquier época.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para el Bosque Encantado, a 13 km, y las termas conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Termas del Salado." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Bosque Encantado o costa del río Salado." },
    ],
    otrosAtractivos: ["Bosque Encantado, parque diseñado por Carlos Thays", "Museo Histórico Municipal", "Costa del río Salado para pesca y kayak", "Balneario Viejo"],
    eventos: ["Festival Mayor de Tango y Folklore, desde 1994"],
    dondeComer: ["Parrillas y casas de té del centro", "Restaurantes cerca de las termas"],
    dondeAlojarse: ["Hoteles y cabañas del pueblo (no hay hotelería dentro del complejo termal)", "Campings junto al río"],
    tips: ["Es el complejo termal más cercano a CABA, se puede hacer como excursión de un día", "Consultar horarios, el complejo cierra los martes", "El Bosque Encantado es un buen paseo aparte de las termas"],
    presupuesto: "Medio: la entrada a las termas varía según edad y residencia, y es el gasto principal del paseo.",
  },
  {
    nombre: "Tapalqué", km: 270, categoria: "campo", lat: -36.3554, lng: -60.0225,
    nota: "Pueblo gauchesco con complejo termal propio.",
    historia: "Tapalqué fue creada en su emplazamiento actual en 1863 por decreto del gobernador Mariano Saavedra, sobre un área que antes había sido asiento de guarniciones y fortines militares de la línea de frontera. Su nombre proviene del mapuche y hace referencia a los totorales que bordean el arroyo homónimo. Con el tiempo se consolidó como un pueblo de tradición gauchesca en el corazón de la llanura pampeana. En los últimos años sumó un complejo de aguas termales que renovó su perfil turístico, sin perder el ritmo tranquilo de pueblo de campo.",
    datoCurioso: "El Cantón Tapalqué Viejo, un antiguo fortín a 25 km del centro, fue escenario de enfrentamientos entre indígenas y criollos y hoy conserva la pulpería San Gervasio, fundada en 1850.",
    comoLlegar: "Ruta Nacional 3 hasta Azul y luego Ruta Provincial 51, aproximadamente 3h30 en auto.",
    cuandoIr: "Todo el año; la Fiesta de la Torta Negra es un buen momento para ir.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para el Cantón Tapalqué Viejo y las Sierras Bayas conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Complejo Termal Tapalqué." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Cantón Tapalqué Viejo y pulpería San Gervasio." },
    ],
    otrosAtractivos: ["Complejo Termal Tapalqué", "Cantón Tapalqué Viejo y Pulpería San Gervasio", "Sierras Bayas cercanas", "Costanera del arroyo Tapalqué"],
    eventos: ["Fiesta de la Torta Negra"],
    dondeComer: ["Restaurantes de comida de campo del centro", "Confiterías junto a la costanera"],
    dondeAlojarse: ["Cabañas y hospedajes rurales", "Camping junto al arroyo"],
    tips: ["Combina bien con Azul, que está a unos 50 km", "Reservar las termas con anticipación en fines de semana", "Buen destino para trekking y cabalgatas en las Sierras Bayas cercanas"],
    presupuesto: "Medio: el ingreso a las termas es el gasto principal del paseo.",
  },
  {
    nombre: "Uribelarrea", km: 90, categoria: "pueblo", lat: -35.1167, lng: -58.7167,
    nota: "Pueblo de campo con historia lechera y gran oferta gastronómica.",
    historia: "Uribelarrea nació a fines del siglo XIX en tierras donadas por su fundador, quien además dotó al naciente pueblo de escuelas, estación de ferrocarril, telégrafo y correo. Con la llegada del tren en 1892 y la inmigración italiana y española, se convirtió en un importante polo lechero, con más de un centenar de tambos y queserías que abastecían a Buenos Aires. Tras un largo período de decadencia a mediados del siglo XX, el pueblo fue redescubierto en las últimas décadas como destino de escapadas de fin de semana, gracias a su estética detenida en el tiempo. Hoy combina ese pasado rural con una gran oferta gastronómica que lo convirtió en uno de los pueblos de campo más visitados cerca de CABA.",
    datoCurioso: "Por su aspecto de época, Uribelarrea fue locación de películas como \"Juan Moreira\" de Leonardo Favio y \"Evita\" de Alan Parker, que dejó como legado los vitrales de la iglesia del pueblo.",
    comoLlegar: "Autopista Ezeiza-Cañuelas y luego Ruta Nacional 205, aproximadamente 1h30 en auto.",
    cuandoIr: "De jueves a domingo, cuando abre la mayoría de los comercios; fines de semana largos hay más movimiento.",
    duracion: "Día completo.",
    comoMoverse: "El pueblo es chico y se recorre entero a pie o en bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Centenario, iglesia y antigua estación de ferrocarril." },
      { momento: "Mediodía", actividad: "Parrilla o pulpería tradicional." },
      { momento: "Tarde", actividad: "Museo Regional de Maquinaria Agrícola Leopoldo Rizzi y compras de quesos y fiambres." },
    ],
    otrosAtractivos: ["Museo Regional de Maquinaria Agrícola Leopoldo Rizzi", "Finca Don Atilio, viñedos y bodega de turismo enológico", "Túnel Vegetal, sendero arbolado de 200 metros", "Tambos y queserías visitables en la zona"],
    eventos: ["Fiesta de la Picada y la Cerveza Artesanal, desde 2009"],
    dondeComer: ["Pulperías y parrillas tradicionales", "Casas de té y restaurantes gourmet de campo"],
    dondeAlojarse: ["Hospedajes rurales y cabañas en las afueras", "Estancias cercanas en el partido de Cañuelas"],
    tips: ["Va de jueves a domingo, entre semana muchos locales están cerrados", "Los fines de semana largos suele haber mucha gente, conviene ir temprano", "Comprar quesos y fiambres directo en los productores locales"],
    presupuesto: "Bajo a medio: el paseo por el pueblo es gratuito, el gasto principal es la comida.",
  },
  {
    nombre: "Pergamino", km: 230, categoria: "ciudad", lat: -33.8969, lng: -60.5731,
    nota: "Capital Nacional de la Semilla, cultura y agroindustria.",
    historia: "Pergamino nació a fines del siglo XVI como fortín en el camino real hacia el Alto Perú, y fue declarada ciudad en 1895. Su ubicación en plena pampa ondulada la convirtió en un centro agrícola de referencia, con estaciones experimentales y empresas semilleras que en 1997 le valieron el título de Capital Nacional de la Semilla. Hoy combina ese perfil agroindustrial con una oferta cultural activa y doce pueblos rurales que forman parte del partido.",
    datoCurioso: "Pergamino es sede del INTA (Instituto Nacional de Tecnología Agropecuaria), que atiende las necesidades agrícolas de 44 partidos bonaerenses a través de un radar meteorológico propio.",
    comoLlegar: "Ruta Nacional 8, aproximadamente 2h30 en auto.",
    cuandoIr: "Todo el año.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para los pueblos rurales del partido conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Principal y Catedral San Nicolás de Bari." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Museo de la Ciudad y Archivo Histórico, Parque Municipal." },
    ],
    otrosAtractivos: ["Museo de la Ciudad y Archivo Histórico", "Museo de Bellas Artes", "Parque Municipal", "Doce pueblos rurales del partido, cada uno con su propia fiesta"],
    eventos: ["Aniversario de la declaración como ciudad, octubre", "Fiestas rurales en los pueblos del partido durante el año"],
    dondeComer: ["Restaurantes del centro histórico", "Bodegones tradicionales"],
    dondeAlojarse: ["Hoteles de cadena y boutique en el centro", "Estancias cercanas para turismo rural"],
    tips: ["Buena escala camino al norte del país o a Rosario", "Consultar la agenda semanal de eventos culturales", "Los pueblos rurales del partido son un plus si hay tiempo extra"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Pehuajó", km: 365, categoria: "campo", lat: -35.8022, lng: -61.8956,
    nota: "El pueblo de Manuelita la Tortuga, lagunas y tranquilidad.",
    historia: "Pehuajó nació en 1889 al calor de la llegada del ferrocarril, en una zona de esteros que le dio nombre en guaraní (\"estero profundo cenagoso\"). Con el tiempo se consolidó como un centro de servicios para la economía agrícola ganadera del noroeste bonaerense. La localidad se hizo popular en todo el país gracias a \"Manuelita, la tortuga\", la canción infantil de María Elena Walsh que lleva su nombre. Hoy combina ese cariño popular con lagunas para pesca y un trazado urbano tranquilo.",
    datoCurioso: "La canción \"Manuelita\" de María Elena Walsh, sobre una tortuga que viaja a París y vuelve a Pehuajó, inspiró también una película animada que representó a la Argentina en los Premios Oscar de 1999.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 4 horas en auto.",
    cuandoIr: "Primavera y verano para las lagunas.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie o en bici; para las lagunas conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Dardo Rocha y Monumento a Manuelita." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Lagunas La Salada, El Cuerú o Las Tres Marías, pesca de pejerrey." },
    ],
    otrosAtractivos: ["Monumento a Manuelita la Tortuga", "Parque General San Martín, con lago e islas", "Museo Regional Mario Abelino Polesello", "Lagunas La Salada, El Cuerú y Las Tres Marías"],
    eventos: ["Aniversario fundacional"],
    dondeComer: ["Restaurantes de comida casera del centro", "Parrillas tradicionales"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas cerca de las lagunas"],
    tips: ["Llevar equipo de pesca para las lagunas", "El Parque San Martín es un buen paseo en familia", "Buena parada en el camino hacia La Pampa"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Trenque Lauquen", km: 444, categoria: "campo", lat: -35.9667, lng: -62.7333,
    nota: "Laguna redonda y pesca de pejerrey en el oeste bonaerense.",
    historia: "Trenque Lauquen se fundó en 1876 como centro de operaciones militares durante la expansión de la frontera hacia el oeste pampeano, bajo las órdenes del entonces ministro de Guerra Adolfo Alsina. Su nombre significa \"laguna redonda\" en mapuche, en referencia al espejo de agua que le dio origen. Con el tiempo se convirtió en un importante centro de servicios agropecuarios del oeste bonaerense, en la confluencia de dos rutas nacionales clave. Hoy combina ese rol de ciudad de campo con lagunas reconocidas por la pesca deportiva.",
    datoCurioso: "La laguna Hinojo Grande, a unos 25 km del centro, es reconocida por sus pejerreyes de hasta 500 gramos y atrae pescadores de todo el país.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 5 horas en auto.",
    cuandoIr: "Primavera y otoño para pesca; todo el año para la ciudad.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las lagunas y campings conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Centro histórico y avenidas con rambla." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna Hinojo Grande, pesca de pejerrey." },
    ],
    otrosAtractivos: ["Laguna Hinojo Grande", "Plazas y avenidas con rambla central", "Museo histórico local", "Circuitos de cicloturismo rural"],
    eventos: ["Aniversario fundacional, abril"],
    dondeComer: ["Restaurantes del centro", "Parrillas tradicionales"],
    dondeAlojarse: ["Hoteles del centro", "Campings junto a la laguna Hinojo Grande"],
    tips: ["Es un viaje largo, conviene planearlo como fin de semana completo", "Llevar equipo de pesca propio", "Buena escala hacia La Pampa"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Coronel Suárez", km: 580, categoria: "campo", lat: -37.4514, lng: -61.9378,
    nota: "Capital del polo y estancias del sudoeste bonaerense.",
    historia: "Coronel Suárez nació en 1871 como fortín militar durante la expansión de la frontera hacia el sur, sobre el arroyo Sauce Corto. Con el correr de las décadas se consolidó como un centro agropecuario del sudoeste bonaerense, con una fuerte tradición en la cría de caballos de polo que la catapultó a la cima de ese deporte a nivel mundial. La localidad también reúne artesanos-joyeros especializados en platería fina de diseño gauchesco. Hoy combina ese perfil rural y deportivo con estancias que reciben visitantes para cabalgatas y días de campo.",
    datoCurioso: "Coronel Suárez formó a algunos de los mejores jugadores de polo del mundo, y sus estancias todavía crían caballos para ese deporte.",
    comoLlegar: "Ruta Nacional 33 o Ruta 51, aproximadamente 6 horas en auto.",
    cuandoIr: "Primavera y otoño.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para estancias y torneos de polo conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Centro y museos locales." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Estancia con cabalgata o torneo de polo, según temporada." },
    ],
    otrosAtractivos: ["Santa María, pueblo cercano con tradición de los alemanes del Volga", "Estancias con cabalgatas y paseos en carruaje", "Talleres de platería fina y diseño gauchesco", "Canchas de polo de nivel internacional"],
    eventos: ["Torneos de polo según calendario", "Fiestas patronales"],
    dondeComer: ["Restaurantes de comida de campo", "Parrillas tradicionales"],
    dondeAlojarse: ["Estancias con hospedaje", "Hoteles del centro"],
    tips: ["Consultar el calendario de torneos de polo antes de viajar", "Buena combinación con Pigüé, muy cerca", "Comprar platería artesanal como recuerdo"],
    presupuesto: "Medio a alto: las estancias y actividades de polo suelen ser el gasto principal.",
  },
  {
    nombre: "Pigüé", km: 580, categoria: "sierra", lat: -37.5993, lng: -62.3979,
    nota: "Pueblo de herencia francesa entre las sierras de Ventania.",
    historia: "Pigüé fue fundada en 1884 por un grupo de familias provenientes de la región francesa de L'Aveyron, acompañadas por inmigrantes españoles e italianos, lo que le dio una identidad europea poco común en la llanura pampeana. Ese origen todavía se refleja en su arquitectura, sus tradiciones y su gastronomía. Rodeada por los cordones serranos de Curamalal y Bravard, dentro del sistema de Ventania, se convirtió con el tiempo en un destino de naturaleza y turismo rural. Hoy combina ese patrimonio francés con senderos, arroyos y miradores serranos.",
    datoCurioso: "El origen francés de Pigüé se conserva en instituciones como el Teatro Español, la Sociedad Italiana y la Sociedad Francesa, que mantienen su arquitectura de época.",
    comoLlegar: "Autopista Ricchieri, Ruta Nacional 205, Ruta Provincial 65 y Ruta Nacional 33, aproximadamente 6h30 en auto.",
    cuandoIr: "Primavera y otoño para las sierras.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las sierras de Curamalal y Bravard conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Centro histórico y Parroquia Nuestra Señora de Luján." },
      { momento: "Mediodía", actividad: "Almuerzo con influencia francesa." },
      { momento: "Tarde", actividad: "Senderos y miradores en las sierras de Curamalal o Bravard." },
    ],
    otrosAtractivos: ["Sierras de Curamalal y Bravard", "Museo y Archivo de la Ciudad", "Parroquia Nuestra Señora de Luján", "Arroyos y miradores serranos"],
    eventos: ["Eventos gastronómicos con influencia francesa", "Festivales culturales durante el año"],
    dondeComer: ["Restaurantes con influencia francesa, española e italiana", "Confiterías tradicionales"],
    dondeAlojarse: ["Hospedajes rurales en las sierras", "Hoteles del centro"],
    tips: ["Buena combinación con Coronel Suárez, muy cerca", "Llevar calzado de trekking para las sierras", "Consultar la agenda de caminatas guiadas"],
    presupuesto: "Medio.",
  },
  {
    nombre: "Tres Arroyos", km: 550, categoria: "playa", lat: -38.3739, lng: -60.2761,
    nota: "Herencia danesa, plazas europeas y el balneario de Claromecó.",
    historia: "Tres Arroyos fue fundada en 1884 sobre un trazado urbanístico diseñado por Dardo Rocha, el mismo fundador de La Plata, inspirado en un estilo europeo de plazas simétricas. La ciudad debe su nombre a la confluencia de tres arroyos que desembocan en el Océano Atlántico. A fines del siglo XIX recibió una fuerte inmigración danesa y neerlandesa, que dejó su huella en la gastronomía y las tradiciones locales. Hoy combina ese patrimonio europeo con el balneario de Claromecó, su playa principal, a pocos kilómetros del centro.",
    datoCurioso: "La gastronomía de Tres Arroyos combina la tradición pampeana con recetas danesas y neerlandesas, como el kringle, un pan dulce trenzado típico de la colectividad escandinava.",
    comoLlegar: "Ruta 3 y luego Ruta 228, aproximadamente 6 horas en auto.",
    cuandoIr: "Enero y febrero para la playa de Claromecó; todo el año para la ciudad.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para Claromecó, a unos 40 km, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Palacio Municipal y Parroquia Nuestra Señora del Carmen." },
      { momento: "Mediodía", actividad: "Almuerzo con especialidades danesas." },
      { momento: "Tarde", actividad: "Playa y faro de Claromecó." },
    ],
    otrosAtractivos: ["Claromecó, balneario principal con médanos y faro de 54 metros", "Parque Municipal Ángel Cabañas", "Museo Mulazzi", "Museo de Bellas Artes"],
    eventos: ["Fiesta de la Colectividad Danesa", "Corso de Carnaval en Claromecó"],
    dondeComer: ["Restaurantes con especialidades danesas y neerlandesas", "Parrillas y pescaderías en Claromecó"],
    dondeAlojarse: ["Hoteles del centro de Tres Arroyos", "Cabañas y departamentos en Claromecó"],
    tips: ["Claromecó permite acceso en vehículo a ciertos sectores de playa", "Buena escala camino a Necochea o Bahía Blanca", "Probar el kringle danés en alguna confitería local"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Bahía Blanca", km: 650, categoria: "ciudad", lat: -38.7196, lng: -62.2724,
    nota: "Puerto, cultura y puerta de entrada a la Patagonia.",
    historia: "Bahía Blanca fue fundada en 1828 como fortín militar para asegurar el dominio del territorio del sur bonaerense. Su ubicación estratégica junto al mar la convirtió con el tiempo en uno de los puertos más importantes de Argentina, con una fuerte identidad industrial y naval. La llegada de inmigrantes europeos a fines del siglo XIX y principios del XX dejó su huella en barrios como el Barrio Inglés y en instituciones culturales como el Teatro Municipal. Hoy combina ese perfil portuario e industrial con una intensa vida universitaria y cultural, y funciona como puerta de entrada a la Patagonia.",
    datoCurioso: "El Museo del Puerto, en Ingeniero White, funciona en un antiguo edificio de la aduana y cuenta la historia de los inmigrantes que llegaron a trabajar en el puerto.",
    comoLlegar: "Ruta 3, aproximadamente 7 horas en auto; también hay vuelos y trenes.",
    cuandoIr: "Todo el año; suele usarse como escala hacia la Patagonia o Sierra de la Ventana.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para Ingeniero White y el puerto conviene auto o colectivo.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Rivadavia, Catedral y Teatro Municipal." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Museo del Puerto en Ingeniero White." },
    ],
    otrosAtractivos: ["Museo del Puerto en Ingeniero White", "Médanos, a 40 min, con Termas de Médanos y la bodega Al Este (vinos con influencia oceánica)", "Barrio Inglés", "Parque de Mayo"],
    eventos: ["Fiesta de la Historia de la Carne, en General Daniel Cerri, noviembre"],
    dondeComer: ["Restaurantes y cafeterías del centro histórico", "Marisquerías en Ingeniero White"],
    dondeAlojarse: ["Hoteles de cadena en el centro", "Hospedajes cerca de la terminal de ómnibus y el aeropuerto"],
    tips: ["Buena escala en el camino hacia Sierra de la Ventana o la Patagonia", "El Museo del Puerto es gratuito y muy recomendable", "Tiene aeropuerto propio, útil si se viaja en avión"],
    presupuesto: "Medio: hay opciones para todos los presupuestos, típico de una ciudad grande.",
  },
  {
    nombre: "Monte Hermoso", km: 630, categoria: "playa", lat: -38.9847, lng: -61.2925,
    nota: "Playas de arena fina, casi en el límite provincial.",
    historia: "Monte Hermoso se fundó en la década de 1940 como balneario del sudoeste bonaerense, en un tramo de costa con una orientación poco común que hace que el sol salga y se ponga sobre el mar. Su desarrollo fue más tardío y a menor escala que el de los balnearios del centro de la provincia, lo que le dio un perfil más tranquilo y familiar. Con el tiempo se convirtió en el balneario de referencia para quienes viven en el sur bonaerense y en Bahía Blanca. Hoy combina playas de arena fina con una fuerte identidad de pueblo costero.",
    datoCurioso: "Por su orientación geográfica particular, Monte Hermoso es uno de los pocos lugares de la costa argentina donde se puede ver tanto la salida como la puesta de sol sobre el mar.",
    comoLlegar: "Ruta 3 y luego Ruta 78, aproximadamente 7 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro y la playa se recorren a pie o en bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa de arena fina." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Puesta de sol sobre el mar y reserva natural cercana." },
    ],
    otrosAtractivos: ["Reserva natural de la desembocadura", "Vivero forestal municipal", "Pesca de costa", "Cercanía con Bahía Blanca para excursiones de un día"],
    eventos: ["Temporada de verano con espectáculos en la playa"],
    dondeComer: ["Restaurantes de pescado y mariscos sobre la costa", "Parrillas y pizzerías del centro"],
    dondeAlojarse: ["Hoteles y cabañas frente al mar", "Campings en la zona"],
    tips: ["Es de los balnearios más tranquilos del sur bonaerense", "Buena combinación con Bahía Blanca o Sierra de la Ventana", "Fuera de temporada alta, buen lugar para descansar sin multitudes"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Carmen de Patagones", km: 900, categoria: "ciudad", lat: -40.7972, lng: -62.9819,
    nota: "La ciudad más austral de la provincia, casco colonial junto al río Negro.",
    historia: "Carmen de Patagones fue fundada en 1779 por orden del rey Carlos III de España, como parte de la estrategia para asegurar la soberanía española en el extremo sur del territorio. En 1827, sus pobladores (chacareros, artesanos, comerciantes y milicianos, entre ellos afrodescendientes) resistieron durante días una invasión naval brasileña, sin apoyo del gobierno central, en un episodio que se recuerda como una gesta local. Con el correr de las décadas se consolidó como la ciudad más austral de la provincia de Buenos Aires, unida a Viedma, capital de Río Negro, por el río Negro. Hoy conserva uno de los cascos históricos mejor preservados del país, declarado Poblado Histórico Nacional en 2003.",
    datoCurioso: "Las cuevas maragatas, excavadas en la arenisca de las barrancas del río Negro, sirvieron de vivienda a los primeros pobladores del siglo XIX y hoy recuerdan, por su forma, a las viviendas hobbit de la ficción.",
    comoLlegar: "Ruta Nacional 3, aproximadamente 11 horas en auto; también hay micros y vuelos a Viedma, cruzando el puente.",
    cuandoIr: "Primavera y verano; el 22 de abril se celebra el aniversario fundacional.",
    duracion: "Fin de semana largo, dado lo extenso del viaje.",
    comoMoverse: "El casco histórico, de 24 manzanas, se recorre a pie; para cruzar a Viedma hay puente y colectivo local.",
    itinerario: [
      { momento: "Mañana", actividad: "Torre del Fuerte y casco histórico colonial." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Cuevas Maragatas y Cerro de la Caballada." },
    ],
    otrosAtractivos: ["Museo Histórico Regional Emma Nozzi", "Cuevas Maragatas en las barrancas del río", "Cerro de la Caballada, mirador panorámico", "Puente ferrocarretero levadizo hacia Viedma"],
    eventos: ["Aniversario fundacional, 22 de abril", "Conmemoración de la resistencia de 1827"],
    dondeComer: ["Restaurantes de pescado de río", "Bares históricos como el Bar del Puerto"],
    dondeAlojarse: ["Hoteles del centro histórico", "Hospedajes compartidos con la vecina Viedma"],
    tips: ["Es un viaje muy largo desde CABA, conviene combinarlo con un vuelo hasta Viedma", "El casco histórico está bien señalizado para recorrer a pie", "Buena base para conocer también Viedma, del otro lado del río"],
    presupuesto: "Medio: el mayor gasto suele ser el traslado, dado lo lejos que está de CABA.",
  },
  {
    nombre: "Isla Martín García", km: 70, categoria: "rio", lat: -34.1825, lng: -58.2531,
    nota: "Solo se llega en barco: historia, penal político y la única frontera seca con Uruguay.",
    historia: "Descubierta en 1516 por la expedición española de Juan Díaz de Solís, la isla fue disputada durante siglos entre España y Portugal por su posición estratégica en el Río de la Plata. A partir de 1900 funcionó como presidio político-militar y lazareto, y por sus celdas pasaron figuras como Hipólito Yrigoyen, Marcelo T. de Alvear, Juan Domingo Perón y Arturo Frondizi. En 1973 el Tratado del Río de la Plata reconoció la soberanía argentina sobre la isla, y en 1988 fue declarada Reserva de Usos Múltiples. Hoy es la única frontera seca entre Argentina y Uruguay, y combina naturaleza, historia y un pueblo casi congelado en el tiempo.",
    datoCurioso: "El llamado \"Barrio Chino\" de la isla, con casas abandonadas cubiertas de vegetación, no tiene relación con inmigración china: el nombre surgió por su aspecto laberíntico y abigarrado.",
    comoLlegar: "Solo se llega en barco, con salida desde la estación fluvial de Tigre o desde Dársena Norte en CABA; la travesía dura entre 2 y 3 horas.",
    cuandoIr: "Todo el año; las salidas en barco suelen ser martes, jueves, sábados, domingos y feriados según la empresa.",
    duracion: "Día completo, o una noche si se quiere quedar en el camping o la hostería.",
    comoMoverse: "La isla se recorre a pie en la visita guiada; no hay autos, todo el paseo es caminando.",
    itinerario: [
      { momento: "Mañana", actividad: "Navegación desde Tigre y llegada a la isla." },
      { momento: "Mediodía", actividad: "Visita guiada (penal histórico, museo, cementerio, Barrio Chino) y almuerzo." },
      { momento: "Tarde", actividad: "Teatro Urquiza, Casa de Rubén Darío y canteras, antes de volver en barco." },
    ],
    otrosAtractivos: ["Antiguo penal donde estuvieron detenidos Yrigoyen, Alvear, Perón y Frondizi", "Museo Histórico de la isla", "Teatro Urquiza", "Barrio Chino y canteras de piedra"],
    eventos: ["Excursiones especiales en fechas patrias, según la empresa naviera"],
    dondeComer: ["Restaurante Solís, con menú de parrillada incluido en la mayoría de las excursiones"],
    dondeAlojarse: ["Hostería y camping de la isla, para quienes quieren quedarse a dormir"],
    tips: ["Reservar la excursión con anticipación, hay pocas salidas por semana", "Llevar documento de identidad, es paso fronterizo aunque no se cruce a Uruguay", "Llevar calzado cómodo, toda la visita se hace a pie"],
    presupuesto: "Medio: el gasto principal es el pasaje en barco, que suele incluir la visita guiada y el almuerzo.",
  },
  {
    nombre: "Bahía San Blas", km: 980, categoria: "playa", lat: -40.5486, lng: -62.1633,
    nota: "El extremo sur bonaerense: paraíso de la pesca embarcada y las ostras.",
    historia: "Bahía San Blas se desarrolló como villa balnearia sobre la Isla del Jabalí, en el extremo sur de la provincia de Buenos Aires, gracias a la riqueza pesquera de sus aguas protegidas. Con el tiempo se consolidó como uno de los destinos de pesca deportiva más reconocidos del país, con miles de salidas de pesca embarcada por temporada. La bahía y sus islas fueron declaradas Reserva Natural de Uso Múltiple por su valor como humedal y zona de nidificación de aves playeras. Hoy combina la pesca deportiva con una gastronomía marinera centrada en las ostras, producidas en la vecina localidad de Los Pocitos.",
    datoCurioso: "Los Pocitos, a pocos kilómetros de Bahía San Blas, es conocida como la \"Capital de las Ostras\" por su producción ostrícola, uno de los platos insignia de la zona.",
    comoLlegar: "Ruta Nacional 3 hasta el kilómetro 918 y luego un camino de ripio de unos 40 km.",
    cuandoIr: "Octubre a abril, temporada alta de pesca deportiva.",
    duracion: "Fin de semana o más, dado lo extenso del viaje.",
    comoMoverse: "El pueblo es chico y se recorre a pie; para las excursiones de pesca se sale en lancha desde el puerto local.",
    itinerario: [
      { momento: "Mañana", actividad: "Excursión de pesca embarcada o de costa." },
      { momento: "Mediodía", actividad: "Almuerzo con ostras y pescado local." },
      { momento: "Tarde", actividad: "Recorrida por las playas de arena y de piedras según la marea." },
    ],
    otrosAtractivos: ["Reserva Natural de Uso Múltiple Bahía San Blas", "Los Pocitos, la \"Capital de las Ostras\"", "Islas de la bahía (Jabalí, de los Césares, Flamenco)", "Avistaje de aves playeras y del delfín franciscana"],
    eventos: ["Fiesta de la Ostra, enero"],
    dondeComer: ["Restaurantes de pescado y ostras del pueblo", "Parrillas con cordero patagónico"],
    dondeAlojarse: ["Hosterías y cabañas de la villa", "Campings organizados"],
    tips: ["Reservar la excursión de pesca embarcada con anticipación en temporada alta", "Es un viaje muy largo, conviene combinarlo con Carmen de Patagones", "Consultar los horarios de marea antes de elegir qué playa visitar"],
    presupuesto: "Medio: el gasto principal es la excursión de pesca embarcada y el traslado, dado lo lejos que está de CABA.",
  },
  {
    nombre: "Navarro", km: 125, categoria: "rio", lat: -35.0044, lng: -59.2716,
    nota: "Laguna, historia patria y empanadas bonaerenses.",
    historia: "Navarro nació a fines del siglo XVIII como un fortín de la línea de frontera bonaerense, en tierras que entonces se conocían como \"los pagos de Navarro\" en homenaje al capitán Miguel Navarro, compañero de Juan de Garay. El pueblo fue escenario de uno de los episodios más sombríos de la historia argentina: en 1828, tras ser derrotado por las fuerzas de Juan Lavalle, el entonces gobernador Manuel Dorrego fue fusilado en las afueras del pueblo. Con el correr de las décadas, los trabajos sobre la laguna local fueron transformando ese episodio trágico en un destino de descanso y pesca. Hoy Navarro combina ese patrimonio histórico con una laguna de 180 hectáreas que es su gran atractivo recreativo.",
    datoCurioso: "El fusilamiento de Manuel Dorrego en 1828 ocurrió en el mismo lugar donde hoy se encuentra el Parque Histórico y Biográfico Manuel Dorrego, que recuerda ese episodio clave de las luchas civiles del siglo XIX.",
    comoLlegar: "Acceso Oeste hasta Luján y luego rutas provinciales, o Ruta 205 hacia Lobos y Ruta 41; aproximadamente 2 horas en auto.",
    cuandoIr: "Todo el año; primavera y verano para aprovechar la laguna.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la laguna, a dos cuadras de la plaza, y para los parajes rurales del partido conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Parque Histórico y Biográfico Manuel Dorrego y Museo Alfredo Sabaté." },
      { momento: "Mediodía", actividad: "Almuerzo de empanadas bonaerenses." },
      { momento: "Tarde", actividad: "Laguna de Navarro, paseo en bote o pesca." },
    ],
    otrosAtractivos: ["Laguna de Navarro, de 180 hectáreas", "Réplica del Fortín San Lorenzo", "Villa Moll, sede de la Fiesta de la Empanada", "Almacén-museo La Protegida"],
    eventos: ["Fiesta de la Empanada, en Villa Moll", "Fiesta del Buñuelo", "Fiesta del Tambero"],
    dondeComer: ["Comedores de campo con empanadas bonaerenses", "Restaurantes cerca de la laguna"],
    dondeAlojarse: ["Cabañas frente a la laguna", "Hospedajes rurales en los parajes cercanos"],
    tips: ["Ir en primavera o verano para aprovechar mejor la laguna", "La Fiesta de la Empanada en Villa Moll es un buen motivo para planear la visita", "Combinar con Luján o Mercedes, ambos cerca"],
    presupuesto: "Bajo a medio: el paseo por la laguna y el parque histórico son gratuitos, el gasto principal es comida.",
  },
  {
    nombre: "Lobos", km: 100, categoria: "rio", lat: -35.1889, lng: -59.0961,
    nota: "Laguna, estancias de polo y la casa natal de Perón.",
    historia: "La zona se pobló desde 1779 alrededor del Fortín San Pedro de los Lobos, construido por orden del virrey Vértiz para reforzar la línea de frontera con los pueblos originarios. En 1802 se estableció Ranchos de Lobos, una de las primeras estancias de la región, que dio origen al poblado. El partido cobró un lugar especial en la historia argentina al ser la cuna de Juan Domingo Perón, nacido allí en 1895. Con el tiempo, Lobos se consolidó como un destino de descanso en torno a su laguna, con estancias de nivel internacional y una fuerte tradición ganadera y láctea.",
    datoCurioso: "La Casa Natal de Juan Domingo Perón, hoy convertida en museo, es uno de los sitios históricos más visitados del partido y recuerda el nacimiento del expresidente en 1895.",
    comoLlegar: "Ruta Nacional 205, aproximadamente 1h30 en auto.",
    cuandoIr: "Todo el año; invierno para la pesca de pejerrey, verano para deportes náuticos.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; la laguna está a 15 km del casco urbano, conviene auto para llegar.",
    itinerario: [
      { momento: "Mañana", actividad: "Casa Natal de Juan Domingo Perón y centro histórico." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna de Lobos, pesca de pejerrey o deportes náuticos." },
    ],
    otrosAtractivos: ["Laguna de Lobos, de 800 hectáreas", "Estancia La Candelaria, con castillo normando y molino holandés", "Museo de Ciencias Naturales", "Aeroclub con vuelos panorámicos"],
    eventos: ["Torneos de polo y golf en estancias de la zona, según calendario", "Aniversario fundacional"],
    dondeComer: ["Restaurantes y parrillas del centro", "Comedores de estancias, con menú de campo"],
    dondeAlojarse: ["Estancias de alta gama como La Candelaria", "Hoteles y cabañas cerca de la laguna"],
    tips: ["Reservar la pesca de pejerrey con anticipación en invierno, es temporada alta", "Las estancias suelen ofrecer day pass con actividades y almuerzo incluido", "Combina bien con Navarro o San Antonio de Areco, ambos cerca"],
    presupuesto: "Medio: el paseo por el pueblo y la laguna es accesible, sube si se suma una estancia de alta gama.",
  },
  {
    nombre: "San Andrés de Giles", km: 100, categoria: "pueblo", lat: -34.4436, lng: -59.4423,
    nota: "Camino Real, pulperías y la última reunión de Rosas y Quiroga.",
    historia: "San Andrés de Giles fue fundado en 1806 sobre el antiguo Camino Real que unía Buenos Aires con el Alto Perú, en un cruce de postas y estancias del noroeste bonaerense. La cercana Estancia La Merced, conocida como Posta de Figueroa y construida en 1750, fue escenario del último encuentro entre Juan Manuel de Rosas y Facundo Quiroga en 1834, poco antes del asesinato de este último. El pueblo también fue la cuna del expresidente argentino Héctor J. Cámpora, cuya casa natal se conserva como sitio histórico. Hoy combina ese patrimonio con una vida de pueblo tranquila y una fuerte identidad gastronómica en sus pulperías.",
    datoCurioso: "La Posta de Figueroa, a pocos kilómetros del centro, fue el lugar del último encuentro entre Rosas y Quiroga en 1834, antes de que este último fuera asesinado camino a Córdoba.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 1h30 en auto.",
    cuandoIr: "Todo el año; fines de semana hay más movimiento gastronómico.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para la Posta de Figueroa y los pueblos rurales del partido (Azcuénaga, Villa Ruiz) conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Casco histórico, Palacio Municipal e Iglesia San Andrés Apóstol." },
      { momento: "Mediodía", actividad: "Almuerzo en una pulpería tradicional." },
      { momento: "Tarde", actividad: "Posta de Figueroa o alguno de los pueblos rurales cercanos." },
    ],
    otrosAtractivos: ["Estancia La Merced (Posta de Figueroa), de 1750", "Casa natal del expresidente Héctor J. Cámpora", "Villa Ruiz y Azcuénaga, pueblos rurales del partido", "Antigua estación de tren"],
    eventos: ["Fiesta del Hornero", "Fiesta Provincial del Camino Real"],
    dondeComer: ["Pulperías tradicionales como 2 de Mayo y El Viejo Tropezón", "Parrillas y bodegones del centro"],
    dondeAlojarse: ["Estancias y posadas típicas", "Hospedajes del centro"],
    tips: ["Reservar mesa en las pulperías más conocidas los fines de semana", "Combinar con Villa Ruiz o Azcuénaga si hay tiempo extra", "Buena escala camino a Areco o Mercedes"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Carmen de Areco", km: 140, categoria: "pueblo", lat: -34.3535, lng: -59.8309,
    nota: "Fiesta Nacional del Pastel, herencia irlandesa y la Torre del Silencio.",
    historia: "Carmen de Areco se fundó en 1812 a partir de un fortín levantado a fines del siglo XVIII sobre el río Areco, en la misma línea de frontera que dio origen a Lobos, Navarro y Luján. La llegada de inmigrantes irlandeses durante el siglo XIX dejó una huella particular en la zona, visible todavía en apellidos, tradiciones y en la arquitectura de estancias y capillas. Con el tiempo, el partido desarrolló una fuerte identidad gastronómica en torno al pastel criollo, que hoy se celebra cada año con una fiesta de alcance nacional. Hoy Carmen de Areco combina ese patrimonio con los pueblos rurales de Gouin y Tres Sargentos, ambos parte del mismo circuito turístico.",
    datoCurioso: "La Torre del Silencio, una construcción de altura inusual en medio del cementerio local, es uno de los sitios más enigmáticos del pueblo: su función original nunca quedó del todo esclarecida.",
    comoLlegar: "Ruta Nacional 8, aproximadamente 2 horas en auto.",
    cuandoIr: "Todo el año; la Fiesta Nacional del Pastel es un buen motivo para planear la visita.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para Gouin y Tres Sargentos, los pueblos rurales del partido, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Iglesia Nuestra Señora del Carmen y Museo Histórico Familiar." },
      { momento: "Mediodía", actividad: "Almuerzo con pastel criollo." },
      { momento: "Tarde", actividad: "Balneario municipal sobre el río Areco o visita a Gouin." },
    ],
    otrosAtractivos: ["Torre del Silencio, en el cementerio local", "Gouin, pueblo rural con Fiesta Provincial del Pastel", "Balneario municipal sobre el río Areco", "Museo Histórico Familiar"],
    eventos: ["Fiesta Nacional del Pastel", "Feria La Matera"],
    dondeComer: ["Comedores de campo con pastel criollo", "Parrillas junto al río Areco"],
    dondeAlojarse: ["Camping municipal de diez hectáreas", "Hospedajes rurales y estancias cercanas"],
    tips: ["Reservar para la Fiesta Nacional del Pastel, convoca a mucha gente", "Combinar con San Antonio de Areco, muy cerca", "Visitar Gouin y Tres Sargentos si hay tiempo extra"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Suipacha", km: 126, categoria: "pueblo", lat: -34.7692, lng: -59.6761,
    nota: "La Ruta del Queso, con tradición vasca, y el Festival del Osobuco.",
    historia: "Suipacha tomó su nombre en homenaje a la primera victoria militar de las fuerzas patrias en 1810, ocurrida en el Alto Perú, un triunfo que se recuerda en el Monolito Histórico de la plaza principal. La llegada de inmigrantes vascos a fines del siglo XIX y principios del XX dejó una fuerte tradición quesera en la zona, que durante décadas se mantuvo como una actividad familiar y artesanal. En 2008, un grupo de productores locales se organizó para potenciar esa tradición como atractivo turístico y creó la Ruta del Queso, hoy el gran sello distintivo del partido. Hoy Suipacha combina ese perfil gastronómico con el ritmo tranquilo de un pueblo de la pampa ondulada.",
    datoCurioso: "El nombre del pueblo conmemora la Batalla de Suipacha de 1810, la primera victoria militar patriota de las guerras de independencia, aunque ese combate ocurrió a miles de kilómetros, en el actual territorio de Bolivia.",
    comoLlegar: "Acceso Oeste/Ruta 7 y luego Autopista Luján-Bragado/Ruta 5, aproximadamente 2 horas en auto; también hay tren desde Once.",
    cuandoIr: "Todo el año; julio para el Festival del Osobuco.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para las fábricas de quesos de la Ruta del Queso conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Balcarce, Iglesia Nuestra Señora del Rosario y Monolito Histórico." },
      { momento: "Mediodía", actividad: "Almuerzo con platos a base de quesos locales." },
      { momento: "Tarde", actividad: "Recorrido por la Ruta del Queso, fábricas y establecimientos productores." },
    ],
    otrosAtractivos: ["Ruta del Queso, con fábricas y establecimientos productores", "Il Mirtilo, plantaciones de arándanos y frutos finos", "Estación de tren histórica", "Criadero La Escuadra, de cerdos y jabalíes"],
    eventos: ["Festival del Osobuco, julio", "Expo Suipacha, feria de productores"],
    dondeComer: ["Restaurantes con platos a base de quesos locales", "Comedores de campo"],
    dondeAlojarse: ["Hospedajes del centro", "Alojamientos rurales cercanos"],
    tips: ["Reservar las visitas guiadas a las fábricas de queso, sobre todo fines de semana", "Il Mirtilo abre sábados, domingos y feriados de 11 a 18", "El tren a Suipacha tiene pocas frecuencias semanales, conviene chequear horarios"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Chacabuco", km: 195, categoria: "campo", lat: -34.6403, lng: -60.4703,
    nota: "Laguna de Rocha, pesca y paisaje agreste en el noroeste bonaerense.",
    historia: "Chacabuco se fundó en 1865 y tomó su nombre en homenaje a la batalla de Chacabuco de 1817, un combate decisivo para la independencia de Chile y Perú, aunque ocurrido a miles de kilómetros de este partido bonaerense. Con la llegada del ferrocarril, la ciudad se consolidó como centro de servicios de una amplia zona agrícola y ganadera del noroeste de la provincia. La Laguna de Rocha, formada por un ensanchamiento del río Salado a 30 km del centro, se convirtió con el tiempo en el gran atractivo natural del partido. Hoy Chacabuco combina ese perfil agrícola tranquilo con la pesca deportiva y el paisaje agreste de sus lagunas.",
    datoCurioso: "El nombre de la ciudad, igual que el de la batalla que recuerda, no tiene relación geográfica directa con la zona: honra un combate librado en 1817 en la cordillera de los Andes, a más de mil kilómetros de distancia.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 2h30 a 3 horas en auto; también hay tren desde Retiro.",
    cuandoIr: "Primavera y otoño para la pesca; todo el año para la ciudad.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la Laguna de Rocha, a 30 km, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Centro histórico y plaza principal." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna de Rocha, pesca de pejerrey y tarariras." },
    ],
    otrosAtractivos: ["Laguna de Rocha, con pesca de costa y embarcada", "Lagunas Las Toscas y de los Patos", "Chacabuco Golf Club, cancha de 18 hoyos", "Aeródromo provincial"],
    eventos: ["Aniversario fundacional"],
    dondeComer: ["Restaurantes y parrillas del centro", "Comedores junto a la laguna"],
    dondeAlojarse: ["Hoteles del centro", "Camping junto a la Laguna de Rocha"],
    tips: ["Llevar equipo de pesca propio o alquilar botes en la laguna", "El último tramo hasta la laguna es de camino de tierra, ir con precaución", "Buena escala camino a Junín o Bragado"],
    presupuesto: "Bajo a medio: el acceso a la laguna es libre y gratuito, el gasto principal es traslado y comida.",
  },
  {
    nombre: "San Bernardo", km: 360, categoria: "playa", lat: -36.6833, lng: -56.6981,
    nota: "La ciudad del sol y la familia, con playas jóvenes y vida nocturna.",
    historia: "San Bernardo del Tuyú se desarrolló a partir de fines de la década de 1930, en simultáneo con el crecimiento turístico de todo el partido de La Costa. Su cercanía con Mar de Ajó y otras localidades balnearias la convirtió en un polo de encuentro para jóvenes desde mediados del siglo XX, un perfil que mantiene hasta hoy. La caldera del vapor \"Mar del Sur\", encallado en 1924 por un temporal, quedó como testimonio de los naufragios frecuentes en esta costa antes de que se consolidara el turismo. Hoy San Bernardo es conocida como \"la ciudad del sol y la familia\", con una oferta que combina playas familiares y una activa vida nocturna.",
    datoCurioso: "La caldera de hierro del vapor argentino Mar del Sur, encallado en la costa en 1924, todavía puede verse asomando entre las olas cerca de Costa Azul, al norte de San Bernardo.",
    comoLlegar: "Ruta 2 hasta Dolores y luego Ruta 63 y Ruta 11, o Ruta 36 y Ruta 11 vía Pipinas; aproximadamente 4h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta; diciembre para la Fiesta Nacional del Sol y la Familia.",
    duracion: "Fin de semana o semana.",
    comoMoverse: "El centro y la playa se recorren a pie; para Mar de Ajó, La Lucila o Costa Esmeralda conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Playa y balnearios de San Bernardo." },
      { momento: "Mediodía", actividad: "Almuerzo en la peatonal." },
      { momento: "Tarde", actividad: "Paseo hacia Mar de Ajó o Costa Azul, con la caldera del Mar del Sur." },
    ],
    otrosAtractivos: ["Caldera del vapor Mar del Sur, en Costa Azul", "Mar de Ajó, balneario vecino", "Costa Esmeralda, urbanización más exclusiva del partido", "Observatorio de la Costa"],
    eventos: ["Fiesta Nacional del Sol y la Familia, diciembre", "Expo Unión de las Naciones, verano"],
    dondeComer: ["Restaurantes y heladerías de la peatonal", "Parrillas y pizzerías frente al mar"],
    dondeAlojarse: ["Hoteles y departamentos frente al mar", "Cabañas cerca de Mar de Ajó"],
    tips: ["Es de las playas con más vida nocturna del partido de La Costa, pensar el alojamiento en función de eso", "Caminar hacia Mar de Ajó o La Lucila para playas más tranquilas", "Reservar con anticipación para la Fiesta Nacional del Sol y la Familia"],
    presupuesto: "Bajo a medio: una de las opciones más accesibles del partido de La Costa.",
  },
  {
    nombre: "Adolfo Gonzáles Chaves", km: 600, categoria: "campo", lat: -38.0281, lng: -60.1006,
    nota: "Otro capítulo de la ruta Salamone, en el sudeste bonaerense.",
    historia: "La localidad nació en 1886 alrededor de una estación del Ferrocarril del Sud, en tierras donadas dos décadas más tarde por el hacendado y político Adolfo Gonzales Chaves, que le dio su nombre. El partido se creó en 1916 con tierras cedidas por Juárez, Tres Arroyos y Necochea. En la segunda mitad de la década de 1930, el plan de obras públicas del arquitecto Francisco Salamone dejó en la ciudad tres edificios monumentales de estilo art decó que hoy forman parte del circuito turístico dedicado a su obra. Hoy Gonzales Chaves combina ese patrimonio arquitectónico con una economía basada en la producción de girasol y otros granos.",
    datoCurioso: "La torre del Palacio Municipal, obra de Salamone, se inspiró en el pabellón de turismo de la Exposición de Artes Decorativas de París de 1937, adaptando técnicas estructurales de vanguardia para la época.",
    comoLlegar: "Ruta Nacional 3, aproximadamente 6 horas en auto.",
    cuandoIr: "Primavera y otoño.",
    duracion: "Medio día, o parada en un viaje más largo.",
    comoMoverse: "El centro se recorre a pie.",
    itinerario: [
      { momento: "Mañana", actividad: "Palacio Municipal y antiguo Mercado, obras de Salamone." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Iglesia de la Inmaculada Concepción y estación de ferrocarril histórica." },
    ],
    otrosAtractivos: ["Palacio Municipal, obra de Francisco Salamone", "Antiguo Mercado, hoy centro cultural", "Parque Comunitario Tantanakuy", "Estación de ferrocarril de 1886"],
    eventos: ["Clases abiertas y visitas guiadas por la ruta Salamone"],
    dondeComer: ["Restaurantes de comida casera del centro", "Parrillas tradicionales"],
    dondeAlojarse: ["Hoteles del centro", "Estancias cercanas"],
    tips: ["Buena parada dentro del circuito Salamone, junto con Azul y Sierra de la Ventana", "Sacar fotos de la torre del Palacio Municipal, es la pieza más fotografiada", "Combina bien con Tres Arroyos, a 50 km"],
    presupuesto: "Bajo.",
  },
  {
    nombre: "Escobar", km: 50, categoria: "rio", lat: -34.3479, lng: -58.7923,
    nota: "Temaikén, el bioparque más grande de Latinoamérica, y la Capital Nacional de la Flor.",
    historia: "Belén de Escobar se desarrolló desde fines del siglo XIX como un centro de producción de flores y frutas sobre el Paraná de las Palmas, gracias a la fertilidad de sus tierras y su cercanía con el puerto fluvial. La llegada de inmigrantes japoneses en 1929 dejó una huella particular en la horticultura local, visible hoy en el Jardín Japonés del pueblo. En 1964 la ciudad fue declarada Capital Nacional de la Flor, en reconocimiento a esa tradición floricultora que todavía se conserva en la Ruta de la Flor. En 2001 se inauguró Temaikén, hoy el bioparque más importante de Latinoamérica, que consolidó a Escobar como uno de los destinos de fin de semana más visitados cerca de CABA.",
    datoCurioso: "El nombre Temaikén significa \"tierra de vida\" en lengua tehuelche, y el bioparque recrea ambientes de la Patagonia, la Mesopotamia y África para más de 500 especies.",
    comoLlegar: "Panamericana ramal Escobar, aproximadamente 50 minutos en auto.",
    cuandoIr: "Todo el año; Temaikén tiene horarios reducidos fuera de temporada alta.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para Temaikén y el Jardín Japonés, algo alejados, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Temaikén, el bioparque más grande de Latinoamérica." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro de Escobar." },
      { momento: "Tarde", actividad: "Jardín Japonés y plaza principal, declarada Capital Nacional de la Flor." },
    ],
    otrosAtractivos: ["Temaikén, bioparque con cóndor andino y ciervo de los pantanos", "Jardín Japonés, con peces koi y senderos temáticos", "Puerto de Escobar sobre el Paraná de las Palmas", "Ruta de la Flor"],
    eventos: ["Fiesta Nacional de la Flor"],
    dondeComer: ["Restaurantes del centro", "Confiterías junto a la plaza principal"],
    dondeAlojarse: ["Hoteles y spa como Howard Johnson Spa", "Cabañas cerca del delta"],
    tips: ["Reservar entradas a Temaikén con anticipación en temporada alta", "El Jardín Japonés es gratuito y un buen complemento de medio día", "Combina bien con Tigre, muy cerca"],
    presupuesto: "Medio: Temaikén es el gasto principal del paseo.",
  },
  {
    nombre: "Campana", km: 80, categoria: "rio", lat: -34.1633, lng: -58.9592,
    nota: "Reserva natural, paseos en lancha y una bodega junto al río.",
    historia: "Campana se desarrolló desde fines del siglo XIX como un polo industrial sobre el Paraná de las Palmas, con una de las primeras destilerías de petróleo del país y, más tarde, una planta siderúrgica de escala nacional. Esa identidad industrial convive con un perfil menos conocido de ecoturismo, gracias a la Reserva Natural Otamendi, uno de los últimos remanentes de pastizal pampeano y bosque ribereño de la zona. En los últimos años sumó además un circuito de turismo enológico con viñedos junto al río, poco habitual para una ciudad de este perfil. Hoy Campana combina ese pasado obrero con paseos náuticos y observación de aves.",
    datoCurioso: "La Reserva Natural Otamendi, de 3.000 hectáreas, protege uno de los pocos remanentes de pastizal pampeano original de la zona y es un punto clave para el avistaje de aves migratorias.",
    comoLlegar: "Ruta Nacional 9 (Panamericana), aproximadamente 1 hora en auto.",
    cuandoIr: "Todo el año; otoño y primavera para el avistaje de aves.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para la Reserva Otamendi y los viñedos conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Reserva Natural Otamendi, avistaje de aves." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Paseo en lancha por el Paraná de las Palmas hasta el puente Zárate-Brazo Largo." },
    ],
    otrosAtractivos: ["Reserva Natural Otamendi", "Bodega Gamboa, viñedos junto al río", "Circuito fluvial en lancha hasta el puente Zárate-Brazo Largo", "Delta campanense"],
    eventos: ["Fiestas patronales y eventos industriales según calendario"],
    dondeComer: ["Restaurantes con cocina criolla e italiana", "Parrillas del centro"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas cerca del delta"],
    tips: ["Reservar la excursión a la bodega Gamboa con anticipación", "El paseo en lancha por el Paraná es un buen plan de medio día", "Buena combinación con Zárate, muy cerca"],
    presupuesto: "Medio.",
  },
  {
    nombre: "Pilar", km: 54, categoria: "pueblo", lat: -34.4586, lng: -58.9142,
    nota: "El Cenotafio de Malvinas y estancias de día de campo.",
    historia: "El partido de Pilar se formó a comienzos del siglo XIX en torno a una capilla dedicada a la Virgen del Pilar, en tierras que combinaban estancias y chacras cercanas a Buenos Aires. Durante buena parte del siglo XX mantuvo un perfil rural, hasta que la llegada de countries y barrios cerrados a partir de los años 90 transformó buena parte de su paisaje. En 1992 se inauguró allí el Cenotafio de Malvinas, una réplica exacta del cementerio militar británico de Darwin en las Islas Malvinas, construida para homenajear a los combatientes argentinos caídos en el conflicto de 1982. Hoy Pilar combina ese sitio de memoria con estancias de turismo rural y una intensa vida de countries y centros comerciales.",
    datoCurioso: "El Cenotafio de Malvinas reproduce, en forma y medidas exactas, el cementerio militar de Darwin habilitado por el Reino Unido en la Isla Soledad, con 649 cruces blancas que llevan el nombre de cada soldado argentino caído.",
    comoLlegar: "Panamericana ramal Pilar, aproximadamente 50 minutos en auto; también hay tren desde Retiro (línea Mitre).",
    cuandoIr: "Todo el año; 2 de abril para los actos conmemorativos en el Cenotafio.",
    duracion: "Medio día o día completo.",
    comoMoverse: "Conviene auto: el partido es extenso y sus atractivos están dispersos entre varias localidades.",
    itinerario: [
      { momento: "Mañana", actividad: "Cenotafio de Malvinas, réplica del cementerio de Darwin." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro de Pilar." },
      { momento: "Tarde", actividad: "Día de campo en una estancia como Utopía." },
    ],
    otrosAtractivos: ["Cenotafio de Malvinas, con un Hércules C130 y un Mirage M-5D", "Estancia Utopía, día de campo con pileta y juegos", "Villa Rosa, con countries y centros comerciales", "Estancias históricas del partido"],
    eventos: ["Actos conmemorativos del 2 de abril en el Cenotafio de Malvinas"],
    dondeComer: ["Restaurantes y bodegones del centro", "Comedores de estancias con menú de campo"],
    dondeAlojarse: ["Hoteles cerca de la Panamericana", "Estancias con hospedaje"],
    tips: ["El Cenotafio de Malvinas es un sitio de memoria, conviene visitarlo con respeto y tiempo", "Reservar el día de campo en estancias con anticipación los fines de semana", "Buena escala camino a Capilla del Señor o Exaltación de la Cruz"],
    presupuesto: "Bajo a medio: el Cenotafio es gratuito, el día de campo en estancia es el gasto principal.",
  },
  {
    nombre: "Berisso", km: 65, categoria: "rio", lat: -34.8736, lng: -57.8828,
    nota: "Capital Provincial del Inmigrante y el Vino de la Costa.",
    historia: "Berisso creció a fines del siglo XIX y principios del XX alrededor de los frigoríficos que se instalaron en su puerto sobre el Río de la Plata, lo que atrajo a una enorme oleada de inmigrantes europeos que llegaron a trabajar en esas plantas. Esa diversidad, con más de 26 colectividades representadas, le valió el título de Capital Provincial del Inmigrante y dio origen en 1976 a la Fiesta Provincial del Inmigrante, una de las celebraciones étnicas más grandes del país. La ciudad también ocupa un lugar central en la historia política argentina: desde allí partió buena parte de la movilización obrera del 17 de octubre de 1945, un hito fundacional del peronismo. Hoy Berisso combina ese pasado industrial y migrante con el cultivo artesanal del Vino de la Costa, elaborado con uva Isabella en las islas del Río de la Plata.",
    datoCurioso: "El Vino de la Costa se elabora con la uva americana Isabella, cultivada en las tierras bajas de Isla Paulino, una tradición que trajeron los inmigrantes italianos y que hoy se recupera como producto artesanal de la zona.",
    comoLlegar: "Autopista Buenos Aires-La Plata y luego avenidas locales, aproximadamente 1 hora en auto.",
    cuandoIr: "Septiembre y octubre para la Fiesta Provincial del Inmigrante.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para Isla Paulino y las costas del río conviene auto o lancha.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo y Casa de las Colectividades." },
      { momento: "Mediodía", actividad: "Almuerzo con gastronomía de alguna colectividad." },
      { momento: "Tarde", actividad: "Costanera y degustación de Vino de la Costa." },
    ],
    otrosAtractivos: ["Casa de las Colectividades", "Vino de la Costa, elaborado en Isla Paulino", "Puerto de Berisso y astilleros", "Museo Municipal"],
    eventos: ["Fiesta Provincial del Inmigrante, septiembre y octubre", "Desembarco Simbólico, 21 de septiembre"],
    dondeComer: ["Restaurantes de las distintas colectividades durante la fiesta", "Parrillas y pescaderías del puerto"],
    dondeAlojarse: ["Hoteles de La Plata, muy cerca", "Hospedajes locales"],
    tips: ["Planear la visita para septiembre u octubre si el objetivo es la Fiesta del Inmigrante", "Combinar con La Plata o Ensenada, ambas muy cerca", "Preguntar por productores locales de Vino de la Costa para degustar"],
    presupuesto: "Bajo a medio: la fiesta del inmigrante tiene actividades gratuitas, el gasto principal es la gastronomía.",
  },
  {
    nombre: "Ayacucho", km: 300, categoria: "campo", lat: -37.1489, lng: -58.4919,
    nota: "Capital Nacional del Ternero, y el único lugar real del Martín Fierro.",
    historia: "El partido de Ayacucho se creó en 1865 sobre tierras separadas de Tandil, Mar Chiquita y Vecino, y tomó su nombre en homenaje a la batalla de Ayacucho de 1824, la última librada por la independencia sudamericana, aunque ocurrida a miles de kilómetros en el Perú. La ciudad fue fundada oficialmente en 1866 por gestión del hacendado José Zoilo Miguens. Es el único lugar real mencionado a lo largo de todo el poema \"Martín Fierro\", de José Hernández, lo que le da un lugar especial en la literatura gauchesca argentina. Hoy Ayacucho es conocida como la Capital Nacional del Ternero, gracias a una economía basada en la cría de ganado.",
    datoCurioso: "Ayacucho es el único lugar geográfico real que se menciona a lo largo de todo el poema \"Martín Fierro\", la obra cumbre de la literatura gauchesca argentina.",
    comoLlegar: "Ruta Provincial 29, aproximadamente 3h45 en auto.",
    cuandoIr: "Marzo o abril para la Fiesta Nacional del Ternero y Día de la Yerra.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para estancias y el campo circundante conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza San Martín y Plaza Colón, diseñada por Carlos Thays." },
      { momento: "Mediodía", actividad: "Almuerzo de campo." },
      { momento: "Tarde", actividad: "Museo Histórico Regional o día de campo en una estancia." },
    ],
    otrosAtractivos: ["Plaza Colón, diseñada por Carlos Thays, con estatua de Aimé Tschiffely y sus caballos Gato y Mancha", "Museo Histórico Regional", "Molino Harinero San Juan, de 1870", "Complejo Recreativo Comunal Club Independiente"],
    eventos: ["Fiesta Nacional del Ternero y Día de la Yerra, desde 1969"],
    dondeComer: ["Restaurantes de comida de campo", "Parrillas tradicionales"],
    dondeAlojarse: ["Estancias de la zona", "Hoteles del centro"],
    tips: ["Reservar con anticipación para la Fiesta Nacional del Ternero, convoca mucha gente", "Buena escala entre Chascomús/Dolores y Tandil o la costa", "Los amantes del Martín Fierro pueden buscar las referencias del poema en el pueblo"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Rauch", km: 277, categoria: "campo", lat: -36.7783, lng: -58.0489,
    nota: "El histórico Puente Silva y balnearios sobre el arroyo Chapaleofú.",
    historia: "El partido de Rauch se creó en 1865 por gestión del juez de paz Francisco Mauricio Letamendi, en una zona surcada por los arroyos Chapaleofú, De los Huesos y Langueyú que desaguan hacia el río Salado. La ciudad desarrolló desde entonces una economía agrícola-ganadera, hoy acompañada por una estación experimental del INTA dedicada a la investigación de la cuenca del Salado. El Puente Silva, construido en 1875 sobre el arroyo Chapaleofú, es uno de los testimonios más antiguos de la infraestructura rural de la zona y fue declarado monumento de significación histórica. Hoy Rauch combina ese perfil rural con espacios recreativos junto a sus arroyos.",
    datoCurioso: "El Puente Silva, también llamado Puente de Bovedilla, se construyó en 1875 y todavía se conserva como monumento histórico sobre el arroyo Chapaleofú.",
    comoLlegar: "Ruta Provincial 50 o 29, aproximadamente 3h30 en auto.",
    cuandoIr: "Primavera y otoño.",
    duracion: "Medio día o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para el Puente Silva y el campo circundante conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Palacio Municipal, de estilo art decó, y Museo Histórico Local." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Complejo Polideportivo Balneario junto al arroyo Chapaleofú y Puente Silva." },
    ],
    otrosAtractivos: ["Puente Silva, de 1875, sobre el arroyo Chapaleofú", "Palacio Municipal, de estilo art decó", "Complejo Polideportivo Balneario y Camping Municipal", "Museo Histórico Local"],
    eventos: ["Ferias y actividades rurales según calendario"],
    dondeComer: ["Restaurantes y parrillas del centro", "Comedores junto al balneario municipal"],
    dondeAlojarse: ["Hoteles del centro", "Camping municipal junto al arroyo"],
    tips: ["Buena parada entre Chascomús/Ayacucho y Tandil", "El balneario municipal es una buena opción para el verano", "Combinar con Ayacucho, a poca distancia"],
    presupuesto: "Bajo.",
  },
  {
    nombre: "Olavarría", km: 372, categoria: "sierra", lat: -36.8927, lng: -60.3225,
    nota: "Canteras, el vitral más grande de Latinoamérica y bodegas boutique.",
    historia: "Olavarría se desarrolló desde fines del siglo XIX en torno a la explotación de las canteras de piedra caliza de las Sierras Bayas, que impulsaron una potente industria cementera todavía vigente en la región. La llegada de inmigrantes de distintas colectividades, sumada a colonias agrícolas como San Miguel, Hinojo y Nievas, le dio a la zona una fuerte identidad religiosa y comunitaria. Esa devoción se expresa hoy en más de veinte templos y en la peregrinación a la Virgen de la Loma durante Semana Santa. Hoy Olavarría combina ese perfil industrial y religioso con paisajes de sierras y viñedos boutique en las localidades rurales del partido.",
    datoCurioso: "En las Sierras Bayas se encuentra el vitral más grande de Latinoamérica, una obra de gran escala vinculada a la historia productiva de las canteras de la zona.",
    comoLlegar: "Ruta Nacional 226, aproximadamente 4h30 en auto.",
    cuandoIr: "Semana Santa para la peregrinación religiosa; primavera y otoño para las sierras.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las Sierras Bayas y las colonias rurales conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Sierras Bayas y el vitral más grande de Latinoamérica." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Recorrido por templos religiosos o visita a una bodega boutique en Hinojo." },
    ],
    otrosAtractivos: ["Sierras Bayas, con canteras y el gran vitral", "Bodega Ita Mallal, viñedos en Hinojo", "Virgen de la Loma, sitio de peregrinación", "Colonias San Miguel, Hinojo y Nievas"],
    eventos: ["Vía Crucis a la Virgen de la Loma, Semana Santa"],
    dondeComer: ["Restaurantes del centro", "Comedores de las colonias rurales"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas en las Sierras Bayas"],
    tips: ["Reservar alojamiento con anticipación para Semana Santa, es la fecha de mayor afluencia", "Combinar con Azul o Tandil, ambas dentro del mismo sistema serrano", "Consultar horarios de visita a la bodega Ita Mallal"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "General Madariaga", km: 340, categoria: "campo", lat: -37.0044, lng: -57.1425,
    nota: "El Pago Gaucho, parada clásica camino a Pinamar y Villa Gesell.",
    historia: "General Madariaga se fundó en 1907 en el sudeste de la provincia, en tierras dedicadas históricamente a la ganadería y rodeadas de montes de tala y lagunas. Su cercanía con los balnearios de Pinamar y Villa Gesell la convirtió con el tiempo en una parada obligada camino a la costa, aunque conservó un perfil rural propio bajo el apodo de \"Pago Gaucho\". La tradición campera se mantiene viva en sus fogones, desfiles y jineteadas, y en talleres de artesanos dedicados sobre todo a la platería. Hoy combina ese patrimonio gauchesco con la pesca deportiva en sus lagunas Los Horcones y Salada Grande.",
    datoCurioso: "La laguna Salada Grande, de casi 5.500 hectáreas, es un espejo de agua salada rodeado de montes de tala donde conviven nutrias, carpinchos, garzas y cisnes.",
    comoLlegar: "Autovía 2 hasta Dolores y luego rutas provinciales 63, 11 y 56, aproximadamente 3h30 en auto; muy cerca de Pinamar (30 km) y Villa Gesell.",
    cuandoIr: "Primavera y verano para las lagunas; todo el año para el turismo rural.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las lagunas Los Horcones y Salada Grande conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Talleres de artesanos y plateros del centro." },
      { momento: "Mediodía", actividad: "Almuerzo con vaquillona con cuero, plato típico de la zona." },
      { momento: "Tarde", actividad: "Laguna Los Horcones o Salada Grande, pesca y deportes náuticos." },
    ],
    otrosAtractivos: ["Laguna Salada Grande, de casi 5.500 hectáreas", "Laguna Los Horcones, con club de pesca y náutica", "Talleres de platería artesanal", "Parque Juan Anchorena"],
    eventos: ["Desfiles y jineteadas gauchas según calendario", "Fiestas folklóricas locales"],
    dondeComer: ["Restaurantes de campo con vaquillona con cuero", "Parrillas tradicionales"],
    dondeAlojarse: ["Estancias y hosterías rurales", "Campings junto a las lagunas"],
    tips: ["Buena parada para romper el viaje camino a Pinamar o Villa Gesell", "Reservar los talleres de plateros con anticipación si se busca comprar piezas", "Llevar equipo de pesca para las lagunas"],
    presupuesto: "Bajo a medio.",
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

const MAX_KM = 1000;

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
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
};

function icon(name, size = 14, color = "currentColor", fill = "none") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// --- Estado -----------------------------------------------------------------
let distancia = 400;
let categoria = "todas";
let soloFavoritos = false;
let busqueda = "";

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const FAVORITOS_KEY = "destinos-ba-favoritos";

function cargarFavoritos() {
  try {
    const raw = localStorage.getItem(FAVORITOS_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (err) {
    console.warn("No se pudieron leer los favoritos guardados:", err);
    return new Set();
  }
}

function guardarFavoritos() {
  try {
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify([...favoritos]));
  } catch (err) {
    console.warn("No se pudieron guardar los favoritos:", err);
  }
}

function toggleFavorito(nombre) {
  if (favoritos.has(nombre)) {
    favoritos.delete(nombre);
  } else {
    favoritos.add(nombre);
  }
  guardarFavoritos();
  render();
}

let favoritos = cargarFavoritos();

const CABA_COORDS = { lat: -34.6037, lng: -58.3816 };

const CATEGORIA_COLOR = {
  playa: "#4E86A6",
  sierra: "#8C6B4F",
  rio: "#4E8C6B",
  campo: "#A69A3D",
  pueblo: "#C1440E",
  ciudad: "#C9BFA1",
};

let vista = "lista";

const el = {
  distanciaValor: document.getElementById("distancia-valor"),
  slider: document.getElementById("slider"),
  ruler: document.getElementById("ruler"),
  buscador: document.getElementById("buscador"),
  buscadorForm: document.getElementById("form-buscar"),
  filtros: document.getElementById("filtros"),
  contador: document.getElementById("contador"),
  vistaToggle: document.getElementById("vista-toggle"),
  lista: document.getElementById("lista"),
  mapaWrap: document.getElementById("mapa-wrap"),
  mapaSvg: document.getElementById("mapa-svg"),
  mapaLeyenda: document.getElementById("mapa-leyenda"),
  vacio: document.getElementById("vacio"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.getElementById("modal"),
};

el.vistaToggle.querySelectorAll(".vista-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    vista = btn.dataset.vista;
    render();
  });
});

function proyectar(destinos) {
  const puntos = [...destinos.map((d) => ({ lat: d.lat, lng: d.lng })), CABA_COORDS];
  let latMin = Math.min(...puntos.map((p) => p.lat));
  let latMax = Math.max(...puntos.map((p) => p.lat));
  let lngMin = Math.min(...puntos.map((p) => p.lng));
  let lngMax = Math.max(...puntos.map((p) => p.lng));
  const latPad = Math.max((latMax - latMin) * 0.1, 0.4);
  const lngPad = Math.max((lngMax - lngMin) * 0.1, 0.4);
  latMin -= latPad;
  latMax += latPad;
  lngMin -= lngPad;
  lngMax += lngPad;
  const cosLat = Math.cos(((latMin + latMax) / 2) * (Math.PI / 180));
  const H = 100;
  const W = Math.max(H * (((lngMax - lngMin) * cosLat) / (latMax - latMin)), 40);
  return {
    W,
    H,
    proyectarPunto: (lat, lng) => ({
      x: ((lng - lngMin) / (lngMax - lngMin)) * W,
      y: ((latMax - lat) / (latMax - latMin)) * H,
    }),
  };
}

function renderMapa(resultados) {
  const { W, H, proyectarPunto } = proyectar(resultados);
  el.mapaSvg.setAttribute("viewBox", `0 0 ${W.toFixed(2)} ${H}`);
  el.mapaSvg.style.aspectRatio = `${W.toFixed(2)} / ${H}`;

  const caba = proyectarPunto(CABA_COORDS.lat, CABA_COORDS.lng);
  let html = `
    <rect x="0" y="0" width="${W.toFixed(2)}" height="${H}" class="mapa-fondo"></rect>
    <circle cx="${caba.x.toFixed(2)}" cy="${caba.y.toFixed(2)}" r="1.6" class="mapa-caba-punto"></circle>
    <text x="${caba.x.toFixed(2)}" y="${(caba.y - 2.6).toFixed(2)}" class="mapa-caba-label">CABA</text>
  `;

  resultados.forEach((d) => {
    const p = proyectarPunto(d.lat, d.lng);
    const color = CATEGORIA_COLOR[d.categoria] || "#C1440E";
    const esFav = favoritos.has(d.nombre);
    html += `<circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="1.35" fill="${color}" class="mapa-punto ${esFav ? "mapa-punto-fav" : ""}" data-nombre="${d.nombre}"><title>${d.nombre} · ${d.km} km</title></circle>`;
  });

  el.mapaSvg.innerHTML = html;
  el.mapaSvg.querySelectorAll(".mapa-punto").forEach((c) => {
    c.addEventListener("click", () => {
      const destino = DESTINOS.find((x) => x.nombre === c.dataset.nombre);
      abrirModal(destino);
    });
  });

  const categoriasPresentes = [...new Set(resultados.map((d) => d.categoria))];
  el.mapaLeyenda.innerHTML = categoriasPresentes
    .map((catId) => {
      const cat = CATEGORIAS.find((c) => c.id === catId);
      const color = CATEGORIA_COLOR[catId] || "#C1440E";
      return `<div class="mapa-leyenda-item"><span class="mapa-leyenda-dot" style="background:${color}"></span>${cat ? cat.label : catId}</div>`;
    })
    .join("");
}

function render() {
  el.vistaToggle.querySelectorAll(".vista-btn").forEach((btn) => {
    btn.classList.toggle("vista-activo", btn.dataset.vista === vista);
  });

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

  el.filtros.innerHTML =
    `<button class="chip chip-fav ${soloFavoritos ? "chip-activo" : ""}" data-fav-toggle="1">
      ${icon("star", 14, "currentColor", soloFavoritos ? "currentColor" : "none")} Favoritos
    </button>` +
    CATEGORIAS.map(
      (c) => `
    <button class="chip ${categoria === c.id ? "chip-activo" : ""}" data-cat="${c.id}">
      ${icon(c.icon, 14)} ${c.label}
    </button>`
    ).join("");
  el.filtros.querySelectorAll(".chip[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      categoria = btn.dataset.cat;
      render();
    });
  });
  const favToggleBtn = el.filtros.querySelector("[data-fav-toggle]");
  if (favToggleBtn) {
    favToggleBtn.addEventListener("click", () => {
      soloFavoritos = !soloFavoritos;
      render();
    });
  }

  const resultados = DESTINOS.filter((d) => d.km <= distancia)
    .filter((d) => categoria === "todas" || d.categoria === categoria)
    .filter((d) => !soloFavoritos || favoritos.has(d.nombre))
    .filter((d) => !busqueda || normalizar(d.nombre).includes(normalizar(busqueda)))
    .sort((a, b) => a.km - b.km);

  el.contador.textContent = `${resultados.length} ${resultados.length === 1 ? "destino encontrado" : "destinos encontrados"}`;

  if (resultados.length === 0) {
    el.lista.style.display = "none";
    el.mapaWrap.style.display = "none";
    el.vacio.style.display = "block";
    if (busqueda) {
      el.vacio.textContent = `No encontramos ningún destino que coincida con "${busqueda}" dentro de los filtros elegidos.`;
    } else if (soloFavoritos) {
      el.vacio.textContent = "Todavía no marcaste ningún destino como favorito.";
    } else {
      el.vacio.textContent = "No hay destinos en ese radio con el filtro elegido. Probá aumentar la distancia.";
    }
  } else if (vista === "mapa") {
    el.vacio.style.display = "none";
    el.lista.style.display = "none";
    el.mapaWrap.style.display = "block";
    renderMapa(resultados);
  } else {
    el.vacio.style.display = "none";
    el.mapaWrap.style.display = "none";
    el.lista.style.display = "flex";
    el.lista.innerHTML = resultados
      .map((d) => {
        const esFavorito = favoritos.has(d.nombre);
        return `
      <div class="card">
        <button class="card-fav ${esFavorito ? "activo" : ""}" data-fav="${d.nombre}" aria-label="${esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}">
          ${icon("star", 18, "currentColor", esFavorito ? "currentColor" : "none")}
        </button>
        <button class="card-open" data-nombre="${d.nombre}">
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
        </button>
      </div>`;
      })
      .join("");
    el.lista.querySelectorAll(".card-open").forEach((card) => {
      card.addEventListener("click", () => {
        const destino = DESTINOS.find((d) => d.nombre === card.dataset.nombre);
        abrirModal(destino);
      });
    });
    el.lista.querySelectorAll(".card-fav").forEach((btn) => {
      btn.addEventListener("click", () => toggleFavorito(btn.dataset.fav));
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
  const render_estrella = () => {
    const esFav = favoritos.has(d.nombre);
    const btn = el.modal.querySelector("#modal-fav");
    if (btn) {
      btn.classList.toggle("activo", esFav);
      btn.innerHTML = icon("star", 20, "currentColor", esFav ? "currentColor" : "none");
      btn.setAttribute("aria-label", esFav ? "Quitar de favoritos" : "Agregar a favoritos");
    }
  };

  el.modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${d.km} km desde CABA</div>
      <div class="modal-top-actions">
        <button id="modal-fav" aria-label="Agregar a favoritos"></button>
        <button id="modal-close" aria-label="Cerrar guía">${icon("x", 20)}</button>
      </div>
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
  render_estrella();
  document.getElementById("modal-fav").addEventListener("click", () => {
    toggleFavorito(d.nombre);
    render_estrella();
  });
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

el.buscador.addEventListener("input", (e) => {
  busqueda = e.target.value;
  render();
});

el.buscadorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  busqueda = el.buscador.value;
  el.buscador.blur();
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
