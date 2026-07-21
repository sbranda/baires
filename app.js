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
    nombre: "San Isidro", km: 28, categoria: "pueblo",
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
    nombre: "Luján", km: 65, categoria: "pueblo",
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
    nombre: "Cañuelas", km: 65, categoria: "campo",
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
    nombre: "La Plata", km: 56, categoria: "ciudad",
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
    nombre: "Zárate", km: 90, categoria: "rio",
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
    nombre: "Capilla del Señor", km: 90, categoria: "pueblo",
    nota: "Pueblo colonial declarado lugar histórico.",
    historia: "El poblado se organizó en torno a una capilla construida en el siglo XVIII, de la que tomó su nombre, en una zona de estancias y postas que servían de descanso a los viajeros que iban hacia el norte de la provincia. A diferencia de otros pueblos bonaerenses que modernizaron su arquitectura con el correr de las décadas, Capilla del Señor conservó casi intacto su trazado colonial, lo que llevó a que en 1974 fuera declarado lugar histórico nacional. Ese reconocimiento ayudó a preservar sus casonas y calles empedradas, que hoy atraen a quienes buscan una postal poco común dentro de la provincia. El pueblo mantiene además su vínculo con las estancias de la zona, que combinan producción agropecuaria con recepción de visitantes.",
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
    otrosAtractivos: ["Pulpería Los Ombúes, una de las más antiguas del país", "Museo Criollo", "Iglesia de la Inmaculada Concepción", "Estancias históricas de la zona"],
    eventos: ["Fiesta patronal, diciembre", "Feria de artesanos, algunos fines de semana", "Desfile de carruajes históricos"],
    dondeComer: ["Casonas coloniales convertidas en restaurantes de comida regional", "Confiterías de pueblo con productos caseros"],
    dondeAlojarse: ["Posadas boutique dentro del casco histórico", "Estancias cercanas con hospedaje"],
    tips: ["Ir en día de semana para recorrerlo con tranquilidad", "Hay excursiones en globo aerostático sobre la zona, conviene reservar con anticipación", "Sacar fotos de las fachadas coloniales, de las mejor conservadas de la provincia", "Preguntar por ferias de artesanos de algunos fines de semana"],
    presupuesto: "Bajo a medio: el paseo por el pueblo es gratuito, el gasto principal es comida y algún paseo en sulky.",
  },
  {
    nombre: "San Antonio de Areco", km: 113, categoria: "pueblo",
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
    nombre: "Mercedes", km: 100, categoria: "campo",
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
    nombre: "Chascomús", km: 125, categoria: "rio",
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
    nombre: "Baradero", km: 150, categoria: "rio",
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
    nombre: "San Pedro", km: 165, categoria: "rio",
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
    nombre: "Chivilcoy", km: 160, categoria: "campo",
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
    nombre: "Dolores", km: 200, categoria: "pueblo",
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
