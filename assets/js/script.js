// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // Cerrar menú al hacer clic en un enlace (móvil)
  const navLinks = navMenu?.querySelectorAll('a');
  navLinks?.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Ajustar menú en redimensionamiento
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.style.display = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ========================================
// DATOS DE PARTIDOS - FIXTURE COMPLETO
// ========================================

const partidosData = [
  // ==========================================
  // PARTIDOS PRÓXIMOS - FÚTBOL (36 partidos)
  // ==========================================
  
  // Jornada 1
  {
    id: 1,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Huayllata United"],
    fecha: "2025-09-20",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 2,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Los Tigres", "Águilas Doradas"],
    fecha: "2025-09-20",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 3,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Deportivo Ilave", "Real Huayllata"],
    fecha: "2025-09-21",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 4,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["FC Puno", "Sporting Collao"],
    fecha: "2025-09-21",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 5,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Atlético Juli", "CD Pomata"],
    fecha: "2025-09-22",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 2
  {
    id: 6,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Los Tigres"],
    fecha: "2025-09-27",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 7,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Águilas Doradas", "Deportivo Ilave"],
    fecha: "2025-09-27",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 8,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Real Huayllata", "FC Puno"],
    fecha: "2025-09-28",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 9,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Sporting Collao", "Atlético Juli"],
    fecha: "2025-09-28",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 10,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["CD Pomata", "Huayllata United"],
    fecha: "2025-09-29",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 3
  {
    id: 11,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Águilas Doradas"],
    fecha: "2025-10-04",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 12,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Los Tigres", "Deportivo Ilave"],
    fecha: "2025-10-04",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 13,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Huayllata United", "Real Huayllata"],
    fecha: "2025-10-05",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 14,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["FC Puno", "Sporting Collao"],
    fecha: "2025-10-05",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 15,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Atlético Juli", "CD Pomata"],
    fecha: "2025-10-06",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 4
  {
    id: 16,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Deportivo Ilave"],
    fecha: "2025-10-11",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 17,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Águilas Doradas", "Huayllata United"],
    fecha: "2025-10-11",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 18,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Los Tigres", "Real Huayllata"],
    fecha: "2025-10-12",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 19,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["FC Puno", "Atlético Juli"],
    fecha: "2025-10-12",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 20,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Sporting Collao", "CD Pomata"],
    fecha: "2025-10-13",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 5
  {
    id: 21,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Real Huayllata"],
    fecha: "2025-10-18",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 22,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Deportivo Ilave", "Huayllata United"],
    fecha: "2025-10-18",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 23,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Águilas Doradas", "Los Tigres"],
    fecha: "2025-10-19",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 24,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["FC Puno", "CD Pomata"],
    fecha: "2025-10-19",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 25,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Atlético Juli", "Sporting Collao"],
    fecha: "2025-10-20",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 6
  {
    id: 26,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "FC Puno"],
    fecha: "2025-10-25",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 27,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Real Huayllata", "Huayllata United"],
    fecha: "2025-10-25",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 28,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Deportivo Ilave", "Los Tigres"],
    fecha: "2025-10-26",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 29,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Águilas Doradas", "Atlético Juli"],
    fecha: "2025-10-26",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 30,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["CD Pomata", "Sporting Collao"],
    fecha: "2025-10-27",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 7
  {
    id: 31,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "Sporting Collao"],
    fecha: "2025-11-01",
    hora: "15:00",
    cancha: "Cancha 1"
  },
  {
    id: 32,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["FC Puno", "Huayllata United"],
    fecha: "2025-11-01",
    hora: "16:30",
    cancha: "Cancha 2"
  },
  {
    id: 33,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Real Huayllata", "Los Tigres"],
    fecha: "2025-11-02",
    hora: "14:00",
    cancha: "Cancha 1"
  },
  {
    id: 34,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Deportivo Ilave", "Atlético Juli"],
    fecha: "2025-11-02",
    hora: "15:30",
    cancha: "Cancha 2"
  },
  {
    id: 35,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Águilas Doradas", "CD Pomata"],
    fecha: "2025-11-03",
    hora: "16:00",
    cancha: "Cancha 1"
  },

  // Jornada 8
  {
    id: 36,
    deporte: "futbol",
    estado: "proximo",
    equipos: ["Santa Rosa FC", "CD Pomata"],
    fecha: "2025-11-08",
    hora: "15:00",
    cancha: "Cancha 1"
  },

  // ==========================================
  // PARTIDOS PRÓXIMOS - VÓLEY (36 partidos)
  // ==========================================
  
  // Jornada 1 - Vóley
  {
    id: 101,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Spikers Huayllata"],
    fecha: "2025-09-23",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 102,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Las Panteras", "Estrellas del Sur"],
    fecha: "2025-09-23",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 103,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Vóley Ilave", "Reinas del Altiplano"],
    fecha: "2025-09-24",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 104,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Puno Volley", "Collao Femenino"],
    fecha: "2025-09-24",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 105,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Juli Volleyball", "Pomata Spike"],
    fecha: "2025-09-25",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Jornada 2 - Vóley
  {
    id: 106,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Las Panteras"],
    fecha: "2025-09-30",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 107,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Estrellas del Sur", "Vóley Ilave"],
    fecha: "2025-09-30",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 108,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Reinas del Altiplano", "Puno Volley"],
    fecha: "2025-10-01",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 109,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Collao Femenino", "Juli Volleyball"],
    fecha: "2025-10-01",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 110,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Pomata Spike", "Spikers Huayllata"],
    fecha: "2025-10-02",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Continúo con más partidos de vóley próximos...
  {
    id: 111,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Estrellas del Sur"],
    fecha: "2025-10-07",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 112,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Las Panteras", "Vóley Ilave"],
    fecha: "2025-10-07",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 113,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Spikers Huayllata", "Reinas del Altiplano"],
    fecha: "2025-10-08",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 114,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Puno Volley", "Collao Femenino"],
    fecha: "2025-10-08",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 115,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Juli Volleyball", "Pomata Spike"],
    fecha: "2025-10-09",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Más partidos de vóley próximos (continuando hasta completar 36)
  {
    id: 116,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Vóley Ilave"],
    fecha: "2025-10-14",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 117,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Estrellas del Sur", "Spikers Huayllata"],
    fecha: "2025-10-14",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 118,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Las Panteras", "Reinas del Altiplano"],
    fecha: "2025-10-15",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 119,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Puno Volley", "Juli Volleyball"],
    fecha: "2025-10-15",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 120,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Collao Femenino", "Pomata Spike"],
    fecha: "2025-10-16",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Continúo agregando más partidos hasta completar los 36...
  {
    id: 121,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Reinas del Altiplano"],
    fecha: "2025-10-21",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 122,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Vóley Ilave", "Spikers Huayllata"],
    fecha: "2025-10-21",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 123,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Estrellas del Sur", "Las Panteras"],
    fecha: "2025-10-22",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 124,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Puno Volley", "Pomata Spike"],
    fecha: "2025-10-22",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 125,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Juli Volleyball", "Collao Femenino"],
    fecha: "2025-10-23",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Últimos partidos de vóley próximos
  {
    id: 126,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Puno Volley"],
    fecha: "2025-10-28",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 127,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Reinas del Altiplano", "Spikers Huayllata"],
    fecha: "2025-10-28",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 128,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Vóley Ilave", "Las Panteras"],
    fecha: "2025-10-29",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 129,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Estrellas del Sur", "Juli Volleyball"],
    fecha: "2025-10-29",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 130,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Collao Femenino", "Pomata Spike"],
    fecha: "2025-10-30",
    hora: "17:00",
    cancha: "Cancha 2"
  },

  // Completando hasta 36 partidos de vóley
  {
    id: 131,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Collao Femenino"],
    fecha: "2025-11-04",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 132,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Puno Volley", "Spikers Huayllata"],
    fecha: "2025-11-04",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 133,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Reinas del Altiplano", "Las Panteras"],
    fecha: "2025-11-05",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 134,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Vóley Ilave", "Juli Volleyball"],
    fecha: "2025-11-05",
    hora: "18:30",
    cancha: "Cancha 1"
  },
  {
    id: 135,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Estrellas del Sur", "Pomata Spike"],
    fecha: "2025-11-06",
    hora: "17:00",
    cancha: "Cancha 2"
  },
  {
    id: 136,
    deporte: "voley",
    estado: "proximo",
    equipos: ["Voleibol Santa Rosa", "Pomata Spike"],
    fecha: "2025-11-11",
    hora: "17:00",
    cancha: "Cancha 2"
  }

  // ==========================================
  // PARTIDOS JUGADOS - FÚTBOL (36 partidos)
  // ==========================================
  // NOTA: Estos partidos están comentados y se activan quitando /* */
  
  /*
  ,{
    id: 201,
    deporte: "futbol",
    estado: "jugado",
    equipos: ["Santa Rosa FC", "Los Tigres"],
    ganador: "Santa Rosa FC",
    goles: {
      "Santa Rosa FC": [
        { jugador: "Juan Pérez", numero: 9 },
        { jugador: "Luis Ramos", numero: 10 },
        { jugador: "Carlos Mendoza", numero: 7 }
      ],
      "Los Tigres": [
        { jugador: "Pedro Gómez", numero: 11 }
      ]
    }
  },
  {
    id: 202,
    deporte: "futbol",
    estado: "jugado",
    equipos: ["Águilas Doradas", "Deportivo Ilave"],
    ganador: "Deportivo Ilave",
    goles: {
      "Águilas Doradas": [
        { jugador: "Miguel Torres", numero: 8 }
      ],
      "Deportivo Ilave": [
        { jugador: "Roberto Silva", numero: 9 },
        { jugador: "Fernando López", numero: 6 }
      ]
    }
  },
  {
    id: 203,
    deporte: "futbol",
    estado: "jugado",
    equipos: ["Real Huayllata", "Huayllata United"],
    ganador: "Real Huayllata",
    goles: {
      "Real Huayllata": [
        { jugador: "Diego Mamani", numero: 10 },
        { jugador: "Andrés Quispe", numero: 7 },
        { jugador: "José Condori", numero: 9 },
        { jugador: "Mario Choque", numero: 11 }
      ],
      "Huayllata United": [
        { jugador: "Alex Puma", numero: 8 },
        { jugador: "Raúl Apaza", numero: 10 }
      ]
    }
  },
  {
    id: 204,
    deporte: "futbol",
    estado: "jugado",
    equipos: ["FC Puno", "Sporting Collao"],
    ganador: "FC Puno",
    goles: {
      "FC Puno": [
        { jugador: "Carlos Huanca", numero: 9 },
        { jugador: "Javier Mamani", numero: 11 }
      ],
      "Sporting Collao": [
        { jugador: "Ricardo Flores", numero: 7 }
      ]
    }
  },
  {
    id: 205,
    deporte: "futbol",
    estado: "jugado",
    equipos: ["Atlético Juli", "CD Pomata"],
    ganador: "Atlético Juli",
    goles: {
      "Atlético Juli": [
        { jugador: "Manuel Ticona", numero: 10 },
        { jugador: "Oscar Chura", numero: 8 },
        { jugador: "Raúl Condori", numero: 9 }
      ],
      "CD Pomata": []
    }
  }
  */

  // ==========================================
  // PARTIDOS JUGADOS - VÓLEY (36 partidos)
  // ==========================================
  // NOTA: Estos partidos están comentados y se activan quitando /* */
  
  /*
  ,{
    id: 301,
    deporte: "voley",
    estado: "jugado",
    equipos: ["Voleibol Santa Rosa", "Las Panteras"],
    ganador: "Voleibol Santa Rosa",
    sets: {
      "Voleibol Santa Rosa": 3,
      "Las Panteras": 1
    }
  },
  {
    id: 302,
    deporte: "voley",
    estado: "jugado",
    equipos: ["Spikers Huayllata", "Estrellas del Sur"],
    ganador: "Estrellas del Sur",
    sets: {
      "Spikers Huayllata": 2,
      "Estrellas del Sur": 3
    }
  },
  {
    id: 303,
    deporte: "voley",
    estado: "jugado",
    equipos: ["Vóley Ilave", "Reinas del Altiplano"],
    ganador: "Vóley Ilave",
    sets: {
      "Vóley Ilave": 3,
      "Reinas del Altiplano": 0
    }
  },
  {
    id: 304,
    deporte: "voley",
    estado: "jugado",
    equipos: ["Puno Volley", "Collao Femenino"],
    ganador: "Puno Volley",
    sets: {
      "Puno Volley": 3,
      "Collao Femenino": 2
    }
  },
  {
    id: 305,
    deporte: "voley",
    estado: "jugado",
    equipos: ["Juli Volleyball", "Pomata Spike"],
    ganador: "Juli Volleyball",
    sets: {
      "Juli Volleyball": 3,
      "Pomata Spike": 1
    }
  }
  */
];

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

function renderPartidos(partidos) {
  const container = document.getElementById('partidos-container');
  if (!container) return;

  // Separar partidos por estado
  const proximos = partidos.filter(p => p.estado === 'proximo');
  const jugados = partidos.filter(p => p.estado === 'jugado');

  let html = '';

  // Renderizar partidos próximos
  if (proximos.length > 0) {
    html += '<div class="partidos-section">';
    html += '<h2>⏰ Próximos Partidos</h2>';
    proximos.forEach(partido => {
      html += renderPartidoCard(partido);
    });
    html += '</div>';
  }

  // Renderizar partidos jugados
  if (jugados.length > 0) {
    html += '<div class="partidos-section">';
    html += '<h2>✅ Partidos Jugados</h2>';
    jugados.forEach(partido => {
      html += renderPartidoCard(partido);
    });
    html += '</div>';
  }

  // Si no hay partidos
  if (partidos.length === 0) {
    html = '<div class="no-partidos">No se encontraron partidos que coincidan con los filtros.</div>';
  }

  container.innerHTML = html;
}

function renderPartidoCard(partido) {
  const deporteClass = partido.deporte === 'futbol' ? 'deporte-futbol' : 'deporte-voley';
  const deporteIcon = partido.deporte === 'futbol' ? '⚽' : '🏐';
  const deporteNombre = partido.deporte === 'futbol' ? 'Fútbol' : 'Vóley';
  const estadoClass = partido.estado === 'proximo' ? 'estado-proximo' : 'estado-jugado';
  const estadoTexto = partido.estado === 'proximo' ? 'Próximo' : 'Jugado';

  let html = `
    <div class="partido-card">
      <div class="partido-header">
        <span class="deporte-badge ${deporteClass}">${deporteIcon} ${deporteNombre}</span>
        <span class="estado-badge ${estadoClass}">${estadoTexto}</span>
      </div>
      <div class="partido-content">
  `;

  // Equipo 1
  const esGanador1 = partido.ganador === partido.equipos[0];
  html += `
    <div class="equipo ${esGanador1 ? 'ganador' : ''}">
      ${esGanador1 ? '<div class="ganador-label">Ganador</div>' : ''}
      <div class="equipo-nombre">${partido.equipos[0]}</div>
    </div>
  `;

  // Información central
  html += '<div class="partido-info">';
  
  if (partido.estado === 'proximo') {
    html += `
      <div class="partido-fecha">📅 ${formatearFecha(partido.fecha)}</div>
      <div class="vs-separator">VS</div>
      <div class="partido-hora">🕐 ${partido.hora}</div>
      <div class="partido-cancha">🏟️ ${partido.cancha}</div>
    `;
  } else {
    // Mostrar resultado
    if (partido.deporte === 'futbol') {
      const goles1 = partido.goles[partido.equipos[0]]?.length || 0;
      const goles2 = partido.goles[partido.equipos[1]]?.length || 0;
      html += `<div class="partido-resultado">${goles1} - ${goles2}</div>`;
    } else {
      const sets1 = partido.sets[partido.equipos[0]] || 0;
      const sets2 = partido.sets[partido.equipos[1]] || 0;
      html += `<div class="partido-resultado">${sets1} - ${sets2}</div>`;
    }
  }
  
  html += '</div>';

  // Equipo 2
  const esGanador2 = partido.ganador === partido.equipos[1];
  html += `
    <div class="equipo ${esGanador2 ? 'ganador' : ''}">
      ${esGanador2 ? '<div class="ganador-label">Ganador</div>' : ''}
      <div class="equipo-nombre">${partido.equipos[1]}</div>
    </div>
  `;

  html += '</div>'; // Cierra partido-content

  // Detalles adicionales para partidos jugados
  if (partido.estado === 'jugado') {
    html += '<div class="partido-detalles">';
    
    if (partido.deporte === 'futbol' && partido.goles) {
      html += '<div class="goles-list">';
      
      // Goles equipo 1
      html += `<div class="equipo-goles">
        <h4>⚽ ${partido.equipos[0]}</h4>`;
      if (partido.goles[partido.equipos[0]]) {
        partido.goles[partido.equipos[0]].forEach(gol => {
          html += `<div class="gol-item">
            <span class="jugador-nombre">${gol.jugador}</span>
            <span class="jugador-numero">#${gol.numero}</span>
          </div>`;
        });
      }
      html += '</div>';
      
      // Goles equipo 2
      html += `<div class="equipo-goles">
        <h4>⚽ ${partido.equipos[1]}</h4>`;
      if (partido.goles[partido.equipos[1]]) {
        partido.goles[partido.equipos[1]].forEach(gol => {
          html += `<div class="gol-item">
            <span class="jugador-nombre">${gol.jugador}</span>
            <span class="jugador-numero">#${gol.numero}</span>
          </div>`;
        });
      }
      html += '</div>';
      
      html += '</div>';
    } else if (partido.deporte === 'voley' && partido.sets) {
      html += '<div class="sets-info">';
      html += `<div class="equipo-sets">
        <h4>🏐 ${partido.equipos[0]}</h4>
        <div class="sets-resultado">${partido.sets[partido.equipos[0]]} sets</div>
      </div>`;
      html += `<div class="equipo-sets">
        <h4>🏐 ${partido.equipos[1]}</h4>
        <div class="sets-resultado">${partido.sets[partido.equipos[1]]} sets</div>
      </div>`;
      html += '</div>';
    }
    
    html += '</div>';
  }

  html += '</div>'; // Cierra partido-card
  return html;
}

// ========================================
// FUNCIONES DE FILTRADO
// ========================================

function filtrarPartidos() {
  const searchTerm = document.getElementById('search-team')?.value.toLowerCase() || '';
  const statusFilter = document.getElementById('filter-status')?.value || 'todos';
  const sportFilter = document.getElementById('filter-sport')?.value || 'todos';

  let partidosFiltrados = partidosData.filter(partido => {
    // Filtro por nombre de equipo
    const coincideNombre = partido.equipos.some(equipo => 
      equipo.toLowerCase().includes(searchTerm)
    );

    // Filtro por estado
    // Arreglo: aceptar plural y singular
    let estadoNormalizado = partido.estado;
    if (estadoNormalizado === "proximo") estadoNormalizado = "proximos";
    if (estadoNormalizado === "jugado") estadoNormalizado = "jugados";

const coincideEstado = statusFilter === "todos" || estadoNormalizado === statusFilter;

    // Filtro por deporte
    const coincideDeporte = sportFilter === 'todos' || partido.deporte === sportFilter;

    return coincideNombre && coincideEstado && coincideDeporte;
  });

  // Ordenar: próximos primero, luego jugados
  partidosFiltrados.sort((a, b) => {
    if (a.estado === 'proximo' && b.estado === 'jugado') return -1;
    if (a.estado === 'jugado' && b.estado === 'proximo') return 1;
    return 0;
  });

  renderPartidos(partidosFiltrados);
}

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const opciones = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return fecha.toLocaleDateString('es-ES', opciones);
}

// ========================================
// FUNCIONES PARA FINALIZAR PARTIDOS
// ========================================

function finalizarPartidoFutbol(id, ganador, goles) {
  const partido = partidosData.find(p => p.id === id);
  if (!partido || partido.deporte !== "futbol") {
    console.error(`❌ No se encontró el partido de fútbol con ID: ${id}`);
    return false;
  }

  if (partido.estado === "jugado") {
    console.warn(`⚠️ El partido ID ${id} ya está finalizado`);
    return false;
  }

  if (!partido.equipos.includes(ganador)) {
    console.error(`❌ El ganador "${ganador}" no está en este partido`);
    return false;
  }

  partido.estado = "jugado";
  partido.ganador = ganador;
  partido.goles = goles;

  delete partido.fecha;
  delete partido.hora;
  delete partido.cancha;

  if (document.getElementById('partidos-container')) {
    filtrarPartidos();
  }

  console.log(`✅ Partido de fútbol finalizado: ${partido.equipos.join(' vs ')} - Ganador: ${ganador}`);
  return true;
}

function finalizarPartidoVoley(id, ganador, sets) {
  const partido = partidosData.find(p => p.id === id);
  if (!partido || partido.deporte !== "voley") {
    console.error(`❌ No se encontró el partido de vóley con ID: ${id}`);
    return false;
  }

  if (partido.estado === "jugado") {
    console.warn(`⚠️ El partido ID ${id} ya está finalizado`);
    return false;
  }

  if (!partido.equipos.includes(ganador)) {
    console.error(`❌ El ganador "${ganador}" no está en este partido`);
    return false;
  }

  partido.estado = "jugado";
  partido.ganador = ganador;
  partido.sets = sets;

  delete partido.fecha;
  delete partido.hora;
  delete partido.cancha;

  if (document.getElementById('partidos-container')) {
    filtrarPartidos();
  }

  console.log(`✅ Partido de vóley finalizado: ${partido.equipos.join(' vs ')} - Ganador: ${ganador}`);
  return true;
}

// ========================================
// INICIALIZACIÓN DE PARTIDOS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Solo ejecutar en la página de partidos
  if (document.getElementById('partidos-container')) {
    // Renderizar partidos iniciales
    renderPartidos(partidosData);

    // Configurar event listeners para filtros
    const searchInput = document.getElementById('search-team');
    const statusSelect = document.getElementById('filter-status');
    const sportSelect = document.getElementById('filter-sport');

    if (searchInput) {
      searchInput.addEventListener('input', filtrarPartidos);
    }

    if (statusSelect) {
      statusSelect.addEventListener('change', filtrarPartidos);
    }

    if (sportSelect) {
      sportSelect.addEventListener('change', filtrarPartidos);
    }
  }
});

// ========================================
// FUNCIONES EXISTENTES (sin modificar)
// ========================================

// Funciones de utilidad para animaciones
function fadeIn(element, duration = 300) {
  element.style.opacity = '0';
  element.style.display = 'block';

  let start = performance.now();

  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;

    if (progress < 1) {
      element.style.opacity = progress;
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = '1';
    }
  }

  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = performance.now();
  let startOpacity = parseFloat(element.style.opacity) || 1;

  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;

    if (progress < 1) {
      element.style.opacity = startOpacity * (1 - progress);
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = '0';
      element.style.display = 'none';
    }
  }

  requestAnimationFrame(animate);
}

// Funciones para efectos de hover en las tarjetas
document.addEventListener('DOMContentLoaded', function() {
  const teamCards = document.querySelectorAll('.team-card');

  teamCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Función para scroll suave
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Lazy loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});