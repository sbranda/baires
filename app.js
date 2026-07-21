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
  {
    nombre: "Nueve de Julio", km: 260, categoria: "campo",
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
    nombre: "Junín", km: 260, categoria: "ciudad",
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
    nombre: "Azul", km: 300, categoria: "sierra",
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
    nombre: "San Clemente del Tuyú", km: 320, categoria: "playa",
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
    otrosAtractivos: ["Mundo Marino, parque temático con fauna marina", "Reserva natural y faro de Punta Rasa", "Playas extensas y tranquilas", "Paseo de compras costero"],
    eventos: ["Temporada de espectáculos en Mundo Marino, verano", "Fiesta del Mar"],
    dondeComer: ["Restaurantes de pescado y mariscos sobre la costa", "Parrillas y pizzerías del centro"],
    dondeAlojarse: ["Hoteles familiares frente al mar", "Cabañas y departamentos de alquiler temporario"],
    tips: ["Reservar entradas a Mundo Marino con anticipación en temporada alta", "Es de los balnearios más accesibles en precio de la zona", "Punta Rasa es un buen lugar para el atardecer, algo alejado del centro"],
    presupuesto: "Medio: comparado con otros balnearios de la zona suele ser más accesible; el mayor gasto es la entrada a Mundo Marino.",
  },
  {
    nombre: "Pinamar", km: 340, categoria: "playa",
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
    nombre: "Cariló", km: 355, categoria: "playa",
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
    nombre: "Santa Teresita", km: 340, categoria: "playa",
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
    nombre: "Villa Gesell", km: 370, categoria: "playa",
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
    nombre: "Tandil", km: 350, categoria: "sierra",
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
    nombre: "Mar del Plata", km: 400, categoria: "playa",
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
    otrosAtractivos: ["Puerto y lobos marinos", "Torre Tanque, mirador panorámico", "Villa Victoria Ocampo (centro cultural)", "Casino Central"],
    eventos: ["Temporada de teatro y espectáculos en enero-febrero", "Fiesta Nacional del Mar"],
    dondeComer: ["Restaurantes de pescado en el puerto", "Heladerías y confiterías del centro"],
    dondeAlojarse: ["Hoteles frente al mar en la zona céntrica", "Departamentos de alquiler en los barrios del sur"],
    tips: ["Las playas del sur (Playa Grande, Punta Mogotes) suelen ser más tranquilas que el centro", "Reservar alojamiento con mucha anticipación en enero", "El puerto es un buen plan de medio día, incluso fuera de temporada"],
    presupuesto: "Medio: hay opciones para todos los presupuestos, desde hostels hasta hoteles de lujo.",
  },
  {
    nombre: "Balcarce", km: 445, categoria: "sierra",
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
    nombre: "Miramar", km: 450, categoria: "playa",
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
    nombre: "Necochea", km: 470, categoria: "playa",
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
    nombre: "Sierra de la Ventana", km: 530, categoria: "sierra",
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
    otrosAtractivos: ["Cerro Tres Picos, el más alto de la provincia de Buenos Aires", "Villa Ventana, pueblo boscoso vecino", "Parque Provincial Ernesto Tornquist", "Arroyo Sauce Grande"],
    eventos: ["Fiesta del Cordero Serrano", "Temporada de trekking en primavera"],
    dondeComer: ["Restaurantes de picadas y comida de campo", "Confiterías de Villa Ventana"],
    dondeAlojarse: ["Cabañas en Villa Ventana", "Hosterías en Sierra de la Ventana pueblo"],
    tips: ["El trekking al Cerro Ventana requiere buen estado físico y calzado de montaña", "Consultar el estado del sendero antes de salir, se cierra en días de mucho viento", "Villa Ventana es una buena base más tranquila que el pueblo principal"],
    presupuesto: "Medio: cabañas y comida regional son el gasto principal, el acceso a los senderos suele ser gratuito o de bajo costo.",
  },
  {
    nombre: "Carhué", km: 520, categoria: "rio",
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

const MAX_KM = 600;

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
let distancia = 300;
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
