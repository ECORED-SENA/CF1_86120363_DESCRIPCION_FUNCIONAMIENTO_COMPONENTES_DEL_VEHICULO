<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  los componentes, tipos, funciones y conceptos clave de la caja de cambios manual en vehículos, para reforzar el aprendizaje técnico y práctico relacionado con su funcionamiento y mantenimiento.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la caja de cambios en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar la velocidad adecuada para cada terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la potencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar la velocidad y el par motor disponible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Transmitir el movimiento de las ruedas al motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de caja de cambios tiene integrado el diferencial en muchos casos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caja de cambios automática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motor y propulsión delantera o trasera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Motor delantero y propulsión trasera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transmisión 4x4.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué se entiende por relación de transmisión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La relación entre el número de dientes y el tamaño de los engranajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La relación entre las velocidades de rotación de dos engranajes conectados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La fuerza ejercida por los engranajes en movimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tipo de transmisión utilizada en un vehículo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué material se utiliza comúnmente para fabricar los anillos sincronizadores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acero inoxidable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aleaciones de bronce.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Polímeros de alta resistencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hierro fundido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué elemento conecta el eje del motor con el eje primario de la caja de cambios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diferencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El árbol de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El embrague.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El piñón de entrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de engranaje genera menos ruido durante la transmisión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Engranajes de dientes rectos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Engranajes cónicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Engranajes helicoidales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Engranajes de dientes helicoidales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'En las cajas de cambios modernas, ¿qué elemento se utiliza para seleccionar las marchas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El piñón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El collarín.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El árbol de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diferencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función del sistema de bloqueo en la caja de cambios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la marcha seleccionada fija.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Desacoplar los engranajes al cambiar de marcha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el aceite lubricante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frenar el piñón de entrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En una transmisión por engranajes, ¿el piñón conductor siempre tiene más dientes que el piñón conducido?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El collarín de engrane está alojado en un sector dentado que le permite desplazarse lateralmente.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La caja de cambios permite al vehículo seleccionar una marcha en sentido contrario para conducir hacia atrás.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los engranajes de dientes rectos tienen mayor eficiencia mecánica pero producen menos ruido que los engranajes helicoidales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En la transmisión 4x4, la potencia se lleva a las ruedas delanteras a través de un árbol de transmisión adicional.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los ejes de salida en las cajas modernas están siempre engranados con los piñones de cada marcha.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El sistema de bloqueo en la caja de cambios impide que el collarín vuelva a la posición neutral por accidente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
