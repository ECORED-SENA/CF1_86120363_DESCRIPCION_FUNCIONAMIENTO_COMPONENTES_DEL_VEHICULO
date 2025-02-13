export default {
  global: {
    Name: 'La caja de cambios manual',
    Description:
      'El componente formativo  aborda el funcionamiento y mantenimiento de la caja de cambios, componente esencial en la transmisión del automóvil. Ofrece conocimientos sobre sus tipos, elementos principales y técnicas básicas para prevenir fallos comunes, asegurando un manejo eficiente y prolongando la vida útil del vehículo bajo diversas condiciones de uso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de la caja de cambios manual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de cajas de cambios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de cajas de cambios',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Componentes principales de la caja de cambios y su funcionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ejes principales de la caja de cambios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Collarín de engrane y anillos sincronizadores',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades de la caja de cambios manual.',
      referencia:
        'Lesics Española. (2017). <i>Transmisió manual, ¿cómo funciona?</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=bDM2Y0SrUUM&ab_channel=LesicsEspa%C3%B1ola',
    },
    {
      tema: 'Tipos de cajas de cambios.',
      referencia:
        'Auto Machin. <i>Explicación de los tipos de sistemas de transmisión (manual, AT, AMT, iMT, CVT, DCT)</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lZ3rY18Zx3I&ab_channel=AutoMachin',
    },
    {
      tema: 'Transmisión por engranajes.',
      referencia:
        'Mentalidad De Ingeniería. (2021). <i>Transmisión Manual</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=kU6p-r6bp4Y&ab_channel=MentalidadDeIngenier%C3%ADa',
    },
    {
      tema:
        'Componentes principales de la caja de cambios y su funcionamiento.',
      referencia:
        'Pedro Bravo Guíñez. (2014). <i>FUNCIONAMIENTO DE LA CAJA DE CAMBIOS</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=tqK0RHDM8PM&ab_channel=PedroBravoGu%C3%AD%C3%B1ez',
    },
    {
      tema: 'Collarín de engrane y anillos sincronizadores.',
      referencia:
        'Carlos MOLTIR Channel. <i>TODOS LOS SONIDOS del la TRANSMISIÓN | CAJA DAÑADA | RUIDO al pisar el CLUTCH | DESGASTE de PARTES</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uThN6bIcp3g&t=3s&ab_channel=CarlosMOLTIRChannel',
    },
  ],
  glosario: [
    {
      termino: 'Anillos sincronizadores',
      significado:
        'componentes que igualan la velocidad de los piñones antes del engrane.',
    },
    {
      termino: 'Caja de cambios',
      significado:
        'mecanismo que permite modificar la relación entre la velocidad del motor y las ruedas.',
    },
    {
      termino: 'Collarín',
      significado:
        'elemento que engrana con los piñones para cambiar las marchas.',
    },
    {
      termino: 'Eje primario',
      significado:
        'eje que recibe el movimiento del motor a través del embrague.',
    },
    {
      termino: 'Eje secundario',
      significado: 'eje que transmite el movimiento hacia las ruedas motrices.',
    },
    {
      termino: 'Embrague',
      significado:
        'mecanismo que conecta o desconecta el motor del sistema de transmisión.',
    },
    {
      termino: 'Engranajes',
      significado:
        'ruedas dentadas que transmiten movimiento y fuerza entre ejes.',
    },
    {
      termino: 'Par motor',
      significado:
        'fuerza de torsión que genera el motor para mover las ruedas del vehículo.',
    },
    {
      termino: 'Relación de transmisión',
      significado:
        'relación entre las velocidades de rotación de dos engranajes conectados.',
    },
    {
      termino: 'Transmisión 4x4',
      significado:
        'sistema que distribuye la potencia del motor a las cuatro ruedas del vehículo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abello, C. (2012). <i>Caja de cambios: Transmisión de fuerza y partes de la caja de cambios</i>. Colombia: SENA. ',
      link: '',
    },
    {
      referencia: 'Flickr. (2018). <i>Ejes de la caja de cambios</i>. ',
      link: '',
    },
    {
      referencia:
        'Meganeboy, D. (2014). <i>Cajas de cambio: Curso para aficionados a la mecánica</i>. ',
      link: '',
    },
    {
      referencia: 'Mundocamion.cl. (2018). <i>Eje secundario o de salida</i>. ',
      link: '',
    },
    {
      referencia: 'Solocajasmanuales.com. (2018). <i>Transmisión manual</i>. ',
      link: '',
    },
    {
      referencia: 'Tecnerife.com. (2018). <i>Sistemas de engranaje</i>. ',
      link: '',
    },
    {
      referencia: 'US Navy. (2018). <i>Construction Mechanic Advanced</i>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
