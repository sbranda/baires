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
  {
    nombre: "San Nicolás de los Arroyos", km: 235, categoria: "rio", lat: -33.3358, lng: -60.2170,
    nota: "La Ciudad del Acuerdo, cuna de la Constitución Nacional.",
    historia: "San Nicolás de los Arroyos es una de las ciudades más antiguas de la provincia, con un poblamiento que se remonta a mediados del siglo XVIII sobre la margen derecha del río Paraná. El 2 de marzo de 1811 sus aguas fueron escenario del primer combate naval de la historia argentina, y en 1819 el Congreso General Constituyente la declaró ciudad. Su momento más trascendente llegó el 31 de mayo de 1852, cuando representantes de catorce provincias firmaron allí el Acuerdo de San Nicolás, el pacto que sentó las bases de la Constitución Nacional de 1853 y le valió el apodo de \"Ciudad del Acuerdo\". A ese legado histórico se sumó en 1983 un fuerte perfil religioso, tras la aparición de la Virgen del Rosario que convirtió a la ciudad en uno de los grandes centros de peregrinación del país.",
    datoCurioso: "Según el relato de los fieles, en 1983 la Virgen del Rosario se apareció a una mujer nicoleña y le encargó la construcción de un templo; desde entonces, el santuario recibe cerca de dos millones de peregrinos por año.",
    comoLlegar: "Ruta Nacional 9, aproximadamente 2h30 a 3 horas en auto; también hay micros desde la Terminal de Retiro.",
    cuandoIr: "Todo el año; los aniversarios de la aparición de la Virgen, en septiembre, convocan a muchos peregrinos.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El casco histórico se recorre a pie; hay un bus turístico que conecta los principales puntos de interés en recorridos de una hora.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Nacional Casa del Acuerdo y Teatro Municipal Rafael de Aguiar." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Santuario de la Virgen del Rosario y costanera sobre el Paraná." },
    ],
    otrosAtractivos: ["Museo Nacional Casa del Acuerdo, donde se firmó el pacto de 1852", "Santuario de la Virgen del Rosario de San Nicolás", "Parque Regional Forestal y Botánico Rafael de Aguiar", "El Arenal, zona de playas y deportes náuticos"],
    eventos: ["Aniversario del Acuerdo de San Nicolás, 31 de mayo", "Peregrinaciones a la Virgen del Rosario, todo el año"],
    dondeComer: ["Restaurantes de pescado sobre la costanera", "Bares y confiterías del centro histórico"],
    dondeAlojarse: ["Hoteles del centro", "Hospedajes para peregrinos cerca del santuario"],
    tips: ["El bus turístico sale de la Plaza Mitre en tres horarios diarios", "Reservar alojamiento con anticipación si coincide con una fecha de peregrinación", "La Casa del Acuerdo tiene entrada gratuita"],
    presupuesto: "Bajo a medio: los principales sitios históricos y religiosos son de entrada gratuita.",
  },
  {
    nombre: "San Miguel del Monte", km: 112, categoria: "rio", lat: -35.4442, lng: -58.8039,
    nota: "Laguna a cinco cuadras del centro y el Rancho de Rosas.",
    historia: "San Miguel del Monte fue fundado en 1779 como uno de los fortines de la línea de frontera bonaerense, bajo el nombre de Guardia del Monte, y llegó a ser el puesto militar más importante de la zona hacia 1780 para contener los malones de los pueblos originarios. Durante el gobierno de Juan Manuel de Rosas, la zona tuvo un fuerte protagonismo político y militar a través de los Colorados del Monte, milicias rurales leales al Restaurador. Ese vínculo se conserva hoy en el Rancho de Rosas, trasladado en un camión especial desde la estancia Los Cerrillos hasta el centro del pueblo, en lo que se recuerda como el único traslado de una construcción de estas características en Sudamérica. Hoy San Miguel del Monte es sobre todo sinónimo de su laguna, que a diferencia de otras lagunas bonaerenses queda a solo cinco cuadras del centro.",
    datoCurioso: "El Rancho de Juan Manuel de Rosas no se construyó en el pueblo: se trasladó completo en camión desde la estancia Los Cerrillos, a 30 km de distancia, en lo que se considera el único traslado de una construcción de estas características en toda Sudamérica.",
    comoLlegar: "Autopista Ricchieri, Autopista Ezeiza-Cañuelas y luego Ruta Nacional 3, aproximadamente 1h50 en auto; también hay micros desde la Terminal de Retiro.",
    cuandoIr: "Todo el año; primavera y verano para los deportes náuticos en la laguna.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; la laguna está a solo cinco cuadras, así que no hace falta auto para llegar a la costanera.",
    itinerario: [
      { momento: "Mañana", actividad: "Rancho de Juan Manuel de Rosas y Museo Guardia del Monte." },
      { momento: "Mediodía", actividad: "Almuerzo de campo o parrilla junto a la laguna." },
      { momento: "Tarde", actividad: "Costanera de la Laguna de Monte, kayak o paseo en bote." },
    ],
    otrosAtractivos: ["Laguna de Monte, de 686 hectáreas, a cinco cuadras del centro", "Rancho de Juan Manuel de Rosas", "Museo Municipal Guardia del Monte", "Paseo de los Artesanos"],
    eventos: ["Actividades náuticas de temporada en la laguna", "Ferias de artesanos en la costanera"],
    dondeComer: ["Parrillas y restaurantes frente a la laguna", "Almacenes de ramos generales y pulperías de campo"],
    dondeAlojarse: ["Cabañas y hosterías cerca de la costanera", "Campings junto a la laguna"],
    tips: ["La vuelta completa a la laguna son más de 10 km, buena para bici", "Reservar alojamiento con anticipación en fines de semana largos", "El Museo Guardia del Monte abre de jueves a domingo y feriados"],
    presupuesto: "Bajo a medio: el acceso a la laguna y el paseo por el pueblo son gratuitos, el gasto principal es comida y alguna actividad náutica.",
  },
  {
    nombre: "Ramallo", km: 200, categoria: "rio", lat: -33.4972, lng: -60.0169, fechaAgregado: "2026-07-23",
    nota: "Playas de río, un castillo romántico y el límite con Entre Ríos.",
    historia: "El partido de Ramallo se creó en 1864 con tierras separadas de San Nicolás, San Pedro, Arrecifes y Pergamino, en el extremo noreste de la provincia, sobre la costa del río Paraná. Debe su nombre a Bartolomé Ramallo, uno de los primeros pobladores de la zona. A veinte kilómetros del centro, el poeta Rafael Obligado, autor del poema gauchesco \"Santos Vega\", construyó a comienzos del siglo XX un castillo como homenaje a su esposa, Isabel Gómez Langenheim, hoy uno de los grandes atractivos patrimoniales del partido. Con el tiempo, Ramallo desarrolló una fuerte infraestructura de miniturismo náutico gracias a sus playas de arena sobre el Paraná. Hoy combina ese perfil fluvial con barrancas, cascadas y una intensa vida al aire libre.",
    datoCurioso: "El Castillo de Obligado, a 20 km del centro, fue un proyecto personal del poeta Rafael Obligado como homenaje romántico a su esposa, y no un encargo de gobierno ni de otra familia adinerada.",
    comoLlegar: "Ruta Nacional 9, aproximadamente 3 horas en auto.",
    cuandoIr: "Verano para las playas de río; todo el año para el patrimonio histórico.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para el Castillo de Obligado y las playas más alejadas conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Paseo del Puerto Arturo Jauretche, con vistas al Paraná." },
      { momento: "Mediodía", actividad: "Almuerzo en el paseo de artesanos Viva el Río." },
      { momento: "Tarde", actividad: "Castillo de Obligado y playas del Paraná." },
    ],
    otrosAtractivos: ["Castillo de Obligado, construido por el poeta Rafael Obligado", "Playas del Municipal y Costa Pobre", "Cascada del Club Independiente", "Islas Lechiguanas"],
    eventos: ["Fiestas náuticas de verano", "Ferias de artesanos en el Paseo Costanero"],
    dondeComer: ["Paseo gastronómico Viva el Río Leandro Mansilla", "Parrillas y pescaderías sobre la costa"],
    dondeAlojarse: ["Cabañas y hospedajes cerca de la costanera", "Camping en los balnearios municipales"],
    tips: ["Combinar con San Nicolás o San Pedro, ambos muy cerca", "Llevar equipo de pesca o alquilarlo en el club náutico", "El Castillo de Obligado se puede visitar por fuera, consultar si hay visitas guiadas al interior"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Salto", km: 180, categoria: "rio", lat: -34.2903, lng: -59.7796, fechaAgregado: "2026-07-23",
    nota: "Un salto de agua, el primer molino hidráulico del país y tango.",
    historia: "El poblado nació a mediados del siglo XVIII, cuando el capitán Juan de San Martín estableció la Guardia Avanzada del Salto para contener los avances indígenas en la zona, a la que en 1752 se sumó la Compañía de Blandengues \"La Invencible\". El nombre proviene de un salto de agua producido por afloramientos rocosos en el río homónimo, que aguas abajo se convierte en el río Arrecifes. Durante los siglos XIX y XX se desarrolló una importante actividad agrícola e industrial, de la que todavía se conservan las ruinas de lo que fue el primer molino hidráulico del país. Hoy Salto combina ese patrimonio con un perfil de pueblo tranquilo, tradición religiosa y una fuerte identidad tanguera.",
    datoCurioso: "Las ruinas del Molino Quemado, junto al salto de agua que da nombre al pueblo, pertenecieron al primer molino hidráulico de la Argentina, que llegó a exportar harina a otros países.",
    comoLlegar: "Ruta Nacional 7 o Ruta 8, aproximadamente 2h30 en auto.",
    cuandoIr: "Todo el año.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para las estaciones ferroviarias y caminos rurales cercanos conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Salto de agua y ruinas del Molino Quemado." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Museo del Tango Roberto Firpo y Balneario Municipal." },
    ],
    otrosAtractivos: ["Ruinas del Molino Quemado, el primer molino hidráulico del país", "Museo del Tango Roberto Firpo", "Museo Rincón de Historia", "Balneario Municipal junto al río"],
    eventos: ["Homenajes a Roberto Firpo, compositor de tango local", "Fiestas patronales"],
    dondeComer: ["Restaurantes del centro", "Comedores junto al balneario municipal"],
    dondeAlojarse: ["Hoteles y hospedajes del centro", "Cabañas en zonas rurales cercanas"],
    tips: ["El Salto de Agua y las ruinas del molino están uno frente al otro, buena parada fotográfica", "Combinar con Arrecifes o Rojas si hay tiempo extra", "Buena escala camino al noroeste de la provincia"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Arrecifes", km: 180, categoria: "rio", lat: -34.0611, lng: -60.1097, fechaAgregado: "2026-07-23",
    nota: "Cuna de campeones del automovilismo y un monumento al inmigrante único en Latinoamérica.",
    historia: "El primer fortín de Arrecifes se levantó en 1739 junto al río homónimo, en un cruce de caminos coloniales del noreste bonaerense. El poblado creció durante las guerras de la independencia y se consolidó como partido en 1901. A lo largo del siglo XX se ganó el apodo de \"Cuna de Campeones del Automovilismo\", declarado oficialmente por la Legislatura bonaerense, gracias a pilotos oriundos de la zona como José Froilán González, el primer piloto latinoamericano en ganar un Gran Premio de Fórmula 1. Hoy Arrecifes combina ese perfil automovilístico con un balneario municipal sobre el río y un patrimonio histórico centrado en su plaza principal.",
    datoCurioso: "El Monumento al Inmigrante de la plaza central, obra del escultor argentino Leo Vinci, mide más de 7 metros de altura y es único en su tipo en toda Latinoamérica.",
    comoLlegar: "Ruta Nacional 8, kilómetro 176, aproximadamente 2h30 en auto.",
    cuandoIr: "Primavera y verano para las actividades náuticas en el río.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; el balneario y el circuito ribereño quedan a pocos metros del casco urbano.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Bartolomé Mitre, Monumento al Inmigrante e Iglesia San José de los Arrecifes." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Balneario municipal, ruinas del Viejo Molino y el Tajamar." },
    ],
    otrosAtractivos: ["Ruinas del Viejo Molino harinero y su represa (el Tajamar), sobre el río Arrecifes", "Museo Automovilístico José Froilán González", "Monumento al Inmigrante, de más de 7 metros", "Circuito ribereño para canotaje y kayak"],
    eventos: ["Homenajes a pilotos locales de automovilismo", "Actividades náuticas de temporada en el balneario"],
    dondeComer: ["Restaurantes del centro", "Comedores junto al balneario municipal"],
    dondeAlojarse: ["Cabañas y hospedajes del centro", "Camping junto al río"],
    tips: ["El circuito ribereño (balneario, ruinas del molino, Tajamar) se puede recorrer en un paseo de medio día", "Buena escala camino a Salto o San Antonio de Areco", "Los fanáticos del automovilismo pueden buscar las tumbas de pilotos locales en el cementerio"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Rojas", km: 230, categoria: "campo", lat: -34.1908, lng: -60.7297, fechaAgregado: "2026-07-23",
    nota: "La enigmática Casa Octogonal, una fortaleza rural del siglo XIX.",
    historia: "El partido de Rojas se fundó en 1777 por orden del virrey Vértiz, en una zona de frontera que buscaba asegurar el territorio frente a los pueblos originarios. En ese contexto se construyó, en la zona rural de La Rojera, la llamada Casa Octogonal: una fortaleza de ocho lados, muros gruesos y solo dos puertas, pensada como refugio ante los malones. Con el correr de las décadas, el partido se consolidó como una zona agrícola tranquila del noroeste bonaerense, atravesada por el río Rojas. En los últimos años, el municipio impulsó la puesta en valor de ese río para el turismo activo, con travesías en kayak y actividades al aire libre.",
    datoCurioso: "La Casa Octogonal, a 10 km al norte de la ciudad, tiene ocho lados, muros gruesos, ventanas pequeñas, un aljibe en el centro y solo dos puertas (norte y sur): un diseño pensado como bunker defensivo más que como vivienda.",
    comoLlegar: "Ruta Nacional 188, aproximadamente 3 horas en auto.",
    cuandoIr: "Primavera y otoño para las travesías en kayak por el río Rojas.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la Casa Octogonal, en zona rural, conviene auto o bicicleta de montaña.",
    itinerario: [
      { momento: "Mañana", actividad: "Centro histórico y Museo Casa Casco." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Casa Octogonal (desde el camino, respetando la propiedad privada) o travesía en kayak por el río Rojas." },
    ],
    otrosAtractivos: ["Casa Octogonal, en la zona rural de La Rojera", "Rafael Obligado, pueblo cercano declarado Pueblo Turístico", "Río Rojas, para kayak y deportes al aire libre", "Museo y Archivo Histórico local"],
    eventos: ["Travesías en kayak por el río Rojas, según temporada", "Fiestas patronales, San Francisco de Asís"],
    dondeComer: ["Restaurantes del centro", "Comedores de campo en los alrededores"],
    dondeAlojarse: ["Hoteles y hospedajes del centro", "Alojamientos rurales cercanos"],
    tips: ["La Casa Octogonal está en propiedad privada y muy deteriorada: se recomienda verla desde el camino, sin ingresar", "Combinar con Salto o Arrecifes si hay tiempo extra", "Llevar bicicleta de montaña si se quiere explorar la zona rural"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Bragado", km: 210, categoria: "campo", lat: -35.118, lng: -60.4928, fechaAgregado: "2026-07-23",
    nota: "Laguna, arquitectura de principios de siglo y la Fiesta Nacional del Caballo.",
    historia: "Bragado se desarrolló desde fines del siglo XIX como centro de servicios de una amplia zona agrícola del oeste bonaerense, con un fuerte perfil arquitectónico que todavía conserva en su Palacio Municipal y en la iglesia Santa Rosa de Lima. El tenor Florencio Constantino, de gira por el país a comienzos del siglo XX, quedó tan agradecido con la hospitalidad del pueblo que mandó a construir a su costa el Complejo Cultural que hoy lleva su nombre, inaugurado en 1912. Con el tiempo, Bragado desarrolló una fuerte tradición hípica que la llevó a albergar la Fiesta Nacional del Caballo. Hoy combina ese patrimonio arquitectónico con el Parque San Martín y su laguna, el gran espacio verde de la ciudad.",
    datoCurioso: "El Complejo Cultural Florencio Constantino, inaugurado en 1912, fue un regalo del propio tenor ítalo-argentino a la ciudad, en agradecimiento por la calidez con la que fue recibido durante una gira.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 3h30 en auto.",
    cuandoIr: "Diciembre para la Fiesta Nacional del Caballo; todo el año para el resto de los atractivos.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para el Parque San Martín y la laguna conviene auto o bici.",
    itinerario: [
      { momento: "Mañana", actividad: "Palacio Municipal, iglesia Santa Rosa de Lima y Museo Histórico Municipal." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Parque San Martín y Laguna del Bragado." },
    ],
    otrosAtractivos: ["Parque San Martín, de 320 hectáreas, junto a la Laguna del Bragado", "Complejo Cultural Florencio Constantino", "Museo Histórico Municipal, en una mansión inglesa de 1900", "Estación de tren histórica"],
    eventos: ["Fiesta Nacional del Caballo, diciembre"],
    dondeComer: ["Parrillas y restaurantes tradicionales del centro", "Comedores junto al Parque San Martín"],
    dondeAlojarse: ["Hoteles del centro", "Cabañas cerca del parque"],
    tips: ["Reservar alojamiento con anticipación para la Fiesta Nacional del Caballo", "El recorrido arquitectónico por el centro se puede hacer con guía municipal, consultar días disponibles", "Buena escala camino a Trenque Lauquen o Pehuajó"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Los Toldos", km: 300, categoria: "campo", lat: -34.9917, lng: -61.0333, fechaAgregado: "2026-07-23",
    nota: "La infancia de Eva Perón, herencia mapuche y el queso Gouda.",
    historia: "Los Toldos nació a fines del siglo XIX alrededor de una estación del Ferrocarril Oeste, en tierras donde décadas antes se había asentado la tribu mapuche liderada por el cacique Coliqueo, que da origen al nombre del lugar. En 1908 se creó el partido de General Viamonte, en homenaje a un prócer de la independencia, aunque la ciudad cabecera conservó el nombre popular de Los Toldos. El pueblo alcanzó relevancia nacional al ser el lugar donde transcurrió la infancia de Eva Duarte, luego Eva Perón, en una casa humilde con piso de tierra que hoy es museo. A mediados del siglo XX, la llegada de la familia holandesa Doeswijk trajo la receta del queso Gouda, que con el tiempo se convirtió en otro sello distintivo del partido.",
    datoCurioso: "La casa donde Eva Perón vivió parte de su infancia fue declarada Monumento Histórico Nacional en 2002, y en 2019, por el centenario de su nacimiento, se inauguró a su alrededor el actual Museo Provincial Casa Evita.",
    comoLlegar: "Ruta Nacional 7 y luego rutas provinciales, aproximadamente 4 horas en auto.",
    cuandoIr: "Octubre para el Festival del Queso Gouda; todo el año para el resto de los atractivos.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la estancia La Unión y el monasterio benedictino conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Provincial Casa Evita, casa natal de Eva Perón." },
      { momento: "Mediodía", actividad: "Almuerzo con productos locales, entre ellos el queso Gouda." },
      { momento: "Tarde", actividad: "Casa Cultural Mapuche y Monasterio Benedictino Santa María de Los Toldos." },
    ],
    otrosAtractivos: ["Museo Provincial Casa Evita, casa natal de Eva Perón", "Casa Cultural Mapuche, con la herencia del cacique Coliqueo", "Monasterio Benedictino Santa María de Los Toldos", "Ruta del queso Gouda, de tradición holandesa"],
    eventos: ["Festival del Queso Gouda, octubre", "Año Nuevo Mapuche, 27 y 28 de junio"],
    dondeComer: ["Restaurantes y queserías con productos locales", "Comedores de campo en los alrededores"],
    dondeAlojarse: ["Hoteles y hospedajes del centro", "Hospedería del monasterio benedictino"],
    tips: ["Reservar la visita al Museo Casa Evita, suele tener guías disponibles", "El queso Gouda local es un buen souvenir para llevar", "Es un viaje largo, conviene planearlo como fin de semana completo"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Florentino Ameghino", km: 430, categoria: "campo", lat: -34.817, lng: -62.45, fechaAgregado: "2026-07-23",
    nota: "Un pueblo tranquilo que homenajea al gran paleontólogo argentino.",
    historia: "El pueblo se fundó en 1910 en tierras que hasta pocas décadas antes habían sido territorio de los pueblos originarios liderados por el cacique Calfulcurá, en el límite noroeste de la provincia. Tomó su nombre en homenaje a Florentino Ameghino, el naturalista y paleontólogo argentino que revolucionó el estudio de los fósiles sudamericanos y cuyos hallazgos en la región todavía atraen a investigadores. La llegada de inmigrantes españoles e italianos dejó su huella en instituciones como la Sociedad Italiana, que hoy funciona como centro cultural y biblioteca. Reclamado por un movimiento popular desde 1912, el partido homónimo recién se creó en 1991, casi ochenta años después. Hoy Florentino Ameghino es un pueblo tranquilo de calles arboladas, con la vida rural como principal motor económico.",
    datoCurioso: "El partido de Florentino Ameghino tardó casi 80 años en crearse desde el primer reclamo popular de 1912: recién se independizó de General Pinto en 1991, por ley de la Legislatura bonaerense.",
    comoLlegar: "Ruta Nacional 188, aproximadamente 5h30 en auto.",
    cuandoIr: "Primavera y otoño.",
    duracion: "Medio día, o parada en un viaje más largo.",
    comoMoverse: "El centro se recorre a pie.",
    itinerario: [
      { momento: "Mañana", actividad: "Estación Hesley y Circuito de la Salud." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Museo local y edificio de la Sociedad Española." },
    ],
    otrosAtractivos: ["Estación Hesley, antigua estación de ferrocarril", "Circuito de la Salud, paseo arbolado e iluminado", "Sociedad Italiana, hoy centro cultural y biblioteca", "Anfiteatro municipal, con espectáculos de verano"],
    eventos: ["Espectáculos de verano en el anfiteatro municipal"],
    dondeComer: ["Restaurantes y comedores del centro"],
    dondeAlojarse: ["Hospedajes del centro"],
    tips: ["Es un viaje largo, conviene combinarlo con Trenque Lauquen u otro destino del oeste", "Buen destino para caminatas tranquilas por el Circuito de la Salud", "Consultar horarios del museo local antes de ir"],
    presupuesto: "Bajo.",
  },
  {
    nombre: "Marcos Paz", km: 50, categoria: "campo", lat: -34.7761, lng: -58.8391, fechaAgregado: "2026-07-23",
    nota: "Capital Nacional del Jamón Crudo y reservas naturales a solo 50 km de CABA.",
    historia: "El partido de Marcos Paz se formó a fines del siglo XIX en tierras de estancias del oeste bonaerense, tomando su nombre en homenaje al político y diplomático argentino Marcos Paz. Su cercanía con Buenos Aires y su clima favorable lo convirtieron durante buena parte del siglo XX en una zona de quintas y casas de fin de semana para familias porteñas. La construcción del embalse Ingeniero Roggero, sobre los arroyos que forman el río Reconquista, sumó un atractivo natural que todavía es el gran pulmón verde del partido. Con el tiempo, la producción de fiambres artesanales, en especial el jamón crudo, se convirtió en la principal seña de identidad gastronómica de Marcos Paz, que hoy se promociona oficialmente como su Capital Nacional.",
    datoCurioso: "Marcos Paz es reconocida oficialmente como la Capital Nacional del Jamón Crudo, gracias a una tradición fiambrera que combina la herencia de inmigrantes europeos con la producción porcina de la zona.",
    comoLlegar: "Ruta Provincial 40, aproximadamente 50 minutos en auto.",
    cuandoIr: "Primavera y otoño para las actividades al aire libre.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para el Embalse Roggero y las estancias conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Parque Municipal y Lago de Marcos Paz." },
      { momento: "Mediodía", actividad: "Almuerzo con jamón crudo y fiambres artesanales locales." },
      { momento: "Tarde", actividad: "Embalse Ingeniero Roggero o Estancia Santa Rita." },
    ],
    otrosAtractivos: ["Embalse Ingeniero Roggero, sobre el río Reconquista", "Estancia Santa Rita, con visitas guiadas", "Parque Municipal y Lago de Marcos Paz", "Productores artesanales de jamón crudo y fiambres"],
    eventos: ["Ferias artesanales y festivales de música y danza, todo el año"],
    dondeComer: ["Restaurantes y fiambrerías especializadas en jamón crudo", "Comedores de campo"],
    dondeAlojarse: ["Hospedajes del centro", "Estancias con alojamiento"],
    tips: ["Comprar jamón crudo artesanal directo de los productores locales", "El Embalse Roggero es una buena opción para pesca y paseos en bici", "Muy cerca de CABA, ideal para una salida de un solo día"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Carlos Casares", km: 316, categoria: "campo", lat: -35.6167, lng: -61.3833, fechaAgregado: "2026-07-23",
    nota: "Cuna Nacional del Girasol y las Huellas de Fortines a caballo.",
    historia: "El partido de Carlos Casares se formó a fines del siglo XIX en una zona que supo ser frontera con los pueblos originarios, de la que todavía se conservan fortines y relatos de enfrentamientos históricos. Tomó su nombre en homenaje a Carlos Casares, militar y político que participó de las luchas por la independencia. Recibió a inmigrantes españoles, italianos e israelitas, cuya convivencia quedó representada en el propio escudo del partido. Con el correr de las décadas se consolidó como una región agrícola ganadera, con el girasol como cultivo insignia, que lo convirtió en sede permanente de la Fiesta Nacional del Girasol. Hoy combina ese perfil rural con un circuito histórico llamado \"Huellas de Fortines\", que recorre a caballo o en carruaje cien kilómetros de la vieja frontera oeste bonaerense.",
    datoCurioso: "El circuito \"Huellas de Fortines\" propone recorrer 100 kilómetros a caballo o en carruaje, con relatos que recrean los enfrentamientos entre indígenas y militares que definieron la antigua Frontera Oeste de la provincia.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 4 horas en auto.",
    cuandoIr: "Época de cosecha de girasol para la fiesta nacional; todo el año para el resto de los atractivos.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la Laguna del Val y el circuito de fortines conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Molino ex Salvat, de 1893, y Teatro Verdi." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna del Val, pesca deportiva." },
    ],
    otrosAtractivos: ["Molino ex Salvat, de 1893, el edificio de mayor valor histórico del partido", "Teatro Verdi, inaugurado en 1904", "Laguna del Val, para pesca deportiva", "Parque San Esteban, de 90 hectáreas, con edificio de estilo colonial"],
    eventos: ["Fiesta Nacional del Girasol", "Fiesta Provincial del Carruaje", "Huellas de Fortines, travesía histórica a caballo"],
    dondeComer: ["Restaurantes del centro", "Comedores junto al Parque San Esteban"],
    dondeAlojarse: ["Hoteles del centro", "Camping en el Parque San Esteban"],
    tips: ["Reservar con anticipación si el viaje coincide con la Fiesta Nacional del Girasol", "Llevar equipo de pesca para la Laguna del Val", "Consultar fechas de la travesía Huellas de Fortines si interesa participar"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "25 de Mayo", km: 225, categoria: "rio", lat: -35.4319, lng: -60.1725, fechaAgregado: "2026-07-23",
    nota: "La Ciudad del Carnaval, con el único corsódromo fijo de la provincia.",
    historia: "El partido de 25 de Mayo nació en torno al Fortín Mulitas, un puesto militar de la vieja línea de frontera bonaerense, y tomó su nombre actual en homenaje a la Revolución de Mayo de 1810. La laguna que le dio origen al pueblo, hoy conocida como Laguna Mulitas, se convirtió con el tiempo en el gran espacio recreativo de la ciudad. Desde mediados del siglo XX, 25 de Mayo desarrolló una fuerte tradición carnavalera que la llevó a construir el único corsódromo fijo de la provincia de Buenos Aires, lo que le valió el apodo de \"la Ciudad del Carnaval\". Hoy combina esa identidad festiva con el turismo de naturaleza alrededor de sus lagunas.",
    datoCurioso: "25 de Mayo cuenta con el único corsódromo fijo de toda la provincia de Buenos Aires, escenario al aire libre donde cada verano compiten más de 500 bailarines por la corona de la Reina Provincial del Carnaval.",
    comoLlegar: "Ruta 5 y luego Ruta 51, o Ruta 205 y 63, aproximadamente 3 horas en auto.",
    cuandoIr: "Verano para el Carnaval; todo el año para las lagunas.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; el Parque Laguna Mulitas está a 12 cuadras del centro, y la Laguna de Todos los Santos a 22 km, conviene auto para esta última.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza Mitre, iglesia Nuestra Señora del Rosario y Museo Paula Florido." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Parque Laguna Mulitas, kayak o pesca de pejerrey." },
    ],
    otrosAtractivos: ["Parque Laguna Mulitas, de 128 hectáreas", "Corsódromo, único en la provincia", "Laguna de Todos los Santos, a 22 km", "Museo del Carnaval"],
    eventos: ["Carnaval de 25 de Mayo, con coronación de la Reina Provincial", "Cine al aire libre en el Anfiteatro Isidro Quesada, verano"],
    dondeComer: ["Restaurantes del centro", "Buffet y comedores del Parque Laguna Mulitas"],
    dondeAlojarse: ["Hoteles del centro", "Camping en el Parque Laguna Mulitas"],
    tips: ["Reservar alojamiento con anticipación para el Carnaval", "Llevar equipo de pesca para la Laguna Mulitas o la de Todos los Santos", "El parque tiene pileta, juegos y alquiler de embarcaciones"],
    presupuesto: "Bajo a medio: el acceso al parque de la laguna es gratuito, el gasto principal es comida y alojamiento.",
  },
  {
    nombre: "Bolívar", km: 336, categoria: "campo", lat: -36.2333, lng: -61.1167, fechaAgregado: "2026-07-23",
    nota: "Laguna San Luis, la Pulpería Mira Mar y el escenario de una batalla clave de la Conquista del Desierto.",
    historia: "Bolívar nació en 1869 con la construcción del Fortín San Carlos, durante el avance de la frontera hacia el oeste bonaerense. Apenas tres años después, en 1872, se libró cerca del fuerte la batalla de San Carlos entre las tropas del general Rivas y las del cacique Calfucurá, uno de los enfrentamientos más importantes de la Conquista del Desierto. Con el correr de las décadas, la ciudad se consolidó como centro de una amplia zona agrícola ganadera del centro-norte de la provincia. En 1884, en el paraje rural Mira Mar, la familia vasca Urrutia levantó una pulpería que sigue en manos de sus descendientes y que hoy es una de las últimas de su estilo en pie en la provincia. Hoy Bolívar combina ese patrimonio histórico con la Laguna San Luis, recientemente recuperada como espacio de pesca y deportes náuticos.",
    datoCurioso: "La Pulpería Mira Mar, fundada en 1884 por la familia Urrutia y todavía atendida por sus descendientes, conserva pisos y paredes de barro originales, y hasta la marca de una vieja pelea de facones grabada en una reja.",
    comoLlegar: "Ruta Nacional 226, aproximadamente 4h30 en auto.",
    cuandoIr: "Todo el año; verano para el Parque Acuático Municipal.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro se recorre a pie; para la Laguna San Luis y la Pulpería Mira Mar, en zona rural, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Florentino Ameghino y centro histórico." },
      { momento: "Mediodía", actividad: "Almuerzo en la Pulpería Mira Mar." },
      { momento: "Tarde", actividad: "Laguna San Luis, pesca o deportes náuticos." },
    ],
    otrosAtractivos: ["Laguna San Luis, de 600 hectáreas, recientemente recuperada", "Pulpería Mira Mar, de 1884, en el paraje rural del mismo nombre", "Parque Las Acollaradas, con parque acuático municipal", "Monolito a los caídos en la batalla de San Carlos, sobre la Ruta 65"],
    eventos: ["Fiesta del Deporte", "Festivales de música y teatro en verano"],
    dondeComer: ["Pulpería Mira Mar, con picadas, empanadas y asado", "Restaurantes y bares tradicionales del centro"],
    dondeAlojarse: ["Cabañas junto a la Laguna San Luis", "Hoteles del centro"],
    tips: ["La Pulpería Mira Mar queda en zona rural sin señal de celular, buena excusa para desconectar", "Llevar equipo de pesca o kitesurf para la Laguna San Luis", "Combinar con Carlos Casares, muy cerca"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Ensenada", km: 60, categoria: "rio", lat: -34.8667, lng: -57.9, fechaAgregado: "2026-07-23",
    nota: "Selva subtropical a las puertas de La Plata y kilómetros de playas de río.",
    historia: "Ensenada nació a comienzos del siglo XVIII alrededor de la estancia de la familia Barragán, que dio origen al nombre \"Ensenada de Barragán\" con el que se conoció durante mucho tiempo a la zona. Su bahía natural, resguardada de los vientos, la convirtió en un punto clave para la navegación desde el período colonial, y con el tiempo se transformó en uno de los puertos más importantes del país, con una fuerte identidad industrial y obrera. A pocos minutos del centro urbano se conserva la Reserva Natural Punta Lara, de 450 hectáreas, la selva en galería más austral de la Argentina, con especies subtropicales que sobrevivieron gracias al microclima del río. Hoy Ensenada combina ese perfil portuario e industrial con catorce kilómetros de costa recreativa sobre el Río de la Plata.",
    datoCurioso: "La Reserva Natural Punta Lara es la selva en galería más austral del país: un fragmento de bosque de características subtropicales, con especies como el laurel y el ceibo, que sobrevive gracias al calor que retiene el Río de la Plata.",
    comoLlegar: "Autopista Buenos Aires-La Plata y luego avenidas locales, aproximadamente 50 minutos en auto.",
    cuandoIr: "Verano para las playas; todo el año para la Reserva Punta Lara.",
    duracion: "Día completo.",
    comoMoverse: "El centro se recorre a pie; para la Reserva Punta Lara y los balnearios de la costa conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Reserva Natural Punta Lara, circuito guiado por la selva en galería." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro o la costanera." },
      { momento: "Tarde", actividad: "Playas del Parque Costero, sobre el Río de la Plata." },
    ],
    otrosAtractivos: ["Reserva Natural Punta Lara, con senderos y miradores", "Balnearios gratuitos a lo largo de 14 km de costa", "Isla Paulino, con senderos y avistaje de aves", "Puerto de Ensenada y astilleros"],
    eventos: ["Aniversario fundacional, con desfile tradicional", "Temporada de playas, en verano"],
    dondeComer: ["Restaurantes y parrillas de la costanera", "Comedores frente a las playas"],
    dondeAlojarse: ["Hoteles de La Plata, muy cerca", "Campings en la zona de playas"],
    tips: ["El circuito guiado de Punta Lara dura una hora y media, reservar con anticipación en temporada alta", "Las playas del Parque Costero son gratuitas, con guardavidas en temporada", "Combinar con Berisso o La Plata, ambas muy cerca"],
    presupuesto: "Bajo: las playas y la reserva son de acceso gratuito o muy económico.",
  },
  {
    nombre: "Magdalena", km: 100, categoria: "rio", lat: -35.0333, lng: -57.5167, fechaAgregado: "2026-07-23",
    nota: "Calles empedradas coloniales, playas de río y una reserva de biosfera de la UNESCO.",
    historia: "El actual partido de Magdalena forma parte de las tierras que Juan de Garay repartió en 1580 bajo el nombre de \"Valle de Santa Ana\", luego conocido como Pago de la Magdalena, una de las jurisdicciones más antiguas del actual territorio bonaerense. Durante el período colonial funcionó como zona de estancias y paso obligado hacia el sur de la provincia, herencia que todavía se nota en su casco urbano de calles empedradas y arquitectura de época. En el siglo XX consolidó su perfil de balneario popular gracias a sus playas de arena fina sobre el Río de la Plata, sin perder el carácter rural y gauchesco del resto del partido. Junto con Punta Indio, buena parte de su territorio integra el Parque Costero del Sur, declarado Reserva de Biosfera por la UNESCO.",
    datoCurioso: "El Parque Costero del Sur, que Magdalena comparte con Punta Indio, fue declarado Reserva de Biosfera por la UNESCO por conservar uno de los últimos relictos de bosque nativo de tala, coronillo y sombra de toro de toda la costa del Río de la Plata.",
    comoLlegar: "Autopista Buenos Aires-La Plata y luego Ruta 11, aproximadamente 1h30 en auto.",
    cuandoIr: "Verano para las playas; febrero para el Carnaval del Sur.",
    duracion: "Fin de semana.",
    comoMoverse: "El centro histórico se recorre a pie; para los pueblos rurales del partido (Vieytes, General Mansilla) y el Parque Costero del Sur conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Plaza San Martín y el casco histórico de calles empedradas." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Playas del balneario municipal o circuito por el Parque Costero del Sur." },
    ],
    otrosAtractivos: ["Parque Costero del Sur, Reserva de Biosfera UNESCO", "Reserva Natural El Destino, de gestión privada, con más de 200 especies de aves", "Vieytes, pueblo rural con estación de fines del siglo XIX", "General Mansilla (Estación Bartolomé Bavio), pueblo ferroviario"],
    eventos: ["Carnaval del Sur, febrero", "Fiesta de la Mariposa Bandera Argentina"],
    dondeComer: ["Restaurantes y parrillas del balneario municipal", "Pueblo Viejo, en Vieytes, conocido por sus porciones abundantes"],
    dondeAlojarse: ["Hoteles y hospedajes del centro", "Camping en la zona de playas"],
    tips: ["El Parque Costero del Sur se recorre mejor con guía, para aprovechar los senderos y avistaje de aves", "Combinar con Punta Indio, que comparte la misma reserva de biosfera", "Los pueblos rurales del partido (Vieytes, General Mansilla) son una buena excursión de medio día"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Punta Indio", km: 150, categoria: "playa", lat: -35.3833, lng: -57.6167, fechaAgregado: "2026-07-23",
    nota: "Playas agrestes de agua dulce, cielos sin contaminación lumínica y sitios arqueológicos milenarios.",
    historia: "El partido de Punta Indio se creó en 1994 al independizarse de Magdalena, tomando el nombre de su localidad más representativa, Punta del Indio, aunque su ciudad cabecera es Verónica. La zona conserva alrededor de veinte sitios arqueológicos de pueblos originarios de entre 1600 y 1800 años de antigüedad, una de las mayores concentraciones de este tipo en toda la provincia. Su historia también está ligada al campo y a la Base Aeronaval Punta Indio, y la vieja estación de tren de Verónica, cerrada en 1978, hoy funciona como museo histórico. Junto con Magdalena, buena parte de su territorio integra el Parque Costero del Sur, declarado Reserva de Biosfera por la UNESCO en 1984 por sus exclusivos montes de tala sobre albardones de conchilla.",
    datoCurioso: "Punta Indio conserva unos veinte sitios arqueológicos de pueblos originarios, de entre 1600 y 1800 años de antigüedad, una de las concentraciones más importantes de este tipo en toda la provincia de Buenos Aires.",
    comoLlegar: "Autopista Buenos Aires-La Plata y luego Ruta 11 o Ruta 36 hasta Verónica, aproximadamente 2 horas en auto.",
    cuandoIr: "Verano para las playas; todo el año para el avistaje de aves y las caminatas.",
    duracion: "Fin de semana.",
    comoMoverse: "Conviene auto: las playas y los senderos de la reserva están dispersos y algunos tramos son de camino de conchilla.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Histórico Punta Indio Eduardo Barés, en la vieja estación de tren de Verónica." },
      { momento: "Mediodía", actividad: "Almuerzo con asado criollo." },
      { momento: "Tarde", actividad: "Playa El Pericón, con la escultura del Indio Querandí, o La Escondida para más tranquilidad." },
    ],
    otrosAtractivos: ["Playa El Pericón, con escultura del Indio Querandí", "Playa La Escondida, agreste y sin contaminación lumínica, ideal para mirar estrellas", "Pipinas, pueblo con origen en la fábrica de cemento Corcemar y canteras de conchilla", "Sendero de interpretación Arroyo Villoldo, con más de 280 especies de aves"],
    eventos: ["Fiesta del Peón de Campo, diciembre"],
    dondeComer: ["Parrillas y restaurantes en Verónica y los balnearios", "Comercios de productos regionales en Pipinas"],
    dondeAlojarse: ["Hotel Argentino, de 1934, en Verónica", "Cabañas y campings cerca de las playas"],
    tips: ["La Escondida no tiene servicios (baños, parrillas), ir preparado", "Llevar el auto con buen margen de combustible, hay tramos largos de camino de conchilla", "El sendero Arroyo Villoldo es mejor al amanecer o atardecer para el avistaje de aves"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Las Flores", km: 195, categoria: "campo", lat: -36.033, lng: -59.1, fechaAgregado: "2026-07-23",
    nota: "Cuna de campeones del Dakar y una laguna con nombre intrigante.",
    historia: "Las Flores fue fundada en 1839 por decreto de Juan Manuel de Rosas, en el centro de la provincia, sobre el arroyo homónimo que desemboca en el río Salado. Con la llegada del ferrocarril a fines del siglo XIX se convirtió en uno de los nudos ferroviarios más importantes de la provincia, con más de 1.200 empleados en sus talleres y una fuerte identidad obrera en torno a la estación. El actual Palacio Municipal, de 1878, es obra del arquitecto italiano Pedro Petrocchi, autor también de la iglesia Nuestra Señora del Carmen. Con el tiempo, Las Flores se volvió conocida además por sus deportistas: allí nacieron los hermanos Marcos y Alejandro Patronelli, ambos ganadores del Rally Dakar en la categoría cuatriciclos. Hoy combina ese perfil ferroviario e industrial con el Parque Plaza Montero y su laguna, el gran atractivo natural de la ciudad.",
    datoCurioso: "La Laguna del Difunto Manuel, dentro del Parque Plaza Montero, debe su curioso nombre a una vieja leyenda popular sobre un hombre llamado Manuel que habría muerto ahogado en sus aguas.",
    comoLlegar: "Ruta Nacional 3, aproximadamente 3 horas en auto; también hay tren desde Constitución.",
    cuandoIr: "Primavera y verano para las actividades náuticas en la laguna.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; el Parque Plaza Montero está a 1,5 km, se puede ir caminando o en auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Palacio Municipal, iglesia Nuestra Señora del Carmen y el Obelisco." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Parque Plaza Montero y Laguna del Difunto Manuel, canotaje." },
    ],
    otrosAtractivos: ["Parque Plaza Montero y Laguna del Difunto Manuel", "Museo de Ciencias Naturales Florentino Ameghino", "Jardín Botánico municipal", "Museo Histórico, en la vieja cárcel"],
    eventos: ["Festival ferroviario y de la peatonal", "Actividades náuticas de temporada en la laguna"],
    dondeComer: ["Restaurantes y confiterías del centro", "Comedores junto al Parque Plaza Montero"],
    dondeAlojarse: ["Hoteles del centro", "Camping en el Parque Plaza Montero"],
    tips: ["Buena escala en Ruta 3 camino al sur de la provincia o a la Patagonia", "El Museo de Ciencias Naturales tiene una colección paleontológica poco conocida, vale la pena la visita", "La pileta municipal del parque es gratuita en temporada de verano"],
    presupuesto: "Bajo.",
  },
  {
    nombre: "Maipú", km: 330, categoria: "campo", lat: -36.85, lng: -57.8667, fechaAgregado: "2026-07-23",
    nota: "La Laguna Kakel Huincul y un festival de cine de humor único en el país.",
    historia: "Maipú se desarrolló en torno al Fortín Kakel Huincul, construido en 1815 a orillas de la laguna homónima para proteger a los primeros pobladores de los malones y servir de posta a las carretas que iban hacia el sur de la provincia. El pueblo tomó luego el nombre de Maipú en homenaje a la batalla de 1818 que selló la independencia de Chile. La llegada de inmigrantes españoles dejó su huella en el antiguo Prado Español, hoy recuperado como patrimonio local. Desde 2008, Maipú es sede de un festival de cine de humor único en el país, que reúne cortometrajes de más de una decena de países. Hoy combina ese perfil cultural con un fuerte turismo rural centrado en su laguna.",
    datoCurioso: "Junto a la Laguna Kakel Huincul todavía puede verse el llamado \"Cementerio Indio\", vestigio del viejo fortín que en 1815 protegía a los pobladores de los malones.",
    comoLlegar: "Autovía 2, aproximadamente 3 horas en auto desde CABA, o poco más de 1 hora desde Mar del Plata.",
    cuandoIr: "Primavera y verano para las actividades en la laguna; octubre para el festival de cine.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; la Laguna Kakel Huincul y las estancias quedan en zona rural, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Museo Municipal, con su patio de carruajes." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna Kakel Huincul, pesca o paseo por el muelle de 200 metros." },
    ],
    otrosAtractivos: ["Laguna Kakel Huincul, con muelle, camping y guardería náutica", "\"La vuelta de Pancho Ramos\", cabalgata con asado y fogón gaucho", "Antiguo Prado Español, recuperado como patrimonio", "Museo Municipal, con sala de ciencias naturales"],
    eventos: ["Maipú Cortos, festival de cine de humor, octubre"],
    dondeComer: ["Restaurantes del centro", "Comedores y cantina junto a la laguna"],
    dondeAlojarse: ["Cabañas junto a la Laguna Kakel Huincul", "Estancias con turismo rural"],
    tips: ["Reservar la cabalgata \"La vuelta de Pancho Ramos\" con anticipación", "Buena combinación con Mar del Plata o Balcarce, a poco más de una hora", "Llevar equipo de pesca para la laguna"],
    presupuesto: "Bajo a medio.",
  },
  {
    nombre: "Castelli", km: 250, categoria: "rio", lat: -36.0833, lng: -57.8, fechaAgregado: "2026-07-23",
    nota: "Laguna La Rosita y el castillo de la trágica Felicitas Guerrero.",
    historia: "Castelli se desarrolló como pueblo de la cuenca del río Salado, en una zona de estancias del sudeste bonaerense. Sobre la Autovía 2, cerca del puente que cruza el Salado, se encuentra la Estancia La Raquel, una construcción con forma de castillo medieval de colores llamativos que perteneció a la familia de Felicitas Guerrero, la célebre heredera bonaerense asesinada en 1872 en un crimen pasional que todavía es recordado como uno de los episodios más resonantes de la alta sociedad porteña del siglo XIX. Con el tiempo, el pueblo desarrolló su identidad alrededor de la Laguna La Rosita, a dos kilómetros del casco urbano. Hoy Castelli combina ese patrimonio de estancias con la pesca deportiva y el ritmo tranquilo de un pueblo de la Pampa Húmeda.",
    datoCurioso: "La Estancia La Raquel, con forma de castillo medieval, perteneció a la familia de Felicitas Guerrero, la heredera cuyo asesinato en 1872 por un pretendiente despechado conmocionó a la sociedad porteña de la época.",
    comoLlegar: "Autovía 2, aproximadamente 3h30 en auto.",
    cuandoIr: "Primavera y otoño para la pesca; todo el año para las estancias.",
    duracion: "Día completo o fin de semana.",
    comoMoverse: "El centro se recorre a pie; la Laguna La Rosita está a 2 km, y las estancias en zona rural, conviene auto.",
    itinerario: [
      { momento: "Mañana", actividad: "Recorrido por el casco urbano y sus calles arboladas." },
      { momento: "Mediodía", actividad: "Almuerzo en el centro." },
      { momento: "Tarde", actividad: "Laguna La Rosita, pesca de tarariras y bagres, o paseo en bicicleta por la costanera." },
    ],
    otrosAtractivos: ["Laguna La Rosita, de 500 hectáreas", "Estancia La Raquel, con forma de castillo medieval, sobre el río Salado", "El Calvario, junto a la laguna", "Cascos de estancias históricas junto al río Salado"],
    eventos: ["Encuentros de pesca deportiva en la Laguna La Rosita y el río Salado"],
    dondeComer: ["Restaurantes del centro", "Comedores junto a la Laguna La Rosita"],
    dondeAlojarse: ["Estancias con turismo rural", "Hoteles como La Escondida, en el centro"],
    tips: ["La Estancia La Raquel se ve bien desde el puente sobre el Salado, en la Autovía 2", "Llevar equipo de pesca para la Laguna La Rosita", "Buena escala en el camino hacia Mar del Plata"],
    presupuesto: "Bajo a medio.",
  },
];

// --- Traducción al inglés del contenido de cada destino ---------------------
// Se completa de a poco, destino por destino (clave = "nombre" en español,
// que se mantiene igual en los dos idiomas ya que son nombres propios).
// Si un destino todavía no tiene traducción, textoDestino() devuelve el
// contenido en español como respaldo, para no romper nada mientras se traduce.
const DESTINOS_EN = {
  "Tigre": {
    nota: "Delta, passenger boats, and the fruit market port.",
    historia: "The area was originally home to Guaraní communities who took advantage of the delta's richness for fishing and hunting. Toward the end of the 19th century, with the arrival of the railway, Tigre became the favorite leisure destination of Buenos Aires high society, which built rowing clubs and held international-level regattas along the river's branches. For much of the 20th century, mass tourism shifted toward the Atlantic coast and Tigre went through a quieter period, until the 1990s, when it regained its place as a weekend destination thanks to the revival of the Puerto de Frutos market, its museums, and boat tours. Today it remains the best-known gateway to the Paraná Delta, a unique ecosystem of islands inhabited year-round by their own residents.",
    datoCurioso: "The name comes from the jaguars (\"tigres\" to the colonizers) that once roamed the area, hunted until they disappeared in the early 20th century.",
    comoLlegar: "Mitre train line from Retiro to Tigre station, or the Panamericana highway, Tigre branch.",
    cuandoIr: "Year-round; spring and fall for walks, summer for boat rides and river beaches.",
    duracion: "A full day, so you don't have to rush the boat ride.",
    comoMoverse: "The town is walkable; reaching the delta islands requires a boat (shared or private tour), since there are no bridges or roads.",
    itinerario: [
      { momento: "Morning", actividad: "Train to Tigre and a shared boat ride along the delta's branches." },
      { momento: "Afternoon", actividad: "Puerto de Frutos market (crafts and fairs) and lunch by the river." },
      { momento: "Evening", actividad: "Dinner at Paseo Victorica overlooking the Luján River, or head back to CABA." },
    ],
    otrosAtractivos: ["Mate Museum", "Naval Museum of the Nation", "Parque de la Costa amusement park and Aquafan water park", "Río Luján Nature Reserve"],
    eventos: ["Carnival parade along Paseo Victorica, February", "River Festival, summer", "Rowing regattas on the Luján River, March"],
    dondeComer: ["River fish stalls at Puerto de Frutos", "Restaurants with terraces along Paseo Victorica", "Historic cafés near the Tigre Art Museum"],
    dondeAlojarse: ["Delta island inns, reachable only by boat", "Boutique hotels along Paseo Victorica", "Weekend cabins in Tigre town"],
    tips: ["Buy the shared boat ticket at the river station, not from street agencies", "Go on a weekday to avoid crowds at Puerto de Frutos", "Bring sunscreen and water, there's little shade on the boat", "Book island excursions ahead of time in high season"],
    presupuesto: "Medium: the train and shared boat are affordable; the biggest expense is usually lunch and crafts.",
  },
  "San Isidro": {
    nota: "Cathedral, historic center, and the riverside.",
    historia: "It was part of the land granted to the first colonizers of the Río de la Plata, and from the 18th century it was settled as an area of country homes for well-off Buenos Aires families. The current cathedral, built in neo-Gothic style in the late 19th century, became the symbolic heart of the town, around which the historic center grew. In the early 20th century it developed its residential and cultural identity, with intellectuals and artists who found a quiet retreat close to the city in its estates; writer Victoria Ocampo, founder of Sur magazine, had one of her homes here. Over the decades the district expanded northward, and today it combines the colonial layout of its center with upscale residential areas and an active cultural and sports scene.",
    datoCurioso: "The Quinta Los Ombúes estate, now the Pueyrredón Museum, belonged to the family of General Juan Martín de Pueyrredón and still has centuries-old trees from colonial times.",
    comoLlegar: "Mitre train, San Isidro line, from Retiro, or Av. del Libertador by car.",
    cuandoIr: "Year-round; weekends are livelier along the pedestrian street.",
    duracion: "Half a day, pairs well with Tigre.",
    comoMoverse: "Easy to walk from the train station; local buses run to the riverside, or you can bike along the Ribera.",
    itinerario: [
      { momento: "Morning", actividad: "San Isidro Cathedral, Plaza Mitre, and Ituzaingó pedestrian street." },
      { momento: "Afternoon", actividad: "Quinta Los Ombúes (Pueyrredón Museum) and the riverside." },
      { momento: "Evening", actividad: "Bars in Villa Adelina, or head back to CABA by train." },
    ],
    otrosAtractivos: ["Villa Ocampo, Victoria Ocampo's house-museum in Beccar", "Contemporary Art Museum (MACBA)", "Ribera Norte Municipal Nature Park", "San Isidro Golf Club"],
    eventos: ["Races at the Hipódromo, check the weekend schedule", "Craft fair on the Ribera, weekends", "San Isidro Labrador patron saint festival, May"],
    dondeComer: ["Bars along Ituzaingó pedestrian street with open-air patios", "Traditional grills near the station", "Specialty cafés downtown"],
    dondeAlojarse: ["Boutique hotels near the coast", "International chain hotels along the Panamericana"],
    tips: ["Go on a weekend for the craft fairs on the pedestrian street", "Villa Ocampo offers guided tours Friday through Sunday and holidays", "The Hipódromo has races some Saturdays, worth checking the calendar", "Pairs well with Tigre on the same day given how close they are"],
    presupuesto: "Low to medium: being so close to CABA, a train ticket and some food is enough.",
  },
  "Luján": {
    nota: "Basilica and pilgrimage, religious tourism.",
    historia: "The town's name is tied to a legend: in 1630, a cart carrying an image of the Virgin Mary stopped without apparent reason and wouldn't move again until the image was taken down, which then became the area's patron saint. Around that devotion, a settlement grew over the following centuries that became the country's most important Catholic pilgrimage site. The current neo-Gothic basilica is the third built on the site: the two previous ones didn't survive the passage of time, which reinforced among the faithful the need for a temple worthy of the people's devotion. Today Luján receives millions of pilgrims a year, especially during the traditional October walk from Buenos Aires, in addition to visitors drawn by its historic heritage and museums.",
    datoCurioso: "The current basilica is the third built on the site; the previous two collapsed, which reinforced among the faithful the need for a temple worthy of that devotion.",
    comoLlegar: "National Route 7 or Acceso Oeste, about 1 hour by car; direct buses are also available.",
    cuandoIr: "Year-round; the first Sunday of October is the big youth pilgrimage.",
    duracion: "Half a day.",
    comoMoverse: "The historic center is easy to walk; a car is useful for reaching nearby estancias.",
    itinerario: [
      { momento: "Morning", actividad: "Luján Basilica and its museum of offerings." },
      { momento: "Midday", actividad: "Lunch near the main square." },
      { momento: "Afternoon", actividad: "Enrique Udaondo Museum Complex and the Luján riverside." },
    ],
    otrosAtractivos: ["Carlos Keen, a food-focused village 14 km from downtown", "San Benito Abbey, a monastery in Jáuregui known for handmade sweets", "Transport Museum (part of the Udaondo Complex)", "Ameghino Park"],
    eventos: ["Youth pilgrimage on foot from CABA, first Sunday of October", "Feast of the Virgin, May 8", "Indigenous peoples' pilgrimage, May"],
    dondeComer: ["Home-style restaurants around the Basilica", "Cafés with regional pastries and sweets", "Grills along the access road"],
    dondeAlojarse: ["Budget hotels near the Basilica, aimed at pilgrims", "Country inns on the outskirts"],
    tips: ["Avoid the first Sunday of October if you're not after the mass pilgrimage (or go for exactly that reason)", "Entry to the Basilica is free, donations are welcome", "Pair it with a nearby estancia for a day in the countryside", "Wear comfortable shoes, there's a fair amount of walking"],
    presupuesto: "Low: the main religious sites are free, the expense is mostly food and transport.",
  },
  "Cañuelas": {
    nota: "Estancias and rural tourism close to the city.",
    historia: "The district took shape in the mid-19th century during the boom of cattle ranching on the pampas, when estancias began organizing as large-scale production units. For decades it was a key railway hub for moving livestock to Buenos Aires markets, which drove the town's growth around the station. Over time, many estancias converted part of their activity to rural tourism, offering visitors a countryside experience with horse breaking, rodeo, and Creole food. Today Cañuelas is one of the most popular rural tourism destinations near Buenos Aires City, thanks to its proximity and the ranching tradition still felt in the area.",
    datoCurioso: "According to popular tradition, dulce de leche was invented by accident in 1829 at Estancia La Caledonia, near Cañuelas, when a pot of sweetened milk was left boiling too long.",
    comoLlegar: "Ricchieri highway and then Route 205, about 1 hour by car.",
    cuandoIr: "Spring and fall for outdoor countryside activities.",
    duracion: "A full day.",
    comoMoverse: "It's a rural area: getting between estancias requires your own car or the transport each estancia offers.",
    itinerario: [
      { momento: "Morning", actividad: "Arrival at the estancia and a ride on horseback or in a sulky." },
      { momento: "Midday", actividad: "Creole barbecue with live folk music." },
      { momento: "Afternoon", actividad: "Horse breaking, rodeo, mate, and fried pastries before heading back." },
    ],
    otrosAtractivos: ["Cañuelas Lagoon", "Municipal History Museum", "Old train station (now a cultural center)", "Municipal nature reserve"],
    eventos: ["Provincial Calf Festival, October", "Cañuelas rural expo", "Creole parade for the district's anniversary"],
    dondeComer: ["Lunch is usually included in the estancia's day-in-the-country package", "Small-town restaurants in downtown Cañuelas"],
    dondeAlojarse: ["Estancias offering overnight stays", "Town lodging for those just passing through"],
    tips: ["Book the day in the country ahead of time, especially on weekends", "Ask whether the package includes transport from CABA", "Wear comfortable clothes and sunscreen for horseback activities", "Great for groups or families, often with group discounts"],
    presupuesto: "Medium to high: the estancia day trip (transport, food, and activities) is usually the main expense.",
  },
  "La Plata": {
    nota: "Cathedral, woods, and a one-of-a-kind city layout.",
    historia: "The city was founded in 1882 by then-governor Dardo Rocha, after Buenos Aires was federalized and the province needed a new capital. It was designed from scratch as a modern city for its time, with diagonal streets and a plaza every six blocks meant to guarantee accessible green spaces. Its landmark buildings, like the Cathedral and the Natural History Museum, were meant as a showcase of Argentine progress in the late 19th century, in step with the country's agro-export boom. Over the years, the founding of the National University of La Plata in the early 20th century cemented its identity as a university city, one it still holds today alongside its administrative role as the provincial capital.",
    datoCurioso: "The layout was designed so that no point in the city would be more than 700 meters from a green space, unusual for a late-19th-century city.",
    comoLlegar: "Buenos Aires-La Plata highway, or the Roca train line from Constitución.",
    cuandoIr: "Year-round; the Woods (Bosque) are lovely in fall and spring.",
    duracion: "A full day.",
    comoMoverse: "The downtown grid is easy to walk or bike thanks to its checkerboard layout; there's a public bike-share system.",
    itinerario: [
      { momento: "Morning", actividad: "La Plata Cathedral and Plaza Moreno." },
      { momento: "Midday", actividad: "Lunch near Plaza San Martín or Diagonal 74." },
      { momento: "Afternoon", actividad: "Natural History Museum and a walk through the Bosque park." },
    ],
    otrosAtractivos: ["Casa Curutchet, the only Le Corbusier building in Latin America and a UNESCO World Heritage Site", "Pasaje Dardo Rocha cultural center, home to MACLA and MUMART", "Teatro Argentino and the Bosque Planetarium", "Astronomical Observatory"],
    eventos: ["City founding anniversary, November 19", "Student Festival, September", "Design fairs at Pasaje Dardo Rocha, year-round"],
    dondeComer: ["Well-known bars downtown", "Calle 8 dining strip or Pasaje Dardo Rocha", "Craft breweries near the university area"],
    dondeAlojarse: ["Downtown hotels near Plaza Moreno", "Hostels geared toward students, typical of a university city"],
    tips: ["Climb the Cathedral towers if tours are running that day", "Casa Curutchet requires a reservation, book ahead", "The Natural History Museum tends to have lines, go early", "La Plata is easy to explore on foot or by bike thanks to its grid layout"],
    presupuesto: "Low to medium: several attractions (cathedral, museum, the Bosque) are free or very affordable.",
  },
  "Zárate": {
    nota: "Riverside walk on the Paraná and the Zárate-Brazo Largo bridge.",
    historia: "The area developed as a town in the mid-19th century around port activity on the Paraná de las Palmas river, taking advantage of its strategic location for river trade. For much of the 20th century, Zárate became an industrial hub, with shipyards and meatpacking plants that employed much of its population and shaped its working-class identity. The Zárate-Brazo Largo bridge complex, opened in 1977, was a turning point, connecting the city directly with Entre Ríos and the Mesopotamia region. Today it combines that industrial and port past with a more tourism-oriented profile centered on its riverside walk and the landscape of the Buenos Aires delta.",
    datoCurioso: "When it opened, the Zárate-Brazo Largo bridge complex was one of the longest in South America built over a system of islands and rivers.",
    comoLlegar: "Panamericana highway, Escobar branch, to Zárate, or train from Retiro.",
    cuandoIr: "Spring and summer to enjoy the riverside walk.",
    duracion: "Half a day.",
    comoMoverse: "The downtown and riverside are walkable; crossing the bridge into Entre Ríos requires a car.",
    itinerario: [
      { momento: "Morning", actividad: "Riverside walk and pier on the Paraná." },
      { momento: "Midday", actividad: "River fish for lunch by the coast." },
      { momento: "Afternoon", actividad: "Municipal history museum and the Zárate-Brazo Largo bridge lookout." },
    ],
    otrosAtractivos: ["Paraná de las Palmas nature reserve", "Municipal park", "Historic port and industrial area", "Río Santiago shipyard (occasional tours)"],
    eventos: ["Immigrants' Festival", "Regatta on the Paraná de las Palmas", "City anniversary, August"],
    dondeComer: ["Fish restaurants along the riverside", "Grills in the city center"],
    dondeAlojarse: ["Stopover hotels, since it's usually visited in a day", "Chain options along the access road"],
    tips: ["Drive if you want to cross the bridge into Entre Ríos for a day trip", "The riverside walk is pleasant at sunset", "A good stopover if continuing on to Entre Ríos or Rosario"],
    presupuesto: "Low: the riverside walk and museum are free, the main cost is food.",
  },
  "Capilla del Señor": {
    nota: "A colonial village declared a national historic site.",
    historia: "The village grew around a chapel built in the 18th century, which gave it its name, in an area of estancias and staging posts that gave travelers heading north through the province a place to rest. Unlike other Buenos Aires towns that modernized their architecture over the decades, Capilla del Señor kept its colonial layout almost intact, which led to it being declared a National Historic Heritage Site in 1994, the country's first \"Historic Town\" with that distinction. That recognition helped preserve its old houses and cobblestone streets, which today attract visitors looking for an uncommon postcard scene within the province. The town also keeps its ties to nearby estancias, which combine farming with hosting visitors.",
    datoCurioso: "Before becoming Pope, Jorge Bergoglio met with the town's Catholic community at the parish church shortly after being ordained a priest; today a downtown passage is named after him in his honor.",
    comoLlegar: "Route 8 to Pilar, then provincial roads to Capilla del Señor.",
    cuandoIr: "Year-round; weekends have more dining options.",
    duracion: "Half a day.",
    comoMoverse: "The town is small and can be walked entirely in under an hour; a car is useful for nearby estancias.",
    itinerario: [
      { momento: "Morning", actividad: "Historic center and Plaza Belgrano." },
      { momento: "Midday", actividad: "Lunch at a colonial house turned restaurant." },
      { momento: "Afternoon", actividad: "A horse-drawn carriage ride through town, or a visit to a nearby estancia." },
    ],
    otrosAtractivos: ["Pulpería Los Ombúes, one of the oldest in the country", "Los Cardales, a neighboring village in the same district with a train station dating to 1902", "Criollo Museum", "Historic estancias in the area"],
    eventos: ["Patron saint festivities, September 14, the province's oldest religious celebration", "Craft fair, some weekends", "Historic carriage parade"],
    dondeComer: ["Colonial houses turned regional-food restaurants", "Small-town cafés with homemade goods"],
    dondeAlojarse: ["Boutique inns within the historic center", "Nearby estancias with lodging"],
    tips: ["Go on a weekday to explore it at a relaxed pace", "Hot-air balloon rides over the area are available, worth booking ahead", "Take photos of the colonial façades, among the best preserved in the province", "Ask about craft fairs on some weekends"],
    presupuesto: "Low to medium: walking the town is free, the main expense is food and maybe a carriage ride.",
  },
  "San Antonio de Areco": {
    nota: "Capital of gaucho tradition, museums, and leatherworkers.",
    historia: "Founded in the 18th century on the banks of the Areco River, the town grew under the wing of the cattle estancias that dominated the pampas region. In the early 20th century, writer Ricardo Güiraldes, son of a local ranching family, immortalized the life of local gauchos in his novel \"Don Segundo Sombra,\" which turned the town into a symbol of Argentine Creole tradition. That legacy was institutionalized decades later with the creation of the Gauchesco Museum bearing his name and the declaration of Tradition Day, celebrated every November since the mid-20th century with parades and rodeo shows. Today San Antonio de Areco is recognized as the national capital of gaucho tradition, with a community of leatherworkers and silversmiths keeping centuries-old crafts alive.",
    datoCurioso: "Güiraldes wrote much of that novel inspired by the gauchos he met at his family's estancia near the town.",
    comoLlegar: "National Route 8, about 1h30 by car; direct buses are also available.",
    cuandoIr: "Year-round; Tradition Day in November brings gaucho parades.",
    duracion: "A full day or a weekend.",
    comoMoverse: "The historic center is easy to walk; a car or an estancia's own transport is needed for ranches farther from town.",
    itinerario: [
      { momento: "Morning", actividad: "Ricardo Güiraldes Gauchesco Museum and the Puente Viejo bridge over the Areco River." },
      { momento: "Midday", actividad: "Lunch at a pulpería or country restaurant." },
      { momento: "Afternoon", actividad: "Leatherwork and silversmith shops downtown." },
      { momento: "Evening (if staying)", actividad: "Dinner at an estancia with a folk music show." },
    ],
    otrosAtractivos: ["Parque Criollo", "Draghi Cultural Center and Museum (silverwork)", "Nuestra Señora del Rosario Church", "Puente Viejo bridge (1857)"],
    eventos: ["Tradition Day, second weekend of November", "Silverwork and leatherwork exhibition", "Creole Festival"],
    dondeComer: ["Historic pulperías downtown", "Grills along the Areco River", "Bakeries with regional sweets"],
    dondeAlojarse: ["Traditional estancias with activities included", "Boutique inns in the historic center"],
    tips: ["Tradition Day (November) has gaucho parades, but also large crowds", "The leatherwork shops are some of the best in the country for leather souvenirs", "Staying overnight at an estancia lets you enjoy it at a calmer pace", "Book lunch at popular pulperías in advance on weekends"],
    presupuesto: "Medium: walking the town is affordable, it goes up if you add an estancia with activities or an overnight stay.",
  },
  "Mercedes": {
    nota: "Gateway to estancias and rural tourism.",
    historia: "The city was founded in 1752 as part of the expansion of the productive frontier toward the west of the province, in an area combining fertile land with trade routes into the interior. During the 19th century it became a center of agricultural trade and the starting point of the historic Camino Real, which connected Buenos Aires with the western provinces. That role as a commercial and transit hub continued with the arrival of the railway, which reinforced its importance as a service center for area estancias. Today Mercedes keeps that profile as a gateway to rural tourism in the western part of the province.",
    datoCurioso: "For a long time it was a key point on the Camino Real heading west, and it still plays that role as an access point to many Buenos Aires estancias.",
    comoLlegar: "National Route 7, about 1h30 by car.",
    cuandoIr: "Spring and fall for exploring the countryside.",
    duracion: "Half a day.",
    comoMoverse: "Downtown is walkable; a car is needed to reach the district's estancias.",
    itinerario: [
      { momento: "Morning", actividad: "Mercedes Cathedral and historic center." },
      { momento: "Midday", actividad: "Country lunch at a nearby estancia." },
      { momento: "Afternoon", actividad: "Nature reserve or rural activities depending on the chosen estancia." },
    ],
    otrosAtractivos: ["Regional History Museum", "Mercedes Lagoon", "Nuestra Señora de las Mercedes Church", "Nearby nature reserve"],
    eventos: ["Mercedes rural expo", "Local Tradition Festival", "Founding anniversary"],
    dondeComer: ["Home-style restaurants downtown", "Lunches included in estancia day packages"],
    dondeAlojarse: ["Estancias offering overnight stays", "Stopover hotels downtown"],
    tips: ["Check ahead which estancias take day visitors", "A good rural tourism option without going all the way to Cañuelas or Areco", "Bring clothes suited for outdoor activities"],
    presupuesto: "Medium: similar to Cañuelas, the main expense is the day in the country if you choose that activity.",
  },
  "Chascomús": {
    nota: "Lagoon, riverside walk, and sport fishing.",
    historia: "The city was founded in 1779 next to the lagoon of the same name, at a strategic point for controlling the territory and the routes south. During the civil wars of the 19th century, the area was the site of an 1839 uprising known as \"the revolt of the free men of the south,\" a key episode of resistance against Juan Manuel de Rosas's government. Over the decades, the city built its identity around the lagoon, which became a nationally recognized sport-fishing spot. Today Chascomús combines that historic heritage with a strong nature-tourism profile, thanks to its lakeside walk and the reserve surrounding the lagoon.",
    datoCurioso: "The Sociedad de Negros de Chascomús, founded in 1862 by the city's Afro-descendant brotherhood to celebrate its dances and faith, was recognized by UNESCO in 2012 for its historic and cultural value.",
    comoLlegar: "Route 2 toward the coast, about 1h30 by car.",
    cuandoIr: "Summer for water activities, spring for fishing.",
    duracion: "A full day.",
    comoMoverse: "Downtown and the lakeside walk are easy on foot; renting gear at local clubs is best for fishing or kayaking.",
    itinerario: [
      { momento: "Morning", actividad: "Lagoon walkway and the Pampas Museum." },
      { momento: "Midday", actividad: "Lake fish for lunch by the coast." },
      { momento: "Afternoon", actividad: "Silverside fishing or a kayak trip on the lagoon." },
    ],
    otrosAtractivos: ["Municipal Palace, a Francisco Salamone building (1939)", "Sociedad de Negros de Chascomús, recognized by UNESCO in 2012", "Los Libres del Sur Park", "Lagoon nature reserve"],
    eventos: ["Provincial Silverside Fish Festival, October/November", "Regatta on the lagoon", "Founding anniversary, April"],
    dondeComer: ["Fish restaurants along the lakeside walk", "Cafés in the historic center"],
    dondeAlojarse: ["Cabins facing the lagoon", "Hotels downtown"],
    tips: ["Bring your own fishing gear or rent it locally", "The lakeside walk is a great spot at sunset", "A good stopover on the way to the Atlantic coast"],
    presupuesto: "Low to medium: the lakeside walk is free, it goes up if you add guided fishing or a cabin stay.",
  },
  "Baradero": {
    nota: "River beaches and the national rowing festival.",
    historia: "The town formed in the 19th century around the Baradero River, taking advantage of its natural beaches and closeness to the Paraná for river trade. Over the decades, the city built a strong tradition around rowing and water sports, which peaked in 1974 with the creation of the National Rowing Festival. That event made Baradero one of the country's top amateur rowing venues and drew tourism focused on river activities. Today the city combines that sporting profile with river-beach tourism, popular among those looking for a getaway near Buenos Aires without going all the way to the Atlantic coast.",
    datoCurioso: "The National Rowing Festival made Baradero one of Argentina's leading amateur rowing venues.",
    comoLlegar: "Panamericana highway, Baradero branch, about 2 hours by car.",
    cuandoIr: "Summer for river beaches; January for the National Rowing Festival.",
    duracion: "A weekend.",
    comoMoverse: "Downtown is walkable; a car or bike helps for reaching the beaches and resorts.",
    itinerario: [
      { momento: "Morning", actividad: "Beach and water activities on the Baradero River." },
      { momento: "Midday", actividad: "Lunch at a beach resort or riverside restaurant." },
      { momento: "Afternoon", actividad: "Riverside walk, and the National Rowing Festival if it's January." },
    ],
    otrosAtractivos: ["Municipal History Museum", "Riverside nature reserve", "Rowing club", "Municipal beach resorts"],
    eventos: ["National Rowing Festival, January", "Carnival parade", "Spring Festival"],
    dondeComer: ["Beach resorts with restaurants by the river", "Grills in the city center"],
    dondeAlojarse: ["Organized campgrounds along the coast", "Family-run cabins and inns"],
    tips: ["Go in January for the National Rowing Festival, though it's more crowded", "Book a campsite or cabin ahead in high season", "A good nearby \"beach\" option without going to the Atlantic coast"],
    presupuesto: "Low to medium: river beaches are free to access, the expense is camping/cabins and food.",
  },
  "San Pedro": {
    nota: "Paraná coastline and peach orchards.",
    historia: "Founded in the 18th century on the Paraná coast, the city developed an economy based on fruit growing early on, thanks to the fertility of its riverside land. Peach orchards became the activity most associated with the area during the 20th century, to the point that they gave rise in 1955 to the National Peach Festival, still held every summer. That farming identity always coexisted with its riverside side, with a historic port and a coastal walk that gained tourist appeal over the decades. Today San Pedro combines river-beach tourism with the fruit-growing activity that sets it apart within the Paraná region.",
    datoCurioso: "20 km from the city, at Vuelta de Obligado, one of the most remembered battles in Argentine history was fought in 1845: Creole resistance to the naval blockade by France and Great Britain on the Paraná River.",
    comoLlegar: "Panamericana highway, Escobar/San Pedro branch, about 2 hours by car.",
    cuandoIr: "Summer for the coast; January for the National Peach Festival.",
    duracion: "A weekend.",
    comoMoverse: "The historic center is walkable; a car is useful for reaching the peach orchards.",
    itinerario: [
      { momento: "Morning", actividad: "Riverside walk and beaches on the Paraná." },
      { momento: "Midday", actividad: "River fish for lunch." },
      { momento: "Afternoon", actividad: "A peach orchard in season (Dec-Jan) or the Almirante Brown Museum." },
    ],
    otrosAtractivos: ["Vuelta de Obligado, site of the 1845 naval battle against the Anglo-French blockade", "Riverside nature reserve", "Local fruit market port", "Almirante Brown Museum"],
    eventos: ["National Peach Festival, January", "Regatta on the Paraná", "Carnival parade"],
    dondeComer: ["Fish restaurants on the riverside walk", "Peach sweets and preserves stalls in season"],
    dondeAlojarse: ["Cabins and inns along the coast", "Organized campgrounds"],
    tips: ["Peach harvest is in December-January, orchards aren't open to visit outside that window", "Book lodging ahead in January for the peach festival", "A good option for combining river beaches with sport fishing"],
    presupuesto: "Low to medium: similar to Baradero, the biggest cost is lodging in high season.",
  },
  "Chivilcoy": {
    nota: "A farming city with old-time architecture.",
    historia: "The city was founded in 1854 as part of the expansion of the Buenos Aires farming frontier westward, on land that turned out to be very fertile for growing grain. That late-19th-century agricultural boom funded much of the urban architecture still visible downtown, and made the city one of the first in the Buenos Aires interior to have electric lighting. During the 20th century, Chivilcoy solidified its role as a service center for the region's farming production, a role it still holds today. It's now a quiet city that keeps that agricultural past in its architecture and in its residents' identity.",
    datoCurioso: "It was one of the first cities in the Buenos Aires interior to have electric lighting, in the late 19th century, thanks to the area's agricultural boom.",
    comoLlegar: "National Route 5, about 2 hours by car.",
    cuandoIr: "Year-round, mild weather in spring and fall.",
    duracion: "Half a day.",
    comoMoverse: "Downtown is easy to walk; a car is useful for nearby estancias.",
    itinerario: [
      { momento: "Morning", actividad: "Cathedral and the main square." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Fine Arts Museum and a walk through the historic architecture." },
    ],
    otrosAtractivos: ["Plaza San Martín", "An old flour mill turned museum", "Nearby nature reserve", "Fine Arts Museum"],
    eventos: ["Chivilcoy rural expo", "Provincial Rural Worker's Festival", "Founding anniversary, January"],
    dondeComer: ["Home-style restaurants downtown", "Traditional grills"],
    dondeAlojarse: ["Downtown hotels", "Nearby estancias for rural tourism"],
    tips: ["A good pick for a quiet city without one single \"must-see\" attraction", "Pair it with a nearby estancia to add countryside activities", "The downtown architecture is best enjoyed on an unhurried walk"],
    presupuesto: "Low: few paid attractions, the main expense is food.",
  },
  "Dolores": {
    nota: "Historic center and museums on the way to the coast.",
    historia: "Founded in 1818, shortly after Argentina's declaration of independence, Dolores was one of the first towns organized in the south of Buenos Aires province. In 1839 it was the site of an uprising against Juan Manuel de Rosas's government, an episode that gave it a notable place in 19th-century Buenos Aires political history. Over the decades, the city became a service center for the surrounding rural area and a mandatory stop on the way to the Atlantic coast resorts. Today Dolores combines that historic heritage, visible in its downtown and in museums like the Antique Car Museum, with its traditional role as the last Buenos Aires stop before reaching the sea.",
    datoCurioso: "In 1839 it was the site of an uprising against Juan Manuel de Rosas, one of the first in the Buenos Aires interior, giving it a notable place in provincial political history.",
    comoLlegar: "Route 2 toward the Atlantic coast, about 2h30 by car.",
    cuandoIr: "A good stop on the way to the coast at any time of year.",
    duracion: "Half a day.",
    comoMoverse: "The historic center is walkable; it's a typical rest stop for those driving on to the coast.",
    itinerario: [
      { momento: "Morning", actividad: "Antique Car Museum, one of the most important in the country." },
      { momento: "Midday", actividad: "Lunch in the historic center." },
      { momento: "Afternoon", actividad: "Cathedral, main square, and craft shopping, or an afternoon at Parque Termal Dolores." },
    ],
    otrosAtractivos: ["Parque Termal Dolores, with salt and fresh thermal-water pools", "Museo Libres del Sur", "Parque Sarmiento", "Dolores Cathedral"],
    eventos: ["Founding anniversary, October", "Patron saint festival", "Classic car show linked to the museum"],
    dondeComer: ["Restaurants and cafés in the historic center", "Grills along the access road"],
    dondeAlojarse: ["Thermal resort with its own salt and fresh-water pools", "Stopover hotels, ideal for those continuing to the coast", "Downtown inns for those staying longer"],
    tips: ["It's the last \"inland\" stop before the coastal resorts", "The Antique Car Museum is a must for classic car fans", "The thermal park charges a day-pass fee for non-guests, plus included access if you stay at its hotels", "A good place to refuel and rest on a longer trip"],
    presupuesto: "Low if it's just a stopover (food and museum); rises to medium-high if you add a day pass or a night at the thermal complex.",
  },
  "Nueve de Julio": {
    nota: "Laguna de Gómez and deep pampas plains.",
    historia: "The city was founded in 1863 as a frontier outpost of the era, amid the expansion of the productive frontier toward the western pampas. Over time, the arrival of the railway cemented its role as a service center for a vast farming and ranching region. Laguna de Gómez, on the edge of the city, became over the decades the district's great recreational attraction. Today Nueve de Julio combines its identity as a pampas farming city with a strong nature-tourism profile centered on the lagoon.",
    datoCurioso: "Nueve de Julio's Plaza 25 de Mayo, at 16 hectares, is considered one of the largest town squares in South America.",
    comoLlegar: "National Route 5, about 3 hours by car.",
    cuandoIr: "Spring and summer for lagoon activities.",
    duracion: "A weekend.",
    comoMoverse: "Downtown is walkable; a car or bike is useful for the lagoon, on the edge of the city.",
    itinerario: [
      { momento: "Morning", actividad: "Laguna de Gómez, fishing and water activities." },
      { momento: "Midday", actividad: "Lunch on the lagoon's shore." },
      { momento: "Afternoon", actividad: "Plaza 25 de Mayo and the historic center." },
    ],
    otrosAtractivos: ["Lagoon yacht club", "Municipal history museum", "Municipal campground by the lagoon", "Silverside fishing area"],
    eventos: ["Founding anniversary, July", "Nueve de Julio rural expo", "Regattas on the lagoon"],
    dondeComer: ["Restaurants on the lagoon's shore", "Grills downtown"],
    dondeAlojarse: ["Cabins facing the lagoon", "Downtown hotels"],
    tips: ["Bring fishing gear or rent it locally", "The lagoon has sandy beaches good for summer", "A good stop to break up a longer trip into western Buenos Aires province"],
    presupuesto: "Low to medium: access to the lagoon is free, the main expense is a cabin and food.",
  },
  "Junín": {
    nota: "An urban lagoon and a gateway to the west.",
    historia: "The city was born in 1827 as a military outpost on the frontier line of the era, as part of the westward expansion of productive land. With the railway's arrival in the late 19th century, it became a key rail hub in the Buenos Aires interior. Eva Perón spent part of her childhood and teenage years in Junín before moving to Buenos Aires, a fact the city keeps in its historical memory. Today Junín combines that past with a service-city profile and an urban lagoon that's its main recreational space.",
    datoCurioso: "Eva Duarte, later Eva Perón, spent her teenage years in Junín before leaving for Buenos Aires to start her acting career.",
    comoLlegar: "National Route 7, about 3 hours by car.",
    cuandoIr: "Year-round.",
    duracion: "Half a day.",
    comoMoverse: "Downtown and the lagoon walkway are easy on foot or by bike.",
    itinerario: [
      { momento: "Morning", actividad: "Junín Lagoon and its walkway." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Museums and the pedestrian shopping street." },
    ],
    otrosAtractivos: ["History and Fine Arts Museum", "The house where Eva Perón lived, now a cultural space", "Lagoon walkway", "Municipal Theater"],
    eventos: ["Founding anniversary, August", "Spring Festival"],
    dondeComer: ["Restaurants along the lagoon walkway", "Grills and casual eateries downtown"],
    dondeAlojarse: ["Downtown hotels", "Cabins near the lagoon"],
    tips: ["Pairs well as a stop toward western Buenos Aires province or La Pampa", "The lagoon walkway is nice for biking or walking", "A good spot to refuel on long trips"],
    presupuesto: "Low to medium.",
  },
  "Azul": {
    nota: "A hill-country city with Salamone architecture.",
    historia: "Founded in 1832 as a frontier outpost, Azul grew under the pampas' cattle-ranching boom and the hills surrounding it. During the first half of the 20th century, Italian-Argentine architect Francisco Salamone left a set of monumental Art Deco buildings across the region that today are part of Buenos Aires's architectural heritage. The city also kept its role as a service center for the surrounding countryside. Today Azul combines that architectural heritage with hill-country landscapes little known outside the region.",
    datoCurioso: "The municipal slaughterhouse and cemetery in Azul, both Francisco Salamone works, are now visited more as monumental architecture than for their original function.",
    comoLlegar: "National Route 3 or Route 226, about 3h30 by car.",
    cuandoIr: "Spring and fall for exploring the hill country.",
    duracion: "A weekend.",
    comoMoverse: "Downtown is walkable; a car is useful for the hills and Salamone's works on the outskirts.",
    itinerario: [
      { momento: "Morning", actividad: "Cathedral and the historic center." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Salamone's works (cemetery, slaughterhouse) and nearby hills." },
    ],
    otrosAtractivos: ["Municipal cemetery and slaughterhouse, works by Francisco Salamone", "Azul Cathedral", "Cinco Cerros nature reserve", "Sierras Bayas, with old quarries"],
    eventos: ["Founding anniversary, August", "Festival of Communities"],
    dondeComer: ["Restaurants in the historic center", "Traditional grills"],
    dondeAlojarse: ["Downtown hotels", "Cabins in the nearby hills"],
    tips: ["Book a guide or tour for Salamone's works, spread across the district", "A good stop on the way to Tandil or the Atlantic coast", "Bring your own car, distances within the district are large"],
    presupuesto: "Low to medium.",
  },
  "San Clemente del Tuyú": {
    nota: "Family-friendly beaches and a marine theme park.",
    historia: "San Clemente del Tuyú was founded in 1935 as part of the expansion of beach resorts north of Mar del Plata, on land that had previously been cattle estancias. Its tourism development took a family-oriented, budget-friendly path, unlike other, more exclusive resorts in the area. In 1978 Mundo Marino opened, turning it into a benchmark destination for family tourism with children along the entire Atlantic coast. Today it combines that theme park with long beaches and the Punta Rasa reserve, at the northern tip of the district.",
    datoCurioso: "Punta Rasa, at the northern tip of San Clemente, is where the Río de la Plata and the Atlantic Ocean meet, and its lighthouse marks that transition.",
    comoLlegar: "Route 2 and then Route 11, about 3h30 by car.",
    cuandoIr: "January and February in high season; March for fewer crowds.",
    duracion: "A weekend or a week.",
    comoMoverse: "Downtown and the beach area are walkable or bikeable; a car is useful for Punta Rasa.",
    itinerario: [
      { momento: "Morning", actividad: "Mundo Marino, a theme park with marine wildlife." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Beach and a walk around Punta Rasa." },
    ],
    otrosAtractivos: ["Mundo Marino, a theme park with marine wildlife", "Termas Marinas Park, with salt thermal pools by the sea", "San Antonio Lighthouse, with a panoramic elevator", "Punta Rasa nature reserve"],
    eventos: ["Summer show season at Mundo Marino", "Sea Festival"],
    dondeComer: ["Seafood restaurants on the coast", "Grills and pizzerias downtown"],
    dondeAlojarse: ["Family hotels facing the sea", "Cabins and short-term rental apartments"],
    tips: ["Book Mundo Marino tickets ahead in high season", "Termas Marinas Park runs year-round, even outside beach season", "One of the more affordable resorts in the area", "Punta Rasa is a great sunset spot, though a bit away from downtown"],
    presupuesto: "Medium: compared to other resorts in the area it tends to be more affordable; the biggest expense is Mundo Marino admission.",
  },
  "Pinamar": {
    nota: "Dunes, planted forest, and trendy beaches.",
    historia: "Pinamar was founded in 1943 on a design by architect Jorge Bunge, who envisioned a beach town blended into the landscape of dunes and planted forests, unlike the grid layout of other resorts. That original design, with curved streets that follow the dunes' natural shape, still defines the city's urban identity. Over the decades it became one of the favorite resorts of Buenos Aires's middle and upper classes, with a strong dining and design scene. Today it combines that polished urban feel with long beaches and the forest that gives it its name.",
    datoCurioso: "The name Pinamar combines \"pino\" (pine) and \"mar\" (sea), referring to the pine forests planted over the dunes to hold the sand in place.",
    comoLlegar: "Route 2 and Route 11, about 4 hours by car; buses and seasonal flights are also available.",
    cuandoIr: "January and February in high season; long weekends in spring.",
    duracion: "A weekend or a week.",
    comoMoverse: "Downtown is walkable or bikeable; a car or the bike paths are useful for reaching Cariló or Ostende.",
    itinerario: [
      { momento: "Morning", actividad: "Beach and design-forward beach clubs." },
      { momento: "Midday", actividad: "Lunch in the shopping district." },
      { momento: "Afternoon", actividad: "Biking through the dune forest and shopping." },
    ],
    otrosAtractivos: ["Municipal forest planted over the dunes", "Avenida Bunge shopping and design district", "Río de las Piedras Nature Reserve", "Ostende, a neighboring resort with an art nouveau history"],
    eventos: ["National Tourism Festival", "Summer parades and beach events"],
    dondeComer: ["Chef-driven restaurants in the shopping district", "Grills and pizzerias facing the sea"],
    dondeAlojarse: ["Boutique and chain hotels facing the sea", "Short-term rental apartments and cabins"],
    tips: ["Book lodging well ahead for January", "Bike paths connect Pinamar with Cariló and Ostende", "Prices drop quite a bit outside of high season"],
    presupuesto: "Medium to high: it's one of the pricier resorts on the Atlantic coast in January.",
  },
  "Cariló": {
    nota: "Forest facing the sea, the most exclusive resort.",
    historia: "Cariló was born in the 1930s as a forested subdivision within a pine and acacia woodland, designed from the start as an exclusive, low-density resort. Unlike other resorts in the area, it kept from the beginning a ban on cutting trees and paving its sand streets, which gave it its characteristic wooded identity. Over the decades it became one of the most expensive and sought-after summer destinations for Buenos Aires's elite. Today it combines that exclusive profile with quiet beaches within the forest.",
    datoCurioso: "In Cariló, most of the forest's internal streets can't be paved and are kept as sand to preserve the original landscape.",
    comoLlegar: "Route 2 and Route 11 to Pinamar, then a few more minutes south.",
    cuandoIr: "January and February, or long weekends in spring and fall.",
    duracion: "A weekend or a week.",
    comoMoverse: "It's a place made for biking along the forest's bike paths; there are few paved streets for cars.",
    itinerario: [
      { momento: "Morning", actividad: "Beach within the forest." },
      { momento: "Midday", actividad: "Lunch in the shopping area." },
      { momento: "Afternoon", actividad: "Bike paths among the dunes and design shopping." },
    ],
    otrosAtractivos: ["Design shopping circuit (Boulevard Cariló)", "Bike paths among the dunes and forest", "Forest wildlife reserve", "Bird watching"],
    eventos: ["Cariló Fashion Week, summer", "Design fairs in season"],
    dondeComer: ["Gourmet restaurants on the boulevard", "Cafés within the forest"],
    dondeAlojarse: ["High-end boutique hotels", "Rental cabins within the forest"],
    tips: ["Rent a bike as soon as you arrive, it's the most practical way to get around", "January prices are among the highest on the coast", "A good off-season option for quiet and discounts"],
    presupuesto: "High: it's one of the most expensive resorts in the province.",
  },
  "Santa Teresita": {
    nota: "Long beaches and a family-friendly atmosphere.",
    historia: "Santa Teresita developed starting in the 1940s as a beach resort geared toward middle-class family tourism, in contrast with the more exclusive profile of nearby resorts like Pinamar. Its boardwalk and long beaches became the district's main draw. Over time it became one of the favorite destinations for families looking for accessible beaches and good infrastructure. Today it combines that family-friendly profile with a wide range of dining and shopping along the coast.",
    datoCurioso: "One of the best-known boardwalk promenades in Santa Teresita is named after writer Jorge Bucay, honoring his connection to the city.",
    comoLlegar: "Route 2 and Route 11, about 4 hours by car.",
    cuandoIr: "January and February during peak season.",
    duracion: "Weekend or a full week.",
    comoMoverse: "The boardwalk and downtown are walkable or bikeable.",
    itinerario: [
      { momento: "Morning", actividad: "Beach." },
      { momento: "Midday", actividad: "Lunch on the boardwalk." },
      { momento: "Afternoon", actividad: "Jorge Bucay promenade and shopping." },
    ],
    otrosAtractivos: ["Jorge Bucay promenade by the sea", "Breakwater for shore fishing", "Avenida 48 shopping area", "Long beaches for sports"],
    eventos: ["Carnival parade", "Summer Festival"],
    dondeComer: ["Restaurants and steakhouses along the boardwalk", "Ice cream shops and cafés on Avenida 48"],
    dondeAlojarse: ["Family hotels", "Short-term rental apartments"],
    tips: ["A great choice for families with young kids thanks to its wide beaches", "The breakwater is a good spot for fishing without a boat", "Book ahead in January"],
    presupuesto: "Low to mid-range: one of the most affordable beach resorts in the area.",
  },
  "Villa Gesell": {
    nota: "Pedestrian street, sand dunes, and coastal nightlife.",
    historia: "Villa Gesell was founded in 1931 on the initiative of Carlos Idaho Gesell, who planted pines and acacias across the dunes to hold the sand in place and founded a beach town with a strong bohemian and cultural character from the start. That spirit lasted through much of the 20th century, when the town became a gathering point for artists, musicians, and young people. Over time it added more large-scale tourist infrastructure without fully losing that distinct identity. Today it combines extensive dunes, beaches, and an intense nightlife during peak season.",
    datoCurioso: "Carlos Gesell didn't just found the town: he also brought the first maritime pine and acacia specimens to Argentina to plant across the area's dunes.",
    comoLlegar: "Route 2 and Route 11, about 4h30 by car.",
    cuandoIr: "January and February during peak season; March for fewer crowds.",
    duracion: "Weekend or a full week.",
    comoMoverse: "Downtown is walkable; a 4x4 or ATV tour is the way to reach the Faro Querandí dunes.",
    itinerario: [
      { momento: "Morning", actividad: "Beach and Av. 3 pedestrian street." },
      { momento: "Midday", actividad: "Lunch on the pedestrian street." },
      { momento: "Afternoon", actividad: "Excursion to the Faro Querandí dunes." },
    ],
    otrosAtractivos: ["Faro Querandí Nature Reserve and its living dunes", "Pinar del Norte Cultural and Forest Reserve", "Zootemático Park", "Mar de las Pampas and Mar Azul, quieter neighboring beach towns"],
    eventos: ["Summer theater and arts week", "Carnival parades"],
    dondeComer: ["Shops along Av. 3 pedestrian street", "Steakhouses and pizzerias facing the sea"],
    dondeAlojarse: ["Hotels and cabins downtown", "Rental apartments in Mar de las Pampas for more quiet"],
    tips: ["The Faro Querandí dunes can only be visited on an organized tour, not by private car", "Mar de las Pampas and Mar Azul are quieter alternatives just a few km away", "Book accommodation ahead in January"],
    presupuesto: "Mid-range: varies by area, with more affordable options than Pinamar or Cariló.",
  },
  "Tandil": {
    nota: "Hills, trekking, and the iconic Piedra Movediza (Moving Rock).",
    historia: "Tandil was founded in 1823 as a border fort of the time, in the hills that today give the city its distinctive landscape. It grew on the back of cattle ranching and later the cured meats and cheese industry that made it famous nationwide. The original Piedra Movediza, an icon of the city for over a century, broke loose and fell in 1912; today a replica sits in its place on the same hill. Today Tandil combines that heritage with strong hill-based tourism, trekking, and regional food.",
    datoCurioso: "The original Piedra Movediza balanced on the hillside without falling for generations, until it broke loose in 1912; the one seen today is a replica placed decades later.",
    comoLlegar: "Route 226, about 4h30 by car; buses and flights also available.",
    cuandoIr: "Spring and fall for trekking; Holy Week for the religious celebrations.",
    duracion: "Weekend.",
    comoMoverse: "Having your own car helps: the attractions are spread far apart and public transport is limited.",
    itinerario: [
      { momento: "Morning", actividad: "Piedra Movediza hill." },
      { momento: "Midday", actividad: "Regional cold cuts and cheese platters." },
      { momento: "Afternoon", actividad: "Cerro El Centinela with its chairlift and panoramic views." },
    ],
    otrosAtractivos: ["Cerro El Centinela, with a chairlift and lookout points", "Lago del Fuerte and Balneario del Sol", "Parque Independencia and Cerro del Libertador", "Artisanal cured meat and cheese factories"],
    eventos: ["Holy Week, with processions and religious activities", "Tandil Fine Salami Festival"],
    dondeComer: ["Restaurants serving platters of local cold cuts and cheese", "Steakhouses in the hill area"],
    dondeAlojarse: ["Cabins in the hills", "Hotels downtown"],
    tips: ["Bring your own car, there are few buses to the hill attractions", "Buy cold cuts and cheese straight from the factories as souvenirs", "The Piedra Movediza hill has quite a few stairs, wear comfortable shoes"],
    presupuesto: "Mid-range: cabins and regional food are usually the main expense.",
  },
  "Mar del Plata": {
    nota: "La Feliz: beaches, port, and coastal city life.",
    historia: "Mar del Plata was born in the 1870s around a meat-salting plant, but by the late 19th century Buenos Aires high society turned it into their quintessential summer resort, building mansions and luxury hotels. In the following decades it became a mass tourism destination for working and middle classes, a shift that earned it the nickname \"the happy city\" of Argentine vacations. Its port, one of the country's most important, always kept a fishing and industrial identity alongside its tourist profile. Today it combines that dual identity, part popular beach resort and part port city, with an intense cultural life all year round.",
    datoCurioso: "The port of Mar del Plata is home to one of the most visited sea lion colonies in the country, which can be seen up close from the fishermen's pier.",
    comoLlegar: "Route 2, about 4h30 by car; buses, train, and flights also available.",
    cuandoIr: "January and February during peak season; long weekends year-round.",
    duracion: "Weekend or a full week.",
    comoMoverse: "It's a big city: it's best to combine walking downtown with a bus or car to reach the southern beaches.",
    itinerario: [
      { momento: "Morning", actividad: "Bristol or Varese beaches." },
      { momento: "Midday", actividad: "Seafood lunch at the port." },
      { momento: "Afternoon", actividad: "A walk around the port and the sea lions." },
    ],
    otrosAtractivos: ["Port and sea lions", "Torre Tanque, a panoramic lookout tower", "Trapiche Costa & Pampa winery in Chapadmalal, a pioneer in ocean-influenced wines", "Villa Victoria Ocampo (cultural center)"],
    eventos: ["Theater and show season in January-February", "National Sea Festival"],
    dondeComer: ["Seafood restaurants at the port", "Ice cream shops and cafés downtown"],
    dondeAlojarse: ["Beachfront hotels downtown", "Rental apartments in the southern neighborhoods"],
    tips: ["The southern beaches (Playa Grande, Punta Mogotes) tend to be quieter than downtown", "Book accommodation well ahead in January", "The port makes a great half-day plan, even outside peak season"],
    presupuesto: "Mid-range: there are options for every budget, from hostels to luxury hotels.",
  },
  "Balcarce": {
    nota: "Hills and a motorsport museum.",
    historia: "Balcarce was founded in 1873 in an area of hills and fertile land in the southeastern part of the province, which over time became one of the country's leading potato producers. The city gained national fame as the birthplace of Juan Manuel Fangio, Argentina's five-time Formula 1 world champion, whose museum is now the town's biggest tourist draw. That profile pairs with the area's hill landscape, with peaks, streams, and waterfalls little known outside the region. Today Balcarce draws both motorsport fans and those looking for nature and quiet.",
    datoCurioso: "The Fangio Museum operates in the building of a former family garage and displays original cars that raced and won Formula 1 world championships.",
    comoLlegar: "Route 226 from Tandil or Route 55 from Mar del Plata, about 5 hours from CABA.",
    cuandoIr: "Spring and fall for the hills.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the nearby hills and waterfalls.",
    itinerario: [
      { momento: "Morning", actividad: "Juan Manuel Fangio Museum." },
      { momento: "Midday", actividad: "Lunch featuring local potatoes and meats." },
      { momento: "Afternoon", actividad: "Nearby hills and waterfalls." },
    ],
    otrosAtractivos: ["Juan Manuel Fangio Museum", "Cerro El Triunfo Municipal Park", "Nearby hill streams and waterfalls", "Golf course"],
    eventos: ["National Potato Festival", "Argentine Song Festivals at Cerro El Triunfo"],
    dondeComer: ["Restaurants serving regional potato-based dishes", "Steakhouses in the hill area"],
    dondeAlojarse: ["Cabins in the nearby hills", "Hotels downtown"],
    tips: ["The Fangio Museum is a must-see even for those who don't follow motorsport", "A good stop between Tandil and Mar del Plata", "Ask locals about the nearby waterfalls, they're not well signposted"],
    presupuesto: "Mid-range.",
  },
  "Miramar": {
    nota: "Forest, quiet beaches, and golf.",
    historia: "Miramar was founded in 1888 as one of the first beach resorts on the Buenos Aires Atlantic coast, even before Mar del Plata's expansion southward. Over time it earned a reputation as a quieter, family-oriented destination, with an extensive forest nursery that sets it apart from other open-dune beach towns. Its proximity to paleontological sites along the cliffs also gave it a distinct scientific profile. Today it combines quiet beaches, golf, and nature with a much calmer pace than Mar del Plata.",
    datoCurioso: "The cliffs south of Miramar are a recognized paleontological site, where fossils of South American megafauna such as glyptodonts and giant sloths have been found.",
    comoLlegar: "Route 2 to Mar del Plata and then Route 11, about 5 hours by car.",
    cuandoIr: "January and February during peak season; a good quiet destination outside those dates too.",
    duracion: "Weekend or a full week.",
    comoMoverse: "Downtown and the coast are walkable or bikeable.",
    itinerario: [
      { momento: "Morning", actividad: "Florentino Ameghino forest nursery." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Beach and paleontological cliffs." },
    ],
    otrosAtractivos: ["Florentino Ameghino forest nursery", "Cliffs with paleontological sites", "Oceanfront golf course", "Forest nature reserve"],
    eventos: ["Miramar Golf Festival", "Spring Week"],
    dondeComer: ["Seafood restaurants along the coast", "Cafés downtown"],
    dondeAlojarse: ["Family hotels facing the sea", "Cabins near the forest nursery"],
    tips: ["One of the quietest beach resorts in the area, great for resting", "The cliffs are best explored at low tide", "A good option for combining golf and beach"],
    presupuesto: "Low to mid-range.",
  },
  "Necochea": {
    nota: "Wide beaches and the mouth of the Quequén River.",
    historia: "Necochea was founded in 1881 as one of the first beach resorts south of Buenos Aires, taking advantage of the mouth of the Quequén River and its long beaches. Parque Miguel Lillo, planted in the early 20th century, became one of the largest man-made forests on the Atlantic coast and the city's great green lung. Over the decades, Necochea developed its own identity, less crowded than Mar del Plata, with a focus on nature and water sports. Today it combines wide beaches, the port of Quequén, and horseback rides along the shore.",
    datoCurioso: "Parque Miguel Lillo covers more than 600 hectares of planted forest, making it one of the largest on the Buenos Aires Atlantic coast.",
    comoLlegar: "Route 2 and then Route 88, about 5h30 by car.",
    cuandoIr: "January and February during peak season.",
    duracion: "Weekend or a full week.",
    comoMoverse: "Downtown and the coast are walkable or bikeable; a car helps for the port of Quequén.",
    itinerario: [
      { momento: "Morning", actividad: "Beach by the Quequén River." },
      { momento: "Midday", actividad: "Seafood lunch at the port." },
      { momento: "Afternoon", actividad: "Parque Miguel Lillo and a horseback ride along the coast." },
    ],
    otrosAtractivos: ["Parque Miguel Lillo", "Puerto Quequén", "Mouth of the Quequén River", "Coastal horseback riding circuit"],
    eventos: ["Necochea Bike (cycling tourism)", "Sea Festival"],
    dondeComer: ["Seafood restaurants at the port", "Steakhouses and pizzerias downtown"],
    dondeAlojarse: ["Beachfront hotels", "Cabins near Parque Miguel Lillo"],
    tips: ["Parque Miguel Lillo has bike paths, renting a bike is worthwhile", "Beach horseback rides usually go out at sunset", "A quieter, more nature-focused alternative to Mar del Plata"],
    presupuesto: "Low to mid-range.",
  },
  "Sierra de la Ventana": {
    nota: "Hills, streams, and the historic Cerro Ventana.",
    historia: "The area developed in the early 20th century around the train station, which brought the first summer-vacationing families drawn by the hill landscape, so different from the rest of the pampas plains. Cerro Tres Picos, the highest peak in Buenos Aires Province, and Cerro Ventana, with its distinctive natural opening, became the region's main trekking draw. Over time, the neighboring town of Villa Ventana added a more wooded, quieter character within the same hill system. Today the area combines trekking, streams, and a much slower pace than the Atlantic coast.",
    datoCurioso: "Cerro Ventana owes its name to a natural opening in the rock near the summit, through which you can see the landscape on the other side.",
    comoLlegar: "Route 3 and Route 76, about 6 hours by car; train and buses also available.",
    cuandoIr: "Spring and fall for trekking, avoiding summer's extreme heat.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is small and walkable; a car is needed to reach the trailheads at the base of the hills.",
    itinerario: [
      { momento: "Morning", actividad: "Trek to Cerro Ventana." },
      { momento: "Midday", actividad: "Hill-style cold cuts platter for lunch." },
      { momento: "Afternoon", actividad: "Arroyo Sauce Grande to cool off." },
    ],
    otrosAtractivos: ["Saldungaray, a nearby town recognized by UN Tourism, with a Salamone-designed cemetery and a hill winery", "Cerro Tres Picos, the highest peak in Buenos Aires Province", "Villa Ventana, a wooded neighboring town", "Ernesto Tornquist Provincial Park"],
    eventos: ["Hill Lamb Festival", "Spring trekking season"],
    dondeComer: ["Restaurants serving cold cuts platters and country food", "Cafés in Villa Ventana"],
    dondeAlojarse: ["Cabins in Villa Ventana", "Country inns in Sierra de la Ventana town"],
    tips: ["The trek to Cerro Ventana requires good physical condition and hiking shoes", "Check trail conditions before heading out, it closes on very windy days", "Villa Ventana is a quieter base than the main town"],
    presupuesto: "Mid-range: cabins and regional food are the main expense; trail access is usually free or low-cost.",
  },
  "Carhué": {
    nota: "Hot springs on Lake Epecuén and the ghost town of Villa Epecuén.",
    historia: "Carhué was founded in 1876 as a border fort of the time, on the boundary between Buenos Aires Province and La Pampa. A few kilometers away, on the shore of Lake Epecuén, Villa Epecuén developed starting in 1920 as a thermal spa town that in its best years drew thousands of tourists attracted by the water's healing properties, comparable to those of the Dead Sea. In 1985 a flood broke through the containment dike and the lake completely submerged the town, which stayed underwater for more than twenty years. When the water receded, it revealed the ghostly ruins of the town, now one of the region's most visited sites.",
    datoCurioso: "In January 2017, 1,941 people holding hands floated together on Lake Epecuén and set a Guinness World Record, thanks to the water's extremely high salinity, which lets you float effortlessly.",
    comoLlegar: "Provincial Route 60 from Bolívar and Guaminí, about 6 hours by car from CABA; long-distance buses also available.",
    cuandoIr: "Year-round for the hot springs; summer adds the outdoor pool with lake water.",
    duracion: "Weekend.",
    comoMoverse: "Downtown Carhué is walkable; a car or organized tour is best for the Villa Epecuén ruins, about 7 km away.",
    itinerario: [
      { momento: "Morning", actividad: "Ruins of Villa Epecuén, the ghost town that lay under the lake." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Thermal pools on Lake Epecuén." },
    ],
    otrosAtractivos: ["Ruins of Villa Epecuén, the ghost town", "Dr. Adolfo Alsina Regional Museum", "Works by architect Francisco Salamone in the area", "Bird watching along the lakeshore"],
    eventos: ["City anniversary", "Summer thermal season with outdoor pool"],
    dondeComer: ["Restaurants downtown", "Cafés near the lakeside promenade"],
    dondeAlojarse: ["Hotels with their own thermal spa", "Cabins and campsites by the lake"],
    tips: ["Wear closed shoes for the Villa Epecuén ruins, the terrain is uneven", "Book your entry to the hot springs, especially on weekends", "It's a long trip from CABA, best planned as a full weekend or combined with Sierra de la Ventana"],
    presupuesto: "Mid-range: entry to the hot springs and spa lodging are the main expense; the Epecuén ruins are free or very low-cost to access.",
  },
  "General Belgrano": {
    nota: "Termas del Salado, the closest thermal complex to CABA.",
    historia: "General Belgrano was born in 1871 around the \"Salado\" train station, on the river of the same name, in a fertile farming area of the southern part of the province. For decades it was known mainly as a fishing and riverside relaxation spot, without much tourism development. In 2012, the opening of Termas del Salado, fed by waters discovered in the 1940s during a failed oil drilling attempt, completely changed its profile and made it the closest thermal complex to Buenos Aires City. Today it combines that thermal draw with a quiet small-town pace and the Salado River landscape.",
    datoCurioso: "The waters of Termas del Salado were discovered by chance in the 1940s, during an oil drilling operation that found no oil but did strike a thermal spring 965 meters down.",
    comoLlegar: "Ricchieri highway and then Provincial Routes 41 and 29, about 2 hours by car.",
    cuandoIr: "Year-round; the hot springs operate in any season.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Bosque Encantado, 13 km away, and the hot springs.",
    itinerario: [
      { momento: "Morning", actividad: "Termas del Salado." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Bosque Encantado or the Salado riverside." },
    ],
    otrosAtractivos: ["Bosque Encantado, a park designed by Carlos Thays", "Municipal History Museum", "Salado riverside for fishing and kayaking", "Balneario Viejo"],
    eventos: ["Major Tango and Folk Festival, since 1994"],
    dondeComer: ["Steakhouses and tea houses downtown", "Restaurants near the hot springs"],
    dondeAlojarse: ["Hotels and cabins in town (no lodging inside the thermal complex itself)", "Campsites by the river"],
    tips: ["It's the closest thermal complex to CABA, doable as a day trip", "Check hours, the complex is closed on Tuesdays", "Bosque Encantado is a nice outing besides the hot springs"],
    presupuesto: "Mid-range: entry to the hot springs varies by age and residency, and is the main expense of the outing.",
  },
  "Tapalqué": {
    nota: "A gaucho-tradition town with its own thermal complex.",
    historia: "Tapalqué was established at its current site in 1863 by decree of governor Mariano Saavedra, on land that had previously held military garrisons and forts along the frontier line. Its name comes from Mapuche and refers to the reed beds along the stream of the same name. Over time it became a town rooted in gaucho tradition at the heart of the pampas plains. In recent years it added a thermal spring complex that gave its tourism profile new life, without losing the quiet pace of a country town.",
    datoCurioso: "The Cantón Tapalqué Viejo, an old fort 25 km from downtown, was the site of clashes between indigenous peoples and criollos and still preserves the San Gervasio pulpería (country tavern), founded in 1850.",
    comoLlegar: "Route 3 to Azul and then Provincial Route 51, about 3h30 by car.",
    cuandoIr: "Year-round; the Black Cake Festival is a good time to visit.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Cantón Tapalqué Viejo and the Sierras Bayas.",
    itinerario: [
      { momento: "Morning", actividad: "Tapalqué Thermal Complex." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Cantón Tapalqué Viejo and the San Gervasio pulpería." },
    ],
    otrosAtractivos: ["Tapalqué Thermal Complex", "Cantón Tapalqué Viejo and San Gervasio Pulpería", "Nearby Sierras Bayas", "Tapalqué stream promenade"],
    eventos: ["Black Cake Festival"],
    dondeComer: ["Country-style restaurants downtown", "Cafés by the promenade"],
    dondeAlojarse: ["Cabins and rural lodging", "Camping by the stream"],
    tips: ["Pairs well with Azul, about 50 km away", "Book the hot springs ahead on weekends", "A good destination for trekking and horseback rides in the nearby Sierras Bayas"],
    presupuesto: "Mid-range: entry to the hot springs is the main expense of the outing.",
  },
  "Uribelarrea": {
    nota: "A country town with a dairy heritage and a great food scene.",
    historia: "Uribelarrea was born in the late 19th century on land donated by its founder, who also equipped the young town with schools, a train station, telegraph, and post office. With the arrival of the railway in 1892 and Italian and Spanish immigration, it became a major dairy hub, with more than a hundred dairy farms and cheesemakers supplying Buenos Aires. After a long period of decline in the mid-20th century, the town was rediscovered in recent decades as a weekend getaway destination, thanks to its time-frozen look. Today it combines that rural past with a great food scene that has made it one of the most visited country towns near CABA.",
    datoCurioso: "Because of its period look, Uribelarrea was used as a filming location for movies like Leonardo Favio's \"Juan Moreira\" and Alan Parker's \"Evita,\" which left behind the stained-glass windows in the town church.",
    comoLlegar: "Ezeiza-Cañuelas highway and then Route 205, about 1h30 by car.",
    cuandoIr: "Thursday through Sunday, when most shops are open; long weekends bring more activity.",
    duracion: "Full day.",
    comoMoverse: "The town is small and fully walkable or bikeable.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Centenario, the church, and the old train station." },
      { momento: "Midday", actividad: "A traditional steakhouse or pulpería." },
      { momento: "Afternoon", actividad: "Leopoldo Rizzi Regional Farm Machinery Museum and shopping for cheese and cold cuts." },
    ],
    otrosAtractivos: ["Leopoldo Rizzi Regional Farm Machinery Museum", "Finca Don Atilio, a vineyard and winery for wine tourism", "Túnel Vegetal, a 200-meter tree-lined path", "Dairy farms and cheesemakers open to visitors in the area"],
    eventos: ["Cold Cuts and Craft Beer Festival, since 2009"],
    dondeComer: ["Traditional pulperías and steakhouses", "Country tea houses and gourmet restaurants"],
    dondeAlojarse: ["Rural lodging and cabins on the outskirts", "Nearby estancias in the Cañuelas district"],
    tips: ["Go Thursday through Sunday, many places are closed on weekdays", "Long weekends tend to be crowded, best to arrive early", "Buy cheese and cold cuts directly from local producers"],
    presupuesto: "Low to mid-range: walking around town is free, food is the main expense.",
  },
  "Pergamino": {
    nota: "National Seed Capital, culture, and agribusiness.",
    historia: "Pergamino was born in the late 16th century as a fort along the royal road to Alto Perú, and was declared a city in 1895. Its location in the heart of the rolling pampas made it a leading agricultural center, with experimental stations and seed companies that earned it the title of National Seed Capital in 1997. Today it combines that agribusiness profile with an active cultural scene and twelve rural villages that are part of the district.",
    datoCurioso: "Pergamino is home to INTA (National Institute of Agricultural Technology), which serves the farming needs of 44 districts in Buenos Aires Province through its own weather radar.",
    comoLlegar: "Route 8, about 2h30 by car.",
    cuandoIr: "Year-round.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the district's rural villages.",
    itinerario: [
      { momento: "Morning", actividad: "Main square and San Nicolás de Bari Cathedral." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "City Museum and Historical Archive, Municipal Park." },
    ],
    otrosAtractivos: ["City Museum and Historical Archive", "Fine Arts Museum", "Municipal Park", "Twelve rural villages in the district, each with its own festival"],
    eventos: ["Anniversary of the city's founding, October", "Rural festivals in the district's villages throughout the year"],
    dondeComer: ["Restaurants in the historic center", "Traditional bodegones"],
    dondeAlojarse: ["Chain and boutique hotels downtown", "Nearby estancias for rural tourism"],
    tips: ["A good stop on the way to the north of the country or to Rosario", "Check the weekly cultural events schedule", "The district's rural villages are a nice bonus if you have extra time"],
    presupuesto: "Low to mid-range.",
  },
  "Pehuajó": {
    nota: "The town of Manuelita the Turtle, lagoons, and quiet.",
    historia: "Pehuajó was born in 1889 with the arrival of the railway, in an area of marshes that gave it its Guaraní name (\"deep, swampy marsh\"). Over time it became a service hub for the farming and ranching economy of the northwestern part of the province. The town became popular nationwide thanks to \"Manuelita, la Tortuga,\" the children's song by María Elena Walsh that bears its name. Today it combines that popular affection with fishing lagoons and a quiet town layout.",
    datoCurioso: "María Elena Walsh's song \"Manuelita,\" about a turtle who travels to Paris and returns to Pehuajó, also inspired an animated film that represented Argentina at the 1999 Academy Awards.",
    comoLlegar: "Route 5, about 4 hours by car.",
    cuandoIr: "Spring and summer for the lagoons.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable or bikeable; a car helps for the lagoons.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Dardo Rocha and the Manuelita Monument." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "La Salada, El Cuerú, or Las Tres Marías lagoons, fishing for pejerrey." },
    ],
    otrosAtractivos: ["Manuelita la Tortuga Monument", "Parque General San Martín, with a lake and islands", "Mario Abelino Polesello Regional Museum", "La Salada, El Cuerú, and Las Tres Marías lagoons"],
    eventos: ["Founding anniversary"],
    dondeComer: ["Home-style restaurants downtown", "Traditional steakhouses"],
    dondeAlojarse: ["Hotels downtown", "Cabins near the lagoons"],
    tips: ["Bring fishing gear for the lagoons", "Parque San Martín is a nice family outing", "A good stop on the way to La Pampa"],
    presupuesto: "Low to mid-range.",
  },
  "Trenque Lauquen": {
    nota: "A round lagoon and pejerrey fishing in the western part of the province.",
    historia: "Trenque Lauquen was founded in 1876 as a military operations base during the expansion of the frontier westward across the pampas, under orders from then Minister of War Adolfo Alsina. Its name means \"round lagoon\" in Mapuche, referring to the body of water that gave rise to the town. Over time it became an important agricultural service center for the western part of the province, at the junction of two key national routes. Today it combines that role as a farm-service city with lagoons well known for sport fishing.",
    datoCurioso: "Laguna Hinojo Grande, about 25 km from downtown, is known for pejerrey up to 500 grams and draws anglers from all over the country.",
    comoLlegar: "Route 5, about 5 hours by car.",
    cuandoIr: "Spring and fall for fishing; year-round for the city.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the lagoons and campsites.",
    itinerario: [
      { momento: "Morning", actividad: "Historic center and tree-lined avenues." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Laguna Hinojo Grande, pejerrey fishing." },
    ],
    otrosAtractivos: ["Laguna Hinojo Grande", "Squares and avenues with a central promenade", "Local history museum", "Rural cycling routes"],
    eventos: ["Founding anniversary, April"],
    dondeComer: ["Restaurants downtown", "Traditional steakhouses"],
    dondeAlojarse: ["Hotels downtown", "Campsites by Laguna Hinojo Grande"],
    tips: ["It's a long trip, best planned as a full weekend", "Bring your own fishing gear", "A good stop on the way to La Pampa"],
    presupuesto: "Low to mid-range.",
  },
  "Coronel Suárez": {
    nota: "Polo capital and estancias in the southwestern part of the province.",
    historia: "Coronel Suárez was founded in 1871 as a military fort during the southward expansion of the frontier, on the Sauce Corto stream. Over the following decades it became an agricultural center in the southwestern part of the province, with a strong tradition of breeding polo horses that catapulted it to the top of that sport worldwide. The town is also home to silversmiths specializing in fine gaucho-style silverwork. Today it combines that rural, sporting profile with estancias that welcome visitors for horseback rides and country days.",
    datoCurioso: "Coronel Suárez has produced some of the best polo players in the world, and its estancias still breed horses for the sport.",
    comoLlegar: "Route 33 or Route 51, about 6 hours by car.",
    cuandoIr: "Spring and fall.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for estancias and polo tournaments.",
    itinerario: [
      { momento: "Morning", actividad: "Downtown and local museums." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "An estancia for horseback riding or a polo match, depending on the season." },
    ],
    otrosAtractivos: ["Santa María, a nearby town with Volga German heritage", "Estancias offering horseback rides and carriage tours", "Fine silverwork and gaucho-design workshops", "International-level polo fields"],
    eventos: ["Polo tournaments, seasonal", "Patron saint festivals"],
    dondeComer: ["Country-style restaurants", "Traditional steakhouses"],
    dondeAlojarse: ["Estancias offering lodging", "Hotels downtown"],
    tips: ["Check the polo tournament calendar before traveling", "Pairs well with Pigüé, very close by", "Buy handmade silverwork as a souvenir"],
    presupuesto: "Mid to high: estancias and polo activities are usually the main expense.",
  },
  "Pigüé": {
    nota: "A town of French heritage among the Ventania hills.",
    historia: "Pigüé was founded in 1884 by a group of families from the French region of L'Aveyron, joined by Spanish and Italian immigrants, giving it a European identity unusual for the pampas plains. That origin still shows in its architecture, traditions, and food. Surrounded by the Curamalal and Bravard hill ranges within the Ventania system, it became over time a destination for nature and rural tourism. Today it combines that French heritage with trails, streams, and hill lookout points.",
    datoCurioso: "Pigüé's French roots live on in institutions like the Spanish Theater, the Italian Society, and the French Society, which keep their period architecture.",
    comoLlegar: "Ricchieri highway, Route 205, Provincial Route 65, and Route 33, about 6h30 by car.",
    cuandoIr: "Spring and fall for the hills.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the Curamalal and Bravard hills.",
    itinerario: [
      { momento: "Morning", actividad: "Historic center and Nuestra Señora de Luján Parish." },
      { momento: "Midday", actividad: "Lunch with French influence." },
      { momento: "Afternoon", actividad: "Trails and lookout points in the Curamalal or Bravard hills." },
    ],
    otrosAtractivos: ["Curamalal and Bravard hills", "City Museum and Archive", "Nuestra Señora de Luján Parish", "Hill streams and lookout points"],
    eventos: ["Food events with French influence", "Cultural festivals throughout the year"],
    dondeComer: ["Restaurants with French, Spanish, and Italian influence", "Traditional cafés"],
    dondeAlojarse: ["Rural lodging in the hills", "Hotels downtown"],
    tips: ["Pairs well with Coronel Suárez, very close by", "Bring hiking shoes for the hills", "Check the schedule for guided walks"],
    presupuesto: "Mid-range.",
  },
  "Tres Arroyos": {
    nota: "Danish heritage, European-style squares, and the Claromecó beach resort.",
    historia: "Tres Arroyos was founded in 1884 following an urban layout designed by Dardo Rocha, the same founder of La Plata, inspired by a European style of symmetrical squares. The city owes its name to the confluence of three streams that flow into the Atlantic Ocean. In the late 19th century it received significant Danish and Dutch immigration, which left its mark on local food and traditions. Today it combines that European heritage with the Claromecó beach resort, its main beach, just a few kilometers from downtown.",
    datoCurioso: "Tres Arroyos' food scene blends pampas tradition with Danish and Dutch recipes, like kringle, a braided sweet bread typical of the Scandinavian community.",
    comoLlegar: "Route 3 and then Route 228, about 6 hours by car.",
    cuandoIr: "January and February for the Claromecó beach; year-round for the city.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Claromecó, about 40 km away.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Palace and Nuestra Señora del Carmen Parish." },
      { momento: "Midday", actividad: "Lunch with Danish specialties." },
      { momento: "Afternoon", actividad: "Claromecó beach and its lighthouse." },
    ],
    otrosAtractivos: ["Claromecó, the main beach resort, with dunes and a 54-meter lighthouse", "Ángel Cabañas Municipal Park", "Mulazzi Museum", "Fine Arts Museum"],
    eventos: ["Danish Community Festival", "Carnival parade in Claromecó"],
    dondeComer: ["Restaurants with Danish and Dutch specialties", "Steakhouses and seafood spots in Claromecó"],
    dondeAlojarse: ["Hotels in downtown Tres Arroyos", "Cabins and apartments in Claromecó"],
    tips: ["Claromecó allows vehicle access to certain beach areas", "A good stop on the way to Necochea or Bahía Blanca", "Try Danish kringle at a local café"],
    presupuesto: "Low to mid-range.",
  },
  "Bahía Blanca": {
    nota: "Port city, culture, and gateway to Patagonia.",
    historia: "Bahía Blanca was founded in 1828 as a military fort to secure control of the southern part of the province. Its strategic location by the sea eventually made it one of Argentina's most important ports, with a strong industrial and naval identity. The arrival of European immigrants in the late 19th and early 20th centuries left its mark on neighborhoods like Barrio Inglés and on cultural institutions like the Municipal Theater. Today it combines that port and industrial profile with an active university and cultural life, and serves as a gateway to Patagonia.",
    datoCurioso: "The Port Museum, in Ingeniero White, operates out of a former customs building and tells the story of the immigrants who came to work at the port.",
    comoLlegar: "Route 3, about 7 hours by car; flights and trains also available.",
    cuandoIr: "Year-round; often used as a stop on the way to Patagonia or Sierra de la Ventana.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car or bus helps for Ingeniero White and the port.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Rivadavia, the Cathedral, and the Municipal Theater." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Port Museum in Ingeniero White." },
    ],
    otrosAtractivos: ["Port Museum in Ingeniero White", "Médanos, 40 minutes away, with Termas de Médanos and Al Este winery (ocean-influenced wines)", "Barrio Inglés", "Parque de Mayo"],
    eventos: ["Meat History Festival, in General Daniel Cerri, November"],
    dondeComer: ["Restaurants and cafés in the historic center", "Seafood spots in Ingeniero White"],
    dondeAlojarse: ["Chain hotels downtown", "Lodging near the bus terminal and airport"],
    tips: ["A good stop on the way to Sierra de la Ventana or Patagonia", "The Port Museum is free and highly recommended", "It has its own airport, useful if flying in"],
    presupuesto: "Mid-range: there are options for every budget, typical of a large city.",
  },
  "Monte Hermoso": {
    nota: "Fine sand beaches, almost at the edge of the province.",
    historia: "Monte Hermoso was founded in the 1940s as a beach resort in the southwestern part of the province, on a stretch of coast with an unusual orientation that lets the sun both rise and set over the sea. Its development came later and on a smaller scale than the resorts in the center of the province, giving it a quieter, more family-oriented character. Over time it became the go-to beach resort for people living in the southern part of the province and in Bahía Blanca. Today it combines fine sand beaches with a strong coastal-town identity.",
    datoCurioso: "Because of its unusual geographic orientation, Monte Hermoso is one of the few places on the Argentine coast where you can watch both sunrise and sunset over the sea.",
    comoLlegar: "Route 3 and then Route 78, about 7 hours by car.",
    cuandoIr: "January and February during peak season.",
    duracion: "Weekend or a full week.",
    comoMoverse: "Downtown and the beach are walkable or bikeable.",
    itinerario: [
      { momento: "Morning", actividad: "Fine sand beach." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Sunset over the sea and the nearby nature reserve." },
    ],
    otrosAtractivos: ["River mouth nature reserve", "Municipal forest nursery", "Shore fishing", "Proximity to Bahía Blanca for day trips"],
    eventos: ["Summer season with beach shows"],
    dondeComer: ["Seafood restaurants along the coast", "Steakhouses and pizzerias downtown"],
    dondeAlojarse: ["Beachfront hotels and cabins", "Campsites in the area"],
    tips: ["One of the quietest beach resorts in the southern part of the province", "Pairs well with Bahía Blanca or Sierra de la Ventana", "A good spot to relax without crowds outside peak season"],
    presupuesto: "Low to mid-range.",
  },
  "Carmen de Patagones": {
    nota: "The southernmost city in the province, a colonial quarter by the Río Negro.",
    historia: "Carmen de Patagones was founded in 1779 by order of King Charles III of Spain, as part of the strategy to secure Spanish sovereignty over the southern edge of the territory. In 1827, its residents (farmers, artisans, merchants, and militia members, including people of African descent) held off a Brazilian naval invasion for days without support from the central government, in an episode remembered as a local feat. Over the following decades it became the southernmost city in Buenos Aires Province, linked to Viedma, the capital of Río Negro, by the Río Negro river. Today it preserves one of the best-kept historic quarters in the country, declared a National Historic Town in 2003.",
    datoCurioso: "The Maragato caves, carved into the sandstone bluffs along the Río Negro, housed the town's first 19th-century settlers and today resemble, in shape, the hobbit homes of fiction.",
    comoLlegar: "Route 3, about 11 hours by car; buses and flights to Viedma, across the bridge, also available.",
    cuandoIr: "Spring and summer; April 22 marks the founding anniversary.",
    duracion: "A long weekend, given how far the trip is.",
    comoMoverse: "The 24-block historic quarter is walkable; a bridge and local bus connect to Viedma.",
    itinerario: [
      { momento: "Morning", actividad: "Fort Tower and the colonial historic quarter." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Maragato Caves and Cerro de la Caballada." },
    ],
    otrosAtractivos: ["Emma Nozzi Regional History Museum", "Maragato Caves in the riverside bluffs", "Cerro de la Caballada, a panoramic lookout", "Lift bridge to Viedma"],
    eventos: ["Founding anniversary, April 22", "Commemoration of the 1827 resistance"],
    dondeComer: ["River fish restaurants", "Historic bars like Bar del Puerto"],
    dondeAlojarse: ["Hotels in the historic quarter", "Lodging shared with neighboring Viedma"],
    tips: ["It's a very long trip from CABA, best combined with a flight to Viedma", "The historic quarter is well signposted for walking tours", "A good base for visiting Viedma too, across the river"],
    presupuesto: "Mid-range: the biggest expense is usually travel, given how far it is from CABA.",
  },
  "Isla Martín García": {
    nota: "Only reachable by boat: history, a political prison, and the only dry border with Uruguay.",
    historia: "Discovered in 1516 by the Spanish expedition of Juan Díaz de Solís, the island was disputed for centuries between Spain and Portugal due to its strategic position in the Río de la Plata. From 1900 on it served as a political-military prison and quarantine station, and its cells held figures like Hipólito Yrigoyen, Marcelo T. de Alvear, Juan Domingo Perón, and Arturo Frondizi. In 1973 the Río de la Plata Treaty recognized Argentine sovereignty over the island, and in 1988 it was declared a Multiple-Use Reserve. Today it's the only dry border between Argentina and Uruguay, and it combines nature, history, and a town seemingly frozen in time.",
    datoCurioso: "The island's so-called \"Barrio Chino\" (Chinatown), with abandoned houses covered in vegetation, has nothing to do with Chinese immigration: the name comes from its maze-like, cluttered look.",
    comoLlegar: "Only reachable by boat, departing from the Tigre river station or from Dársena Norte in CABA; the crossing takes 2 to 3 hours.",
    cuandoIr: "Year-round; boats usually run Tuesdays, Thursdays, Saturdays, Sundays, and holidays, depending on the operator.",
    duracion: "Full day, or overnight if staying at the campsite or inn.",
    comoMoverse: "The island is toured on foot as part of the guided visit; there are no cars, the whole tour is walked.",
    itinerario: [
      { momento: "Morning", actividad: "Boat trip from Tigre and arrival on the island." },
      { momento: "Midday", actividad: "Guided tour (historic prison, museum, cemetery, Barrio Chino) and lunch." },
      { momento: "Afternoon", actividad: "Urquiza Theater, Rubén Darío's house, and the quarries, before heading back by boat." },
    ],
    otrosAtractivos: ["Former prison that held Yrigoyen, Alvear, Perón, and Frondizi", "Island History Museum", "Urquiza Theater", "Barrio Chino and stone quarries"],
    eventos: ["Special excursions on national holidays, depending on the boat operator"],
    dondeComer: ["Restaurante Solís, with a barbecue menu included in most excursions"],
    dondeAlojarse: ["The island's inn and campsite, for those who want to stay overnight"],
    tips: ["Book the excursion ahead, there are few departures per week", "Bring ID, it's a border crossing point even though you don't cross into Uruguay", "Wear comfortable shoes, the whole visit is on foot"],
    presupuesto: "Mid-range: the main expense is the boat fare, which usually includes the guided tour and lunch.",
  },
  "Bahía San Blas": {
    nota: "The southern edge of the province: a paradise for boat fishing and oysters.",
    historia: "Bahía San Blas developed as a beach village on Isla del Jabalí, at the southern edge of Buenos Aires Province, thanks to the rich fishing grounds in its sheltered waters. Over time it became one of the country's most recognized sport fishing destinations, with thousands of boat fishing trips each season. The bay and its islands were declared a Multiple-Use Nature Reserve for their value as wetland and nesting grounds for shorebirds. Today it combines sport fishing with a seafood-focused food scene centered on oysters, farmed in the nearby town of Los Pocitos.",
    datoCurioso: "Los Pocitos, a few kilometers from Bahía San Blas, is known as the \"Oyster Capital\" for its oyster farming, one of the area's signature dishes.",
    comoLlegar: "Route 3 to kilometer 918 and then a roughly 40 km gravel road.",
    cuandoIr: "October to April, peak sport fishing season.",
    duracion: "A weekend or longer, given how long the trip is.",
    comoMoverse: "The town is small and walkable; fishing excursions depart by boat from the local port.",
    itinerario: [
      { momento: "Morning", actividad: "Boat or shore fishing excursion." },
      { momento: "Midday", actividad: "Lunch with oysters and local fish." },
      { momento: "Afternoon", actividad: "A walk along the sand or rock beaches, depending on the tide." },
    ],
    otrosAtractivos: ["Bahía San Blas Multiple-Use Nature Reserve", "Los Pocitos, the \"Oyster Capital\"", "Bay islands (Jabalí, de los Césares, Flamenco)", "Shorebird and La Plata dolphin watching"],
    eventos: ["Oyster Festival, January"],
    dondeComer: ["Fish and oyster restaurants in town", "Steakhouses serving Patagonian lamb"],
    dondeAlojarse: ["Inns and cabins in the village", "Organized campsites"],
    tips: ["Book the boat fishing excursion ahead during peak season", "It's a very long trip, best combined with Carmen de Patagones", "Check tide times before deciding which beach to visit"],
    presupuesto: "Mid-range: the main expense is the boat fishing excursion and travel, given how far it is from CABA.",
  },
  "Navarro": {
    nota: "A lagoon, national history, and Buenos Aires-style empanadas.",
    historia: "Navarro was born in the late 18th century as a fort along the Buenos Aires frontier line, on land then known as \"los pagos de Navarro,\" honoring Captain Miguel Navarro, a companion of Juan de Garay. The town was the setting for one of the darkest episodes in Argentine history: in 1828, after being defeated by Juan Lavalle's forces, then-governor Manuel Dorrego was executed by firing squad on the outskirts of town. Over the following decades, work on the local lagoon turned that tragic episode's setting into a destination for rest and fishing. Today Navarro combines that historical heritage with a 180-hectare lagoon that is its main recreational draw.",
    datoCurioso: "Manuel Dorrego's execution in 1828 took place at the very spot where the Manuel Dorrego Historical and Biographical Park stands today, commemorating that key episode of 19th-century civil conflict.",
    comoLlegar: "Acceso Oeste to Luján and then provincial routes, or Route 205 toward Lobos and Route 41; about 2 hours by car.",
    cuandoIr: "Year-round; spring and summer to enjoy the lagoon.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the lagoon, two blocks from the square, and for the district's rural areas.",
    itinerario: [
      { momento: "Morning", actividad: "Manuel Dorrego Historical and Biographical Park and the Alfredo Sabaté Museum." },
      { momento: "Midday", actividad: "Lunch of Buenos Aires-style empanadas." },
      { momento: "Afternoon", actividad: "Navarro Lagoon, boat ride or fishing." },
    ],
    otrosAtractivos: ["Navarro Lagoon, 180 hectares", "Replica of Fortín San Lorenzo", "Villa Moll, home of the Empanada Festival", "La Protegida general store-museum"],
    eventos: ["Empanada Festival, in Villa Moll", "Fried Dough Festival", "Dairy Farmer Festival"],
    dondeComer: ["Country eateries serving Buenos Aires-style empanadas", "Restaurants near the lagoon"],
    dondeAlojarse: ["Cabins facing the lagoon", "Rural lodging in nearby areas"],
    tips: ["Go in spring or summer to make the most of the lagoon", "The Empanada Festival in Villa Moll is a good reason to plan your visit", "Combine with Luján or Mercedes, both nearby"],
    presupuesto: "Low to mid-range: the lagoon and historic park are free, food is the main expense.",
  },
  "Lobos": {
    nota: "A lagoon, polo estancias, and Perón's birthplace.",
    historia: "The area was settled starting in 1779 around Fortín San Pedro de los Lobos, built by order of viceroy Vértiz to reinforce the frontier line with indigenous peoples. In 1802 Ranchos de Lobos was established, one of the region's first estancias, which gave rise to the town. The district earned a special place in Argentine history as the birthplace of Juan Domingo Perón, born there in 1895. Over time, Lobos became a resting destination centered on its lagoon, with world-class estancias and a strong ranching and dairy tradition.",
    datoCurioso: "Juan Domingo Perón's birth house, now a museum, is one of the district's most visited historic sites and commemorates the former president's birth in 1895.",
    comoLlegar: "Route 205, about 1h30 by car.",
    cuandoIr: "Year-round; winter for pejerrey fishing, summer for water sports.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; the lagoon is 15 km from the town center, a car helps to get there.",
    itinerario: [
      { momento: "Morning", actividad: "Juan Domingo Perón's birth house and the historic center." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Lobos Lagoon, pejerrey fishing or water sports." },
    ],
    otrosAtractivos: ["Lobos Lagoon, 800 hectares", "Estancia La Candelaria, with a Norman-style castle and a Dutch windmill", "Natural Sciences Museum", "Aeroclub with scenic flights"],
    eventos: ["Polo and golf tournaments at local estancias, seasonal", "Founding anniversary"],
    dondeComer: ["Restaurants and steakhouses downtown", "Estancia dining rooms with country menus"],
    dondeAlojarse: ["High-end estancias like La Candelaria", "Hotels and cabins near the lagoon"],
    tips: ["Book pejerrey fishing ahead in winter, it's peak season", "Estancias often offer day passes including activities and lunch", "Pairs well with Navarro or San Antonio de Areco, both nearby"],
    presupuesto: "Mid-range: exploring the town and lagoon is affordable, it goes up if you add a high-end estancia.",
  },
  "San Andrés de Giles": {
    nota: "The Camino Real, pulperías, and the last meeting of Rosas and Quiroga.",
    historia: "San Andrés de Giles was founded in 1806 along the old Camino Real linking Buenos Aires with Alto Perú, at a crossing of relay stations and estancias in the northwestern part of the province. The nearby Estancia La Merced, known as Posta de Figueroa and built in 1750, was the site of the last meeting between Juan Manuel de Rosas and Facundo Quiroga in 1834, shortly before Quiroga was assassinated. The town was also the birthplace of Argentine former president Héctor J. Cámpora, whose childhood home is preserved as a historic site. Today it combines that heritage with a quiet small-town life and a strong food identity built around its pulperías (country taverns).",
    datoCurioso: "Posta de Figueroa, a few kilometers from downtown, was the site of the last meeting between Rosas and Quiroga in 1834, before Quiroga was assassinated on his way to Córdoba.",
    comoLlegar: "Route 7, about 1h30 by car.",
    cuandoIr: "Year-round; weekends bring more activity to the food scene.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for Posta de Figueroa and the district's rural villages (Azcuénaga, Villa Ruiz).",
    itinerario: [
      { momento: "Morning", actividad: "Historic center, Municipal Palace, and San Andrés Apóstol Church." },
      { momento: "Midday", actividad: "Lunch at a traditional pulpería." },
      { momento: "Afternoon", actividad: "Posta de Figueroa or one of the nearby rural villages." },
    ],
    otrosAtractivos: ["Estancia La Merced (Posta de Figueroa), from 1750", "Birth house of former president Héctor J. Cámpora", "Villa Ruiz and Azcuénaga, rural villages in the district", "Old train station"],
    eventos: ["Hornero Bird Festival", "Provincial Camino Real Festival"],
    dondeComer: ["Traditional pulperías like 2 de Mayo and El Viejo Tropezón", "Steakhouses and bodegones downtown"],
    dondeAlojarse: ["Estancias and traditional inns", "Lodging downtown"],
    tips: ["Book a table at the best-known pulperías on weekends", "Combine with Villa Ruiz or Azcuénaga if you have extra time", "A good stop on the way to Areco or Mercedes"],
    presupuesto: "Low to mid-range.",
  },
  "Carmen de Areco": {
    nota: "The National Pie Festival, Irish heritage, and the Tower of Silence.",
    historia: "Carmen de Areco was founded in 1812 from a fort built in the late 18th century on the Areco River, along the same frontier line that gave rise to Lobos, Navarro, and Luján. The arrival of Irish immigrants during the 19th century left a distinct mark on the area, still visible in surnames, traditions, and the architecture of estancias and chapels. Over time, the district developed a strong food identity centered on the criollo meat pie, celebrated today with a nationwide festival. Today Carmen de Areco combines that heritage with the rural villages of Gouin and Tres Sargentos, both part of the same tourist circuit.",
    datoCurioso: "The Tower of Silence, an unusually tall structure in the middle of the local cemetery, is one of the town's most enigmatic sites: its original purpose was never fully clarified.",
    comoLlegar: "Route 8, about 2 hours by car.",
    cuandoIr: "Year-round; the National Pie Festival is a good reason to plan your visit.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Gouin and Tres Sargentos, the district's rural villages.",
    itinerario: [
      { momento: "Morning", actividad: "Nuestra Señora del Carmen Church and the Family History Museum." },
      { momento: "Midday", actividad: "Lunch with criollo meat pie." },
      { momento: "Afternoon", actividad: "Municipal riverside spot on the Areco River or a visit to Gouin." },
    ],
    otrosAtractivos: ["Tower of Silence, in the local cemetery", "Gouin, a rural village with its own Provincial Pie Festival", "Municipal riverside spot on the Areco River", "Family History Museum"],
    eventos: ["National Pie Festival", "La Matera Fair"],
    dondeComer: ["Country eateries serving criollo meat pie", "Steakhouses by the Areco River"],
    dondeAlojarse: ["Ten-hectare municipal campsite", "Rural lodging and nearby estancias"],
    tips: ["Book ahead for the National Pie Festival, it draws big crowds", "Combine with San Antonio de Areco, very close by", "Visit Gouin and Tres Sargentos if you have extra time"],
    presupuesto: "Low to mid-range.",
  },
  "Suipacha": {
    nota: "The Cheese Route, with Basque tradition, and the Osobuco Festival.",
    historia: "Suipacha took its name in honor of the first military victory of the patriot forces in 1810, which took place in Alto Perú, a triumph commemorated at the Historic Monolith in the main square. The arrival of Basque immigrants in the late 19th and early 20th centuries left a strong cheesemaking tradition in the area, which for decades remained a family, artisanal activity. In 2008, a group of local producers organized to boost that tradition as a tourist draw and created the Cheese Route, now the district's great signature feature. Today Suipacha combines that food-focused profile with the quiet pace of a rolling pampas town.",
    datoCurioso: "The town's name commemorates the Battle of Suipacha of 1810, the first patriot military victory of the wars of independence, even though that battle took place thousands of kilometers away, in what is now Bolivia.",
    comoLlegar: "Acceso Oeste/Route 7 and then the Luján-Bragado highway/Route 5, about 2 hours by car; a train from Once station is also available.",
    cuandoIr: "Year-round; July for the Osobuco Festival.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for the cheese factories along the Cheese Route.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Balcarce, Nuestra Señora del Rosario Church, and the Historic Monolith." },
      { momento: "Midday", actividad: "Lunch featuring local cheese-based dishes." },
      { momento: "Afternoon", actividad: "A tour of the Cheese Route, factories, and producers." },
    ],
    otrosAtractivos: ["Cheese Route, with factories and producers", "Il Mirtilo, blueberry and berry farms", "Historic train station", "La Escuadra pig and wild boar farm"],
    eventos: ["Osobuco Festival, July", "Expo Suipacha, a producers' fair"],
    dondeComer: ["Restaurants serving local cheese-based dishes", "Country eateries"],
    dondeAlojarse: ["Lodging downtown", "Nearby rural accommodations"],
    tips: ["Book guided cheese factory tours ahead, especially on weekends", "Il Mirtilo is open Saturdays, Sundays, and holidays from 11 am to 6 pm", "The train to Suipacha runs only a few times a week, worth checking the schedule"],
    presupuesto: "Low to mid-range.",
  },
  "Chacabuco": {
    nota: "Laguna de Rocha, fishing, and a rustic landscape in the northwest of the province.",
    historia: "Chacabuco was founded in 1865 and took its name in honor of the Battle of Chacabuco of 1817, a decisive fight for the independence of Chile and Peru, even though it took place thousands of kilometers from this Buenos Aires district. With the arrival of the railway, the city became a service hub for a large farming and ranching area in the northwestern part of the province. Laguna de Rocha, formed by a widening of the Salado River 30 km from downtown, became over time the district's great natural draw. Today Chacabuco combines that quiet agricultural profile with sport fishing and the rustic landscape of its lagoons.",
    datoCurioso: "The city's name, like that of the battle it honors, has no direct geographic connection to the area: it commemorates a battle fought in 1817 in the Andes mountains, more than a thousand kilometers away.",
    comoLlegar: "Route 7, about 2h30 to 3 hours by car; a train from Retiro is also available.",
    cuandoIr: "Spring and fall for fishing; year-round for the city.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Laguna de Rocha, 30 km away.",
    itinerario: [
      { momento: "Morning", actividad: "Historic center and main square." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Laguna de Rocha, fishing for pejerrey and tararira." },
    ],
    otrosAtractivos: ["Laguna de Rocha, with shore and boat fishing", "Las Toscas and de los Patos lagoons", "Chacabuco Golf Club, an 18-hole course", "Provincial airfield"],
    eventos: ["Founding anniversary"],
    dondeComer: ["Restaurants and steakhouses downtown", "Eateries by the lagoon"],
    dondeAlojarse: ["Hotels downtown", "Camping by Laguna de Rocha"],
    tips: ["Bring your own fishing gear or rent boats at the lagoon", "The last stretch to the lagoon is a dirt road, drive carefully", "A good stop on the way to Junín or Bragado"],
    presupuesto: "Low to mid-range: access to the lagoon is free, travel and food are the main expense.",
  },
  "San Bernardo": {
    nota: "The city of sun and family, with young beaches and nightlife.",
    historia: "San Bernardo del Tuyú developed starting in the late 1930s, alongside the tourism growth of the entire La Costa district. Its proximity to Mar de Ajó and other beach towns made it a gathering spot for young people from the mid-20th century on, a profile it keeps today. The boiler of the steamship \"Mar del Sur,\" run aground in 1924 during a storm, remains as a testament to the frequent shipwrecks along this coast before tourism took hold. Today San Bernardo is known as \"the city of sun and family,\" offering both family beaches and an active nightlife.",
    datoCurioso: "The iron boiler of the Argentine steamship Mar del Sur, run aground on the coast in 1924, can still be seen poking out of the waves near Costa Azul, north of San Bernardo.",
    comoLlegar: "Route 2 to Dolores and then Route 63 and Route 11, or Route 36 and Route 11 via Pipinas; about 4h30 by car.",
    cuandoIr: "January and February during peak season; December for the National Sun and Family Festival.",
    duracion: "Weekend or a full week.",
    comoMoverse: "Downtown and the beach are walkable; a car helps for Mar de Ajó, La Lucila, or Costa Esmeralda.",
    itinerario: [
      { momento: "Morning", actividad: "Beach and resorts in San Bernardo." },
      { momento: "Midday", actividad: "Lunch on the pedestrian street." },
      { momento: "Afternoon", actividad: "A walk toward Mar de Ajó or Costa Azul, with the Mar del Sur boiler." },
    ],
    otrosAtractivos: ["Mar del Sur steamship boiler, in Costa Azul", "Mar de Ajó, a neighboring beach town", "Costa Esmeralda, the district's most exclusive development", "Coastal Observatory"],
    eventos: ["National Sun and Family Festival, December", "Expo Unión de las Naciones, summer"],
    dondeComer: ["Restaurants and ice cream shops on the pedestrian street", "Steakhouses and pizzerias facing the sea"],
    dondeAlojarse: ["Beachfront hotels and apartments", "Cabins near Mar de Ajó"],
    tips: ["One of the liveliest beaches for nightlife in the La Costa district, plan lodging accordingly", "Walk toward Mar de Ajó or La Lucila for quieter beaches", "Book ahead for the National Sun and Family Festival"],
    presupuesto: "Low to mid-range: one of the most affordable options in the La Costa district.",
  },
  "Adolfo Gonzáles Chaves": {
    nota: "Another chapter of the Salamone route, in the southeastern part of the province.",
    historia: "The town was born in 1886 around a Ferrocarril del Sud station, on land donated two decades later by landowner and politician Adolfo Gonzales Chaves, who gave it its name. The district was created in 1916 with land ceded by Juárez, Tres Arroyos, and Necochea. In the second half of the 1930s, architect Francisco Salamone's public works plan left the city with three monumental Art Deco buildings that are now part of the tourist circuit dedicated to his work. Today Gonzales Chaves combines that architectural heritage with an economy based on sunflower and other grain production.",
    datoCurioso: "The tower of the Municipal Palace, designed by Salamone, was inspired by the tourism pavilion at the 1937 Paris Exposition of Decorative Arts, adapting cutting-edge structural techniques for its time.",
    comoLlegar: "Route 3, about 6 hours by car.",
    cuandoIr: "Spring and fall.",
    duracion: "Half a day, or a stop on a longer trip.",
    comoMoverse: "Downtown is walkable.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Palace and the old Market, both by Salamone." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Inmaculada Concepción Church and the historic train station." },
    ],
    otrosAtractivos: ["Municipal Palace, by Francisco Salamone", "Old Market, now a cultural center", "Tantanakuy Community Park", "1886 train station"],
    eventos: ["Open classes and guided tours along the Salamone route"],
    dondeComer: ["Home-style restaurants downtown", "Traditional steakhouses"],
    dondeAlojarse: ["Hotels downtown", "Nearby estancias"],
    tips: ["A good stop along the Salamone circuit, together with Azul and Sierra de la Ventana", "Take photos of the Municipal Palace tower, it's the most photographed piece", "Pairs well with Tres Arroyos, 50 km away"],
    presupuesto: "Low.",
  },
  "Escobar": {
    nota: "Temaikén, the largest biopark in Latin America, and the National Flower Capital.",
    historia: "Belén de Escobar developed starting in the late 19th century as a flower and fruit production center on the Paraná de las Palmas, thanks to its fertile land and proximity to the river port. The arrival of Japanese immigrants in 1929 left a distinct mark on local horticulture, still visible today in the town's Japanese Garden. In 1964 the city was declared National Flower Capital, in recognition of that flower-growing tradition still preserved along the Flower Route. In 2001, Temaikén opened, now the largest biopark in Latin America, which cemented Escobar as one of the most visited weekend destinations near CABA.",
    datoCurioso: "The name Temaikén means \"land of life\" in the Tehuelche language, and the biopark recreates habitats from Patagonia, the Mesopotamia region, and Africa for more than 500 species.",
    comoLlegar: "Panamericana, Escobar branch, about 50 minutes by car.",
    cuandoIr: "Year-round; Temaikén has reduced hours outside peak season.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for Temaikén and the Japanese Garden, both a bit farther out.",
    itinerario: [
      { momento: "Morning", actividad: "Temaikén, the largest biopark in Latin America." },
      { momento: "Midday", actividad: "Lunch in downtown Escobar." },
      { momento: "Afternoon", actividad: "Japanese Garden and the main square, declared National Flower Capital." },
    ],
    otrosAtractivos: ["Temaikén, a biopark with Andean condors and marsh deer", "Japanese Garden, with koi fish and themed trails", "Port of Escobar on the Paraná de las Palmas", "Flower Route"],
    eventos: ["National Flower Festival"],
    dondeComer: ["Restaurants downtown", "Cafés by the main square"],
    dondeAlojarse: ["Hotels and spas like Howard Johnson Spa", "Cabins near the delta"],
    tips: ["Book Temaikén tickets ahead during peak season", "The Japanese Garden is free and a good half-day complement", "Pairs well with Tigre, very close by"],
    presupuesto: "Mid-range: Temaikén is the main expense of the outing.",
  },
  "Campana": {
    nota: "A nature reserve, boat rides, and a riverside winery.",
    historia: "Campana developed from the late 19th century as an industrial hub on the Paraná de las Palmas, home to one of the country's first oil refineries and, later, a nationally significant steel plant. That industrial identity coexists with a lesser-known ecotourism side, thanks to the Otamendi Nature Reserve, one of the last remnants of pampas grassland and riverside forest in the area. In recent years it also added a wine tourism circuit with vineyards along the river, unusual for a city with this profile. Today Campana combines that working-class past with boat rides and bird watching.",
    datoCurioso: "The 3,000-hectare Otamendi Nature Reserve protects one of the few remaining patches of original pampas grassland in the area and is a key spot for watching migratory birds.",
    comoLlegar: "Route 9 (Panamericana), about 1 hour by car.",
    cuandoIr: "Year-round; fall and spring for bird watching.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for the Otamendi Reserve and the vineyards.",
    itinerario: [
      { momento: "Morning", actividad: "Otamendi Nature Reserve, bird watching." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Boat ride along the Paraná de las Palmas to the Zárate-Brazo Largo bridge." },
    ],
    otrosAtractivos: ["Otamendi Nature Reserve", "Bodega Gamboa, riverside vineyards", "River boat circuit to the Zárate-Brazo Largo bridge", "Campana's delta"],
    eventos: ["Patron saint festivals and industrial events, seasonal"],
    dondeComer: ["Restaurants serving criollo and Italian food", "Steakhouses downtown"],
    dondeAlojarse: ["Hotels downtown", "Cabins near the delta"],
    tips: ["Book the Bodega Gamboa tour ahead", "The Paraná boat ride is a good half-day plan", "Pairs well with Zárate, very close by"],
    presupuesto: "Mid-range.",
  },
  "Pilar": {
    nota: "The Malvinas Cenotaph and country-day estancias.",
    historia: "The Pilar district formed in the early 19th century around a chapel dedicated to the Virgin of Pilar, on land that mixed estancias and small farms near Buenos Aires. For much of the 20th century it kept a rural profile, until the arrival of gated communities starting in the 1990s transformed much of its landscape. In 1992 the Malvinas Cenotaph was inaugurated there, an exact replica of the British military cemetery at Darwin in the Falkland Islands, built to honor the Argentine soldiers who died in the 1982 conflict. Today Pilar combines that memorial site with rural tourism estancias and an intense scene of gated communities and shopping centers.",
    datoCurioso: "The Malvinas Cenotaph reproduces, in exact shape and dimensions, the Darwin military cemetery established by the United Kingdom on East Falkland, with 649 white crosses bearing the name of each fallen Argentine soldier.",
    comoLlegar: "Panamericana, Pilar branch, about 50 minutes by car; a train from Retiro (Mitre line) is also available.",
    cuandoIr: "Year-round; April 2 for the commemorative ceremonies at the Cenotaph.",
    duracion: "Half a day or full day.",
    comoMoverse: "A car helps: the district is large and its attractions are spread across several towns.",
    itinerario: [
      { momento: "Morning", actividad: "Malvinas Cenotaph, a replica of the Darwin cemetery." },
      { momento: "Midday", actividad: "Lunch in downtown Pilar." },
      { momento: "Afternoon", actividad: "A country day at an estancia like Utopía." },
    ],
    otrosAtractivos: ["Malvinas Cenotaph, with a Hércules C130 and a Mirage M-5D on display", "Estancia Utopía, a country day with a pool and games", "Villa Rosa, with gated communities and shopping centers", "Historic estancias in the district"],
    eventos: ["Commemorative ceremonies on April 2 at the Malvinas Cenotaph"],
    dondeComer: ["Restaurants and bodegones downtown", "Estancia dining rooms with country menus"],
    dondeAlojarse: ["Hotels near the Panamericana", "Estancias offering lodging"],
    tips: ["The Malvinas Cenotaph is a memorial site, visit with respect and take your time", "Book the estancia country day ahead on weekends", "A good stop on the way to Capilla del Señor or Exaltación de la Cruz"],
    presupuesto: "Low to mid-range: the Cenotaph is free, the estancia day is the main expense.",
  },
  "Berisso": {
    nota: "Provincial Capital of the Immigrant, and the Vino de la Costa.",
    historia: "Berisso grew in the late 19th and early 20th centuries around the meatpacking plants set up at its port on the Río de la Plata, which drew a huge wave of European immigrants who came to work there. That diversity, with more than 26 communities represented, earned it the title of Provincial Capital of the Immigrant and gave rise in 1976 to the Provincial Immigrant Festival, one of the largest ethnic celebrations in the country. The city also holds a central place in Argentine political history: much of the workers' mobilization of October 17, 1945, a founding moment of Peronism, set out from there. Today Berisso combines that industrial and immigrant past with the small-scale cultivation of Vino de la Costa, made with Isabella grapes on the islands of the Río de la Plata.",
    datoCurioso: "Vino de la Costa is made with the American Isabella grape, grown in the lowlands of Isla Paulino, a tradition brought by Italian immigrants that is now being revived as a local artisanal product.",
    comoLlegar: "Buenos Aires-La Plata highway and then local avenues, about 1 hour by car.",
    cuandoIr: "September and October for the Provincial Immigrant Festival.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car or boat helps for Isla Paulino and the riverside.",
    itinerario: [
      { momento: "Morning", actividad: "Museum and Casa de las Colectividades." },
      { momento: "Midday", actividad: "Lunch featuring food from one of the immigrant communities." },
      { momento: "Afternoon", actividad: "Riverside promenade and a Vino de la Costa tasting." },
    ],
    otrosAtractivos: ["Casa de las Colectividades", "Vino de la Costa, made on Isla Paulino", "Port of Berisso and shipyards", "Municipal Museum"],
    eventos: ["Provincial Immigrant Festival, September and October", "Symbolic Landing, September 21"],
    dondeComer: ["Restaurants from the different immigrant communities during the festival", "Steakhouses and fish markets at the port"],
    dondeAlojarse: ["Hotels in La Plata, very close by", "Local lodging"],
    tips: ["Plan your visit for September or October if the Immigrant Festival is the goal", "Combine with La Plata or Ensenada, both very close by", "Ask about local Vino de la Costa producers for a tasting"],
    presupuesto: "Low to mid-range: the Immigrant Festival has free activities, food is the main expense.",
  },
  "Ayacucho": {
    nota: "National Calf Capital, and the only real place in Martín Fierro.",
    historia: "The Ayacucho district was created in 1865 from land split off from Tandil, Mar Chiquita, and Vecino, and took its name in honor of the Battle of Ayacucho of 1824, the last fought for South American independence, even though it took place thousands of kilometers away in Peru. The city was officially founded in 1866 through the efforts of landowner José Zoilo Miguens. It's the only real place mentioned throughout the entire poem \"Martín Fierro,\" by José Hernández, giving it a special place in Argentine gaucho literature. Today Ayacucho is known as the National Calf Capital, thanks to an economy based on cattle ranching.",
    datoCurioso: "Ayacucho is the only real geographic place mentioned throughout the poem \"Martín Fierro,\" the masterpiece of Argentine gaucho literature.",
    comoLlegar: "Provincial Route 29, about 3h45 by car.",
    cuandoIr: "March or April for the National Calf Festival and Branding Day.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for estancias and the surrounding countryside.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza San Martín and Plaza Colón, designed by Carlos Thays." },
      { momento: "Midday", actividad: "Country-style lunch." },
      { momento: "Afternoon", actividad: "Regional History Museum or a country day at an estancia." },
    ],
    otrosAtractivos: ["Plaza Colón, designed by Carlos Thays, with a statue of Aimé Tschiffely and his horses Gato and Mancha", "Regional History Museum", "San Juan Flour Mill, from 1870", "Club Independiente Community Recreation Complex"],
    eventos: ["National Calf Festival and Branding Day, since 1969"],
    dondeComer: ["Country-style restaurants", "Traditional steakhouses"],
    dondeAlojarse: ["Local estancias", "Hotels downtown"],
    tips: ["Book ahead for the National Calf Festival, it draws big crowds", "A good stop between Chascomús/Dolores and Tandil or the coast", "Martín Fierro fans can look for references to the poem around town"],
    presupuesto: "Low to mid-range.",
  },
  "Rauch": {
    nota: "The historic Puente Silva bridge and swimming spots on the Chapaleofú stream.",
    historia: "The Rauch district was created in 1865 through the efforts of justice of the peace Francisco Mauricio Letamendi, in an area crossed by the Chapaleofú, De los Huesos, and Langueyú streams that flow into the Salado River. The city has since developed a farming and ranching economy, now paired with an INTA experimental station dedicated to research on the Salado basin. Puente Silva, built in 1875 over the Chapaleofú stream, is one of the oldest examples of rural infrastructure in the area and was declared a historically significant monument. Today Rauch combines that rural profile with recreational spots along its streams.",
    datoCurioso: "Puente Silva, also called Puente de Bovedilla, was built in 1875 and is still preserved as a historic monument over the Chapaleofú stream.",
    comoLlegar: "Provincial Route 50 or 29, about 3h30 by car.",
    cuandoIr: "Spring and fall.",
    duracion: "Half a day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Puente Silva and the surrounding countryside.",
    itinerario: [
      { momento: "Morning", actividad: "The Art Deco Municipal Palace and the Local History Museum." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Balneario Sports Complex by the Chapaleofú stream and Puente Silva." },
    ],
    otrosAtractivos: ["Puente Silva, from 1875, over the Chapaleofú stream", "Municipal Palace, in Art Deco style", "Balneario Sports Complex and Municipal Campsite", "Local History Museum"],
    eventos: ["Rural fairs and activities, seasonal"],
    dondeComer: ["Restaurants and steakhouses downtown", "Eateries by the municipal swimming spot"],
    dondeAlojarse: ["Hotels downtown", "Municipal campsite by the stream"],
    tips: ["A good stop between Chascomús/Ayacucho and Tandil", "The municipal swimming spot is a good option in summer", "Combine with Ayacucho, a short distance away"],
    presupuesto: "Low.",
  },
  "Olavarría": {
    nota: "Quarries, the largest stained-glass window in Latin America, and boutique wineries.",
    historia: "Olavarría developed from the late 19th century around the limestone quarries of the Sierras Bayas, which fueled a powerful cement industry still active in the region. The arrival of immigrants from various communities, along with agricultural colonies like San Miguel, Hinojo, and Nievas, gave the area a strong religious and community identity. That devotion is expressed today in more than twenty churches and in the pilgrimage to the Virgen de la Loma during Holy Week. Today Olavarría combines that industrial and religious profile with hill landscapes and boutique vineyards in the district's rural villages.",
    datoCurioso: "The Sierras Bayas are home to the largest stained-glass window in Latin America, a large-scale work tied to the area's quarrying history.",
    comoLlegar: "Route 226, about 4h30 by car.",
    cuandoIr: "Holy Week for the religious pilgrimage; spring and fall for the hills.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the Sierras Bayas and the rural colonies.",
    itinerario: [
      { momento: "Morning", actividad: "Sierras Bayas and the largest stained-glass window in Latin America." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "A tour of local churches or a visit to a boutique winery in Hinojo." },
    ],
    otrosAtractivos: ["Sierras Bayas, with quarries and the great stained-glass window", "Bodega Ita Mallal, vineyards in Hinojo", "Virgen de la Loma, a pilgrimage site", "San Miguel, Hinojo, and Nievas colonies"],
    eventos: ["Way of the Cross to the Virgen de la Loma, Holy Week"],
    dondeComer: ["Restaurants downtown", "Eateries in the rural colonies"],
    dondeAlojarse: ["Hotels downtown", "Cabins in the Sierras Bayas"],
    tips: ["Book lodging ahead for Holy Week, it's the busiest time", "Combine with Azul or Tandil, both within the same hill system", "Check visiting hours for Bodega Ita Mallal"],
    presupuesto: "Low to mid-range.",
  },
  "General Madariaga": {
    nota: "The Pago Gaucho, a classic stop on the way to Pinamar and Villa Gesell.",
    historia: "General Madariaga was founded in 1907 in the southeastern part of the province, on land historically devoted to ranching and surrounded by tala tree groves and lagoons. Its proximity to the beach resorts of Pinamar and Villa Gesell made it, over time, an essential stop on the way to the coast, though it kept its own rural character under the nickname \"Pago Gaucho.\" That country tradition lives on in its bonfires, parades, and rodeo-style riding, and in artisan workshops focused mainly on silverwork. Today it combines that gaucho heritage with sport fishing in its Los Horcones and Salada Grande lagoons.",
    datoCurioso: "Laguna Salada Grande, nearly 5,500 hectares, is a saltwater lagoon surrounded by tala tree groves, home to otters, capybaras, herons, and swans.",
    comoLlegar: "Route 2 to Dolores and then Provincial Routes 63, 11, and 56, about 3h30 by car; very close to Pinamar (30 km) and Villa Gesell.",
    cuandoIr: "Spring and summer for the lagoons; year-round for rural tourism.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the Los Horcones and Salada Grande lagoons.",
    itinerario: [
      { momento: "Morning", actividad: "Artisan and silversmith workshops downtown." },
      { momento: "Midday", actividad: "Lunch with vaquillona con cuero, a local specialty." },
      { momento: "Afternoon", actividad: "Los Horcones or Salada Grande lagoon, fishing and water sports." },
    ],
    otrosAtractivos: ["Laguna Salada Grande, nearly 5,500 hectares", "Laguna Los Horcones, with a fishing and boating club", "Handmade silverwork workshops", "Parque Juan Anchorena"],
    eventos: ["Gaucho parades and rodeo-style riding, seasonal", "Local folk festivals"],
    dondeComer: ["Country restaurants serving vaquillona con cuero", "Traditional steakhouses"],
    dondeAlojarse: ["Rural estancias and inns", "Campsites by the lagoons"],
    tips: ["A good stop to break up the trip to Pinamar or Villa Gesell", "Book silversmith workshop visits ahead if you want to buy pieces", "Bring fishing gear for the lagoons"],
    presupuesto: "Low to mid-range.",
  },
  "San Nicolás de los Arroyos": {
    nota: "The City of the Agreement, cradle of the National Constitution.",
    historia: "San Nicolás de los Arroyos is one of the oldest cities in the province, with settlement dating back to the mid-18th century on the right bank of the Paraná River. On March 2, 1811, its waters were the site of the first naval battle in Argentine history, and in 1819 the General Constituent Congress declared it a city. Its most significant moment came on May 31, 1852, when representatives of fourteen provinces signed the Acuerdo de San Nicolás there, the pact that laid the groundwork for the 1853 National Constitution and earned it the nickname \"City of the Agreement.\" That historic legacy was joined in 1983 by a strong religious profile, following the apparition of the Virgen del Rosario that turned the city into one of the country's major pilgrimage centers.",
    datoCurioso: "According to the faithful, in 1983 the Virgen del Rosario appeared to a local woman and asked her to have a temple built; since then, the sanctuary receives close to two million pilgrims a year.",
    comoLlegar: "Route 9, about 2h30 to 3 hours by car; buses from Retiro Terminal also available.",
    cuandoIr: "Year-round; the anniversaries of the apparition, in September, draw many pilgrims.",
    duracion: "Full day or weekend.",
    comoMoverse: "The historic quarter is walkable; a tourist bus connects the main points of interest on one-hour routes.",
    itinerario: [
      { momento: "Morning", actividad: "National Casa del Acuerdo Museum and the Rafael de Aguiar Municipal Theater." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Sanctuary of the Virgen del Rosario and the Paraná riverside." },
    ],
    otrosAtractivos: ["National Casa del Acuerdo Museum, where the 1852 pact was signed", "Sanctuary of the Virgen del Rosario de San Nicolás", "Rafael de Aguiar Regional Forest and Botanical Park", "El Arenal, a beach and water sports area"],
    eventos: ["Anniversary of the Acuerdo de San Nicolás, May 31", "Pilgrimages to the Virgen del Rosario, year-round"],
    dondeComer: ["Fish restaurants along the riverside", "Bars and cafés in the historic center"],
    dondeAlojarse: ["Hotels downtown", "Pilgrim lodging near the sanctuary"],
    tips: ["The tourist bus departs from Plaza Mitre on three daily schedules", "Book accommodation ahead if your visit coincides with a pilgrimage date", "The Casa del Acuerdo has free admission"],
    presupuesto: "Low to mid-range: the main historic and religious sites have free admission.",
  },
  "San Miguel del Monte": {
    nota: "A lagoon five blocks from downtown, and the Rosas Ranch.",
    historia: "San Miguel del Monte was founded in 1779 as one of the forts along the Buenos Aires frontier line, under the name Guardia del Monte, and became the area's most important military post around 1780 to hold off raids from indigenous peoples. During Juan Manuel de Rosas' government, the area played a major political and military role through the Colorados del Monte, rural militias loyal to the Restorer. That connection survives today in the Rosas Ranch, moved by special truck from the Los Cerrillos estancia to the town center, in what is remembered as the only relocation of a building of this kind in South America. Today San Miguel del Monte is above all synonymous with its lagoon, which, unlike other lagoons in the province, sits just five blocks from downtown.",
    datoCurioso: "Juan Manuel de Rosas' ranch house wasn't built in town: it was moved whole by truck from the Los Cerrillos estancia, 30 km away, in what's considered the only relocation of a building of this kind in all of South America.",
    comoLlegar: "Ricchieri highway, Ezeiza-Cañuelas highway, and then Route 3, about 1h50 by car; buses from Retiro Terminal also available.",
    cuandoIr: "Year-round; spring and summer for water sports on the lagoon.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; the lagoon is just five blocks away, so no car is needed to reach the riverside.",
    itinerario: [
      { momento: "Morning", actividad: "Juan Manuel de Rosas Ranch and the Guardia del Monte Museum." },
      { momento: "Midday", actividad: "Country-style lunch or barbecue by the lagoon." },
      { momento: "Afternoon", actividad: "Laguna de Monte riverside, kayaking or a boat ride." },
    ],
    otrosAtractivos: ["Laguna de Monte, 686 hectares, five blocks from downtown", "Juan Manuel de Rosas Ranch", "Guardia del Monte Municipal Museum", "Paseo de los Artesanos craft market"],
    eventos: ["Seasonal water sports activities on the lagoon", "Craft fairs along the riverside"],
    dondeComer: ["Steakhouses and restaurants facing the lagoon", "General stores and country pulperías"],
    dondeAlojarse: ["Cabins and inns near the riverside", "Campsites by the lagoon"],
    tips: ["A full lap around the lagoon is over 10 km, great for biking", "Book accommodation ahead on long weekends", "The Guardia del Monte Museum is open Thursday through Sunday and holidays"],
    presupuesto: "Low to mid-range: access to the lagoon and a walk around town are free, food and any water activity are the main expense.",
  },
  "Ramallo": {
    nota: "River beaches, a romantic castle, and the border with Entre Ríos.",
    historia: "The Ramallo district was created in 1864 from land split off from San Nicolás, San Pedro, Arrecifes, and Pergamino, at the northeastern edge of the province, on the banks of the Paraná River. It owes its name to Bartolomé Ramallo, one of the area's first settlers. Twenty kilometers from downtown, the poet Rafael Obligado, author of the gauchesco poem \"Santos Vega,\" built a castle in the early 20th century as a tribute to his wife, Isabel Gómez Langenheim, now one of the district's great heritage attractions. Over time, Ramallo developed a strong small-scale nautical tourism infrastructure thanks to its sandy beaches on the Paraná. Today it combines that river-town profile with bluffs, waterfalls, and an intense outdoor lifestyle.",
    datoCurioso: "The Castillo de Obligado, 20 km from downtown, was a personal project of poet Rafael Obligado as a romantic tribute to his wife, not a commission from the government or another wealthy family.",
    comoLlegar: "Route 9, about 3 hours by car.",
    cuandoIr: "Summer for the river beaches; year-round for the historical heritage.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for the Castillo de Obligado and the farther-out beaches.",
    itinerario: [
      { momento: "Morning", actividad: "Arturo Jauretche Port promenade, with views of the Paraná." },
      { momento: "Midday", actividad: "Lunch at the Viva el Río crafts promenade." },
      { momento: "Afternoon", actividad: "Castillo de Obligado and the Paraná beaches." },
    ],
    otrosAtractivos: ["Castillo de Obligado, built by poet Rafael Obligado", "Municipal and Costa Pobre beaches", "Club Independiente waterfall", "Lechiguanas Islands"],
    eventos: ["Summer nautical festivals", "Craft fairs on the coastal promenade"],
    dondeComer: ["Viva el Río Leandro Mansilla food promenade", "Steakhouses and fish markets along the coast"],
    dondeAlojarse: ["Cabins and lodging near the riverside", "Camping at the municipal beaches"],
    tips: ["Combine with San Nicolás or San Pedro, both very close by", "Bring fishing gear or rent it at the nautical club", "The Castillo de Obligado can be seen from outside; ask about guided tours of the interior"],
    presupuesto: "Low to mid-range.",
  },
  "Salto": {
    nota: "A waterfall, the country's first hydraulic mill, and tango.",
    historia: "The town was born in the mid-18th century, when Captain Juan de San Martín established the Guardia Avanzada del Salto to hold back indigenous advances in the area, joined in 1752 by the \"La Invencible\" Blandengues Company. The name comes from a waterfall formed by rock outcrops on the river of the same name, which downstream becomes the Arrecifes River. During the 19th and 20th centuries a major agricultural and industrial activity developed, of which the ruins of what was the country's first hydraulic mill are still preserved. Today Salto combines that heritage with a quiet small-town feel, religious tradition, and a strong tango identity.",
    datoCurioso: "The ruins of the Molino Quemado, next to the waterfall that gives the town its name, belonged to Argentina's first hydraulic mill, which once exported flour to other countries.",
    comoLlegar: "Route 7 or Route 8, about 2h30 by car.",
    cuandoIr: "Year-round.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for nearby train stations and rural roads.",
    itinerario: [
      { momento: "Morning", actividad: "Waterfall and Molino Quemado ruins." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Roberto Firpo Tango Museum and the Municipal Bathing Area." },
    ],
    otrosAtractivos: ["Molino Quemado ruins, the country's first hydraulic mill", "Roberto Firpo Tango Museum", "Rincón de Historia Museum", "Municipal riverside bathing area"],
    eventos: ["Tributes to Roberto Firpo, local tango composer", "Patron saint festivals"],
    dondeComer: ["Restaurants downtown", "Eateries by the municipal bathing area"],
    dondeAlojarse: ["Hotels and lodging downtown", "Cabins in nearby rural areas"],
    tips: ["The waterfall and the mill ruins face each other, a good photo stop", "Combine with Arrecifes or Rojas if you have extra time", "A good stop on the way to the northwest of the province"],
    presupuesto: "Low to mid-range.",
  },
  "Arrecifes": {
    nota: "Cradle of motorsport champions and an immigrant monument unique in Latin America.",
    historia: "The first fort in Arrecifes was built in 1739 next to the river of the same name, at a crossroads of colonial routes in the northeastern part of the province. The town grew during the wars of independence and became an official district in 1901. Throughout the 20th century it earned the nickname \"Cradle of Motorsport Champions,\" officially declared by the provincial Legislature, thanks to local-born drivers like José Froilán González, the first Latin American driver to win a Formula 1 Grand Prix. Today Arrecifes combines that motorsport profile with a municipal riverside area and a historic heritage centered on its main square.",
    datoCurioso: "The Immigrant Monument in the main square, by Argentine sculptor Leo Vinci, stands over 7 meters tall and is unique of its kind in all of Latin America.",
    comoLlegar: "Route 8, kilometer 176, about 2h30 by car.",
    cuandoIr: "Spring and summer for river activities.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; the riverside area and circuit are just a few blocks from the town center.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Bartolomé Mitre, the Immigrant Monument, and San José de los Arrecifes Church." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Municipal riverside area, the Old Mill ruins, and the Tajamar dam." },
    ],
    otrosAtractivos: ["Ruins of the Old flour Mill and its dam (the Tajamar), on the Arrecifes River", "José Froilán González Automobile Museum", "Immigrant Monument, over 7 meters tall", "Riverside circuit for canoeing and kayaking"],
    eventos: ["Tributes to local motorsport drivers", "Seasonal nautical activities at the riverside area"],
    dondeComer: ["Restaurants downtown", "Eateries by the municipal riverside area"],
    dondeAlojarse: ["Cabins and lodging downtown", "Camping by the river"],
    tips: ["The riverside circuit (bathing area, mill ruins, Tajamar) can be toured in a half-day outing", "A good stop on the way to Salto or San Antonio de Areco", "Motorsport fans can look for local drivers' graves in the cemetery"],
    presupuesto: "Low to mid-range.",
  },
  "Rojas": {
    nota: "The enigmatic Casa Octogonal, a 19th-century rural fortress.",
    historia: "The Rojas district was founded in 1777 by order of viceroy Vértiz, in a frontier area meant to secure the territory against indigenous peoples. In that context, in the rural area of La Rojera, the so-called Casa Octogonal was built: an eight-sided fortress with thick walls and only two doors, designed as a refuge against raids. Over the decades, the district became a quiet farming area in the northwestern part of the province, crossed by the Rojas River. In recent years, the municipality has promoted that river for active tourism, with kayak trips and outdoor activities.",
    datoCurioso: "The Casa Octogonal, 10 km north of the city, has eight sides, thick walls, small windows, a well in the center, and only two doors (north and south): a design meant as a defensive bunker rather than a home.",
    comoLlegar: "Route 188, about 3 hours by car.",
    cuandoIr: "Spring and fall for kayak trips on the Rojas River.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car or mountain bike helps for the Casa Octogonal, in a rural area.",
    itinerario: [
      { momento: "Morning", actividad: "Historic center and Casa Casco Museum." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Casa Octogonal (viewed from the road, respecting private property) or a kayak trip on the Rojas River." },
    ],
    otrosAtractivos: ["Casa Octogonal, in the rural area of La Rojera", "Rafael Obligado, a nearby town officially declared a Tourist Village", "Rojas River, for kayaking and outdoor sports", "Local Museum and Historical Archive"],
    eventos: ["Kayak trips on the Rojas River, seasonal", "Patron saint festivals, San Francisco de Asís"],
    dondeComer: ["Restaurants downtown", "Country eateries in the surrounding area"],
    dondeAlojarse: ["Hotels and lodging downtown", "Nearby rural accommodations"],
    tips: ["The Casa Octogonal is on private property and badly deteriorated: best viewed from the road, without entering", "Combine with Salto or Arrecifes if you have extra time", "Bring a mountain bike if you want to explore the rural area"],
    presupuesto: "Low to mid-range.",
  },
  "Bragado": {
    nota: "A lagoon, early-20th-century architecture, and the National Horse Festival.",
    historia: "Bragado developed from the late 19th century as a service center for a large farming area in the western part of the province, with a strong architectural profile still preserved in its Municipal Palace and the Santa Rosa de Lima church. Tenor Florencio Constantino, touring the country in the early 20th century, was so grateful for the town's hospitality that he had the Cultural Complex that bears his name built at his own expense, opened in 1912. Over time, Bragado developed a strong equestrian tradition that led it to host the National Horse Festival. Today it combines that architectural heritage with Parque San Martín and its lagoon, the city's great green space.",
    datoCurioso: "The Florencio Constantino Cultural Complex, opened in 1912, was a gift from the Italian-Argentine tenor himself to the city, in gratitude for the warmth with which he was received during a tour.",
    comoLlegar: "Route 5, about 3h30 by car.",
    cuandoIr: "December for the National Horse Festival; year-round for the rest of the attractions.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car or bike helps for Parque San Martín and the lagoon.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Palace, Santa Rosa de Lima church, and the Municipal History Museum." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Parque San Martín and the Bragado Lagoon." },
    ],
    otrosAtractivos: ["Parque San Martín, 320 hectares, next to the Bragado Lagoon", "Florencio Constantino Cultural Complex", "Municipal History Museum, in an English mansion from 1900", "Historic train station"],
    eventos: ["National Horse Festival, December"],
    dondeComer: ["Traditional steakhouses and restaurants downtown", "Eateries by Parque San Martín"],
    dondeAlojarse: ["Hotels downtown", "Cabins near the park"],
    tips: ["Book accommodation ahead for the National Horse Festival", "The architectural tour downtown can be done with a municipal guide, ask about available days", "A good stop on the way to Trenque Lauquen or Pehuajó"],
    presupuesto: "Low to mid-range.",
  },
  "Los Toldos": {
    nota: "Eva Perón's childhood, Mapuche heritage, and Gouda cheese.",
    historia: "Los Toldos was born in the late 19th century around a Western Railway station, on land where the Mapuche tribe led by cacique Coliqueo had settled decades earlier, giving the place its name. In 1908 the General Viamonte district was created, in honor of an independence hero, though the seat city kept the popular name Los Toldos. The town gained national relevance as the place where Eva Duarte, later Eva Perón, spent part of her childhood, in a humble dirt-floor house that is now a museum. In the mid-20th century, the arrival of the Dutch Doeswijk family brought the recipe for Gouda cheese, which over time became another distinctive feature of the district.",
    datoCurioso: "The house where Eva Perón lived part of her childhood was declared a National Historic Monument in 2002, and in 2019, for the centennial of her birth, the current Museo Provincial Casa Evita was built around it.",
    comoLlegar: "Route 7 and then provincial routes, about 4 hours by car.",
    cuandoIr: "October for the Gouda Cheese Festival; year-round for the rest of the attractions.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Estancia La Unión and the Benedictine monastery.",
    itinerario: [
      { momento: "Morning", actividad: "Museo Provincial Casa Evita, Eva Perón's birthplace." },
      { momento: "Midday", actividad: "Lunch with local products, including Gouda cheese." },
      { momento: "Afternoon", actividad: "Mapuche Cultural House and the Santa María de Los Toldos Benedictine Monastery." },
    ],
    otrosAtractivos: ["Museo Provincial Casa Evita, Eva Perón's birthplace", "Mapuche Cultural House, with the legacy of cacique Coliqueo", "Santa María de Los Toldos Benedictine Monastery", "Gouda cheese route, of Dutch tradition"],
    eventos: ["Gouda Cheese Festival, October", "Mapuche New Year, June 27-28"],
    dondeComer: ["Restaurants and cheese shops with local products", "Country eateries in the surrounding area"],
    dondeAlojarse: ["Hotels and lodging downtown", "Guesthouse at the Benedictine monastery"],
    tips: ["Book the Museo Casa Evita visit ahead, guided tours are usually available", "Local Gouda cheese makes a good souvenir", "It's a long trip, best planned as a full weekend"],
    presupuesto: "Low to mid-range.",
  },
  "Florentino Ameghino": {
    nota: "A quiet town that honors the great Argentine paleontologist.",
    historia: "The town was founded in 1910 on land that until a few decades earlier had been territory of indigenous peoples led by cacique Calfulcurá, at the northwestern edge of the province. It took its name in honor of Florentino Ameghino, the Argentine naturalist and paleontologist who revolutionized the study of South American fossils and whose findings in the region still draw researchers today. The arrival of Spanish and Italian immigrants left its mark on institutions like the Italian Society, now a cultural center and library. Claimed by a popular movement since 1912, the district of the same name wasn't created until 1991, almost eighty years later. Today Florentino Ameghino is a quiet town with tree-lined streets, with rural life as its main economic driver.",
    datoCurioso: "The Florentino Ameghino district took almost 80 years to be created after the first popular petition in 1912: it only became independent from General Pinto in 1991, by a law of the provincial Legislature.",
    comoLlegar: "Route 188, about 5h30 by car.",
    cuandoIr: "Spring and fall.",
    duracion: "Half a day, or a stop on a longer trip.",
    comoMoverse: "Downtown is walkable.",
    itinerario: [
      { momento: "Morning", actividad: "Estación Hesley and the Health Circuit." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Local museum and the Spanish Society building." },
    ],
    otrosAtractivos: ["Estación Hesley, an old train station", "Health Circuit, a tree-lined and lit walking path", "Italian Society, now a cultural center and library", "Municipal amphitheater, with summer shows"],
    eventos: ["Summer shows at the municipal amphitheater"],
    dondeComer: ["Restaurants and eateries downtown"],
    dondeAlojarse: ["Lodging downtown"],
    tips: ["It's a long trip, best combined with Trenque Lauquen or another western destination", "A good spot for quiet walks along the Health Circuit", "Check the local museum's hours before going"],
    presupuesto: "Low.",
  },
  "Marcos Paz": {
    nota: "National Capital of Prosciutto and nature reserves just 50 km from CABA.",
    historia: "The Marcos Paz district formed in the late 19th century on estancia land in the western part of the province, taking its name in honor of Argentine politician and diplomat Marcos Paz. Its proximity to Buenos Aires and favorable climate made it, for much of the 20th century, an area of country homes and weekend houses for families from the capital. The construction of the Ingeniero Roggero reservoir, on the streams that form the Reconquista River, added a natural attraction that is still the district's great green lung. Over time, artisanal cured meat production, especially prosciutto, became Marcos Paz's main food identity, now officially promoted as its National Capital.",
    datoCurioso: "Marcos Paz is officially recognized as the National Capital of Prosciutto, thanks to a cured-meat tradition that combines European immigrant heritage with the area's pork production.",
    comoLlegar: "Provincial Route 40, about 50 minutes by car.",
    cuandoIr: "Spring and fall for outdoor activities.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for the Roggero Reservoir and the estancias.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Park and Marcos Paz Lake." },
      { momento: "Midday", actividad: "Lunch with prosciutto and local artisanal cured meats." },
      { momento: "Afternoon", actividad: "Ingeniero Roggero Reservoir or Estancia Santa Rita." },
    ],
    otrosAtractivos: ["Ingeniero Roggero Reservoir, on the Reconquista River", "Estancia Santa Rita, with guided tours", "Municipal Park and Marcos Paz Lake", "Artisanal producers of prosciutto and cured meats"],
    eventos: ["Craft fairs and music and dance festivals, year-round"],
    dondeComer: ["Restaurants and delicatessens specializing in prosciutto", "Country eateries"],
    dondeAlojarse: ["Lodging downtown", "Estancias with accommodation"],
    tips: ["Buy artisanal prosciutto straight from local producers", "The Roggero Reservoir is a good option for fishing and bike rides", "Very close to CABA, ideal for a single-day outing"],
    presupuesto: "Low to mid-range.",
  },
  "Carlos Casares": {
    nota: "National Cradle of the Sunflower and the Fort Trails on horseback.",
    historia: "The Carlos Casares district formed in the late 19th century in an area that had been a frontier with indigenous peoples, where forts and stories of historic clashes are still preserved. It took its name in honor of Carlos Casares, a military officer and politician who took part in the wars of independence. It received Spanish, Italian, and Jewish immigrants, whose coexistence is represented in the district's own coat of arms. Over the decades it became a farming and ranching region, with sunflowers as its signature crop, which made it the permanent host of the National Sunflower Festival. Today it combines that rural profile with a historic circuit called \"Huellas de Fortines\" (Fort Trails), which covers 100 kilometers of the old western Buenos Aires frontier on horseback or by carriage.",
    datoCurioso: "The \"Huellas de Fortines\" circuit covers 100 kilometers on horseback or by carriage, with stories that recreate the clashes between indigenous peoples and the military that defined the province's old Western Frontier.",
    comoLlegar: "Route 5, about 4 hours by car.",
    cuandoIr: "Sunflower harvest season for the national festival; year-round for the rest of the attractions.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Laguna del Val and the forts circuit.",
    itinerario: [
      { momento: "Morning", actividad: "Former Salvat Mill, from 1893, and Teatro Verdi." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Laguna del Val, sport fishing." },
    ],
    otrosAtractivos: ["Former Salvat Mill, from 1893, the district's most historically valuable building", "Teatro Verdi, opened in 1904", "Laguna del Val, for sport fishing", "Parque San Esteban, 90 hectares, with a colonial-style building"],
    eventos: ["National Sunflower Festival", "Provincial Carriage Festival", "Huellas de Fortines, historic horseback trek"],
    dondeComer: ["Restaurants downtown", "Eateries by Parque San Esteban"],
    dondeAlojarse: ["Hotels downtown", "Camping at Parque San Esteban"],
    tips: ["Book ahead if your trip coincides with the National Sunflower Festival", "Bring fishing gear for Laguna del Val", "Check dates for the Huellas de Fortines trek if you want to take part"],
    presupuesto: "Low to mid-range.",
  },
  "25 de Mayo": {
    nota: "Carnival City, with the province's only permanent parade venue.",
    historia: "The 25 de Mayo district was born around Fortín Mulitas, a military post on the old Buenos Aires frontier line, and took its current name in honor of the May Revolution of 1810. The lagoon that gave rise to the town, now known as Laguna Mulitas, became over time the city's great recreational space. Since the mid-20th century, 25 de Mayo developed a strong carnival tradition that led it to build the only permanent parade venue (corsódromo) in Buenos Aires Province, earning it the nickname \"Carnival City.\" Today it combines that festive identity with nature tourism around its lagoons.",
    datoCurioso: "25 de Mayo has the only permanent parade venue in all of Buenos Aires Province, an open-air stage where more than 500 dancers compete each summer for the crown of Provincial Carnival Queen.",
    comoLlegar: "Route 5 and then Route 51, or Route 205 and 63, about 3 hours by car.",
    cuandoIr: "Summer for Carnival; year-round for the lagoons.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; Parque Laguna Mulitas is 12 blocks from downtown, and Laguna de Todos los Santos is 22 km away, a car helps for the latter.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza Mitre, Nuestra Señora del Rosario Church, and the Paula Florido Museum." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Parque Laguna Mulitas, kayaking or pejerrey fishing." },
    ],
    otrosAtractivos: ["Parque Laguna Mulitas, 128 hectares", "Corsódromo, the only one in the province", "Laguna de Todos los Santos, 22 km away", "Carnival Museum"],
    eventos: ["25 de Mayo Carnival, with the crowning of the Provincial Queen", "Open-air cinema at the Isidro Quesada Amphitheater, summer"],
    dondeComer: ["Restaurants downtown", "Buffet and eateries at Parque Laguna Mulitas"],
    dondeAlojarse: ["Hotels downtown", "Camping at Parque Laguna Mulitas"],
    tips: ["Book accommodation ahead for Carnival", "Bring fishing gear for Laguna Mulitas or Laguna de Todos los Santos", "The park has a pool, playground, and boat rentals"],
    presupuesto: "Low to mid-range: access to the lagoon park is free, food and lodging are the main expense.",
  },
  "Bolívar": {
    nota: "Laguna San Luis, the Pulpería Mira Mar, and the site of a key battle of the Conquest of the Desert.",
    historia: "Bolívar was born in 1869 with the construction of Fortín San Carlos, during the frontier's advance toward the western part of the province. Just three years later, in 1872, the Battle of San Carlos was fought near the fort between the troops of General Rivas and those of cacique Calfucurá, one of the most important clashes of the Conquest of the Desert. Over the decades, the city became the center of a large farming and ranching area in the north-central part of the province. In 1884, in the rural area of Mira Mar, the Basque Urrutia family built a pulpería that is still run by their descendants and is today one of the last of its kind still standing in the province. Today Bolívar combines that historical heritage with Laguna San Luis, recently restored as a space for fishing and water sports.",
    datoCurioso: "The Pulpería Mira Mar, founded in 1884 by the Urrutia family and still run by their descendants, keeps its original mud floors and walls, and even the mark of an old knife fight carved into a grate.",
    comoLlegar: "Route 226, about 4h30 by car.",
    cuandoIr: "Year-round; summer for the Municipal Water Park.",
    duracion: "Weekend.",
    comoMoverse: "Downtown is walkable; a car helps for Laguna San Luis and the Pulpería Mira Mar, both in rural areas.",
    itinerario: [
      { momento: "Morning", actividad: "Florentino Ameghino Museum and the historic center." },
      { momento: "Midday", actividad: "Lunch at the Pulpería Mira Mar." },
      { momento: "Afternoon", actividad: "Laguna San Luis, fishing or water sports." },
    ],
    otrosAtractivos: ["Laguna San Luis, 600 hectares, recently restored", "Pulpería Mira Mar, from 1884, in the rural area of the same name", "Parque Las Acollaradas, with a municipal water park", "Monument to those who fell in the Battle of San Carlos, on Route 65"],
    eventos: ["Sports Festival", "Summer music and theater festivals"],
    dondeComer: ["Pulpería Mira Mar, with cold cuts, empanadas, and barbecue", "Traditional restaurants and bars downtown"],
    dondeAlojarse: ["Cabins by Laguna San Luis", "Hotels downtown"],
    tips: ["The Pulpería Mira Mar is in a rural area with no cell signal, a good excuse to disconnect", "Bring fishing or kitesurfing gear for Laguna San Luis", "Combine with Carlos Casares, very close by"],
    presupuesto: "Low to mid-range.",
  },
  "Ensenada": {
    nota: "Subtropical jungle at the gates of La Plata and kilometers of river beaches.",
    historia: "Ensenada was born in the early 18th century around the Barragán family estancia, which gave rise to the name \"Ensenada de Barragán\" by which the area was known for a long time. Its natural bay, sheltered from the wind, made it a key point for navigation from the colonial period on, and over time it became one of the country's most important ports, with a strong industrial and working-class identity. A few minutes from downtown, the Punta Lara Nature Reserve is preserved, 450 hectares of Argentina's southernmost gallery forest, with subtropical species that survived thanks to the river's microclimate. Today Ensenada combines that port and industrial profile with fourteen kilometers of recreational coastline on the Río de la Plata.",
    datoCurioso: "The Punta Lara Nature Reserve is the country's southernmost gallery forest: a fragment of subtropical woodland, with species like laurel and ceibo, that survives thanks to the warmth retained by the Río de la Plata.",
    comoLlegar: "Buenos Aires-La Plata highway and then local avenues, about 50 minutes by car.",
    cuandoIr: "Summer for the beaches; year-round for the Punta Lara Reserve.",
    duracion: "Full day.",
    comoMoverse: "Downtown is walkable; a car helps for the Punta Lara Reserve and the coastal bathing areas.",
    itinerario: [
      { momento: "Morning", actividad: "Punta Lara Nature Reserve, guided tour through the gallery forest." },
      { momento: "Midday", actividad: "Lunch downtown or on the riverside." },
      { momento: "Afternoon", actividad: "Beaches of the Parque Costero, on the Río de la Plata." },
    ],
    otrosAtractivos: ["Punta Lara Nature Reserve, with trails and lookout points", "Free bathing areas along 14 km of coastline", "Isla Paulino, with trails and bird watching", "Port of Ensenada and shipyards"],
    eventos: ["Founding anniversary, with traditional parade", "Beach season, in summer"],
    dondeComer: ["Restaurants and steakhouses on the riverside", "Eateries facing the beaches"],
    dondeAlojarse: ["Hotels in La Plata, very close by", "Camping in the beach area"],
    tips: ["The Punta Lara guided tour lasts an hour and a half, book ahead in peak season", "The Parque Costero beaches are free, with lifeguards in season", "Combine with Berisso or La Plata, both very close by"],
    presupuesto: "Low: the beaches and the reserve are free or very affordable to access.",
  },
  "Magdalena": {
    nota: "Colonial cobblestone streets, river beaches, and a UNESCO biosphere reserve.",
    historia: "The current Magdalena district is part of the land Juan de Garay distributed in 1580 under the name \"Valle de Santa Ana,\" later known as Pago de la Magdalena, one of the oldest jurisdictions in what is now Buenos Aires Province. During the colonial period it functioned as an area of estancias and a required crossing point toward the south of the province, a legacy still visible in its historic center of cobblestone streets and period architecture. In the 20th century it established itself as a popular beach town thanks to its fine sand beaches on the Río de la Plata, without losing the rural, gaucho character of the rest of the district. Together with Punta Indio, much of its territory is part of the Parque Costero del Sur, declared a Biosphere Reserve by UNESCO.",
    datoCurioso: "The Parque Costero del Sur, which Magdalena shares with Punta Indio, was declared a Biosphere Reserve by UNESCO for preserving one of the last remnants of native tala, coronillo, and sombra de toro woodland along the entire coast of the Río de la Plata.",
    comoLlegar: "Buenos Aires-La Plata highway and then Route 11, about 1h30 by car.",
    cuandoIr: "Summer for the beaches; February for the Carnaval del Sur.",
    duracion: "Weekend.",
    comoMoverse: "The historic center is walkable; a car helps for the district's rural villages (Vieytes, General Mansilla) and the Parque Costero del Sur.",
    itinerario: [
      { momento: "Morning", actividad: "Plaza San Martín and the historic center of cobblestone streets." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Beaches at the municipal bathing area or a circuit through the Parque Costero del Sur." },
    ],
    otrosAtractivos: ["Parque Costero del Sur, UNESCO Biosphere Reserve", "Reserva Natural El Destino, privately managed, with more than 200 bird species", "Vieytes, a rural town with a late-19th-century station", "General Mansilla (Estación Bartolomé Bavio), a railway town"],
    eventos: ["Carnaval del Sur, February", "Argentine Flag Butterfly Festival"],
    dondeComer: ["Restaurants and steakhouses at the municipal bathing area", "Pueblo Viejo, in Vieytes, known for its generous portions"],
    dondeAlojarse: ["Hotels and lodging downtown", "Camping in the beach area"],
    tips: ["The Parque Costero del Sur is best toured with a guide, to make the most of the trails and bird watching", "Combine with Punta Indio, which shares the same biosphere reserve", "The district's rural villages (Vieytes, General Mansilla) make a good half-day excursion"],
    presupuesto: "Low to mid-range.",
  },
  "Punta Indio": {
    nota: "Wild freshwater beaches, skies free of light pollution, and ancient archaeological sites.",
    historia: "The Punta Indio district was created in 1994 when it became independent from Magdalena, taking the name of its most representative town, Punta del Indio, though its seat city is Verónica. The area preserves around twenty archaeological sites of indigenous peoples between 1600 and 1800 years old, one of the largest concentrations of this kind in the entire province. Its history is also tied to farming and to the Punta Indio Naval Air Base, and the old Verónica train station, closed in 1978, now serves as a historical museum. Together with Magdalena, much of its territory is part of the Parque Costero del Sur, declared a Biosphere Reserve by UNESCO in 1984 for its exclusive tala woodlands on shell-ridge embankments.",
    datoCurioso: "Punta Indio preserves around twenty archaeological sites of indigenous peoples, between 1600 and 1800 years old, one of the most important concentrations of this kind in all of Buenos Aires Province.",
    comoLlegar: "Buenos Aires-La Plata highway and then Route 11 or Route 36 to Verónica, about 2 hours by car.",
    cuandoIr: "Summer for the beaches; year-round for bird watching and hiking.",
    duracion: "Weekend.",
    comoMoverse: "A car helps: the beaches and reserve trails are spread out and some stretches are shell-paved roads.",
    itinerario: [
      { momento: "Morning", actividad: "Eduardo Barés Punta Indio Historical Museum, in the old Verónica train station." },
      { momento: "Midday", actividad: "Lunch with criollo barbecue." },
      { momento: "Afternoon", actividad: "Playa El Pericón, with the Indio Querandí sculpture, or La Escondida for more quiet." },
    ],
    otrosAtractivos: ["Playa El Pericón, with the Indio Querandí sculpture", "Playa La Escondida, wild and free of light pollution, ideal for stargazing", "Pipinas, a town that grew around the Corcemar cement factory and shell quarries", "Arroyo Villoldo interpretive trail, with more than 280 bird species"],
    eventos: ["Fiesta del Peón de Campo, December"],
    dondeComer: ["Steakhouses and restaurants in Verónica and the beach areas", "Regional product shops in Pipinas"],
    dondeAlojarse: ["Hotel Argentino, from 1934, in Verónica", "Cabins and camping near the beaches"],
    tips: ["La Escondida has no services (restrooms, grills), come prepared", "Keep the car's fuel tank well topped off, there are long stretches of shell-paved road", "The Arroyo Villoldo trail is best at sunrise or sunset for bird watching"],
    presupuesto: "Low to mid-range.",
  },
  "Las Flores": {
    nota: "Cradle of Dakar Rally champions and a lagoon with an intriguing name.",
    historia: "Las Flores was founded in 1839 by decree of Juan Manuel de Rosas, in the center of the province, on the stream of the same name that flows into the Salado River. With the arrival of the railway in the late 19th century it became one of the province's most important rail hubs, with more than 1,200 workers at its workshops and a strong working-class identity around the station. The current Municipal Palace, from 1878, is the work of Italian architect Pedro Petrocchi, who also designed the Nuestra Señora del Carmen church. Over time, Las Flores also became known for its athletes: brothers Marcos and Alejandro Patronelli, both winners of the Dakar Rally in the quad category, were born there. Today it combines that railway and industrial profile with Parque Plaza Montero and its lagoon, the city's great natural attraction.",
    datoCurioso: "Laguna del Difunto Manuel, inside Parque Plaza Montero, owes its curious name to an old popular legend about a man named Manuel who supposedly drowned in its waters.",
    comoLlegar: "Route 3, about 3 hours by car; a train from Constitución is also available.",
    cuandoIr: "Spring and summer for water activities on the lagoon.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; Parque Plaza Montero is 1.5 km away, reachable on foot or by car.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Palace, Nuestra Señora del Carmen church, and the Obelisk." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Parque Plaza Montero and Laguna del Difunto Manuel, canoeing." },
    ],
    otrosAtractivos: ["Parque Plaza Montero and Laguna del Difunto Manuel", "Florentino Ameghino Natural Sciences Museum", "Municipal Botanical Garden", "Historical Museum, in the old jail"],
    eventos: ["Railway and pedestrian street festival", "Seasonal water activities on the lagoon"],
    dondeComer: ["Restaurants and cafés downtown", "Eateries by Parque Plaza Montero"],
    dondeAlojarse: ["Hotels downtown", "Camping at Parque Plaza Montero"],
    tips: ["A good stop on Route 3 on the way to the south of the province or Patagonia", "The Natural Sciences Museum has a little-known paleontological collection worth visiting", "The park's municipal pool is free in summer"],
    presupuesto: "Low.",
  },
  "Maipú": {
    nota: "Laguna Kakel Huincul and a comedy film festival unique in the country.",
    historia: "Maipú developed around Fortín Kakel Huincul, built in 1815 on the shore of the lagoon of the same name to protect the first settlers from raids and serve as a relay post for carts heading south. The town later took the name Maipú in honor of the 1818 battle that sealed Chile's independence. The arrival of Spanish immigrants left its mark on the old Prado Español, now restored as local heritage. Since 2008, Maipú has hosted a comedy film festival unique in the country, bringing together short films from more than a dozen countries. Today it combines that cultural profile with strong rural tourism centered on its lagoon.",
    datoCurioso: "Next to Laguna Kakel Huincul you can still see the so-called \"Indian Cemetery,\" a remnant of the old fort that in 1815 protected settlers from raids.",
    comoLlegar: "Route 2 (Autovía), about 3 hours by car from CABA, or just over 1 hour from Mar del Plata.",
    cuandoIr: "Spring and summer for activities on the lagoon; October for the film festival.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; Laguna Kakel Huincul and the estancias are in rural areas, a car helps.",
    itinerario: [
      { momento: "Morning", actividad: "Municipal Museum, with its carriage courtyard." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Laguna Kakel Huincul, fishing or a walk along the 200-meter pier." },
    ],
    otrosAtractivos: ["Laguna Kakel Huincul, with a pier, camping, and boat storage", "\"La vuelta de Pancho Ramos,\" a horseback ride with barbecue and gaucho campfire", "Old Prado Español, restored as heritage", "Municipal Museum, with a natural sciences room"],
    eventos: ["Maipú Cortos, comedy film festival, October"],
    dondeComer: ["Restaurants downtown", "Eateries and canteen by the lagoon"],
    dondeAlojarse: ["Cabins by Laguna Kakel Huincul", "Estancias with rural tourism"],
    tips: ["Book the \"La vuelta de Pancho Ramos\" horseback ride ahead", "Good combination with Mar del Plata or Balcarce, just over an hour away", "Bring fishing gear for the lagoon"],
    presupuesto: "Low to mid-range.",
  },
  "Castelli": {
    nota: "Laguna La Rosita and the castle of the tragic Felicitas Guerrero.",
    historia: "Castelli developed as a town in the Salado River basin, in an area of estancias in the southeastern part of the province. On Route 2 (Autovía), near the bridge that crosses the Salado, stands Estancia La Raquel, a brightly colored medieval-castle-style building that belonged to the family of Felicitas Guerrero, the famous Buenos Aires heiress murdered in 1872 in a crime of passion still remembered as one of the most resonant episodes of 19th-century Buenos Aires high society. Over time, the town built its identity around Laguna La Rosita, two kilometers from downtown. Today Castelli combines that estancia heritage with sport fishing and the quiet pace of a Pampa Húmeda town.",
    datoCurioso: "Estancia La Raquel, shaped like a medieval castle, belonged to the family of Felicitas Guerrero, the heiress whose 1872 murder by a spurned suitor shocked Buenos Aires society at the time.",
    comoLlegar: "Route 2 (Autovía), about 3h30 by car.",
    cuandoIr: "Spring and fall for fishing; year-round for the estancias.",
    duracion: "Full day or weekend.",
    comoMoverse: "Downtown is walkable; Laguna La Rosita is 2 km away, and the estancias are in rural areas, a car helps.",
    itinerario: [
      { momento: "Morning", actividad: "A walk around downtown and its tree-lined streets." },
      { momento: "Midday", actividad: "Lunch downtown." },
      { momento: "Afternoon", actividad: "Laguna La Rosita, fishing for tararira and catfish, or a bike ride along the riverside." },
    ],
    otrosAtractivos: ["Laguna La Rosita, 500 hectares", "Estancia La Raquel, shaped like a medieval castle, on the Salado River", "El Calvario, next to the lagoon", "Historic estancia houses along the Salado River"],
    eventos: ["Sport fishing meetups at Laguna La Rosita and the Salado River"],
    dondeComer: ["Restaurants downtown", "Eateries by Laguna La Rosita"],
    dondeAlojarse: ["Estancias with rural tourism", "Hotels like La Escondida, downtown"],
    tips: ["Estancia La Raquel is best seen from the bridge over the Salado, on Route 2", "Bring fishing gear for Laguna La Rosita", "A good stop on the way to Mar del Plata"],
    presupuesto: "Low to mid-range.",
  },
};

function textoDestino(d) {
  if (idioma === "es") return d;
  const traduccion = DESTINOS_EN[d.nombre];
  return traduccion ? { ...d, ...traduccion } : d;
}

const CATEGORIAS = [
  { id: "todas", label: "Todas", icon: "map-pin" },
  { id: "playa", label: "Playa", icon: "waves" },
  { id: "sierra", label: "Sierra", icon: "mountain" },
  { id: "rio", label: "Río", icon: "sailboat" },
  { id: "campo", label: "Campo", icon: "trees" },
  { id: "pueblo", label: "Pueblo", icon: "landmark" },
  { id: "ciudad", label: "Ciudad", icon: "gauge" },
];

const CATEGORIA_LABELS = {
  es: { todas: "Todas", playa: "Playa", sierra: "Sierra", rio: "Río", campo: "Campo", pueblo: "Pueblo", ciudad: "Ciudad" },
  en: { todas: "All", playa: "Beach", sierra: "Hills", rio: "River", campo: "Countryside", pueblo: "Town", ciudad: "City" },
};

// --- Idioma de la interfaz (español / inglés) --------------------------------
const IDIOMA_KEY = "destinos-ba-idioma";

function cargarIdioma() {
  try {
    const guardado = localStorage.getItem(IDIOMA_KEY);
    if (guardado === "en" || guardado === "es") return guardado;
  } catch (err) {
    console.warn("No se pudo leer el idioma guardado:", err);
  }
  return "es";
}

let idioma = cargarIdioma();

const TEXTOS = {
  es: {
    eyebrow: "Provincia de Buenos Aires",
    tituloH1: "¿A cuántos km<br />querés llegar?",
    subtituloCaba: "Elegí una distancia desde Buenos Aires (CABA) y descubrí pueblos y ciudades turísticas dentro de ese radio.",
    subtituloUbicacion: "Elegí una distancia desde tu ubicación actual y descubrí pueblos y ciudades turísticas dentro de ese radio.",
    ubicacionUsar: "Usar mi ubicación en vez de CABA",
    ubicacionUsando: "Usando tu ubicación (volver a CABA)",
    ubicacionBuscando: "Buscando tu ubicación...",
    ubicacionSinSoporte: "Tu navegador no permite acceder a la ubicación.",
    ubicacionNota: "Las distancias de la lista son en línea recta desde donde estás; al abrir un destino, en el mapa o en el itinerario se calcula la ruta real por calles.",
    ubicacionError: "No pudimos acceder a tu ubicación. Revisá los permisos del navegador e intentá de nuevo.",
    buscadorPlaceholder: "Buscar por nombre o atractivo (ej: termas, vino, laguna)...",
    buscarAria: "Buscar",
    panelDistanciaMax: "Distancia máxima",
    favoritos: "Favoritos",
    visitados: "Visitados",
    sorpresa: "Sorpréndeme",
    sorpresaSinResultados: "No hay destinos con estos filtros",
    resumenBtn: "Mi resumen",
    vistaLista: "Lista",
    vistaMapa: "Mapa",
    ordenarPor: "Ordenar por",
    ordenDistancia: "Distancia",
    ordenAlfabetico: "Alfabético",
    ordenCategoria: "Categoría",
    contadorPlural: "destinos encontrados",
    contadorSingular: "destino encontrado",
    vacioBusqueda: (q) => `No encontramos ningún destino que coincida con "${q}" dentro de los filtros elegidos.`,
    vacioFavoritos: "Todavía no marcaste ningún destino como favorito.",
    vacioVisitados: "Todavía no marcaste ningún destino como visitado.",
    vacioGenerico: "No hay destinos en ese radio con el filtro elegido. Probá aumentar la distancia.",
    compartirFiltrosBtn: "Compartir estos filtros",
    compartirFiltrosCopiado: "Copiado",
    footerCaba: "Distancias aproximadas por ruta desde CABA · Datos de referencia, verificá antes de viajar.",
    footerUbicacion: "Distancias en línea recta desde tu ubicación; al abrir un destino, el mapa o el itinerario se calcula la ruta real por calles · Datos de referencia, verificá antes de viajar.",
    offline: "Estás sin conexión: el mapa, las fotos y el clima no van a cargar, pero la lista de destinos sigue funcionando con lo que ya tenías guardado.",
    tuUbicacion: "Vos",
    tuUbicacionTexto: "tu ubicación",
    caba: "CABA",
    kmDesdeCaba: (km) => `${km} km desde CABA`,
    kmLineaRecta: (km) => `${km} km en línea recta desde tu ubicación`,
    kmPorRuta: (km) => `${km} km por ruta`,
    tiempoEnAuto: (t) => `~${t} en auto`,
    modalHistoria: "Un poco de historia",
    modalDatoCurioso: "Dato curioso",
    modalComoLlegar: "Cómo llegar",
    modalComoMoverse: "Cómo moverse en el lugar",
    modalCuandoIr: "Cuándo ir",
    modalDuracion: "Duración sugerida",
    modalItinerario: "Itinerario sugerido",
    modalOtrosAtractivos: "Otros atractivos",
    modalEventos: "Eventos y fechas especiales",
    modalDondeComer: "Dónde comer",
    modalDondeAlojarse: "Dónde alojarse",
    modalTips: "Tips locales",
    modalPresupuesto: "Presupuesto estimado",
    modalClima: "Clima actual",
    modalCosto: "Costo estimado de combustible y peajes",
    modalNotaPersonal: "Tu nota personal",
    notaPersonalPlaceholder: "¿Qué te pareció? Anotá lo que quieras recordar de tu visita...",
    yaVisitaste: "Ya lo visitaste",
    visitadoBadge: "Visitado",
    favAgregar: "Agregar a favoritos",
    favQuitar: "Quitar de favoritos",
    visitadoMarcar: "Marcar como visitado",
    visitadoQuitar: "Quitar marca de visitado",
    itinerarioAgregar: "Agregar al itinerario",
    itinerarioQuitar: "Quitar del itinerario",
    compararAgregar: "Agregar a comparación",
    compararQuitar: "Quitar de la comparación",
    copiarGuia: "Copiar guía",
    compartirGuia: "Compartir guía",
    cerrarGuia: "Cerrar guía",
    climaSinDatos: "Sin datos",
    mapaRutaCalculando: "Calculando ruta real...",
    mapaRutaError: "No se pudo calcular la ruta real, se muestra la línea recta.",
    mapaRutaCerrar: "Ocultar ruta",
    rutaFuente: "Ruta calculada por OSRM (datos de OpenStreetMap)",
    itinerarioRutaReal: "Ruta real por calles",
    itinerarioCalculandoRuta: "Calculando ruta real por calles...",
    itinerarioRutaSinDatos: "No se pudo calcular la ruta real; los tramos y el total muestran distancia en línea recta.",
    navegarGoogleMaps: "Google Maps",
    navegarWaze: "Waze",
    navegarNota: "Abre la app de navegación con indicaciones desde tu ubicación actual.",
    modalCercanos: "Cerca de acá también podés visitar",
    cercanosNota: "Distancia en línea recta entre destinos.",
    nuevoBadge: "Nuevo",
    backupBtn: "Mis datos",
    backupTitulo: "Mis datos",
    backupDescripcion: "Tus favoritos, visitados, notas e itinerario viven solo en este navegador. Si cambiás de celular o borrás el caché, se pierden. Hacé una copia para guardarla o pasarla a otro dispositivo.",
    backupExportar: "Exportar mis datos",
    backupImportar: "Importar desde un archivo",
    backupNota: "El archivo se descarga a tu dispositivo; no se manda a ningún servidor.",
    backupImportarExito: "Datos importados con éxito.",
    backupImportarError: "No se pudo leer el archivo. Verificá que sea un backup válido de esta app.",
    backupImportarConfirmar: "Esto va a reemplazar tus favoritos, visitados, notas e itinerario actuales por los del archivo. ¿Continuar?",
    costoPrecio: "Precio nafta (ARS/litro)",
    costoConsumo: "Consumo (km/litro)",
    costoPeaje: "Peaje estimado (ARS cada 100 km)",
    costoVelocidad: "Velocidad promedio de ruta (km/h)",
    costoPersonas: "Cantidad de personas",
    costoPorPersona: (n) => `Por persona (÷${n})`,
    verQr: "Ver código QR",
    qrDescripcion: "Escaneá este código con otro celu para abrir esta guía directamente, sin necesidad de mandar el link por wifi o datos.",
    qrDescargar: "Descargar imagen",
    qrCerrar: "Cerrar",
    imprimirGuia: "Imprimir guía",
    sugerirBtn: "Sugerir un destino",
    sugerirTitulo: "Sugerir un destino",
    sugerirDescripcion: "¿Falta algún pueblo o ciudad de la provincia? Contanos cuál y por qué, y lo vamos a revisar para ver si lo sumamos.",
    sugerirNombreLabel: "Nombre del lugar",
    sugerirNombrePlaceholder: "Ej: Chascomús, Villa Gesell...",
    sugerirMotivoLabel: "¿Por qué te parece un buen destino? (opcional)",
    sugerirMotivoPlaceholder: "Algo que sepas del lugar, un atractivo puntual, etc.",
    sugerirEnviar: "Sugerir en GitHub",
    sugerirCancelar: "Cancelar",
    sugerirNota: "Se abre GitHub en otra pestaña, con un borrador ya armado. Hace falta tener cuenta de GitHub para enviarlo.",
    sugerirCuerpoTitulo: "Lugar sugerido",
    sugerirCuerpoMotivo: "Por qué",
    sugerirCuerpoOrigen: "Sugerido desde la app",
    tamanoNormal: "Tamaño de letra normal (tocar para agrandar)",
    tamanoGrande: "Tamaño de letra grande (tocar para agrandar más)",
    tamanoMuyGrande: "Tamaño de letra muy grande (tocar para volver al normal)",
    buenMomento: "Buen momento para ir",
    costoNota: (km) => `Estimado de ida y vuelta (${km} km en total). Ajustá los valores según tu vehículo y los precios del día; los peajes y el tiempo real varían mucho según la ruta y el tránsito.`,
    costoCombustible: "Combustible",
    costoPeajes: "Peajes",
    costoTotal: "Total estimado",
    costoTiempoIda: "Tiempo de manejo (solo ida)",
    costoTiempoTotal: "Tiempo de manejo (ida y vuelta)",
    itinerarioBarraTexto: (n) => `${n} ${n === 1 ? "destino elegido" : "destinos elegidos"} para el itinerario`,
    itinerarioVerBtn: "Ver itinerario",
    itinerarioMinimo: "Elegí al menos 2",
    itinerarioVaciarAria: "Vaciar selección de itinerario",
    itinerarioMax: (n) => `Podés armar itinerarios de hasta ${n} paradas. Sacá alguna para agregar otra.`,
    itinerarioTitulo: "Tu itinerario sugerido",
    itinerarioDescripcion: (origenNombre) => `Orden calculado para minimizar la distancia total en línea recta, empezando desde ${origenNombre}. Los tramos y el total de abajo se actualizan solos con la ruta real por calles apenas se calcula.`,
    itinerarioDia: (n) => `Día ${n}`,
    itinerarioParadas: (n) => `${n} paradas`,
    itinerarioDistanciaTotal: "Distancia total estimada",
    itinerarioTiempoTotal: "Tiempo de manejo estimado",
    kmLineaRectaCorto: "km en línea recta",
    compararBarraTexto: (n) => `${n} ${n === 1 ? "destino elegido" : "destinos elegidos"} para comparar`,
    compararVerBtn: "Comparar",
    compararMinimo: "Elegí 1 más",
    compararVaciarAria: "Vaciar selección de comparación",
    compararMax: (n) => `Solo podés comparar hasta ${n} destinos a la vez. Sacá uno primero (desde la barra de abajo) para elegir otro.`,
    compararComparando: (n) => `Comparando ${n} destinos`,
    compararCategoria: "Categoría",
    compararDistancia: "Distancia",
    compararTiempo: "Tiempo en auto",
    compararDuracion: "Duración sugerida",
    compararCosto: "Costo estimado (ida y vuelta)",
    compararPresupuesto: "Presupuesto",
    compararItinerario: "Itinerario sugerido",
    resumenTitulo: "Mi resumen",
    resumenNota: (v, t) => `Visitaste ${v} de ${t} destinos cargados en la app.`,
    resumenPorCategoria: "Por categoría",
    resumenFaltantes: (lista) => `Todavía no visitaste ningún destino de: ${lista}.`,
    resumenCompleto: "¡Ya visitaste al menos un destino de cada categoría!",
    resumenTuProgreso: "Tu progreso",
    linkFiltrosResumen: (resumen) => `Mirá esto en Destinos Buenos Aires: ${resumen}`,
    linkFiltrosMenosDe: (km) => `menos de ${km} km`,
    linkFiltrosCon: (q) => `con "${q}"`,
    guiaSeparador: "— Destinos Buenos Aires (guía por distancia)",
    guiaHistoria: "HISTORIA",
    guiaDato: "DATO CURIOSO",
    guiaComoLlegar: "Cómo llegar:",
    guiaComoMoverse: "Cómo moverse:",
    guiaCuandoIr: "Cuándo ir:",
    guiaDuracion: "Duración sugerida:",
    guiaItinerario: "ITINERARIO SUGERIDO",
    guiaOtrosAtractivos: "OTROS ATRACTIVOS",
    guiaEventos: "EVENTOS Y FECHAS ESPECIALES",
    guiaDondeComer: "DÓNDE COMER",
    guiaDondeAlojarse: "DÓNDE ALOJARSE",
    guiaTips: "TIPS LOCALES",
    guiaPresupuesto: "PRESUPUESTO ESTIMADO:",
    cambiarAIngles: "Switch to English",
    cambiarATemaClaro: "Cambiar a tema claro",
    cambiarATemaOscuro: "Cambiar a tema oscuro",
    pageTitle: "Destinos Buenos Aires - Guía por distancia",
    pageDescription: "Encontrá pueblos y ciudades turísticas de la provincia de Buenos Aires según la distancia que quieras viajar.",
    bienvenidaTitulo: "¿Desde dónde calculamos las distancias?",
    bienvenidaTexto: "Podemos usar tu ubicación actual en vez de siempre calcular desde CABA. Las distancias se estiman en línea recta y se refinan con la ruta real por calles al abrir cada destino. Podés cambiarlo cuando quieras desde el botón de ubicación.",
    bienvenidaUsar: "Usar mi ubicación",
    bienvenidaCaba: "Usar CABA",
    tutorialSaltar: "Saltear",
    tutorialSiguiente: "Siguiente",
    tutorialEmpezar: "Empezar",
    tutorialAnterior: "Atrás",
    tutorialPasoDe: (n, total) => `${n} de ${total}`,
    tutorial1Titulo: "¡Bienvenido!",
    tutorial1Texto: "Elegí una distancia desde CABA (o desde tu ubicación) y descubrí pueblos y ciudades de toda la provincia de Buenos Aires.",
    tutorial2Titulo: "Buscá y filtrá",
    tutorial2Texto: "Buscá por nombre o por atractivo (como \"termas\" o \"vino\"), y combinalo con los filtros de categoría y el slider de distancia.",
    tutorial3Titulo: "Lista o mapa",
    tutorial3Texto: "Mirá los resultados en lista o en un mapa real. Cada guía trae clima, una foto, el itinerario sugerido y el costo estimado del viaje.",
    tutorial4Titulo: "Guardá tus favoritos",
    tutorial4Texto: "Marcá los que más te gusten con la estrella, tachá los que ya visitaste, y dejales tu propia nota y puntaje.",
    tutorial5Titulo: "Armá tu viaje",
    tutorial5Texto: "Elegí varios destinos para armar un itinerario de varios días, o compará dos lugares lado a lado antes de decidir.",
  },
  en: {
    eyebrow: "Buenos Aires Province",
    tituloH1: "How many km<br />do you want to go?",
    subtituloCaba: "Pick a distance from Buenos Aires City (CABA) and discover towns and tourist cities within that radius.",
    subtituloUbicacion: "Pick a distance from your current location and discover towns and tourist cities within that radius.",
    ubicacionUsar: "Use my location instead of CABA",
    ubicacionUsando: "Using your location (switch back to CABA)",
    ubicacionBuscando: "Finding your location...",
    ubicacionSinSoporte: "Your browser doesn't support location access.",
    ubicacionNota: "Distances in the list are straight-line from where you are; opening a destination, the map, or the itinerary calculates the real route by road.",
    ubicacionError: "We couldn't access your location. Check your browser permissions and try again.",
    buscadorPlaceholder: "Search by name or attraction (e.g. hot springs, wine, lagoon)...",
    buscarAria: "Search",
    panelDistanciaMax: "Maximum distance",
    favoritos: "Favorites",
    visitados: "Visited",
    sorpresa: "Surprise me",
    sorpresaSinResultados: "No destinations match these filters",
    resumenBtn: "My summary",
    vistaLista: "List",
    vistaMapa: "Map",
    ordenarPor: "Sort by",
    ordenDistancia: "Distance",
    ordenAlfabetico: "Alphabetical",
    ordenCategoria: "Category",
    contadorPlural: "destinations found",
    contadorSingular: "destination found",
    vacioBusqueda: (q) => `We couldn't find any destination matching "${q}" within the chosen filters.`,
    vacioFavoritos: "You haven't marked any destination as a favorite yet.",
    vacioVisitados: "You haven't marked any destination as visited yet.",
    vacioGenerico: "There are no destinations in that radius with the chosen filter. Try increasing the distance.",
    compartirFiltrosBtn: "Share these filters",
    compartirFiltrosCopiado: "Copied",
    footerCaba: "Approximate road distances from CABA · Reference data, please verify before traveling.",
    footerUbicacion: "Straight-line distances from your location; opening a destination, the map, or the itinerary calculates the real route by road · Reference data, please verify before traveling.",
    offline: "You're offline: the map, photos, and weather won't load, but the destination list keeps working with what was already saved.",
    tuUbicacion: "You",
    tuUbicacionTexto: "your location",
    caba: "CABA",
    kmDesdeCaba: (km) => `${km} km from CABA`,
    kmLineaRecta: (km) => `${km} km in a straight line from your location`,
    kmPorRuta: (km) => `${km} km by road`,
    tiempoEnAuto: (t) => `~${t} by car`,
    modalHistoria: "A bit of history",
    modalDatoCurioso: "Fun fact",
    modalComoLlegar: "How to get there",
    modalComoMoverse: "Getting around",
    modalCuandoIr: "When to go",
    modalDuracion: "Suggested duration",
    modalItinerario: "Suggested itinerary",
    modalOtrosAtractivos: "Other attractions",
    modalEventos: "Events and special dates",
    modalDondeComer: "Where to eat",
    modalDondeAlojarse: "Where to stay",
    modalTips: "Local tips",
    modalPresupuesto: "Estimated budget",
    modalClima: "Current weather",
    modalCosto: "Estimated fuel and toll cost",
    modalNotaPersonal: "Your personal note",
    notaPersonalPlaceholder: "What did you think? Jot down anything you want to remember about your visit...",
    yaVisitaste: "You've already been here",
    visitadoBadge: "Visited",
    favAgregar: "Add to favorites",
    favQuitar: "Remove from favorites",
    visitadoMarcar: "Mark as visited",
    visitadoQuitar: "Unmark as visited",
    itinerarioAgregar: "Add to itinerary",
    itinerarioQuitar: "Remove from itinerary",
    compararAgregar: "Add to comparison",
    compararQuitar: "Remove from comparison",
    copiarGuia: "Copy guide",
    compartirGuia: "Share guide",
    cerrarGuia: "Close guide",
    climaSinDatos: "No data",
    mapaRutaCalculando: "Calculating real route...",
    mapaRutaError: "Couldn't calculate the real route, showing the straight line instead.",
    mapaRutaCerrar: "Hide route",
    rutaFuente: "Route calculated by OSRM (OpenStreetMap data)",
    itinerarioRutaReal: "Real route by road",
    itinerarioCalculandoRuta: "Calculating the real route by road...",
    itinerarioRutaSinDatos: "Couldn't calculate the real route; legs and total show straight-line distance instead.",
    navegarGoogleMaps: "Google Maps",
    navegarWaze: "Waze",
    navegarNota: "Opens the navigation app with directions from your current location.",
    modalCercanos: "Nearby, you could also visit",
    cercanosNota: "Straight-line distance between destinations.",
    nuevoBadge: "New",
    backupBtn: "My data",
    backupTitulo: "My data",
    backupDescripcion: "Your favorites, visited places, notes, and itinerary only live in this browser. If you switch phones or clear your cache, they're gone. Make a backup to keep or move to another device.",
    backupExportar: "Export my data",
    backupImportar: "Import from a file",
    backupNota: "The file downloads to your device; it's never sent to any server.",
    backupImportarExito: "Data imported successfully.",
    backupImportarError: "Couldn't read the file. Check that it's a valid backup from this app.",
    backupImportarConfirmar: "This will replace your current favorites, visited places, notes, and itinerary with the ones from the file. Continue?",
    costoPrecio: "Fuel price (ARS/liter)",
    costoConsumo: "Consumption (km/liter)",
    costoPeaje: "Estimated toll (ARS every 100 km)",
    costoVelocidad: "Average road speed (km/h)",
    costoPersonas: "Number of people",
    costoPorPersona: (n) => `Per person (÷${n})`,
    verQr: "Show QR code",
    qrDescripcion: "Scan this code with another phone to open this guide directly, no need to send the link over wifi or data.",
    qrDescargar: "Download image",
    qrCerrar: "Close",
    imprimirGuia: "Print guide",
    sugerirBtn: "Suggest a destination",
    sugerirTitulo: "Suggest a destination",
    sugerirDescripcion: "Is a town or city in the province missing? Tell us which one and why, and we'll look into adding it.",
    sugerirNombreLabel: "Place name",
    sugerirNombrePlaceholder: "E.g.: Chascomús, Villa Gesell...",
    sugerirMotivoLabel: "Why do you think it's a good destination? (optional)",
    sugerirMotivoPlaceholder: "Anything you know about the place, a specific attraction, etc.",
    sugerirEnviar: "Suggest on GitHub",
    sugerirCancelar: "Cancel",
    sugerirNota: "This opens GitHub in another tab, with a draft already filled in. You'll need a GitHub account to submit it.",
    sugerirCuerpoTitulo: "Suggested place",
    sugerirCuerpoMotivo: "Why",
    sugerirCuerpoOrigen: "Suggested from the app",
    tamanoNormal: "Normal text size (tap to make bigger)",
    tamanoGrande: "Large text size (tap to make even bigger)",
    tamanoMuyGrande: "Extra large text size (tap to go back to normal)",
    buenMomento: "Good time to go",
    costoNota: (km) => `Round-trip estimate (${km} km total). Adjust the values for your vehicle and today's prices; tolls and real travel time vary a lot by route and traffic.`,
    costoCombustible: "Fuel",
    costoPeajes: "Tolls",
    costoTotal: "Estimated total",
    costoTiempoIda: "Driving time (one way)",
    costoTiempoTotal: "Driving time (round trip)",
    itinerarioBarraTexto: (n) => `${n} ${n === 1 ? "destination" : "destinations"} picked for the itinerary`,
    itinerarioVerBtn: "View itinerary",
    itinerarioMinimo: "Pick at least 2",
    itinerarioVaciarAria: "Clear itinerary selection",
    itinerarioMax: (n) => `You can plan itineraries of up to ${n} stops. Remove one to add another.`,
    itinerarioTitulo: "Your suggested itinerary",
    itinerarioDescripcion: (origenNombre) => `Order calculated to minimize the total straight-line distance, starting from ${origenNombre}. The legs and total below update automatically with the real route by road as soon as it's calculated.`,
    itinerarioDia: (n) => `Day ${n}`,
    itinerarioParadas: (n) => `${n} stops`,
    itinerarioDistanciaTotal: "Estimated total distance",
    itinerarioTiempoTotal: "Estimated driving time",
    kmLineaRectaCorto: "km in a straight line",
    compararBarraTexto: (n) => `${n} ${n === 1 ? "destination" : "destinations"} picked to compare`,
    compararVerBtn: "Compare",
    compararMinimo: "Pick 1 more",
    compararVaciarAria: "Clear comparison selection",
    compararMax: (n) => `You can only compare up to ${n} destinations at a time. Remove one first (from the bar below) to pick another.`,
    compararComparando: (n) => `Comparing ${n} destinations`,
    compararCategoria: "Category",
    compararDistancia: "Distance",
    compararTiempo: "Time by car",
    compararDuracion: "Suggested duration",
    compararCosto: "Estimated cost (round trip)",
    compararPresupuesto: "Budget",
    compararItinerario: "Suggested itinerary",
    resumenTitulo: "My summary",
    resumenNota: (v, t) => `You've visited ${v} of ${t} destinations in the app.`,
    resumenPorCategoria: "By category",
    resumenFaltantes: (lista) => `You haven't visited any destination yet in: ${lista}.`,
    resumenCompleto: "You've visited at least one destination in every category!",
    resumenTuProgreso: "Your progress",
    linkFiltrosResumen: (resumen) => `Check this out on Destinos Buenos Aires: ${resumen}`,
    linkFiltrosMenosDe: (km) => `less than ${km} km`,
    linkFiltrosCon: (q) => `with "${q}"`,
    guiaSeparador: "— Destinos Buenos Aires (distance-based guide)",
    guiaHistoria: "HISTORY",
    guiaDato: "FUN FACT",
    guiaComoLlegar: "How to get there:",
    guiaComoMoverse: "Getting around:",
    guiaCuandoIr: "When to go:",
    guiaDuracion: "Suggested duration:",
    guiaItinerario: "SUGGESTED ITINERARY",
    guiaOtrosAtractivos: "OTHER ATTRACTIONS",
    guiaEventos: "EVENTS AND SPECIAL DATES",
    guiaDondeComer: "WHERE TO EAT",
    guiaDondeAlojarse: "WHERE TO STAY",
    guiaTips: "LOCAL TIPS",
    guiaPresupuesto: "ESTIMATED BUDGET:",
    cambiarAIngles: "Cambiar a español",
    cambiarATemaClaro: "Switch to light theme",
    cambiarATemaOscuro: "Switch to dark theme",
    pageTitle: "Buenos Aires Destinations - Distance-based Guide",
    pageDescription: "Find towns and tourist cities in Buenos Aires Province based on how far you want to travel.",
    bienvenidaTitulo: "Where should we calculate distances from?",
    bienvenidaTexto: "We can use your current location instead of always calculating from CABA. Distances start as straight-line estimates and get refined with the real route by road when you open each destination. You can change this anytime from the location button.",
    bienvenidaUsar: "Use my location",
    bienvenidaCaba: "Use CABA",
    tutorialSaltar: "Skip",
    tutorialSiguiente: "Next",
    tutorialEmpezar: "Get started",
    tutorialAnterior: "Back",
    tutorialPasoDe: (n, total) => `${n} of ${total}`,
    tutorial1Titulo: "Welcome!",
    tutorial1Texto: "Pick a distance from CABA (or from your location) and discover towns and cities across Buenos Aires Province.",
    tutorial2Titulo: "Search and filter",
    tutorial2Texto: "Search by name or by attraction (like \"hot springs\" or \"wine\"), and combine it with the category filters and the distance slider.",
    tutorial3Titulo: "List or map",
    tutorial3Texto: "View results as a list or on a real map. Every guide includes weather, a photo, a suggested itinerary, and the estimated trip cost.",
    tutorial4Titulo: "Save your favorites",
    tutorial4Texto: "Mark the ones you like with the star, cross off the ones you've visited, and leave your own note and rating.",
    tutorial5Titulo: "Plan your trip",
    tutorial5Texto: "Pick several destinations to build a multi-day itinerary, or compare two places side by side before deciding.",
  },
};

function t(clave, ...args) {
  const valor = (TEXTOS[idioma] && TEXTOS[idioma][clave]) ?? TEXTOS.es[clave];
  return typeof valor === "function" ? valor(...args) : valor;
}

const MAX_KM = 1000;

// --- Iconos SVG mínimos (stroke, estilo lucide) ---------------------------
const ICONS = {
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  "qr-code": '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  sunrise: '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M6 18a6 6 0 0 1 12 0"/>',
  sunset: '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M6 18a6 6 0 0 1 12 0"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
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
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
  link: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
  "bar-chart": '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
  "wifi-off": '<path d="M12 20h.01"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  "cloud-sun": '<path d="M12 2v1"/><path d="m4.2 4.2.7.7"/><path d="M2 12h1"/><path d="M17.9 4.9l-.7.7"/><path d="M15.7 9.3A4 4 0 1 0 17.5 17H19a3 3 0 0 0 0-6h-.4"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>',
  "cloud-rain": '<path d="M4.2 15.1A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 .3 9"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
  "cloud-lightning": '<path d="M6 16.9A5 5 0 0 1 7 7h1.2a5.5 5.5 0 0 1 10.6 1.5A4.5 4.5 0 0 1 18 17H7Z"/><path d="m13 12-3 5h4l-3 5"/>',
  "cloud-fog": '<path d="M16.5 17H9a7 7 0 1 1 6.71-9h1.29a4.5 4.5 0 1 1 0 9Z"/><path d="M16 19H7"/><path d="M17 21H9"/>',
  snowflake: '<path d="M12 2v20"/><path d="m17 5-5 3-5-3"/><path d="m17 19-5-3-5 3"/><path d="M2 12h20"/><path d="m5 7 3 5-3 5"/><path d="m19 7-3 5 3 5"/>',
  scroll: '<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  circle: '<circle cx="12" cy="12" r="10"/>',
  shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  columns: '<rect width="7" height="18" x="3" y="3" rx="1"/><rect width="7" height="18" x="14" y="3" rx="1"/>',
  "check-circle": '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
};

function icon(name, size = 14, color = "currentColor", fill = "none") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// --- Estado -----------------------------------------------------------------
let distancia = 400;
let categoria = "todas";
let soloFavoritos = false;
let soloVisitados = false;
let busqueda = "";
let orden = "distancia";

// Si la app se abrió con un link compartido (con filtros en la URL), los aplicamos
// antes del primer render. Ver generarURLFiltros()/compartirFiltros() más abajo.
(function aplicarFiltrosDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const km = Number(params.get("km"));
  if (km && km > 0) distancia = Math.min(km, 1000);
  const cat = params.get("cat");
  if (cat && CATEGORIAS.some((c) => c.id === cat)) categoria = cat;
  const q = params.get("q");
  if (q) busqueda = q;
  const ord = params.get("orden");
  if (ord && ["distancia", "alfabetico", "categoria"].includes(ord)) orden = ord;
})();

function ordenarResultados(lista) {
  const copia = [...lista];
  if (orden === "alfabetico") {
    copia.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  } else if (orden === "categoria") {
    copia.sort((a, b) => {
      const labelA = CATEGORIAS.find((c) => c.id === a.categoria)?.label || a.categoria;
      const labelB = CATEGORIAS.find((c) => c.id === b.categoria)?.label || b.categoria;
      const cmpCategoria = labelA.localeCompare(labelB, "es");
      return cmpCategoria !== 0 ? cmpCategoria : kmDesdeOrigen(a) - kmDesdeOrigen(b);
    });
  } else {
    copia.sort((a, b) => kmDesdeOrigen(a) - kmDesdeOrigen(b));
  }
  return copia;
}

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function textoBuscableDestino(d) {
  return [d.nombre, d.nota, d.datoCurioso, ...(d.otrosAtractivos || []), ...(d.eventos || [])].join(" ");
}

const cacheTextoBuscable = new Map();

function coincideBusqueda(d, busquedaNormalizada) {
  if (!busquedaNormalizada) return true;
  let texto = cacheTextoBuscable.get(d.nombre);
  if (!texto) {
    texto = normalizar(textoBuscableDestino(d));
    cacheTextoBuscable.set(d.nombre, texto);
  }
  return texto.includes(busquedaNormalizada);
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

const VISITADOS_KEY = "destinos-ba-visitados";

function cargarVisitados() {
  try {
    const raw = localStorage.getItem(VISITADOS_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (err) {
    console.warn("No se pudieron leer los visitados guardados:", err);
    return new Set();
  }
}

function guardarVisitados() {
  try {
    localStorage.setItem(VISITADOS_KEY, JSON.stringify([...visitados]));
  } catch (err) {
    console.warn("No se pudieron guardar los visitados:", err);
  }
}

function toggleVisitado(nombre) {
  if (visitados.has(nombre)) {
    visitados.delete(nombre);
  } else {
    visitados.add(nombre);
  }
  guardarVisitados();
  render();
}

let visitados = cargarVisitados();

const NOTAS_PERSONALES_KEY = "destinos-ba-notas-personales";

function cargarNotasPersonales() {
  try {
    const raw = localStorage.getItem(NOTAS_PERSONALES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("No se pudieron leer las notas personales guardadas:", err);
    return {};
  }
}

function guardarNotasPersonales() {
  try {
    localStorage.setItem(NOTAS_PERSONALES_KEY, JSON.stringify(notasPersonales));
  } catch (err) {
    console.warn("No se pudieron guardar las notas personales:", err);
  }
}

function obtenerNotaPersonal(nombre) {
  return notasPersonales[nombre] || { puntaje: 0, nota: "" };
}

function actualizarNotaPersonal(nombre, cambios) {
  const actual = obtenerNotaPersonal(nombre);
  notasPersonales[nombre] = { ...actual, ...cambios };
  guardarNotasPersonales();
}

let notasPersonales = cargarNotasPersonales();

const ITINERARIO_KEY = "destinos-ba-itinerario";
const ITINERARIO_MAX = 6;

function cargarItinerario() {
  try {
    const raw = localStorage.getItem(ITINERARIO_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (err) {
    console.warn("No se pudo leer el itinerario guardado:", err);
    return new Set();
  }
}

function guardarItinerario() {
  try {
    localStorage.setItem(ITINERARIO_KEY, JSON.stringify([...itinerarioSeleccion]));
  } catch (err) {
    console.warn("No se pudo guardar el itinerario:", err);
  }
}

function toggleItinerario(nombre) {
  if (itinerarioSeleccion.has(nombre)) {
    itinerarioSeleccion.delete(nombre);
  } else {
    if (itinerarioSeleccion.size >= ITINERARIO_MAX) {
      alert(t("itinerarioMax", ITINERARIO_MAX));
      return;
    }
    itinerarioSeleccion.add(nombre);
  }
  guardarItinerario();
  actualizarBarraAcciones();
}

let itinerarioSeleccion = cargarItinerario();

const COMPARAR_KEY = "destinos-ba-comparar";

function cargarComparacion() {
  try {
    const raw = localStorage.getItem(COMPARAR_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (err) {
    console.warn("No se pudo leer la comparación guardada:", err);
    return new Set();
  }
}

function guardarComparacion() {
  try {
    localStorage.setItem(COMPARAR_KEY, JSON.stringify([...comparacionSeleccion]));
  } catch (err) {
    console.warn("No se pudo guardar la comparación:", err);
  }
}

const COMPARAR_MAX = 3;

function toggleComparacion(nombre) {
  if (comparacionSeleccion.has(nombre)) {
    comparacionSeleccion.delete(nombre);
  } else {
    if (comparacionSeleccion.size >= COMPARAR_MAX) {
      alert(t("compararMax", COMPARAR_MAX));
      return;
    }
    comparacionSeleccion.add(nombre);
  }
  guardarComparacion();
  actualizarBarraAcciones();
}

let comparacionSeleccion = cargarComparacion();

const CABA_COORDS = { lat: -34.6037, lng: -58.3816 };

// --- Origen de las distancias: CABA por defecto, o la ubicación real del usuario ---
let origen = { lat: CABA_COORDS.lat, lng: CABA_COORDS.lng, nombre: "CABA", esUbicacionUsuario: false };

function distanciaHaversine(lat1, lng1, lat2, lng2) {
  const R = 6371; // radio de la Tierra en km
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Devuelve los destinos más cercanos a "d" (no desde el origen del usuario, sino entre los dos lugares)
const DIAS_BADGE_NUEVO = 30;

// El badge "Nuevo" se calcula solo a partir de la fecha de alta: no hace falta sacarlo a mano.
function esDestinoNuevo(d) {
  if (!d.fechaAgregado) return false;
  const dias = (Date.now() - new Date(`${d.fechaAgregado}T00:00:00`).getTime()) / (1000 * 60 * 60 * 24);
  return dias >= 0 && dias <= DIAS_BADGE_NUEVO;
}

// Meses recomendados por categoría (1=enero...12=diciembre, hemisferio sur).
// "pueblo" y "ciudad" quedan afuera a propósito: su atractivo no depende de la
// época del año, así que no tiene sentido destacarlos por temporada.
const TEMPORADA_POR_CATEGORIA = {
  playa: [12, 1, 2],
  rio: [12, 1, 2, 3],
  sierra: [3, 4, 5, 9, 10, 11],
  campo: [3, 4, 5, 9, 10, 11],
};

function esBuenMomentoParaIr(d, fecha) {
  const meses = TEMPORADA_POR_CATEGORIA[d.categoria];
  if (!meses) return false;
  const mesActual = (fecha || new Date()).getMonth() + 1;
  return meses.includes(mesActual);
}

function destinosCercanos(d, cantidad) {
  return DESTINOS.filter((otro) => otro.nombre !== d.nombre)
    .map((otro) => ({ destino: otro, km: Math.round(distanciaHaversine(d.lat, d.lng, otro.lat, otro.lng)) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, cantidad);
}

// --- Ruteo real por calles y rutas (OSRM, servicio público sin API key) -----
const OSRM_BASE = "https://router.project-osrm.org/route/v1/driving/";
const cacheRutasOSRM = new Map();

// puntos: array de {lat, lng}, en el orden en que se quiere rutear (origen primero)
async function obtenerRutaOSRM(puntos) {
  const clave = puntos.map((p) => `${p.lat.toFixed(4)},${p.lng.toFixed(4)}`).join("|");
  if (cacheRutasOSRM.has(clave)) return cacheRutasOSRM.get(clave);

  const coords = puntos.map((p) => `${p.lng},${p.lat}`).join(";");
  const url = `${OSRM_BASE}${coords}?overview=full&geometries=geojson`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`OSRM respondió ${res.status}`);
    const data = await res.json();
    if (data.code !== "Ok" || !data.routes || !data.routes.length) throw new Error("Sin ruta OSRM");

    const ruta = data.routes[0];
    const resultado = {
      distanciaKm: ruta.distance / 1000,
      duracionMin: ruta.duration / 60,
      coordenadas: ruta.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
      tramos: ruta.legs.map((tramo) => ({ distanciaKm: tramo.distance / 1000, duracionMin: tramo.duration / 60 })),
    };
    cacheRutasOSRM.set(clave, resultado);
    return resultado;
  } catch (err) {
    console.warn("No se pudo obtener la ruta real (OSRM), se usa distancia en línea recta:", err);
    return null;
  }
}

function kmDesdeOrigen(d) {
  if (!origen.esUbicacionUsuario) return d.km;
  return Math.round(distanciaHaversine(origen.lat, origen.lng, d.lat, d.lng));
}

function etiquetaDistancia(d) {
  const km = kmDesdeOrigen(d);
  const tiempo = formatearTiempo(tiempoDesdeOrigen(d));
  const base = origen.esUbicacionUsuario ? t("kmLineaRecta", km) : t("kmDesdeCaba", km);
  return `${base} · ${t("tiempoEnAuto", tiempo)}`;
}

// --- Orden óptimo del itinerario: prueba todas las combinaciones posibles ---
// (viable porque son pocas paradas, hasta 6) y elige la de menor distancia total
// en línea recta, arrancando desde el origen actual (CABA o la ubicación del usuario).
function generarPermutaciones(arr) {
  if (arr.length <= 1) return [arr];
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const resto = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const permutacionResto of generarPermutaciones(resto)) {
      resultado.push([arr[i], ...permutacionResto]);
    }
  }
  return resultado;
}

function calcularOrdenOptimo(destinos) {
  if (destinos.length === 0) return { orden: [], tramos: [], distanciaTotal: 0 };
  let mejorOrden = destinos;
  let mejorDistancia = Infinity;

  for (const permutacion of generarPermutaciones(destinos)) {
    let total = distanciaHaversine(origen.lat, origen.lng, permutacion[0].lat, permutacion[0].lng);
    for (let i = 0; i < permutacion.length - 1; i++) {
      total += distanciaHaversine(permutacion[i].lat, permutacion[i].lng, permutacion[i + 1].lat, permutacion[i + 1].lng);
    }
    if (total < mejorDistancia) {
      mejorDistancia = total;
      mejorOrden = permutacion;
    }
  }

  const tramos = [];
  let previo = origen;
  let previoNombre = origen.esUbicacionUsuario ? t("tuUbicacion") : t("caba");
  for (const parada of mejorOrden) {
    const kmTramo = Math.round(distanciaHaversine(previo.lat, previo.lng, parada.lat, parada.lng));
    tramos.push({
      desde: previoNombre,
      hasta: parada.nombre,
      km: kmTramo,
      tiempo: formatearTiempo(kmTramo / (prefsCosto.velocidadPromedio || 80)),
    });
    previo = parada;
    previoNombre = parada.nombre;
  }

  return { orden: mejorOrden, tramos, distanciaTotal: Math.round(mejorDistancia) };
}

const CATEGORIA_COLOR = {
  playa: "#4E86A6",
  sierra: "#8C6B4F",
  rio: "#4E8C6B",
  campo: "#A69A3D",
  pueblo: "#C1440E",
  ciudad: "#C9BFA1",
};

let vista = "lista";
{
  const vistaURL = new URLSearchParams(window.location.search).get("vista");
  if (vistaURL === "mapa" || vistaURL === "lista") vista = vistaURL;
}

const el = {
  distanciaValor: document.getElementById("distancia-valor"),
  ubicacionBtn: document.getElementById("ubicacion-btn"),
  ubicacionNota: document.getElementById("ubicacion-nota"),
  subtituloOrigen: document.getElementById("subtitulo-origen"),
  footerNotaDistancia: document.getElementById("footer-nota-distancia"),
  slider: document.getElementById("slider"),
  ruler: document.getElementById("ruler"),
  buscador: document.getElementById("buscador"),
  buscadorForm: document.getElementById("form-buscar"),
  filtros: document.getElementById("filtros"),
  contador: document.getElementById("contador"),
  ordenSelect: document.getElementById("orden-select"),
  sorpresaBtn: document.getElementById("sorpresa-btn"),
  vistaToggle: document.getElementById("vista-toggle"),
  lista: document.getElementById("lista"),
  mapaWrap: document.getElementById("mapa-wrap"),
  mapaLeyenda: document.getElementById("mapa-leyenda"),
  mapaRutaInfo: document.getElementById("mapa-ruta-info"),
  vacio: document.getElementById("vacio"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.getElementById("modal"),
  accionFlotante: document.getElementById("accion-flotante"),
  filaItinerario: document.getElementById("fila-itinerario"),
  itinerarioBarraTexto: document.getElementById("itinerario-barra-texto"),
  itinerarioVerBtn: document.getElementById("itinerario-ver-btn"),
  itinerarioVaciarBtn: document.getElementById("itinerario-vaciar-btn"),
  itinerarioOverlay: document.getElementById("itinerario-overlay"),
  itinerarioModal: document.getElementById("itinerario-modal"),
  filaComparar: document.getElementById("fila-comparar"),
  compararBarraTexto: document.getElementById("comparar-barra-texto"),
  compararVerBtn: document.getElementById("comparar-ver-btn"),
  compararVaciarBtn: document.getElementById("comparar-vaciar-btn"),
  compararOverlay: document.getElementById("comparar-overlay"),
  compararModal: document.getElementById("comparar-modal"),
  compartirFiltrosBtn: document.getElementById("compartir-filtros-btn"),
  resumenBtn: document.getElementById("resumen-btn"),
  resumenOverlay: document.getElementById("resumen-overlay"),
  resumenModal: document.getElementById("resumen-modal"),
  offlineBanner: document.getElementById("offline-banner"),
  idiomaToggle: document.getElementById("idioma-toggle"),
  tamanoToggle: document.getElementById("tamano-toggle"),
  eyebrowTexto: document.getElementById("eyebrow-texto"),
  tituloH1: document.getElementById("titulo-h1"),
  bienvenidaOverlay: document.getElementById("bienvenida-overlay"),
  bienvenidaModal: document.getElementById("bienvenida-modal"),
  backupBtn: document.getElementById("backup-btn"),
  backupOverlay: document.getElementById("backup-overlay"),
  backupModal: document.getElementById("backup-modal"),
  backupInput: document.getElementById("backup-input"),
  qrOverlay: document.getElementById("qr-overlay"),
  qrModal: document.getElementById("qr-modal"),
  sugerirBtn: document.getElementById("sugerir-btn"),
  sugerirOverlay: document.getElementById("sugerir-overlay"),
  sugerirModal: document.getElementById("sugerir-modal"),
  tutorialOverlay: document.getElementById("tutorial-overlay"),
  tutorialModal: document.getElementById("tutorial-modal"),
};

// Sincronizar los controles que no se regeneran en cada render() con los
// valores que pudieron llegar por parámetros de URL (link de filtros compartido).
if (el.buscador) el.buscador.value = busqueda;
if (el.ordenSelect) el.ordenSelect.value = orden;

el.vistaToggle.querySelectorAll(".vista-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    vista = btn.dataset.vista;
    render();
  });
});

let leafletMap = null;
let leafletMarcadores = [];
let leafletOrigenMarcador = null;
let leafletRutaLayer = null;
let rutaSeleccionadaNombre = null;

function initLeafletMap() {
  if (leafletMap) return;
  leafletMap = L.map("mapa-leaflet", { scrollWheelZoom: false }).setView(
    [CABA_COORDS.lat, CABA_COORDS.lng],
    6
  );
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(leafletMap);
}

function renderMapa(resultados) {
  initLeafletMap();
  leafletMap.invalidateSize();

  leafletMarcadores.forEach((m) => leafletMap.removeLayer(m));
  leafletMarcadores = [];

  if (leafletRutaLayer) {
    leafletMap.removeLayer(leafletRutaLayer);
    leafletRutaLayer = null;
  }

  if (leafletOrigenMarcador) {
    leafletMap.removeLayer(leafletOrigenMarcador);
  }
  leafletOrigenMarcador = L.circleMarker([origen.lat, origen.lng], {
    radius: 8,
    color: "#101913",
    weight: 1.5,
    fillColor: "#F2E8CF",
    fillOpacity: 1,
  })
    .addTo(leafletMap)
    .bindTooltip(origen.esUbicacionUsuario ? t("tuUbicacion") : t("caba"), {
      permanent: true,
      direction: "top",
      className: "mapa-caba-tooltip",
    });

  resultados.forEach((d) => {
    const color = CATEGORIA_COLOR[d.categoria] || "#C1440E";
    const esFavorito = favoritos.has(d.nombre);
    const marcador = L.circleMarker([d.lat, d.lng], {
      radius: esFavorito ? 8 : 6,
      color: esFavorito ? "#C1440E" : "#101913",
      weight: esFavorito ? 2 : 1,
      fillColor: color,
      fillOpacity: 0.9,
    }).addTo(leafletMap);
    marcador.bindPopup(`<strong>${d.nombre}</strong><br>${etiquetaDistancia(d)}`);
    marcador.on("click", () => {
      abrirModal(d);
      mostrarRutaEnMapa(d);
    });
    leafletMarcadores.push(marcador);
  });

  // Si había una ruta dibujada de un destino que sigue en los resultados, la volvemos a mostrar
  if (rutaSeleccionadaNombre) {
    const seleccionado = resultados.find((d) => d.nombre === rutaSeleccionadaNombre);
    if (seleccionado) mostrarRutaEnMapa(seleccionado, true);
    else limpiarRutaMapa();
  }

  if (resultados.length > 0) {
    const bounds = L.latLngBounds([
      [origen.lat, origen.lng],
      ...resultados.map((d) => [d.lat, d.lng]),
    ]);
    leafletMap.fitBounds(bounds, { padding: [24, 24] });
  }

  const categoriasPresentes = [...new Set(resultados.map((d) => d.categoria))];
  el.mapaLeyenda.innerHTML = categoriasPresentes
    .map((catId) => {
      const cat = CATEGORIAS.find((c) => c.id === catId);
      const color = CATEGORIA_COLOR[catId] || "#C1440E";
      return `<div class="mapa-leyenda-item"><span class="mapa-leyenda-dot" style="background:${color}"></span>${cat ? cat.label : catId}</div>`;
    })
    .join("");
}

async function mostrarRutaEnMapa(d) {
  rutaSeleccionadaNombre = d.nombre;
  if (el.mapaRutaInfo) {
    el.mapaRutaInfo.style.display = "flex";
    el.mapaRutaInfo.innerHTML = `${icon("route", 14)} <span>${t("mapaRutaCalculando")}</span>`;
  }

  const resultado = await obtenerRutaOSRM([
    { lat: origen.lat, lng: origen.lng },
    { lat: d.lat, lng: d.lng },
  ]);

  // Si mientras esperábamos la respuesta se cambió de destino o se cerró el mapa, ignoramos este resultado
  if (rutaSeleccionadaNombre !== d.nombre || !leafletMap) return;

  if (leafletRutaLayer) {
    leafletMap.removeLayer(leafletRutaLayer);
    leafletRutaLayer = null;
  }

  if (!resultado) {
    if (el.mapaRutaInfo) {
      el.mapaRutaInfo.innerHTML = `${icon("route", 14)} <span>${t("mapaRutaError")}</span> <button id="mapa-ruta-cerrar" aria-label="${t("mapaRutaCerrar")}">${icon("x", 14)}</button>`;
      document.getElementById("mapa-ruta-cerrar")?.addEventListener("click", limpiarRutaMapa);
    }
    return;
  }

  leafletRutaLayer = L.polyline(resultado.coordenadas, { color: "#C1440E", weight: 4, opacity: 0.8 }).addTo(leafletMap);
  leafletMap.fitBounds(leafletRutaLayer.getBounds(), { padding: [30, 30] });

  if (el.mapaRutaInfo) {
    el.mapaRutaInfo.innerHTML = `
      ${icon("route", 14)}
      <span>${d.nombre}: ${Math.round(resultado.distanciaKm)} km · ~${formatearTiempo(resultado.duracionMin / 60)}</span>
      <button id="mapa-ruta-cerrar" aria-label="${t("mapaRutaCerrar")}">${icon("x", 14)}</button>
    `;
    document.getElementById("mapa-ruta-cerrar")?.addEventListener("click", limpiarRutaMapa);
  }
}

function limpiarRutaMapa() {
  rutaSeleccionadaNombre = null;
  if (leafletRutaLayer && leafletMap) {
    leafletMap.removeLayer(leafletRutaLayer);
    leafletRutaLayer = null;
  }
  if (el.mapaRutaInfo) {
    el.mapaRutaInfo.style.display = "none";
    el.mapaRutaInfo.innerHTML = "";
  }
}

function calcularResultadosFiltrados() {
  const busquedaNormalizada = normalizar(busqueda);
  return DESTINOS.filter((d) => kmDesdeOrigen(d) <= distancia)
    .filter((d) => categoria === "todas" || d.categoria === categoria)
    .filter((d) => !soloFavoritos || favoritos.has(d.nombre))
    .filter((d) => !soloVisitados || visitados.has(d.nombre))
    .filter((d) => coincideBusqueda(d, busquedaNormalizada));
}

function render() {
  el.vistaToggle.querySelectorAll(".vista-btn").forEach((btn) => {
    const activo = btn.dataset.vista === vista;
    btn.classList.toggle("vista-activo", activo);
    btn.setAttribute("aria-pressed", activo ? "true" : "false");
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
        const kmD = kmDesdeOrigen(d);
        const left = Math.min((kmD / MAX_KM) * 100, 100);
        const activo = kmD <= distancia;
        return `<div class="ruler-dot ${activo ? "activo" : ""}" style="left:${left}%" title="${d.nombre} · ${kmD} km"></div>`;
      })
      .join("")}
    <div class="ruler-label ruler-label-left">0 km</div>
    <div class="ruler-label ruler-label-right">${MAX_KM} km</div>
  `;

  el.filtros.innerHTML =
    `<button class="chip chip-fav ${soloFavoritos ? "chip-activo" : ""}" data-fav-toggle="1" aria-pressed="${soloFavoritos ? "true" : "false"}">
      ${icon("star", 14, "currentColor", soloFavoritos ? "currentColor" : "none")} ${t("favoritos")}
    </button>
    <button class="chip chip-visitado ${soloVisitados ? "chip-activo" : ""}" data-visitado-toggle="1" aria-pressed="${soloVisitados ? "true" : "false"}">
      ${icon(soloVisitados ? "check-circle" : "circle", 14)} ${t("visitados")}
    </button>` +
    CATEGORIAS.map(
      (c) => `
    <button class="chip ${categoria === c.id ? "chip-activo" : ""}" data-cat="${c.id}" aria-pressed="${categoria === c.id ? "true" : "false"}">
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
  const visitadoToggleBtn = el.filtros.querySelector("[data-visitado-toggle]");
  if (visitadoToggleBtn) {
    visitadoToggleBtn.addEventListener("click", () => {
      soloVisitados = !soloVisitados;
      render();
    });
  }

  const resultados = ordenarResultados(calcularResultadosFiltrados());

  el.contador.textContent = `${resultados.length} ${resultados.length === 1 ? t("contadorSingular") : t("contadorPlural")}`;

  if (resultados.length === 0) {
    el.lista.style.display = "none";
    el.mapaWrap.style.display = "none";
    el.vacio.style.display = "block";
    if (busqueda) {
      el.vacio.textContent = t("vacioBusqueda", busqueda);
    } else if (soloFavoritos) {
      el.vacio.textContent = t("vacioFavoritos");
    } else if (soloVisitados) {
      el.vacio.textContent = t("vacioVisitados");
    } else {
      el.vacio.textContent = t("vacioGenerico");
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
        const esVisitado = visitados.has(d.nombre);
        return `
      <div class="card ${esVisitado ? "card-visitada" : ""}">
        <div class="card-acciones">
          <button class="card-check ${esVisitado ? "activo" : ""}" data-visitado="${d.nombre}" aria-label="${esVisitado ? t("visitadoQuitar") : t("visitadoMarcar")}">
            ${icon(esVisitado ? "check-circle" : "circle", 18)}
          </button>
          <button class="card-fav ${esFavorito ? "activo" : ""}" data-fav="${d.nombre}" aria-label="${esFavorito ? t("favQuitar") : t("favAgregar")}">
            ${icon("star", 18, "currentColor", esFavorito ? "currentColor" : "none")}
          </button>
        </div>
        <button class="card-open" data-nombre="${d.nombre}">
          <div class="card-km">
            <span class="card-km-num">${kmDesdeOrigen(d)}</span>
            <span class="card-km-unit">km</span>
            <span class="card-km-tiempo">~${formatearTiempo(tiempoDesdeOrigen(d))}</span>
          </div>
          <div class="card-body">
            <div class="card-title-row">
              <h3 class="${esVisitado ? "tachado" : ""}">${d.nombre}</h3>
              ${icon(CATEGORIAS.find((c) => c.id === d.categoria)?.icon || "map-pin", 14, "#7C9473")}
              ${esDestinoNuevo(d) ? `<span class="card-nuevo-badge">${t("nuevoBadge")}</span>` : ""}
              ${esBuenMomentoParaIr(d) ? `<span class="card-temporada-badge">${icon("sun", 12)} ${t("buenMomento")}</span>` : ""}
              ${esVisitado ? `<span class="card-visitado-badge">${icon("check-circle", 12)} ${t("visitadoBadge")}</span>` : ""}
              ${esVisitado && obtenerNotaPersonal(d.nombre).puntaje > 0 ? `<span class="card-puntaje">${"★".repeat(obtenerNotaPersonal(d.nombre).puntaje)}${"☆".repeat(5 - obtenerNotaPersonal(d.nombre).puntaje)}</span>` : ""}
            </div>
            <p>${textoDestino(d).nota}</p>
            <span class="card-link">${idioma === "en" ? "View guide →" : "Ver guía →"}</span>
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
    el.lista.querySelectorAll(".card-check").forEach((btn) => {
      btn.addEventListener("click", () => toggleVisitado(btn.dataset.visitado));
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

let modalRutaTokenActual = 0;

async function actualizarKmBadgeConRutaReal(token, d) {
  const resultado = await obtenerRutaOSRM([
    { lat: origen.lat, lng: origen.lng },
    { lat: d.lat, lng: d.lng },
  ]);

  // Si mientras esperábamos se cerró el modal o se abrió otro destino, descartamos esta respuesta
  if (token !== modalRutaTokenActual) return;
  if (!resultado) return; // sin conexión o falló OSRM: se queda con la estimación que ya se mostraba

  const badge = el.modal.querySelector(".modal-km-badge");
  if (badge) {
    const kmReal = Math.round(resultado.distanciaKm);
    badge.textContent = `${t("kmPorRuta", kmReal)} · ${t("tiempoEnAuto", formatearTiempo(resultado.duracionMin / 60))}`;
  }
}

function abrirModal(d) {
  elementoFocoPrevio = document.activeElement;
  const dt = textoDestino(d);
  const cercanos = destinosCercanos(d, 3);
  const render_estrella = () => {
    const esFav = favoritos.has(d.nombre);
    const btn = el.modal.querySelector("#modal-fav");
    if (btn) {
      btn.classList.toggle("activo", esFav);
      btn.innerHTML = icon("star", 20, "currentColor", esFav ? "currentColor" : "none");
      btn.setAttribute("aria-label", esFav ? t("favQuitar") : t("favAgregar"));
    }
  };
  const render_visitado = () => {
    const esVisitado = visitados.has(d.nombre);
    const btn = el.modal.querySelector("#modal-visitado");
    if (btn) {
      btn.classList.toggle("activo", esVisitado);
      btn.innerHTML = icon(esVisitado ? "check-circle" : "circle", 20);
      btn.setAttribute("aria-label", esVisitado ? t("visitadoQuitar") : t("visitadoMarcar"));
    }
    const badge = el.modal.querySelector("#modal-visitado-badge");
    if (badge) badge.style.display = esVisitado ? "inline-flex" : "none";
    const notaContenedor = el.modal.querySelector("#modal-nota-personal");
    if (notaContenedor) notaContenedor.style.display = esVisitado ? "block" : "none";
  };
  const render_nota_personal = () => {
    const contenedorEstrellas = el.modal.querySelector("#nota-personal-estrellas");
    const textarea = el.modal.querySelector("#nota-personal-texto");
    if (!contenedorEstrellas || !textarea) return;
    const datos = obtenerNotaPersonal(d.nombre);

    contenedorEstrellas.innerHTML = [1, 2, 3, 4, 5]
      .map(
        (n) =>
          `<button type="button" class="nota-personal-estrella ${n <= datos.puntaje ? "activa" : ""}" data-puntaje="${n}" aria-label="${idioma === "en" ? `Rate ${n} ${n === 1 ? "star" : "stars"}` : `Puntuar con ${n} ${n === 1 ? "estrella" : "estrellas"}`}">${icon("star", 22, "currentColor", n <= datos.puntaje ? "currentColor" : "none")}</button>`
      )
      .join("");

    contenedorEstrellas.querySelectorAll(".nota-personal-estrella").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nuevoPuntaje = Number(btn.dataset.puntaje);
        const actual = obtenerNotaPersonal(d.nombre);
        // Tocar la misma estrella que ya estaba puesta la quita (para poder "desmarcar")
        actualizarNotaPersonal(d.nombre, { puntaje: actual.puntaje === nuevoPuntaje ? 0 : nuevoPuntaje });
        render_nota_personal();
        if (vista === "lista") render();
      });
    });

    textarea.value = datos.nota;
    textarea.addEventListener("input", (e) => {
      actualizarNotaPersonal(d.nombre, { nota: e.target.value });
    });
  };
  const render_itinerario_btn = () => {
    const enItinerario = itinerarioSeleccion.has(d.nombre);
    const btn = el.modal.querySelector("#modal-itinerario");
    if (btn) {
      btn.classList.toggle("activo", enItinerario);
      btn.innerHTML = icon(enItinerario ? "check-circle" : "plus", 20);
      btn.setAttribute("aria-label", enItinerario ? t("itinerarioQuitar") : t("itinerarioAgregar"));
    }
  };
  const render_comparar_btn = () => {
    const enComparacion = comparacionSeleccion.has(d.nombre);
    const btn = el.modal.querySelector("#modal-comparar");
    if (btn) {
      btn.classList.toggle("activo", enComparacion);
      btn.setAttribute("aria-label", enComparacion ? t("compararQuitar") : t("compararAgregar"));
    }
  };

  el.modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${etiquetaDistancia(d)}</div>
      <div class="modal-top-actions">
        <button id="modal-comparar" aria-label="${t("compararAgregar")}">${icon("columns", 20)}</button>
        <button id="modal-itinerario" aria-label="${t("itinerarioAgregar")}"></button>
        <button id="modal-visitado" aria-label="${t("visitadoMarcar")}"></button>
        <button id="modal-fav" aria-label="${t("favAgregar")}"></button>
        <button id="modal-share" aria-label="${t("compartirGuia")}">${icon("share", 20)}</button>
        <button id="modal-qr" aria-label="${t("verQr")}">${icon("qr-code", 20)}</button>
        <button id="modal-imprimir" aria-label="${t("imprimirGuia")}">${icon("printer", 20)}</button>
        <button id="modal-copy" aria-label="${t("copiarGuia")}">${icon("copy", 20)}</button>
        <button id="modal-close" aria-label="${t("cerrarGuia")}">${icon("x", 20)}</button>
      </div>
    </div>
    <h2 class="modal-title" id="modal-title-el">${d.nombre}</h2>
    <span class="modal-visitado-badge" id="modal-visitado-badge" style="display:none">${icon("check-circle", 12)} ${t("yaVisitaste")}</span>
    ${esBuenMomentoParaIr(d) ? `<span class="modal-temporada-badge">${icon("sun", 12)} ${t("buenMomento")}</span>` : ""}
    <p class="modal-nota">${dt.nota}</p>

    <div class="modal-nota-personal" id="modal-nota-personal" data-nombre="${d.nombre}" style="display:none">
      <div class="modal-subhead">${icon("star", 14)} ${t("modalNotaPersonal")}</div>
      <div class="nota-personal-estrellas" id="nota-personal-estrellas"></div>
      <textarea id="nota-personal-texto" class="nota-personal-texto" rows="3" placeholder="${t("notaPersonalPlaceholder")}"></textarea>
    </div>

    <div class="modal-foto" id="modal-foto" data-nombre="${d.nombre}"></div>

    <div class="modal-subhead">${icon("scroll", 14)} ${t("modalHistoria")}</div>
    <p class="modal-parrafo">${dt.historia}</p>

    <div class="modal-subhead">${icon("lightbulb", 14)} ${t("modalDatoCurioso")}</div>
    <p class="modal-parrafo">${dt.datoCurioso}</p>

    <div class="modal-info">
      <div class="info-row">
        ${icon("car", 16, "#7C9473")}
        <div>
          <div class="info-label">${t("modalComoLlegar")}</div>
          <div class="info-value">${dt.comoLlegar}</div>
        </div>
      </div>
      <div class="navegar-botones">
        <a class="navegar-btn" href="https://www.google.com/maps/dir/?api=1&destination=${d.lat},${d.lng}&travelmode=driving" target="_blank" rel="noopener noreferrer">${icon("map-pin", 16)} ${t("navegarGoogleMaps")}</a>
        <a class="navegar-btn" href="https://waze.com/ul?ll=${d.lat},${d.lng}&navigate=yes" target="_blank" rel="noopener noreferrer">${icon("navigation", 16)} ${t("navegarWaze")}</a>
      </div>
      <p class="navegar-nota">${t("navegarNota")}</p>
      <div class="info-row">
        ${icon("compass", 16, "#7C9473")}
        <div>
          <div class="info-label">${t("modalComoMoverse")}</div>
          <div class="info-value">${dt.comoMoverse}</div>
        </div>
      </div>
      <div class="info-row">
        ${icon("calendar-days", 16, "#7C9473")}
        <div>
          <div class="info-label">${t("modalCuandoIr")}</div>
          <div class="info-value">${dt.cuandoIr}</div>
        </div>
      </div>
      <div class="info-row">
        ${icon("clock", 16, "#7C9473")}
        <div>
          <div class="info-label">${t("modalDuracion")}</div>
          <div class="info-value">${dt.duracion}</div>
        </div>
      </div>
    </div>

    <div class="modal-subhead">${icon("cloud", 14)} ${t("modalClima")}</div>
    <div class="modal-clima" id="modal-clima" data-nombre="${d.nombre}"></div>

    <div class="modal-subhead">${icon("sparkles", 14)} ${t("modalItinerario")}</div>
    <ul class="modal-timeline">
      ${dt.itinerario.map((paso) => `<li><span class="timeline-momento">${paso.momento}</span>${paso.actividad}</li>`).join("")}
    </ul>

    ${seccionLista("map-pin", t("modalOtrosAtractivos"), dt.otrosAtractivos)}
    ${seccionLista("calendar-days", t("modalEventos"), dt.eventos)}
    ${seccionLista("utensils", t("modalDondeComer"), dt.dondeComer)}
    ${seccionLista("bed", t("modalDondeAlojarse"), dt.dondeAlojarse)}
    ${seccionLista("map-pin", t("modalTips"), dt.tips)}

    <div class="modal-subhead">${icon("wallet", 14)} ${t("modalPresupuesto")}</div>
    <p class="modal-parrafo modal-presupuesto">${dt.presupuesto}</p>

    <div class="modal-subhead">${icon("car", 14)} ${t("modalCosto")}</div>
    <div class="modal-costo" id="modal-costo" data-km="${kmDesdeOrigen(d)}"></div>

    <div class="modal-subhead">${icon("map-pin", 14)} ${t("modalCercanos")}</div>
    <div class="cercanos-lista">
      ${cercanos
        .map(
          ({ destino, km }) => `
        <button class="cercano-item" data-cercano="${destino.nombre}">
          <span class="cercano-nombre">${destino.nombre}</span>
          <span class="cercano-km">${km} km</span>
        </button>`
        )
        .join("")}
    </div>
    <p class="cercanos-nota">${t("cercanosNota")}</p>
  `;
  el.modalOverlay.classList.add("visible");
  document.getElementById("modal-close").addEventListener("click", cerrarModal);
  document.getElementById("modal-close").focus();
  el.modal.querySelectorAll("[data-cercano]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const otro = DESTINOS.find((x) => x.nombre === btn.dataset.cercano);
      if (otro) abrirModal(otro);
    });
  });
  render_estrella();
  render_visitado();
  render_nota_personal();
  render_itinerario_btn();
  render_comparar_btn();
  modalRutaTokenActual++;
  actualizarKmBadgeConRutaReal(modalRutaTokenActual, d);
  document.getElementById("modal-fav").addEventListener("click", () => {
    toggleFavorito(d.nombre);
    render_estrella();
  });
  document.getElementById("modal-visitado").addEventListener("click", () => {
    toggleVisitado(d.nombre);
    render_visitado();
  });
  document.getElementById("modal-itinerario").addEventListener("click", () => {
    toggleItinerario(d.nombre);
    render_itinerario_btn();
  });
  document.getElementById("modal-comparar").addEventListener("click", () => {
    toggleComparacion(d.nombre);
    render_comparar_btn();
  });
  document.getElementById("modal-share").addEventListener("click", () => compartirGuia(d));
  document.getElementById("modal-qr").addEventListener("click", () => abrirQrModal(d));
  document.getElementById("modal-imprimir").addEventListener("click", () => window.print());
  document.getElementById("modal-copy").addEventListener("click", () => copiarGuia(d));
  cargarFotoModal(d);
  cargarClimaModal(d);
  renderizarCostoModal(d);
}

// --- Foto real del destino, vía la API pública de Wikipedia (sin necesidad de cuenta o key) ---
const cacheImagenesWikipedia = {};

async function obtenerResumenWikipedia(titulo) {
  try {
    const resp = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data.type === "disambiguation") return null;
    if (data.thumbnail && data.thumbnail.source) {
      return {
        src: (data.originalimage && data.originalimage.source) || data.thumbnail.source,
        pageUrl: (data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page) || `https://es.wikipedia.org/wiki/${encodeURIComponent(titulo)}`,
      };
    }
    return null;
  } catch (err) {
    return null;
  }
}

async function buscarImagenWikipedia(nombre) {
  // Primero se busca el título real del artículo (en vez de adivinarlo), usando el buscador
  // de texto completo de Wikipedia, y luego se pide el resumen (con foto) de esos candidatos.
  try {
    const urlBusqueda = `https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=3&srsearch=${encodeURIComponent(nombre + " Buenos Aires Argentina")}`;
    const respBusqueda = await fetch(urlBusqueda);
    if (respBusqueda.ok) {
      const dataBusqueda = await respBusqueda.json();
      const candidatos = (dataBusqueda.query && dataBusqueda.query.search) || [];
      for (const candidato of candidatos) {
        const resumen = await obtenerResumenWikipedia(candidato.title);
        if (resumen) return resumen;
      }
    }
  } catch (err) {
    // sigue con el intento directo de todos modos
  }

  // Intento directo por si el buscador no devolvió nada útil
  return obtenerResumenWikipedia(nombre);
}

function pintarFotoModal(contenedor, resultado) {
  if (!resultado) {
    contenedor.classList.add("sin-foto");
    contenedor.innerHTML = "";
    return;
  }
  contenedor.classList.remove("sin-foto");
  const nombreDestino = contenedor.dataset.nombre;
  contenedor.innerHTML = `
    <img src="${resultado.src}" alt="Foto de ${nombreDestino}" loading="lazy" />
    <a href="${resultado.pageUrl}" target="_blank" rel="noopener noreferrer" class="modal-foto-credito">Foto: Wikipedia</a>
  `;
}

async function cargarFotoModal(d) {
  const contenedorInicial = document.getElementById("modal-foto");
  if (!contenedorInicial) return;

  if (Object.prototype.hasOwnProperty.call(cacheImagenesWikipedia, d.nombre)) {
    pintarFotoModal(contenedorInicial, cacheImagenesWikipedia[d.nombre]);
    return;
  }

  const resultado = await buscarImagenWikipedia(d.nombre);
  cacheImagenesWikipedia[d.nombre] = resultado;

  // Si el usuario ya cambió de destino mientras se resolvía la búsqueda, no pisar ese contenido
  const contenedorActual = document.getElementById("modal-foto");
  if (contenedorActual && contenedorActual.dataset.nombre === d.nombre) {
    pintarFotoModal(contenedorActual, resultado);
  }
}

// --- Clima actual y pronóstico, vía la API pública de Open-Meteo (sin cuenta ni key) ---
const cacheClima = {};

const WMO_CLIMA = {
  0: { texto: { es: "Despejado", en: "Clear sky" }, icono: "sun" },
  1: { texto: { es: "Mayormente despejado", en: "Mostly clear" }, icono: "sun" },
  2: { texto: { es: "Parcialmente nublado", en: "Partly cloudy" }, icono: "cloud-sun" },
  3: { texto: { es: "Nublado", en: "Cloudy" }, icono: "cloud" },
  45: { texto: { es: "Neblina", en: "Fog" }, icono: "cloud-fog" },
  48: { texto: { es: "Neblina con escarcha", en: "Freezing fog" }, icono: "cloud-fog" },
  51: { texto: { es: "Llovizna leve", en: "Light drizzle" }, icono: "cloud-rain" },
  53: { texto: { es: "Llovizna moderada", en: "Moderate drizzle" }, icono: "cloud-rain" },
  55: { texto: { es: "Llovizna intensa", en: "Heavy drizzle" }, icono: "cloud-rain" },
  56: { texto: { es: "Llovizna helada", en: "Freezing drizzle" }, icono: "cloud-rain" },
  57: { texto: { es: "Llovizna helada intensa", en: "Heavy freezing drizzle" }, icono: "cloud-rain" },
  61: { texto: { es: "Lluvia leve", en: "Light rain" }, icono: "cloud-rain" },
  63: { texto: { es: "Lluvia moderada", en: "Moderate rain" }, icono: "cloud-rain" },
  65: { texto: { es: "Lluvia intensa", en: "Heavy rain" }, icono: "cloud-rain" },
  66: { texto: { es: "Lluvia helada", en: "Freezing rain" }, icono: "cloud-rain" },
  67: { texto: { es: "Lluvia helada intensa", en: "Heavy freezing rain" }, icono: "cloud-rain" },
  71: { texto: { es: "Nevada leve", en: "Light snow" }, icono: "snowflake" },
  73: { texto: { es: "Nevada moderada", en: "Moderate snow" }, icono: "snowflake" },
  75: { texto: { es: "Nevada intensa", en: "Heavy snow" }, icono: "snowflake" },
  77: { texto: { es: "Granizo fino", en: "Snow grains" }, icono: "snowflake" },
  80: { texto: { es: "Chubascos leves", en: "Light showers" }, icono: "cloud-rain" },
  81: { texto: { es: "Chubascos moderados", en: "Moderate showers" }, icono: "cloud-rain" },
  82: { texto: { es: "Chubascos intensos", en: "Heavy showers" }, icono: "cloud-rain" },
  85: { texto: { es: "Chubascos de nieve", en: "Snow showers" }, icono: "snowflake" },
  86: { texto: { es: "Chubascos de nieve intensos", en: "Heavy snow showers" }, icono: "snowflake" },
  95: { texto: { es: "Tormenta eléctrica", en: "Thunderstorm" }, icono: "cloud-lightning" },
  96: { texto: { es: "Tormenta con granizo", en: "Thunderstorm with hail" }, icono: "cloud-lightning" },
  99: { texto: { es: "Tormenta con granizo intenso", en: "Thunderstorm with heavy hail" }, icono: "cloud-lightning" },
};

function infoClima(codigo) {
  const entrada = WMO_CLIMA[codigo];
  if (!entrada) return { texto: t("climaSinDatos"), icono: "cloud" };
  return { texto: entrada.texto[idioma] || entrada.texto.es, icono: entrada.icono };
}

async function obtenerClima(d) {
  if (Object.prototype.hasOwnProperty.call(cacheClima, d.nombre)) {
    return cacheClima[d.nombre];
  }
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${d.lat}&longitude=${d.lng}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset&timezone=auto&forecast_days=5`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Respuesta no OK de Open-Meteo");
    const data = await resp.json();
    cacheClima[d.nombre] = data;
    return data;
  } catch (err) {
    cacheClima[d.nombre] = null;
    return null;
  }
}

function formatearHora(isoString) {
  if (!isoString) return "—";
  const partes = isoString.split("T");
  return partes.length > 1 ? partes[1] : isoString;
}

function pintarClima(contenedor, data) {
  if (!data || !data.current || !data.daily) {
    contenedor.classList.add("sin-clima");
    contenedor.innerHTML = "";
    return;
  }
  contenedor.classList.remove("sin-clima");

  const actual = infoClima(data.current.weather_code);
  const amanecer = data.daily.sunrise ? formatearHora(data.daily.sunrise[0]) : null;
  const atardecer = data.daily.sunset ? formatearHora(data.daily.sunset[0]) : null;
  const dias = data.daily.time
    .map((fecha, i) => {
      const info = infoClima(data.daily.weather_code[i]);
      const nombreDia = new Date(`${fecha}T12:00:00`).toLocaleDateString(idioma === "en" ? "en-US" : "es-AR", { weekday: "short" });
      return `
      <div class="clima-dia">
        <span class="clima-dia-nombre">${nombreDia.replace(".", "")}</span>
        ${icon(info.icono, 20, "var(--wheat-dim)")}
        <span class="clima-dia-temp">${Math.round(data.daily.temperature_2m_max[i])}°/${Math.round(data.daily.temperature_2m_min[i])}°</span>
      </div>`;
    })
    .join("");

  contenedor.innerHTML = `
    <div class="clima-actual">
      ${icon(actual.icono, 32, "var(--rust)")}
      <div>
        <div class="clima-actual-temp">${Math.round(data.current.temperature_2m)}°C</div>
        <div class="clima-actual-texto">${actual.texto}</div>
      </div>
    </div>
    ${
      amanecer && atardecer
        ? `<div class="clima-sol">
      <span>${icon("sunrise", 16, "var(--wheat-dim)")} ${amanecer}</span>
      <span>${icon("sunset", 16, "var(--wheat-dim)")} ${atardecer}</span>
    </div>`
        : ""
    }
    <div class="clima-pronostico">${dias}</div>
    <div class="clima-fuente">${idioma === "en" ? "Data: Open-Meteo" : "Datos: Open-Meteo"}</div>
  `;
}

async function cargarClimaModal(d) {
  const contenedorInicial = document.getElementById("modal-clima");
  if (!contenedorInicial) return;

  const data = await obtenerClima(d);
  const contenedorActual = document.getElementById("modal-clima");
  if (contenedorActual && contenedorActual.dataset.nombre === d.nombre) {
    pintarClima(contenedorActual, data);
  }
}

// --- Calculadora de costo estimado de combustible y peajes ------------------
const COSTO_KEY = "destinos-ba-costo-viaje";

function cargarPreferenciasCosto() {
  try {
    const raw = localStorage.getItem(COSTO_KEY);
    if (raw) {
      const datos = JSON.parse(raw);
      return {
        precioLitro: Number(datos.precioLitro) || 2050,
        consumo: Number(datos.consumo) || 10,
        peajeCada100km: Number(datos.peajeCada100km) || 1500,
        velocidadPromedio: Number(datos.velocidadPromedio) || 80,
        personas: Math.max(1, Number(datos.personas) || 1),
      };
    }
  } catch (err) {
    console.warn("No se pudieron leer las preferencias de costo guardadas:", err);
  }
  // Valores de referencia: nafta súper YPF CABA ~$2050/litro (julio 2026),
  // consumo promedio de un auto mediano, un peaje estimado orientativo,
  // y una velocidad promedio de ruta mixta (autopista + rutas secundarias).
  return { precioLitro: 2050, consumo: 10, peajeCada100km: 1500, velocidadPromedio: 80, personas: 1 };
}

function guardarPreferenciasCosto(prefs) {
  try {
    localStorage.setItem(COSTO_KEY, JSON.stringify(prefs));
  } catch (err) {
    console.warn("No se pudieron guardar las preferencias de costo:", err);
  }
}

let prefsCosto = cargarPreferenciasCosto();

function formatearTiempo(horasDecimal) {
  if (!isFinite(horasDecimal) || horasDecimal <= 0) return "—";
  const totalMinutos = Math.round(horasDecimal * 60);
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  if (horas === 0) return `${minutos} min`;
  if (minutos === 0) return `${horas} h`;
  return `${horas} h ${minutos} min`;
}

function tiempoDesdeOrigen(d) {
  const km = kmDesdeOrigen(d);
  return km / (prefsCosto.velocidadPromedio || 80);
}

function calcularCostoViaje(kmIda, prefs) {
  const distanciaTotal = kmIda * 2; // ida y vuelta
  const litros = prefs.consumo > 0 ? distanciaTotal / prefs.consumo : 0;
  const costoCombustible = litros * prefs.precioLitro;
  const costoPeajes = (distanciaTotal / 100) * prefs.peajeCada100km;
  const costoTotal = costoCombustible + costoPeajes;
  const personas = Math.max(1, prefs.personas || 1);
  const tiempoIda = prefs.velocidadPromedio > 0 ? kmIda / prefs.velocidadPromedio : 0;
  return {
    distanciaTotal,
    costoCombustible,
    costoPeajes,
    costoTotal,
    costoPorPersona: costoTotal / personas,
    tiempoIda,
    tiempoTotal: tiempoIda * 2,
  };
}

function formatearARS(numero) {
  return numero.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
}

function renderizarCostoModal(d) {
  const contenedor = document.getElementById("modal-costo");
  if (!contenedor) return;
  const km = Number(contenedor.dataset.km);

  contenedor.innerHTML = `
    <div class="costo-inputs">
      <label class="costo-input-wrap">
        <span>${t("costoPrecio")}</span>
        <input type="number" id="costo-precio" min="0" step="1" value="${prefsCosto.precioLitro}" inputmode="decimal" />
      </label>
      <label class="costo-input-wrap">
        <span>${t("costoConsumo")}</span>
        <input type="number" id="costo-consumo" min="1" step="0.5" value="${prefsCosto.consumo}" inputmode="decimal" />
      </label>
      <label class="costo-input-wrap">
        <span>${t("costoPeaje")}</span>
        <input type="number" id="costo-peaje" min="0" step="50" value="${prefsCosto.peajeCada100km}" inputmode="decimal" />
      </label>
      <label class="costo-input-wrap">
        <span>${t("costoVelocidad")}</span>
        <input type="number" id="costo-velocidad" min="20" step="5" value="${prefsCosto.velocidadPromedio}" inputmode="decimal" />
      </label>
      <label class="costo-input-wrap">
        <span>${t("costoPersonas")}</span>
        <input type="number" id="costo-personas" min="1" step="1" value="${prefsCosto.personas || 1}" inputmode="numeric" />
      </label>
    </div>
    <div class="costo-resultado" id="costo-resultado"></div>
    <div class="costo-nota">${t("costoNota", km * 2)}</div>
  `;

  const actualizarResultado = () => {
    const resultado = calcularCostoViaje(km, prefsCosto);
    const personas = Math.max(1, prefsCosto.personas || 1);
    document.getElementById("costo-resultado").innerHTML = `
      <div class="costo-fila"><span>${t("costoCombustible")}</span><strong>${formatearARS(resultado.costoCombustible)}</strong></div>
      <div class="costo-fila"><span>${t("costoPeajes")}</span><strong>${formatearARS(resultado.costoPeajes)}</strong></div>
      <div class="costo-fila costo-total"><span>${t("costoTotal")}</span><strong>${formatearARS(resultado.costoTotal)}</strong></div>
      ${
        personas > 1
          ? `<div class="costo-fila costo-por-persona"><span>${t("costoPorPersona", personas)}</span><strong>${formatearARS(resultado.costoPorPersona)}</strong></div>`
          : ""
      }
      <div class="costo-fila"><span>${t("costoTiempoIda")}</span><strong>${formatearTiempo(resultado.tiempoIda)}</strong></div>
      <div class="costo-fila"><span>${t("costoTiempoTotal")}</span><strong>${formatearTiempo(resultado.tiempoTotal)}</strong></div>
    `;
  };

  document.getElementById("costo-personas").addEventListener("input", (e) => {
    prefsCosto.personas = Math.max(1, Math.round(Number(e.target.value)) || 1);
    guardarPreferenciasCosto(prefsCosto);
    actualizarResultado();
  });

  document.getElementById("costo-precio").addEventListener("input", (e) => {
    prefsCosto.precioLitro = Number(e.target.value) || 0;
    guardarPreferenciasCosto(prefsCosto);
    actualizarResultado();
  });
  document.getElementById("costo-consumo").addEventListener("input", (e) => {
    prefsCosto.consumo = Number(e.target.value) || 0;
    guardarPreferenciasCosto(prefsCosto);
    actualizarResultado();
  });
  document.getElementById("costo-peaje").addEventListener("input", (e) => {
    prefsCosto.peajeCada100km = Number(e.target.value) || 0;
    guardarPreferenciasCosto(prefsCosto);
    actualizarResultado();
  });
  document.getElementById("costo-velocidad").addEventListener("input", (e) => {
    prefsCosto.velocidadPromedio = Number(e.target.value) || 0;
    guardarPreferenciasCosto(prefsCosto);
    actualizarResultado();
  });

  actualizarResultado();
}

function generarTextoGuia(d) {
  const dt = textoDestino(d);
  const lineas = [];
  lineas.push(`${d.nombre} — ${etiquetaDistancia(d)}`);
  lineas.push(dt.nota);
  lineas.push("");
  lineas.push(t("guiaHistoria"));
  lineas.push(dt.historia);
  lineas.push("");
  lineas.push(t("guiaDato"));
  lineas.push(dt.datoCurioso);
  lineas.push("");
  lineas.push(`${t("guiaComoLlegar")} ${dt.comoLlegar}`);
  lineas.push(`${t("guiaComoMoverse")} ${dt.comoMoverse}`);
  lineas.push(`${t("guiaCuandoIr")} ${dt.cuandoIr}`);
  lineas.push(`${t("guiaDuracion")} ${dt.duracion}`);
  lineas.push("");
  lineas.push(t("guiaItinerario"));
  dt.itinerario.forEach((paso) => lineas.push(`- ${paso.momento}: ${paso.actividad}`));
  lineas.push("");
  lineas.push(t("guiaOtrosAtractivos"));
  dt.otrosAtractivos.forEach((item) => lineas.push(`- ${item}`));
  lineas.push("");
  lineas.push(t("guiaEventos"));
  dt.eventos.forEach((item) => lineas.push(`- ${item}`));
  lineas.push("");
  lineas.push(t("guiaDondeComer"));
  dt.dondeComer.forEach((item) => lineas.push(`- ${item}`));
  lineas.push("");
  lineas.push(t("guiaDondeAlojarse"));
  dt.dondeAlojarse.forEach((item) => lineas.push(`- ${item}`));
  lineas.push("");
  lineas.push(t("guiaTips"));
  dt.tips.forEach((item) => lineas.push(`- ${item}`));
  lineas.push("");
  lineas.push(`${t("guiaPresupuesto")} ${dt.presupuesto}`);
  lineas.push("");
  lineas.push(t("guiaSeparador"));
  return lineas.join("\n");
}

async function compartirGuia(d) {
  const texto = generarTextoGuia(d);
  if (navigator.share) {
    try {
      await navigator.share({ title: `${d.nombre} — Destinos Buenos Aires`, text: texto });
    } catch (err) {
      // El usuario cerró el selector de apps sin elegir ninguna: no es un error real, no hacemos nada.
      if (err && err.name !== "AbortError") {
        console.warn("No se pudo compartir con la Web Share API, copio al portapapeles como alternativa:", err);
        copiarGuia(d);
      }
    }
  } else {
    copiarGuia(d);
  }
}

function copiarGuia(d) {
  const texto = generarTextoGuia(d);
  const boton = document.getElementById("modal-copy");
  const mostrarExito = () => {
    if (!boton) return;
    boton.innerHTML = icon("check", 20);
    boton.classList.add("copiado");
    setTimeout(() => {
      boton.innerHTML = icon("copy", 20);
      boton.classList.remove("copiado");
    }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(mostrarExito).catch(() => copiarConFallback(texto, mostrarExito));
  } else {
    copiarConFallback(texto, mostrarExito);
  }
}

function copiarConFallback(texto, callback) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = texto;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    callback();
  } catch (err) {
    console.warn("No se pudo copiar la guía:", err);
  }
}

let elementoFocoPrevio = null;

function cerrarModal() {
  el.modalOverlay.classList.remove("visible");
  if (elementoFocoPrevio && typeof elementoFocoPrevio.focus === "function") {
    elementoFocoPrevio.focus();
  }
  modalRutaTokenActual++;
}

el.modalOverlay.addEventListener("click", (e) => {
  if (e.target === el.modalOverlay) cerrarModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.modalOverlay.classList.contains("visible")) {
    cerrarModal();
  }
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

el.ordenSelect.addEventListener("change", (e) => {
  orden = e.target.value;
  render();
});

// --- Botón "Sorpréndeme" -----------------------------------------------------
el.sorpresaBtn.innerHTML = `${icon("shuffle", 16)} ${t("sorpresa")}`;
el.sorpresaBtn.addEventListener("click", () => {
  const candidatos = calcularResultadosFiltrados();
  if (candidatos.length === 0) {
    const original = el.sorpresaBtn.innerHTML;
    el.sorpresaBtn.innerHTML = `${icon("shuffle", 16)} ${t("sorpresaSinResultados")}`;
    setTimeout(() => {
      el.sorpresaBtn.innerHTML = original;
    }, 2200);
    return;
  }
  const elegido = candidatos[Math.floor(Math.random() * candidatos.length)];
  abrirModal(elegido);
});

// --- Compartir el link con los filtros actuales aplicados --------------------
function generarURLFiltros() {
  const params = new URLSearchParams();
  if (distancia !== 400) params.set("km", distancia);
  if (categoria !== "todas") params.set("cat", categoria);
  if (busqueda) params.set("q", busqueda);
  if (orden !== "distancia") params.set("orden", orden);
  if (vista !== "lista") params.set("vista", vista);
  const query = params.toString();
  const base = window.location.origin + window.location.pathname;
  return query ? `${base}?${query}` : base;
}

function generarResumenFiltros() {
  const partes = [];
  if (categoria !== "todas") {
    partes.push(CATEGORIAS.find((c) => c.id === categoria)?.label.toLowerCase() || categoria);
  }
  partes.push(t("linkFiltrosMenosDe", distancia));
  if (busqueda) partes.push(t("linkFiltrosCon", busqueda));
  return partes.join(" + ");
}

async function compartirFiltros() {
  const url = generarURLFiltros();
  const resumen = generarResumenFiltros();
  const texto = t("linkFiltrosResumen", resumen);
  const boton = el.compartirFiltrosBtn;

  const mostrarExito = () => {
    if (!boton) return;
    const original = boton.innerHTML;
    boton.innerHTML = `${icon("check", 16)} ${t("compartirFiltrosCopiado")}`;
    boton.classList.add("copiado");
    setTimeout(() => {
      boton.innerHTML = original;
      boton.classList.remove("copiado");
    }, 1800);
  };

  if (navigator.share) {
    try {
      await navigator.share({ title: "Destinos Buenos Aires", text: texto, url });
      return;
    } catch (err) {
      if (err && err.name === "AbortError") return; // el usuario cerró el selector, no hacemos nada más
      console.warn("No se pudo compartir el link, lo copio al portapapeles como alternativa:", err);
    }
  }

  const textoCompleto = `${texto}\n${url}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textoCompleto).then(mostrarExito).catch(() => copiarConFallback(textoCompleto, mostrarExito));
  } else {
    copiarConFallback(textoCompleto, mostrarExito);
  }
}

if (el.compartirFiltrosBtn) {
  el.compartirFiltrosBtn.addEventListener("click", compartirFiltros);
}

// --- Modal de resumen: cuánto de la provincia recorriste --------------------
let resumenFocoPrevio = null;

function calcularResumen() {
  const total = DESTINOS.length;
  const visitadosCount = DESTINOS.filter((d) => visitados.has(d.nombre)).length;
  const porcentaje = total > 0 ? Math.round((visitadosCount / total) * 100) : 0;

  const porCategoria = CATEGORIAS.filter((c) => c.id !== "todas").map((c) => {
    const destinosCategoria = DESTINOS.filter((d) => d.categoria === c.id);
    const visitadosCategoria = destinosCategoria.filter((d) => visitados.has(d.nombre)).length;
    return { id: c.id, label: c.label, icon: c.icon, total: destinosCategoria.length, visitados: visitadosCategoria };
  });

  const categoriasSinVisitar = porCategoria.filter((c) => c.visitados === 0 && c.total > 0);

  return { total, visitadosCount, porcentaje, porCategoria, categoriasSinVisitar };
}

function cerrarResumenModal() {
  el.resumenOverlay.classList.remove("visible");
  if (resumenFocoPrevio && typeof resumenFocoPrevio.focus === "function") {
    resumenFocoPrevio.focus();
  }
}

function abrirResumenModal() {
  resumenFocoPrevio = document.activeElement;
  const { total, visitadosCount, porcentaje, porCategoria, categoriasSinVisitar } = calcularResumen();

  const filasCategoria = porCategoria
    .map((c) => {
      const pct = c.total > 0 ? Math.round((c.visitados / c.total) * 100) : 0;
      return `
      <div class="resumen-categoria-fila">
        <div class="resumen-categoria-nombre">${icon(c.icon, 14, "#7C9473")} ${c.label}</div>
        <div class="resumen-categoria-barra">
          <div class="resumen-categoria-progreso" style="width:${pct}%"></div>
        </div>
        <div class="resumen-categoria-numero">${c.visitados}/${c.total}</div>
      </div>`;
    })
    .join("");

  const mensajeFaltantes =
    categoriasSinVisitar.length > 0
      ? t("resumenFaltantes", categoriasSinVisitar.map((c) => c.label.toLowerCase()).join(", "))
      : t("resumenCompleto");

  el.resumenModal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${t("resumenTuProgreso")}</div>
      <button id="resumen-close" aria-label="${idioma === "en" ? "Close summary" : "Cerrar resumen"}">${icon("x", 20)}</button>
    </div>
    <h2 class="modal-title" id="resumen-titulo">${t("resumenTitulo")}</h2>
    <p class="modal-nota">${t("resumenNota", visitadosCount, total)}</p>

    <div class="resumen-total">
      <div class="resumen-total-numero">${porcentaje}%</div>
      <div class="resumen-total-barra">
        <div class="resumen-total-progreso" style="width:${porcentaje}%"></div>
      </div>
    </div>

    <div class="modal-subhead">${icon("map-pin", 14)} ${t("resumenPorCategoria")}</div>
    <div class="resumen-categorias">${filasCategoria}</div>

    <p class="modal-parrafo" style="margin-top:16px">${mensajeFaltantes}</p>
  `;

  el.resumenOverlay.classList.add("visible");
  document.getElementById("resumen-close").addEventListener("click", cerrarResumenModal);
  document.getElementById("resumen-close").focus();
}

if (el.resumenBtn) {
  el.resumenBtn.innerHTML = `${icon("bar-chart", 16)} Mi resumen`;
  el.resumenBtn.addEventListener("click", abrirResumenModal);
}

// --- Sugerir un destino (abre un Issue prellenado en GitHub) ----------------
const GITHUB_REPO = "sbranda/baires";
let sugerirFocoPrevio = null;

function cerrarSugerirModal() {
  if (el.sugerirOverlay) el.sugerirOverlay.classList.remove("visible");
  if (sugerirFocoPrevio && typeof sugerirFocoPrevio.focus === "function") {
    sugerirFocoPrevio.focus();
  }
}

function abrirSugerirModal() {
  if (!el.sugerirOverlay || !el.sugerirModal) return;
  sugerirFocoPrevio = document.activeElement;

  el.sugerirModal.innerHTML = `
    <h2 class="modal-title" id="sugerir-titulo">${t("sugerirTitulo")}</h2>
    <p class="modal-parrafo">${t("sugerirDescripcion")}</p>
    <label class="sugerir-label" for="sugerir-nombre">${t("sugerirNombreLabel")}</label>
    <input type="text" id="sugerir-nombre" class="sugerir-input" placeholder="${t("sugerirNombrePlaceholder")}" />
    <label class="sugerir-label" for="sugerir-motivo">${t("sugerirMotivoLabel")}</label>
    <textarea id="sugerir-motivo" class="sugerir-textarea" rows="3" placeholder="${t("sugerirMotivoPlaceholder")}"></textarea>
    <p class="sugerir-nota">${t("sugerirNota")}</p>
    <div class="bienvenida-acciones">
      <button id="sugerir-enviar" class="bienvenida-btn bienvenida-btn-principal">${t("sugerirEnviar")}</button>
      <button id="sugerir-cancelar" class="bienvenida-btn">${t("sugerirCancelar")}</button>
    </div>
  `;

  el.sugerirOverlay.classList.add("visible");
  const inputNombre = document.getElementById("sugerir-nombre");
  inputNombre.focus();

  document.getElementById("sugerir-cancelar").addEventListener("click", cerrarSugerirModal);
  document.getElementById("sugerir-enviar").addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    if (!nombre) {
      inputNombre.focus();
      return;
    }
    const motivo = document.getElementById("sugerir-motivo").value.trim();

    const titulo = `${idioma === "en" ? "Suggestion" : "Sugerencia"}: ${nombre}`;
    const cuerpo = [
      `**${t("sugerirCuerpoTitulo")}:** ${nombre}`,
      "",
      `**${t("sugerirCuerpoMotivo")}:** ${motivo || "-"}`,
      "",
      `---`,
      `*${t("sugerirCuerpoOrigen")}*`,
    ].join("\n");

    const url = `https://github.com/${GITHUB_REPO}/issues/new?title=${encodeURIComponent(titulo)}&body=${encodeURIComponent(cuerpo)}&labels=sugerencia-destino`;
    window.open(url, "_blank", "noopener,noreferrer");
    cerrarSugerirModal();
  });
}

if (el.sugerirBtn) {
  el.sugerirBtn.innerHTML = `${icon("lightbulb", 16)} ${t("sugerirBtn")}`;
  el.sugerirBtn.addEventListener("click", abrirSugerirModal);
}

if (el.sugerirOverlay) {
  el.sugerirOverlay.addEventListener("click", (e) => {
    if (e.target === el.sugerirOverlay) cerrarSugerirModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.sugerirOverlay && el.sugerirOverlay.classList.contains("visible")) {
    cerrarSugerirModal();
  }
});

if (el.resumenOverlay) {
  el.resumenOverlay.addEventListener("click", (e) => {
    if (e.target === el.resumenOverlay) cerrarResumenModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.resumenOverlay && el.resumenOverlay.classList.contains("visible")) {
    cerrarResumenModal();
  }
});

// --- Barra y modal de itinerario de varios días ------------------------------
let itinerarioFocoPrevio = null;

function actualizarBarraAcciones() {
  if (!el.accionFlotante) return;
  const nItinerario = itinerarioSeleccion.size;
  const nComparar = comparacionSeleccion.size;

  if (el.filaItinerario) {
    if (nItinerario === 0) {
      el.filaItinerario.style.display = "none";
    } else {
      el.filaItinerario.style.display = "flex";
      el.itinerarioBarraTexto.textContent = t("itinerarioBarraTexto", nItinerario);
      el.itinerarioVerBtn.disabled = nItinerario < 2;
      el.itinerarioVerBtn.textContent = nItinerario < 2 ? t("itinerarioMinimo") : t("itinerarioVerBtn");
    }
  }

  if (el.filaComparar) {
    if (nComparar === 0) {
      el.filaComparar.style.display = "none";
    } else {
      el.filaComparar.style.display = "flex";
      el.compararBarraTexto.textContent = t("compararBarraTexto", nComparar);
      el.compararVerBtn.disabled = nComparar < 2;
      el.compararVerBtn.textContent = nComparar < 2 ? t("compararMinimo") : t("compararVerBtn");
    }
  }

  el.accionFlotante.style.display = nItinerario === 0 && nComparar === 0 ? "none" : "flex";
}

let leafletItinerarioMap = null;
let itinerarioTokenActual = 0;

function cerrarItinerarioModal() {
  el.itinerarioOverlay.classList.remove("visible");
  if (el.accionFlotante) el.accionFlotante.style.visibility = "visible";
  if (itinerarioFocoPrevio && typeof itinerarioFocoPrevio.focus === "function") {
    itinerarioFocoPrevio.focus();
  }
  itinerarioTokenActual++; // invalida cualquier respuesta de ruta que llegue tarde
  if (leafletItinerarioMap) {
    leafletItinerarioMap.remove();
    leafletItinerarioMap = null;
  }
}

function abrirItinerarioModal() {
  itinerarioFocoPrevio = document.activeElement;
  const seleccionados = DESTINOS.filter((d) => itinerarioSeleccion.has(d.nombre));
  if (seleccionados.length < 2) return;
  if (el.accionFlotante) el.accionFlotante.style.visibility = "hidden";

  const { orden, tramos, distanciaTotal } = calcularOrdenOptimo(seleccionados);
  const origenNombre = origen.esUbicacionUsuario ? t("tuUbicacionTexto") : t("caba");

  const filas = tramos
    .map(
      (tramo, i) => `
    <div class="itinerario-fila">
      <div class="itinerario-fila-dia">${t("itinerarioDia", i + 1)}</div>
      <div class="itinerario-fila-info">
        <div class="itinerario-fila-ruta">${tramo.desde} → <strong>${tramo.hasta}</strong></div>
        <div class="itinerario-fila-km" data-km-tramo="${i}">${tramo.km} ${t("kmLineaRectaCorto")} · ~${tramo.tiempo}</div>
      </div>
      <button class="itinerario-fila-quitar" data-quitar="${tramo.hasta}" aria-label="${idioma === "en" ? `Remove ${tramo.hasta} from the itinerary` : `Quitar ${tramo.hasta} del itinerario`}">${icon("x", 16)}</button>
    </div>`
    )
    .join("");

  el.itinerarioModal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${t("itinerarioParadas", seleccionados.length)}</div>
      <button id="itinerario-close" aria-label="${idioma === "en" ? "Close itinerary" : "Cerrar itinerario"}">${icon("x", 20)}</button>
    </div>
    <h2 class="modal-title" id="itinerario-titulo">${icon("route", 20)} ${t("itinerarioTitulo")}</h2>
    <p class="modal-nota">${t("itinerarioDescripcion", origenNombre)}</p>
    <div class="itinerario-lista">${filas}</div>
    <div class="itinerario-total">
      <span>${t("itinerarioDistanciaTotal")}</span>
      <strong id="itinerario-distancia-total">${distanciaTotal} km</strong>
    </div>
    <div class="itinerario-total">
      <span>${t("itinerarioTiempoTotal")}</span>
      <strong id="itinerario-tiempo-total">~${formatearTiempo(distanciaTotal / (prefsCosto.velocidadPromedio || 80))}</strong>
    </div>
    <div class="itinerario-ruta-estado" id="itinerario-ruta-estado">${icon("route", 14)} <span>${t("itinerarioCalculandoRuta")}</span></div>
    <div class="itinerario-mapa" id="itinerario-mapa"></div>
  `;

  el.itinerarioOverlay.classList.add("visible");
  document.getElementById("itinerario-close").addEventListener("click", cerrarItinerarioModal);
  document.getElementById("itinerario-close").focus();
  el.itinerarioModal.querySelectorAll("[data-quitar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleItinerario(btn.dataset.quitar);
      if (itinerarioSeleccion.size < 2) {
        cerrarItinerarioModal();
      } else {
        abrirItinerarioModal();
      }
    });
  });

  itinerarioTokenActual++;
  cargarRutaRealItinerario(itinerarioTokenActual, orden);
}

async function cargarRutaRealItinerario(token, orden) {
  const puntos = [{ lat: origen.lat, lng: origen.lng }, ...orden.map((d) => ({ lat: d.lat, lng: d.lng }))];
  const resultado = await obtenerRutaOSRM(puntos);

  // Si mientras esperábamos se cerró el modal o se volvió a abrir con otra selección, descartamos esta respuesta
  if (token !== itinerarioTokenActual) return;

  const estadoEl = document.getElementById("itinerario-ruta-estado");
  if (!resultado) {
    if (estadoEl) estadoEl.innerHTML = `${icon("route", 14)} <span>${t("itinerarioRutaSinDatos")}</span>`;
    return;
  }

  resultado.tramos.forEach((tramoReal, i) => {
    const filaKm = el.itinerarioModal.querySelector(`[data-km-tramo="${i}"]`);
    if (filaKm) {
      filaKm.textContent = `${Math.round(tramoReal.distanciaKm)} km · ~${formatearTiempo(tramoReal.duracionMin / 60)}`;
    }
  });

  const totalEl = document.getElementById("itinerario-distancia-total");
  const tiempoEl = document.getElementById("itinerario-tiempo-total");
  if (totalEl) totalEl.textContent = `${Math.round(resultado.distanciaKm)} km`;
  if (tiempoEl) tiempoEl.textContent = `~${formatearTiempo(resultado.duracionMin / 60)}`;
  if (estadoEl) estadoEl.innerHTML = `${icon("route", 14)} <span>${t("itinerarioRutaReal")} · ${t("rutaFuente")}</span>`;

  dibujarMapaItinerario(orden, resultado.coordenadas);
}

function dibujarMapaItinerario(orden, coordenadas) {
  const contenedor = document.getElementById("itinerario-mapa");
  if (!contenedor) return;
  if (leafletItinerarioMap) {
    leafletItinerarioMap.remove();
    leafletItinerarioMap = null;
  }
  leafletItinerarioMap = L.map(contenedor, { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(leafletItinerarioMap);

  L.circleMarker([origen.lat, origen.lng], {
    radius: 7,
    color: "#101913",
    weight: 1.5,
    fillColor: "#F2E8CF",
    fillOpacity: 1,
  })
    .addTo(leafletItinerarioMap)
    .bindTooltip(origen.esUbicacionUsuario ? t("tuUbicacion") : t("caba"), { permanent: false });

  orden.forEach((d, i) => {
    L.circleMarker([d.lat, d.lng], {
      radius: 6,
      color: "#101913",
      weight: 1,
      fillColor: "#C1440E",
      fillOpacity: 0.9,
    })
      .addTo(leafletItinerarioMap)
      .bindTooltip(`${i + 1}. ${d.nombre}`, { permanent: false });
  });

  const polyline = L.polyline(coordenadas, { color: "#C1440E", weight: 4, opacity: 0.8 }).addTo(leafletItinerarioMap);
  leafletItinerarioMap.fitBounds(polyline.getBounds(), { padding: [20, 20] });
}

if (el.itinerarioVerBtn) {
  el.itinerarioVerBtn.addEventListener("click", () => {
    if (itinerarioSeleccion.size >= 2) abrirItinerarioModal();
  });
}

if (el.itinerarioVaciarBtn) {
  el.itinerarioVaciarBtn.innerHTML = icon("trash", 16);
  el.itinerarioVaciarBtn.setAttribute("aria-label", t("itinerarioVaciarAria"));
  el.itinerarioVaciarBtn.addEventListener("click", () => {
    itinerarioSeleccion.clear();
    guardarItinerario();
    actualizarBarraAcciones();
  });
}

if (el.itinerarioOverlay) {
  el.itinerarioOverlay.addEventListener("click", (e) => {
    if (e.target === el.itinerarioOverlay) cerrarItinerarioModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.itinerarioOverlay && el.itinerarioOverlay.classList.contains("visible")) {
    cerrarItinerarioModal();
  }
});

// --- Modal de comparación de 2 destinos --------------------------------------
let compararFocoPrevio = null;

function cerrarCompararModal() {
  el.compararOverlay.classList.remove("visible");
  if (el.accionFlotante) el.accionFlotante.style.visibility = "visible";
  if (compararFocoPrevio && typeof compararFocoPrevio.focus === "function") {
    compararFocoPrevio.focus();
  }
}

function abrirCompararModal() {
  compararFocoPrevio = document.activeElement;
  const seleccionados = DESTINOS.filter((d) => comparacionSeleccion.has(d.nombre));
  if (seleccionados.length < 2) return;
  if (el.accionFlotante) el.accionFlotante.style.visibility = "hidden";

  const items = seleccionados.map((d) => ({
    d,
    dt: textoDestino(d),
    costo: calcularCostoViaje(kmDesdeOrigen(d), prefsCosto),
  }));

  const filaTabla = (etiqueta, valores) => `
    <tr>
      <td class="comparar-etiqueta">${etiqueta}</td>
      ${valores.map((v) => `<td>${v}</td>`).join("")}
    </tr>`;

  const itinerarioColumna = ({ d, dt }) => `
    <div class="comparar-itinerario-col">
      <h3>${d.nombre}</h3>
      <ul class="modal-timeline">
        ${dt.itinerario.map((paso) => `<li><span class="timeline-momento">${paso.momento}</span>${paso.actividad}</li>`).join("")}
      </ul>
    </div>`;

  const titulo = items.map((it) => it.d.nombre).join(" vs. ");

  el.compararModal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${t("compararComparando", items.length)}</div>
      <button id="comparar-close" aria-label="${idioma === "en" ? "Close comparison" : "Cerrar comparación"}">${icon("x", 20)}</button>
    </div>
    <h2 class="modal-title" id="comparar-titulo">${titulo}</h2>
    <div class="comparar-tabla-wrap">
      <table class="comparar-tabla">
        <thead>
          <tr><th></th>${items.map((it) => `<th>${it.d.nombre}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${filaTabla(t("compararCategoria"), items.map((it) => CATEGORIAS.find((c) => c.id === it.d.categoria)?.label || it.d.categoria))}
          ${filaTabla(t("compararDistancia"), items.map((it) => `${kmDesdeOrigen(it.d)} km`))}
          ${filaTabla(t("compararTiempo"), items.map((it) => `~${formatearTiempo(tiempoDesdeOrigen(it.d))}`))}
          ${filaTabla(t("compararDuracion"), items.map((it) => it.dt.duracion))}
          ${filaTabla(t("compararCosto"), items.map((it) => formatearARS(it.costo.costoTotal)))}
        </tbody>
      </table>
    </div>
    <div class="modal-subhead">${icon("wallet", 14)} ${t("compararPresupuesto")}</div>
    <div class="comparar-presupuestos">
      ${items.map((it) => `<p class="modal-parrafo">${it.dt.presupuesto}</p>`).join("")}
    </div>
    <div class="modal-subhead">${icon("sparkles", 14)} ${t("compararItinerario")}</div>
    <div class="comparar-itinerarios">
      ${items.map(itinerarioColumna).join("")}
    </div>
  `;

  el.compararOverlay.classList.add("visible");
  document.getElementById("comparar-close").addEventListener("click", cerrarCompararModal);
  document.getElementById("comparar-close").focus();
}

if (el.compararVerBtn) {
  el.compararVerBtn.addEventListener("click", () => {
    if (comparacionSeleccion.size >= 2) abrirCompararModal();
  });
}

if (el.compararVaciarBtn) {
  el.compararVaciarBtn.innerHTML = icon("trash", 16);
  el.compararVaciarBtn.setAttribute("aria-label", t("compararVaciarAria"));
  el.compararVaciarBtn.addEventListener("click", () => {
    comparacionSeleccion.clear();
    guardarComparacion();
    actualizarBarraAcciones();
  });
}

if (el.compararOverlay) {
  el.compararOverlay.addEventListener("click", (e) => {
    if (e.target === el.compararOverlay) cerrarCompararModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.compararOverlay && el.compararOverlay.classList.contains("visible")) {
    cerrarCompararModal();
  }
});

actualizarBarraAcciones();

// --- Aviso de "sin conexión" -------------------------------------------------
function actualizarAvisoConexion() {
  if (!el.offlineBanner) return;
  el.offlineBanner.style.display = navigator.onLine ? "none" : "flex";
}

if (el.offlineBanner) {
  el.offlineBanner.innerHTML = `${icon("wifi-off", 18)} <span>Estás sin conexión: el mapa, las fotos y el clima no van a cargar, pero la lista de destinos sigue funcionando con lo que ya tenías guardado.</span>`;
}

window.addEventListener("online", actualizarAvisoConexion);
window.addEventListener("offline", actualizarAvisoConexion);
actualizarAvisoConexion();

// --- Ubicación real del usuario (opcional, en vez de CABA) ------------------
function actualizarTextosOrigen() {
  if (el.subtituloOrigen) {
    el.subtituloOrigen.textContent = origen.esUbicacionUsuario ? t("subtituloUbicacion") : t("subtituloCaba");
  }
  if (el.footerNotaDistancia) {
    el.footerNotaDistancia.textContent = origen.esUbicacionUsuario ? t("footerUbicacion") : t("footerCaba");
  }
}

function actualizarBotonUbicacion() {
  if (!el.ubicacionBtn) return;
  if (origen.esUbicacionUsuario) {
    el.ubicacionBtn.innerHTML = `${icon("map-pin", 16)} ${t("ubicacionUsando")}`;
    el.ubicacionBtn.classList.add("activo");
  } else {
    el.ubicacionBtn.innerHTML = `${icon("map-pin", 16)} ${t("ubicacionUsar")}`;
    el.ubicacionBtn.classList.remove("activo");
  }
}

function mostrarNotaUbicacion(mensaje) {
  if (!el.ubicacionNota) return;
  if (!mensaje) {
    el.ubicacionNota.style.display = "none";
    el.ubicacionNota.textContent = "";
    return;
  }
  el.ubicacionNota.style.display = "block";
  el.ubicacionNota.textContent = mensaje;
}

function usarCaba() {
  origen = { lat: CABA_COORDS.lat, lng: CABA_COORDS.lng, nombre: "CABA", esUbicacionUsuario: false };
  mostrarNotaUbicacion("");
  actualizarBotonUbicacion();
  actualizarTextosOrigen();
  render();
}

function solicitarUbicacion() {
  if (!navigator.geolocation) {
    mostrarNotaUbicacion(t("ubicacionSinSoporte"));
    return;
  }
  const original = el.ubicacionBtn.innerHTML;
  el.ubicacionBtn.innerHTML = `${icon("compass", 16)} ${t("ubicacionBuscando")}`;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      origen = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        nombre: "tu ubicación",
        esUbicacionUsuario: true,
      };
      mostrarNotaUbicacion(t("ubicacionNota"));
      actualizarBotonUbicacion();
      actualizarTextosOrigen();
      render();
    },
    () => {
      el.ubicacionBtn.innerHTML = original;
      mostrarNotaUbicacion(t("ubicacionError"));
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 5 * 60 * 1000 }
  );
}

if (el.ubicacionBtn) {
  actualizarBotonUbicacion();
  el.ubicacionBtn.addEventListener("click", () => {
    if (origen.esUbicacionUsuario) {
      usarCaba();
    } else {
      solicitarUbicacion();
    }
  });
}

// --- Cartel de bienvenida: preguntar una sola vez si usar la ubicación -------
const BIENVENIDA_KEY = "destinos-ba-bienvenida-ubicacion";
let bienvenidaFocoPrevio = null;

function cerrarBienvenida() {
  if (!el.bienvenidaOverlay) return;
  el.bienvenidaOverlay.classList.remove("visible");
  try {
    localStorage.setItem(BIENVENIDA_KEY, "1");
  } catch (err) {
    console.warn("No se pudo guardar la preferencia de bienvenida:", err);
  }
  if (bienvenidaFocoPrevio && typeof bienvenidaFocoPrevio.focus === "function") {
    bienvenidaFocoPrevio.focus();
  }
}

function mostrarBienvenida() {
  if (!el.bienvenidaOverlay || !el.bienvenidaModal) return;
  if (!navigator.geolocation) return; // sin soporte, no tiene sentido preguntar

  let yaPreguntado = false;
  try {
    yaPreguntado = localStorage.getItem(BIENVENIDA_KEY) === "1";
  } catch (err) {
    yaPreguntado = false;
  }
  if (yaPreguntado || origen.esUbicacionUsuario) return;

  bienvenidaFocoPrevio = document.activeElement;
  el.bienvenidaModal.innerHTML = `
    <h2 class="modal-title" id="bienvenida-titulo">${t("bienvenidaTitulo")}</h2>
    <p class="modal-parrafo">${t("bienvenidaTexto")}</p>
    <div class="bienvenida-acciones">
      <button id="bienvenida-usar" class="bienvenida-btn bienvenida-btn-principal">${icon("map-pin", 16)} ${t("bienvenidaUsar")}</button>
      <button id="bienvenida-caba" class="bienvenida-btn">${t("bienvenidaCaba")}</button>
    </div>
  `;
  el.bienvenidaOverlay.classList.add("visible");
  const btnUsar = document.getElementById("bienvenida-usar");
  const btnCaba = document.getElementById("bienvenida-caba");
  btnUsar.focus();
  btnUsar.addEventListener("click", () => {
    cerrarBienvenida();
    solicitarUbicacion();
  });
  btnCaba.addEventListener("click", cerrarBienvenida);
}

if (el.bienvenidaOverlay) {
  el.bienvenidaOverlay.addEventListener("click", (e) => {
    if (e.target === el.bienvenidaOverlay) cerrarBienvenida();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.bienvenidaOverlay && el.bienvenidaOverlay.classList.contains("visible")) {
    cerrarBienvenida();
  }
});

// --- Tutorial de bienvenida (solo la primera vez) ----------------------------
const TUTORIAL_KEY = "destinos-ba-tutorial-visto";
const TUTORIAL_PASOS = [
  { icono: "map-pin", tituloKey: "tutorial1Titulo", textoKey: "tutorial1Texto" },
  { icono: "search", tituloKey: "tutorial2Titulo", textoKey: "tutorial2Texto" },
  { icono: "map", tituloKey: "tutorial3Titulo", textoKey: "tutorial3Texto" },
  { icono: "star", tituloKey: "tutorial4Titulo", textoKey: "tutorial4Texto" },
  { icono: "route", tituloKey: "tutorial5Titulo", textoKey: "tutorial5Texto" },
];
let tutorialPasoActual = 0;
let tutorialFocoPrevio = null;

function cerrarTutorial(alTerminar) {
  if (el.tutorialOverlay) el.tutorialOverlay.classList.remove("visible");
  try {
    localStorage.setItem(TUTORIAL_KEY, "1");
  } catch (err) {
    console.warn("No se pudo guardar la preferencia de tutorial:", err);
  }
  if (tutorialFocoPrevio && typeof tutorialFocoPrevio.focus === "function") {
    tutorialFocoPrevio.focus();
  }
  if (alTerminar) setTimeout(mostrarBienvenida, 300);
}

function renderizarPasoTutorial() {
  if (!el.tutorialModal) return;
  const total = TUTORIAL_PASOS.length;
  const paso = TUTORIAL_PASOS[tutorialPasoActual];
  const esUltimo = tutorialPasoActual === total - 1;
  const esPrimero = tutorialPasoActual === 0;

  const puntos = TUTORIAL_PASOS.map((_, i) => `<span class="tutorial-punto ${i === tutorialPasoActual ? "activo" : ""}"></span>`).join("");

  el.tutorialModal.innerHTML = `
    <div class="tutorial-icono">${icon(paso.icono, 32)}</div>
    <h2 class="modal-title" id="tutorial-titulo">${t(paso.tituloKey)}</h2>
    <p class="modal-parrafo">${t(paso.textoKey)}</p>
    <div class="tutorial-puntos">${puntos}</div>
    <div class="tutorial-acciones">
      ${esPrimero ? `<button id="tutorial-saltar" class="bienvenida-btn">${t("tutorialSaltar")}</button>` : `<button id="tutorial-atras" class="bienvenida-btn">${t("tutorialAnterior")}</button>`}
      <button id="tutorial-siguiente" class="bienvenida-btn bienvenida-btn-principal">${esUltimo ? t("tutorialEmpezar") : t("tutorialSiguiente")}</button>
    </div>
  `;

  const btnSiguiente = document.getElementById("tutorial-siguiente");
  btnSiguiente.focus();
  btnSiguiente.addEventListener("click", () => {
    if (esUltimo) {
      cerrarTutorial(true);
    } else {
      tutorialPasoActual++;
      renderizarPasoTutorial();
    }
  });
  const btnSaltar = document.getElementById("tutorial-saltar");
  if (btnSaltar) btnSaltar.addEventListener("click", () => cerrarTutorial(true));
  const btnAtras = document.getElementById("tutorial-atras");
  if (btnAtras) {
    btnAtras.addEventListener("click", () => {
      tutorialPasoActual--;
      renderizarPasoTutorial();
    });
  }
}

function mostrarTutorial() {
  if (!el.tutorialOverlay || !el.tutorialModal) {
    setTimeout(mostrarBienvenida, 300);
    return;
  }
  let yaVisto = false;
  try {
    yaVisto = localStorage.getItem(TUTORIAL_KEY) === "1";
  } catch (err) {
    yaVisto = false;
  }
  if (yaVisto) {
    setTimeout(mostrarBienvenida, 300);
    return;
  }

  tutorialFocoPrevio = document.activeElement;
  tutorialPasoActual = 0;
  el.tutorialOverlay.classList.add("visible");
  renderizarPasoTutorial();
}

if (el.tutorialOverlay) {
  el.tutorialOverlay.addEventListener("click", (e) => {
    if (e.target === el.tutorialOverlay) cerrarTutorial(true);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.tutorialOverlay && el.tutorialOverlay.classList.contains("visible")) {
    cerrarTutorial(true);
  }
});

const vieneDeDestinoDirecto = new URLSearchParams(window.location.search).has("destino");
if (!vieneDeDestinoDirecto) {
  setTimeout(mostrarTutorial, 600);
}

// --- Tema claro/oscuro -------------------------------------------------------
const THEME_KEY = "destinos-ba-tema";
const btnTema = document.getElementById("theme-toggle");

function temaActual() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function actualizarBotonTema() {
  if (!btnTema) return;
  const esClaro = temaActual() === "light";
  btnTema.innerHTML = icon(esClaro ? "moon" : "sun", 18);
  btnTema.setAttribute("aria-label", esClaro ? t("cambiarATemaOscuro") : t("cambiarATemaClaro"));
  btnTema.setAttribute("aria-pressed", esClaro ? "true" : "false");
}

function aplicarTema(tema) {
  if (tema === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  try {
    localStorage.setItem(THEME_KEY, tema);
  } catch (err) {
    console.warn("No se pudo guardar la preferencia de tema:", err);
  }
  actualizarBotonTema();
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    aplicarTema(temaActual() === "light" ? "dark" : "light");
  });
}

// --- Tamaño de letra (normal / grande / muy grande) --------------------------
const TAMANO_KEY = "destinos-ba-tamano-letra";
const TAMANOS = ["normal", "grande", "muy-grande"];

function tamanoActual() {
  const attr = document.documentElement.getAttribute("data-tamano");
  return TAMANOS.includes(attr) ? attr : "normal";
}

function actualizarBotonTamano() {
  if (!el.tamanoToggle) return;
  const actual = tamanoActual();
  el.tamanoToggle.textContent = "A";
  el.tamanoToggle.style.fontSize = actual === "normal" ? "0.85rem" : actual === "grande" ? "1rem" : "1.15rem";
  const clave = actual === "normal" ? "tamanoNormal" : actual === "grande" ? "tamanoGrande" : "tamanoMuyGrande";
  el.tamanoToggle.setAttribute("aria-label", t(clave));
}

function aplicarTamano(tamano) {
  if (tamano === "normal") {
    document.documentElement.removeAttribute("data-tamano");
  } else {
    document.documentElement.setAttribute("data-tamano", tamano);
  }
  try {
    localStorage.setItem(TAMANO_KEY, tamano);
  } catch (err) {
    console.warn("No se pudo guardar el tamaño de letra:", err);
  }
  actualizarBotonTamano();
}

if (el.tamanoToggle) {
  el.tamanoToggle.addEventListener("click", () => {
    const siguiente = TAMANOS[(TAMANOS.indexOf(tamanoActual()) + 1) % TAMANOS.length];
    aplicarTamano(siguiente);
  });
  actualizarBotonTamano();
}

// --- Idioma de la interfaz (español / inglés) --------------------------------
function aplicarIdioma() {
  document.documentElement.setAttribute("lang", idioma === "en" ? "en" : "es-AR");
  document.title = t("pageTitle");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("pageDescription"));

  CATEGORIAS.forEach((c) => {
    c.label = CATEGORIA_LABELS[idioma][c.id];
  });

  if (el.eyebrowTexto) el.eyebrowTexto.textContent = t("eyebrow");
  if (el.tituloH1) el.tituloH1.innerHTML = t("tituloH1");
  if (el.buscador) el.buscador.placeholder = t("buscadorPlaceholder");
  if (el.buscador) el.buscador.parentElement.querySelector(".buscador-btn")?.setAttribute("aria-label", t("buscarAria"));

  const panelLabel = document.querySelector(".panel-head-label");
  if (panelLabel) panelLabel.textContent = t("panelDistanciaMax");

  const btnVistaLista = el.vistaToggle?.querySelector('[data-vista="lista"]');
  const btnVistaMapa = el.vistaToggle?.querySelector('[data-vista="mapa"]');
  if (btnVistaLista) btnVistaLista.textContent = t("vistaLista");
  if (btnVistaMapa) btnVistaMapa.textContent = t("vistaMapa");

  const ordenLabel = document.querySelector(".orden-label");
  if (ordenLabel) ordenLabel.textContent = t("ordenarPor");
  const optDistancia = el.ordenSelect?.querySelector('option[value="distancia"]');
  const optAlfabetico = el.ordenSelect?.querySelector('option[value="alfabetico"]');
  const optCategoria = el.ordenSelect?.querySelector('option[value="categoria"]');
  if (optDistancia) optDistancia.textContent = t("ordenDistancia");
  if (optAlfabetico) optAlfabetico.textContent = t("ordenAlfabetico");
  if (optCategoria) optCategoria.textContent = t("ordenCategoria");

  if (el.sorpresaBtn) el.sorpresaBtn.innerHTML = `${icon("shuffle", 16)} ${t("sorpresa")}`;
  if (el.resumenBtn) el.resumenBtn.innerHTML = `${icon("bar-chart", 16)} ${t("resumenBtn")}`;
  if (el.sugerirBtn) el.sugerirBtn.innerHTML = `${icon("lightbulb", 16)} ${t("sugerirBtn")}`;
  if (el.backupBtn) el.backupBtn.innerHTML = `${icon("download", 16)} ${t("backupBtn")}`;
  if (el.compartirFiltrosBtn) el.compartirFiltrosBtn.innerHTML = `${icon("link", 14)} ${t("compartirFiltrosBtn")}`;
  if (el.offlineBanner) {
    el.offlineBanner.innerHTML = `${icon("wifi-off", 18)} <span>${t("offline")}</span>`;
  }

  actualizarTextosOrigen();
  actualizarBotonUbicacion();
  actualizarBotonTema();
  actualizarBotonTamano();
  actualizarBarraAcciones();

  if (el.idiomaToggle) {
    el.idiomaToggle.textContent = idioma === "en" ? "ES" : "EN";
    el.idiomaToggle.setAttribute("aria-label", idioma === "en" ? "Cambiar a español" : "Switch to English");
  }
}

function guardarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  try {
    localStorage.setItem(IDIOMA_KEY, idioma);
  } catch (err) {
    console.warn("No se pudo guardar el idioma:", err);
  }
  aplicarIdioma();
  render();
}

if (el.idiomaToggle) {
  el.idiomaToggle.addEventListener("click", () => {
    guardarIdioma(idioma === "en" ? "es" : "en");
  });
}

aplicarIdioma();
actualizarBotonTema();

render();

// --- Exportar / importar mis datos (favoritos, visitados, notas, itinerario) -
const BACKUP_KEYS = [
  "destinos-ba-favoritos",
  "destinos-ba-visitados",
  "destinos-ba-notas-personales",
  "destinos-ba-itinerario",
  "destinos-ba-comparar",
  "destinos-ba-costo-viaje",
  "destinos-ba-tema",
  "destinos-ba-idioma",
];
let backupFocoPrevio = null;

function exportarDatos() {
  const datos = {};
  BACKUP_KEYS.forEach((key) => {
    const valor = localStorage.getItem(key);
    if (valor !== null) datos[key] = valor;
  });
  const paquete = { app: "destinos-buenos-aires", version: 1, exportadoEn: new Date().toISOString(), datos };
  const blob = new Blob([JSON.stringify(paquete, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  const fecha = new Date().toISOString().slice(0, 10);
  enlace.href = url;
  enlace.download = `destinos-ba-backup-${fecha}.json`;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(url);
}

function mostrarMensajeBackup(mensaje, esError) {
  const contenedor = document.getElementById("backup-mensaje");
  if (!contenedor) return;
  contenedor.textContent = mensaje;
  contenedor.classList.toggle("backup-mensaje-error", !!esError);
  contenedor.style.display = "block";
}

function importarDatos(archivo) {
  if (!archivo) return;
  if (!window.confirm(t("backupImportarConfirmar"))) return;

  const lector = new FileReader();
  lector.onload = (e) => {
    try {
      const paquete = JSON.parse(e.target.result);
      const datos = paquete && paquete.datos ? paquete.datos : paquete;
      let restaurados = 0;
      BACKUP_KEYS.forEach((key) => {
        if (typeof datos[key] === "string") {
          localStorage.setItem(key, datos[key]);
          restaurados++;
        }
      });
      if (restaurados === 0) throw new Error("El archivo no tiene datos reconocibles");

      // Volvemos a cargar todo el estado en memoria desde lo que se acaba de guardar
      favoritos = cargarFavoritos();
      visitados = cargarVisitados();
      notasPersonales = cargarNotasPersonales();
      itinerarioSeleccion = cargarItinerario();
      comparacionSeleccion = cargarComparacion();
      prefsCosto = cargarPreferenciasCosto();
      idioma = cargarIdioma();

      aplicarIdioma();
      aplicarTema(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
      actualizarBarraAcciones();
      render();

      mostrarMensajeBackup(t("backupImportarExito"), false);
    } catch (err) {
      console.warn("No se pudo importar el archivo de backup:", err);
      mostrarMensajeBackup(t("backupImportarError"), true);
    }
  };
  lector.readAsText(archivo);
}

function cerrarBackupModal() {
  if (el.backupOverlay) el.backupOverlay.classList.remove("visible");
  if (backupFocoPrevio && typeof backupFocoPrevio.focus === "function") {
    backupFocoPrevio.focus();
  }
}

function abrirBackupModal() {
  if (!el.backupOverlay || !el.backupModal) return;
  backupFocoPrevio = document.activeElement;

  el.backupModal.innerHTML = `
    <h2 class="modal-title" id="backup-titulo">${t("backupTitulo")}</h2>
    <p class="modal-parrafo">${t("backupDescripcion")}</p>
    <div class="bienvenida-acciones" style="flex-direction:column">
      <button id="backup-exportar-btn" class="bienvenida-btn bienvenida-btn-principal">${icon("download", 16)} ${t("backupExportar")}</button>
      <button id="backup-importar-btn" class="bienvenida-btn">${icon("upload", 16)} ${t("backupImportar")}</button>
    </div>
    <p class="navegar-nota" style="margin-left:0">${t("backupNota")}</p>
    <p id="backup-mensaje" class="backup-mensaje" style="display:none"></p>
  `;

  el.backupOverlay.classList.add("visible");
  const btnExportar = document.getElementById("backup-exportar-btn");
  btnExportar.focus();
  btnExportar.addEventListener("click", exportarDatos);
  document.getElementById("backup-importar-btn").addEventListener("click", () => {
    if (el.backupInput) el.backupInput.click();
  });
}

if (el.backupBtn) {
  el.backupBtn.innerHTML = `${icon("download", 16)} ${t("backupBtn")}`;
  el.backupBtn.addEventListener("click", abrirBackupModal);
}

if (el.backupInput) {
  el.backupInput.addEventListener("change", (e) => {
    const archivo = e.target.files && e.target.files[0];
    importarDatos(archivo);
    e.target.value = ""; // permite volver a elegir el mismo archivo si hace falta
  });
}

if (el.backupOverlay) {
  el.backupOverlay.addEventListener("click", (e) => {
    if (e.target === el.backupOverlay) cerrarBackupModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.backupOverlay && el.backupOverlay.classList.contains("visible")) {
    cerrarBackupModal();
  }
});

// --- Código QR para compartir un destino puntual sin depender de wifi -------
let qrFocoPrevio = null;

function cerrarQrModal() {
  if (el.qrOverlay) el.qrOverlay.classList.remove("visible");
  if (qrFocoPrevio && typeof qrFocoPrevio.focus === "function") {
    qrFocoPrevio.focus();
  }
}

function abrirQrModal(d) {
  if (!el.qrOverlay || !el.qrModal) return;
  qrFocoPrevio = document.activeElement;

  const url = `${window.location.origin}${window.location.pathname}?destino=${encodeURIComponent(d.nombre)}`;

  el.qrModal.innerHTML = `
    <h2 class="modal-title" id="qr-titulo">${d.nombre}</h2>
    <p class="modal-parrafo">${t("qrDescripcion")}</p>
    <div class="qr-contenedor" id="qr-contenedor"></div>
    <div class="bienvenida-acciones">
      <button id="qr-descargar-btn" class="bienvenida-btn bienvenida-btn-principal">${icon("download", 16)} ${t("qrDescargar")}</button>
      <button id="qr-cerrar-btn" class="bienvenida-btn">${t("qrCerrar")}</button>
    </div>
  `;

  el.qrOverlay.classList.add("visible");

  const contenedor = document.getElementById("qr-contenedor");
  if (typeof QRCode !== "undefined" && contenedor) {
    contenedor.innerHTML = "";
    new QRCode(contenedor, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#101913",
      colorLight: "#F2E8CF",
    });
  }

  const btnCerrar = document.getElementById("qr-cerrar-btn");
  btnCerrar.addEventListener("click", cerrarQrModal);
  btnCerrar.focus();
  document.getElementById("qr-descargar-btn").addEventListener("click", () => {
    const canvas = contenedor.querySelector("canvas");
    if (!canvas) return;
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = `qr-${d.nombre.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  });
}

if (el.qrOverlay) {
  el.qrOverlay.addEventListener("click", (e) => {
    if (e.target === el.qrOverlay) cerrarQrModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.qrOverlay && el.qrOverlay.classList.contains("visible")) {
    cerrarQrModal();
  }
});

// Si la URL trae ?destino=NombreExacto (por ejemplo, al escanear un código QR),
// abrimos esa guía directamente al cargar la página.
(function abrirDestinoDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const nombreDestino = params.get("destino");
  if (!nombreDestino) return;
  const encontrado = DESTINOS.find((d) => d.nombre === nombreDestino);
  if (encontrado) {
    setTimeout(() => abrirModal(encontrado), 50);
  }
})();
