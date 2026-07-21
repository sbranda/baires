// ---------------------------------------------------------------------------
// Datos: localidades turísticas de la provincia de Buenos Aires
// Distancia aproximada por ruta desde la Ciudad de Buenos Aires (CABA), en km.
// La guía de cada destino es orientativa; conviene chequear detalles antes de viajar.
// ---------------------------------------------------------------------------
const DESTINOS = [
  { nombre: "Tigre", km: 32, categoria: "rio", nota: "Delta, lanchas colectivas y puerto de frutos.",
    comoLlegar: "Tren Mitre desde Retiro hasta estación Tigre, o Panamericana ramal Tigre.",
    cuandoIr: "Todo el año; primavera y otoño para caminatas, verano para lanchas y playas de río.",
    duracion: "Día completo o fin de semana.",
    puntos: ["Paseo en lancha colectiva por los ríos del delta", "Puerto de Frutos: artesanías y ferias", "Museo de Arte Tigre", "Parque de la Costa para ir con niños"] },
  { nombre: "San Isidro", km: 28, categoria: "pueblo", nota: "Catedral, casco histórico y costa del río.",
    comoLlegar: "Tren Mitre línea San Isidro desde Retiro, o Av. del Libertador en auto.",
    cuandoIr: "Todo el año, fines de semana hay más actividad en la peatonal.",
    duracion: "Medio día.",
    puntos: ["Catedral neogótica y plaza Mitre", "Peatonal Ituzaingó con bares y ferias", "Museo Pueyrredón", "Hipódromo de San Isidro"] },
  { nombre: "Luján", km: 65, categoria: "pueblo", nota: "Basílica y peregrinación, turismo religioso.",
    comoLlegar: "Ruta Nacional 7 o Acceso Oeste, aprox. 1 hora en auto; también hay micros directos.",
    cuandoIr: "Todo el año; primer domingo de octubre es la gran peregrinación juvenil.",
    duracion: "Medio día.",
    puntos: ["Basílica de Luján", "Complejo Museográfico Enrique Udaondo", "Paseo costero junto al río Luján", "Zoo Lujan (opcional, con debate sobre bienestar animal)"] },
  { nombre: "Cañuelas", km: 65, categoria: "campo", nota: "Estancias y turismo rural cerca de la ciudad.",
    comoLlegar: "Autopista Ricchieri y luego Ruta 205, alrededor de 1 hora en auto.",
    cuandoIr: "Primavera y otoño para actividades de campo al aire libre.",
    duracion: "Día completo.",
    puntos: ["Día de campo en estancias con doma y folklore", "Laguna de Cañuelas", "Gastronomía criolla y asado", "Cabalgatas"] },
  { nombre: "La Plata", km: 56, categoria: "ciudad", nota: "Catedral, bosque y trazado urbano único.",
    comoLlegar: "Autopista Buenos Aires-La Plata, o tren Roca desde Constitución.",
    cuandoIr: "Todo el año; el Bosque es lindo en otoño y primavera.",
    duracion: "Día completo.",
    puntos: ["Catedral de La Plata", "Museo de Ciencias Naturales", "Paseo del Bosque", "República de los Niños"] },
  { nombre: "Zárate", km: 90, categoria: "rio", nota: "Costanera sobre el Paraná y puente Zárate-Brazo Largo.",
    comoLlegar: "Ruta Panamericana ramal Escobar hasta Zárate, o tren desde Retiro.",
    cuandoIr: "Primavera y verano para disfrutar la costanera.",
    duracion: "Medio día.",
    puntos: ["Costanera y muelle sobre el Paraná", "Puente Zárate-Brazo Largo", "Museo histórico municipal", "Pesca de costa"] },
  { nombre: "Capilla del Señor", km: 90, categoria: "pueblo", nota: "Pueblo colonial declarado lugar histórico.",
    comoLlegar: "Ruta 8 hasta Pilar, luego rutas provinciales hacia Capilla del Señor.",
    cuandoIr: "Todo el año; fines de semana con más oferta gastronómica.",
    duracion: "Medio día.",
    puntos: ["Casco histórico con casonas coloniales", "Plaza Belgrano", "Estancias cercanas para almorzar", "Paseos en sulky"] },
  { nombre: "San Antonio de Areco", km: 113, categoria: "pueblo", nota: "Capital de la tradición gaucha, museos y talabarterías.",
    comoLlegar: "Ruta Nacional 8, alrededor de 1h30 en auto; también hay micros directos.",
    cuandoIr: "Todo el año; el Día de la Tradición en noviembre reúne desfiles gauchos.",
    duracion: "Día completo o fin de semana.",
    puntos: ["Museo Gauchesco Ricardo Güiraldes", "Talabarterías y plateros artesanales", "Puente Viejo sobre el río Areco", "Estancias con jineteada"] },
  { nombre: "Mercedes", km: 100, categoria: "campo", nota: "Puerta de acceso a estancias y turismo rural.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 1h30 en auto.",
    cuandoIr: "Primavera y otoño para recorrer el campo.",
    duracion: "Medio día.",
    puntos: ["Catedral de Mercedes", "Estancias con actividades rurales", "Gastronomía de campo", "Reserva natural cercana"] },
  { nombre: "Chascomús", km: 125, categoria: "rio", nota: "Laguna, costanera y pesca deportiva.",
    comoLlegar: "Ruta 2 rumbo a la costa, aproximadamente 1h30 en auto.",
    cuandoIr: "Verano para actividades náuticas, primavera para pesca.",
    duracion: "Día completo.",
    puntos: ["Laguna de Chascomús y costanera", "Pesca de pejerrey", "Museo Pampeano", "Catedral de Chascomús"] },
  { nombre: "Baradero", km: 150, categoria: "rio", nota: "Playas de río y fiesta nacional del remo.",
    comoLlegar: "Ruta Panamericana ramal Baradero, unas 2 horas en auto.",
    cuandoIr: "Verano para playas de río; enero por la Fiesta Nacional del Remo.",
    duracion: "Fin de semana.",
    puntos: ["Playas sobre el río Baradero", "Fiesta Nacional del Remo", "Camping y balnearios", "Costanera con paseos"] },
  { nombre: "San Pedro", km: 165, categoria: "rio", nota: "Costa del Paraná, quintas de duraznos.",
    comoLlegar: "Ruta Panamericana ramal Escobar/San Pedro, unas 2 horas en auto.",
    cuandoIr: "Verano para la costa; enero por la Fiesta Nacional del Durazno.",
    duracion: "Fin de semana.",
    puntos: ["Costanera y playas sobre el Paraná", "Quintas de duraznos visitables en temporada", "Museo Almirante Brown", "Pesca deportiva"] },
  { nombre: "Chivilcoy", km: 160, categoria: "campo", nota: "Ciudad agrícola con arquitectura de antaño.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 2 horas en auto.",
    cuandoIr: "Todo el año, clima templado en primavera y otoño.",
    duracion: "Medio día.",
    puntos: ["Catedral y plaza central", "Museo de Bellas Artes", "Arquitectura de principios del siglo XX", "Estancias cercanas"] },
  { nombre: "Dolores", km: 200, categoria: "pueblo", nota: "Casco histórico y museos camino a la costa.",
    comoLlegar: "Ruta 2 camino a la costa atlántica, unas 2h30 en auto.",
    cuandoIr: "Buena parada camino a la costa en cualquier época.",
    duracion: "Medio día.",
    puntos: ["Museo de Autos Antiguos", "Casco histórico y plaza", "Catedral de Dolores", "Paseo de compras artesanales"] },
  { nombre: "Nueve de Julio", km: 260, categoria: "campo", nota: "Laguna de Gómez y llanura pampeana profunda.",
    comoLlegar: "Ruta Nacional 5, aproximadamente 3 horas en auto.",
    cuandoIr: "Primavera y verano para actividades en la laguna.",
    duracion: "Fin de semana.",
    puntos: ["Laguna de Gómez, pesca y deportes náuticos", "Plaza 25 de Mayo, una de las más grandes del país", "Camping junto a la laguna", "Museo histórico"] },
  { nombre: "Junín", km: 260, categoria: "ciudad", nota: "Laguna urbana y punto de partida hacia el oeste.",
    comoLlegar: "Ruta Nacional 7, aproximadamente 3 horas en auto.",
    cuandoIr: "Todo el año.",
    duracion: "Medio día.",
    puntos: ["Laguna de Junín", "Museo Casa de la Cultura", "Costanera para caminar o andar en bici", "Centro comercial peatonal"] },
  { nombre: "Azul", km: 300, categoria: "sierra", nota: "Ciudad serrana, arquitectura de Salamone.",
    comoLlegar: "Ruta Nacional 3 o Ruta 226, aproximadamente 3h30 en auto.",
    cuandoIr: "Primavera y otoño para recorrer la zona serrana.",
    duracion: "Fin de semana.",
    puntos: ["Obras del arquitecto Salamone en la región", "Catedral de Azul", "Reserva del Paraje Cinco Cerros", "Sierras Bayas cercanas"] },
  { nombre: "San Clemente del Tuyú", km: 320, categoria: "playa", nota: "Playas familiares y parque temático marino.",
    comoLlegar: "Ruta 2 y luego Ruta 11, aproximadamente 3h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta; marzo con menos gente.",
    duracion: "Fin de semana o semana.",
    puntos: ["Mundo Marino, parque temático con fauna acuática", "Playas extensas y tranquilas", "Reserva faro Punta Rasa", "Paseo de compras costero"] },
  { nombre: "Pinamar", km: 340, categoria: "playa", nota: "Médanos, bosque implantado y playas de moda.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4 horas en auto; hay micros y vuelos en temporada.",
    cuandoIr: "Enero y febrero en temporada alta; fines de semana largos en primavera.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas y balnearios de diseño", "Bosque de médanos con bicicleta o a pie", "Zona gastronómica y de compras", "Excursión a Cariló en bici"] },
  { nombre: "Cariló", km: 355, categoria: "playa", nota: "Bosque frente al mar, el balneario más exclusivo.",
    comoLlegar: "Ruta 2 y Ruta 11 hasta Pinamar, luego unos minutos más al sur.",
    cuandoIr: "Enero y febrero, o fines de semana largos de primavera y otoño.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas dentro del bosque de pinos y acacias", "Circuito de compras de diseño", "Bicisendas entre las dunas", "Avistaje de aves en el bosque"] },
  { nombre: "Santa Teresita", km: 340, categoria: "playa", nota: "Playas extensas y ambiente familiar.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas anchas ideales para familias", "Paseo Jorge Bucay junto al mar", "Avenida costanera con locales gastronómicos", "Pesca desde la escollera"] },
  { nombre: "Villa Gesell", km: 370, categoria: "playa", nota: "Peatonal, médanos y vida nocturna costera.",
    comoLlegar: "Ruta 2 y Ruta 11, aproximadamente 4h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta; marzo para menos multitudes.",
    duracion: "Fin de semana o semana.",
    puntos: ["Peatonal Av. 3 con locales y artesanos", "Médanos vivos del Faro Querandí", "Playas extensas", "Vida nocturna en temporada"] },
  { nombre: "Tandil", km: 350, categoria: "sierra", nota: "Sierras, trekking y la icónica Piedra Movediza.",
    comoLlegar: "Ruta 226, aproximadamente 4h30 en auto; también hay micros y vuelos.",
    cuandoIr: "Primavera y otoño para trekking; Semana Santa por las celebraciones religiosas.",
    duracion: "Fin de semana.",
    puntos: ["Cerro y réplica de la Piedra Movediza", "Parque Independencia", "Fábricas de embutidos y quesos artesanales", "Trekking en Sierra del Tigre"] },
  { nombre: "Mar del Plata", km: 400, categoria: "playa", nota: "La Feliz: playas, puerto y vida urbana costera.",
    comoLlegar: "Ruta 2, aproximadamente 4h30 en auto; también micros, tren y vuelos.",
    cuandoIr: "Enero y febrero en temporada alta; fines de semana largos todo el año.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas Bristol y Varese", "Puerto y lobos marinos", "Torre Tanque y Villa Victoria Ocampo", "Vida nocturna y casino"] },
  { nombre: "Balcarce", km: 445, categoria: "sierra", nota: "Sierras y museo del automovilismo.",
    comoLlegar: "Ruta 226 desde Tandil o Ruta 55 desde Mar del Plata, aproximadamente 5 horas desde CABA.",
    cuandoIr: "Primavera y otoño para las sierras.",
    duracion: "Fin de semana.",
    puntos: ["Museo Juan Manuel Fangio", "Sierras y cascadas cercanas", "Producción de papa y granja", "Circuito de golf"] },
  { nombre: "Miramar", km: 450, categoria: "playa", nota: "Bosque, playas tranquilas y golf.",
    comoLlegar: "Ruta 2 hasta Mar del Plata y luego Ruta 11, aproximadamente 5 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta; buen destino tranquilo fuera de esas fechas.",
    duracion: "Fin de semana o semana.",
    puntos: ["Vivero Florentino Ameghino", "Playas tranquilas", "Cancha de golf frente al mar", "Paseo por el bosque parque"] },
  { nombre: "Necochea", km: 470, categoria: "playa", nota: "Playas anchas y desembocadura del río Quequén.",
    comoLlegar: "Ruta 2 y luego Ruta 88, aproximadamente 5h30 en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas junto al río Quequén", "Parque Miguel Lillo, uno de los bosques más grandes de la costa", "Puerto Quequén", "Cabalgatas por la costa"] },
  { nombre: "Sierra de la Ventana", km: 530, categoria: "sierra", nota: "Cerros, arroyos y el histórico Cerro Ventana.",
    comoLlegar: "Ruta 3 y Ruta 76, aproximadamente 6 horas en auto; también hay tren y micros.",
    cuandoIr: "Primavera y otoño para trekking, evitando el calor extremo del verano.",
    duracion: "Fin de semana.",
    puntos: ["Trekking al Cerro Ventana", "Arroyo Sauce Grande para refrescarse", "Cerro Tres Picos, el más alto de la provincia", "Pueblo de Villa Ventana"] },
  { nombre: "Bahía Blanca", km: 650, categoria: "ciudad", nota: "Puerto y puerta de entrada a la Patagonia.",
    comoLlegar: "Ruta 3, aproximadamente 7 horas en auto; también hay vuelos y trenes.",
    cuandoIr: "Todo el año; suele usarse como escala hacia la Patagonia.",
    duracion: "Medio día o de paso.",
    puntos: ["Museo del Puerto de Ingeniero White", "Teatro Municipal", "Base Naval Puerto Belgrano cercana", "Plaza Rivadavia"] },
  { nombre: "Monte Hermoso", km: 630, categoria: "playa", nota: "Playas de arena fina, casi en el límite provincial.",
    comoLlegar: "Ruta 3 y luego Ruta 78, aproximadamente 7 horas en auto.",
    cuandoIr: "Enero y febrero en temporada alta.",
    duracion: "Fin de semana o semana.",
    puntos: ["Playas de arena fina únicas por su orientación", "Avistaje de puesta de sol sobre el mar", "Reserva natural de la desembocadura", "Pesca de costa"] },
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

const MAX_KM = 700;

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
};

function icon(name, size = 14, color = "currentColor") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

// --- Estado -----------------------------------------------------------------
let distancia = 200;
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

  // Regla de ruta
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

  // Filtros
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

  // Resultados
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

function abrirModal(d) {
  el.modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-km-badge">${d.km} km desde CABA</div>
      <button id="modal-close" aria-label="Cerrar guía">${icon("x", 20)}</button>
    </div>
    <h2 class="modal-title">${d.nombre}</h2>
    <p class="modal-nota">${d.nota}</p>
    <div class="modal-info">
      <div class="info-row">
        ${icon("car", 16, "#7C9473")}
        <div>
          <div class="info-label">Cómo llegar</div>
          <div class="info-value">${d.comoLlegar}</div>
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
    <div class="modal-subhead">${icon("sparkles", 14)} Qué hacer</div>
    <ul class="modal-puntos">
      ${d.puntos.map((p) => `<li>${p}</li>`).join("")}
    </ul>
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
