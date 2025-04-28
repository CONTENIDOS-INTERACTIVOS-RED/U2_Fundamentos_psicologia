export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Procesos psicológicos básicos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '1.	Percepción y atención',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procesos mentales y educación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Procesos mentales y salud mental',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿Qué es la percepción?',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'La atención: filtro y guía de la percepción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Memoria y emoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La memoria',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La emoción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Manzano Mier, M. (2006). <i>Introducción a la percepción</i>. La Habana, Cuba: Editorial Félix Varela. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/71808?page=9. ',
    },
    {
      referencia:
        'Fuente Arnanz, J. D. L. & Pousada, M. (2014). <i>La atención</i>. Editorial UOC. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/115904?page=25',
    },
    {
      referencia:
        'Lupiáñez Castillo, J. Fuentes Melero, L. J. & Bajo Molina, M. T. (2016). <i>Mente y cerebro: de la psicología experimental a la neurociencia cognitiva</i>. Difusora Larousse - Alianza Editorial. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/115650?page=246 ',
    },
    {
      referencia:
        'López Sánchez, F. (2014). <i>Las emociones en la educación</i>. Ediciones Morata, S. L. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/51813?page=12. ',
    },
    {
      referencia:
        'Aguado, L. (2015).<i> Emoción, afecto y motivación: un enfoque de procesos</i>. Difusora Larousse - Alianza Editorial. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/45414?page=279. ',
    },
    {
      referencia:
        'Gallardo Vázquez, P. y Camacho Herrera, J. M. (2016). <i>La motivación y el aprendizaje en educación</i>. Wanceulen Editorial. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/33740?page=11. ',
    },
    {
      referencia:
        'Pellón Suárez de Puga, R. & Ricardo Pellón Suárez de Puga. (2015). <i>Psicología del aprendizaje</i>. UNED - Universidad Nacional de Educación a Distancia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48751',
    },
    {
      referencia:
        'Gallardo Vázquez, P. & Camacho Herrera, J. M. (2016). <i>La motivación y el aprendizaje en educación</i>. Wanceulen Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33740',
    },
    {
      referencia:
        'García Ros, R. & Vidal-Abarca, E. (2015). <i>Aprendizaje y desarrollo de la personalidad</i>. Difusora Larousse - Alianza Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/45440?page=25',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'Proceso psicológico que permite a las personas concentrarse en ciertos estímulos, mientras ignoran otros; fundamental para la percepción y la toma de decisiones.',
    },
    {
      termino: 'Autoconciencia',
      significado:
        'Capacidad de reconocer y comprender las emociones propias y patrones de pensamiento, crucial para el desarrollo de habilidades de afrontamiento.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Sensación de control sobre las propias acciones, que puede aumentar la motivación intrínseca.',
    },
    {
      termino: 'Cognición',
      significado:
        'Conjunto de procesos mentales que incluyen la percepción, atención, memoria y razonamiento, que permiten entender e interactuar con el entorno.',
    },
    {
      termino: 'Conducta',
      significado:
        'Comportamiento observable de un individuo, en respuesta a estímulos internos o externos.',
    },
    {
      termino: 'Condicionamiento clásico',
      significado:
        'Teoría de aprendizaje que establece que un organismo puede aprender a asociar un estímulo neutro, con un estímulo incondicionado, lo que provoca una respuesta automática.',
    },
    {
      termino: 'Emoción',
      significado:
        'Respuesta afectiva a estímulos internos o externos, que puede influir en decisiones y comportamientos.',
    },
    {
      termino: 'Estímulo condicionado',
      significado:
        'Estímulo que, después de ser asociado repetidamente con un estímulo incondicionado, provoca una respuesta.',
    },
    {
      termino: 'Estímulo incondicionado',
      significado:
        'Estímulo que provoca una respuesta automática, sin necesidad de aprendizaje.',
    },
    {
      termino: 'Estímulo neutro',
      significado:
        'Estímulo que no provoca una respuesta incondicionada, antes del condicionamiento.',
    },
    {
      termino: 'Gestalt',
      significado:
        'Teoría psicológica que enfatiza que la percepción es más que la suma de sus partes.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad de reconocer, entender y gestionar las propias emociones y las de los demás.',
    },
    {
      termino: 'Percepción',
      significado:
        'Proceso mediante el cual los seres humanos interpretan y organizan la información sensorial que reciben del entorno.',
    },
    {
      termino: 'Recuperación',
      significado:
        'Proceso de acceder y traer de vuelta, la información almacenada en la memoria.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Proceso de encontrar soluciones a desafíos o situaciones complejas.',
    },
    {
      termino: 'Sesgo cognitivo',
      significado:
        'Error sistemático en el pensamiento, que afecta las decisiones y juicios de las personas.',
    },
    {
      termino: 'Teoría de la autodeterminación',
      significado:
        'Propuesta que sugiere que la motivación se fortalece cuando se satisfacen necesidades básicas de autonomía, competencia y relación.',
    },
  ],
}
