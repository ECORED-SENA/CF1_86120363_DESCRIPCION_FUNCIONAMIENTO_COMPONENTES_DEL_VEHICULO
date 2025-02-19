<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Componentes principales de la caja de cambios y su funcionamiento
    .row.mb-5
      .col-xl-auto.pe-xl-0.mb-4.mb-xl-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/img1.png", alt="", style="width: 400px").m-auto
      .col(data-aos="fade-left")
        .row.h-100.align-items-center.bg-c3
          .col-12
            .p-4 
              p.mb-0 La caja de cambios está formada por diversos componentes que trabajan en conjunto para transmitir la potencia del motor hacia las ruedas, ajustando la fuerza y la velocidad según las necesidades del vehículo. Estos elementos permiten cambios de marcha precisos y eficientes, garantizando un rendimiento óptimo en diferentes condiciones de manejo.
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Transmisión de engranajes deslizantes
    .row.mb-5
      .col.order-2.order-lg-1(data-aos="fade-right")
        .row.h-100.align-items-center.bg-c11
          .col-12
            .p-4 
              p.mb-0 En una caja de cambios manual de engranajes deslizantes, el eje primario y el eje de salida están conectados a través de un eje intermediario. Al deslizar los engranajes, se logran diferentes relaciones de transmisión. Aunque este sistema es sencillo, presenta una limitante importante: es complicado deslizar los engranajes para que conecten correctamente. Para solucionar esta dificultad, se desarrolló la transmisión de engrane constante.
      .col-xl-auto.ps-xl-0.mb-4.mb-xl-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 400px").m-auto
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Transmisión de engrane constante
    .row(data-aos="fade-down")
      .col-lg-auto.pe-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img3.png", alt="", style="width: 350px").m-auto
      .col.bg-c5
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 En este sistema, los piñones están siempre engranados. Los engranajes de salida giran libremente en el eje, y el cambio de velocidades se realiza mediante collarines y anillos sincronizadores.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Ejes principales de la caja de cambios
    p(data-aos="fade-right") La caja de cambios manual se compone, principalmente, de tres ejes de piñones y elementos de engranaje de marchas. No obstante, es fundamental considerar que este diseño puede variar en algunos componentes según el fabricante.
    .row.justify-content-center.mb-4
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 2.] Ejes de la caja de cambios
        figure
          img(src="@/assets/curso/tema2/img14.png", alt="Imagen de una caja de cambios mostrando los ejes principales: primario, intermedio y secundario, conectados a través de engranajes helicoidales.", style="width: 500px").m-auto
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img4.png", alt="", style="width: 500px").m-auto
    .row.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/img5.png", alt="", style="width: 400px").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Eje primario o eje de entrada")
            .col-12
              p Este eje recibe el impulso del motor mediante el sistema de embrague. En su extremo inicial, está soportado por un rodamiento, mientras que en el extremo opuesto cuenta con un piñón de mando y un dentado para engranar con el collarín.
              figure
                img(src="@/assets/curso/tema2/img6.png", alt="Diagrama de un eje primario extraído de su carcasa. La carcasa y el conjunto de engranajes están claramente identificados.", style="width: 500px").m-auto
          .row(titulo="Eje intermediario")
            .col-12
              p El movimiento del eje primario se transmite al eje intermediario. En muchas cajas de cambios, este eje es un conjunto sólido de varios piñones que giran sobre un eje con rodamientos, generalmente del tipo de rodillos. 
              figure
                img(src="@/assets/curso/tema2/img7.png", alt="", style="width: 500px").m-auto
          .row(titulo="Eje secundario o de salida")
            .col-12
              p Los piñones del eje intermediario engranan con los piñones individuales de cada marcha del eje secundario. Estos piñones están montados sobre rodamientos y giran libremente hasta que el collarín los conecta con el eje, transmitiendo el movimiento hacia las ruedas.
              figure
                img(src="@/assets/curso/tema2/img8.png", alt="", style="width: 500px").m-auto
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Elementos para el cambio de marchas
    p(data-aos="fade-right") En las cajas de cambios mecánicas modernas ya no se desplaza el piñón que se desea engranar con otro piñón para seleccionar una velocidad o cambiar de velocidad, ya que todos los piñones de la caja, inclusive el piñón de la marcha atrás (en la mayoría de casos), están engranados permanentemente.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c12
          .row
            .col-lg-6
              p A este engrane de piñones se le denomina transmisión de engrane constante, pues todo el tiempo están engranados, transmitiendo el movimiento desde los piñones conductores hasta los piñones conducidos. Para engranar una marcha, simplemente es el collarín de cada velocidad el que se engrana con el sector dentado de cada piñón, de tal manera que se convierte en un solo cuerpo sólido con el piñón. Como el collarín está fijado al eje de salida por medio de un sector estriado, puede desplazarse o deslizarse hasta engranar con el sector dentado del piñón. Para desplazar el collarín, la palanca selectora lo empuja mediante una horquilla.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 3.] Elementos para el cambio de marchas
              figure
                img(src="@/assets/curso/tema2/img15.png", alt="Esquema de los componentes internos de una transmisión, incluyendo elementos como palanca, sincronizador, piñón, collarín y eje estriado, que trabajan en conjunto para realizar los cambios de marcha.", style="width: 500px").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Collarín de engrane y anillos sincronizadores
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El collarín está alojado en un sector estriado, el cual se inserta en el eje estriado de salida, de tal manera que los dos girarán solidarios a este eje. A cada costado del collarín se alojan los anillos sincronizadores, que serán empujados por el collarín para frenar el piñón de la marcha seleccionada. Cuando el anillo sincronizador entra en contacto con el sector cónico del piñón, este permite engranar una marcha hacia un lado y otra marcha hacia el otro.
        p.mb-0 Para mantener al collarín en la posición central, es decir, en “neutro”, cuando no se desplaza, se han instalado tres chavetas con sus muelles de anillo. Cuando el collarín es empujado para desplazarse sobre el estriado, las chavetas comprimen los muelles y permiten al collarín desplazarse para engranar.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img9.png", alt="", style="width: 500px").m-auto
    .row.bg-c4.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Anillos sincronizadores]
                    p.mb-0 En muchos casos, el anillo sincronizador está fabricado con aleaciones de bronce para resistir las altas fricciones que se producen durante su trabajo de frenado con el piñón seleccionado. El anillo sincronizador tiene en su periferia un sector dentado, generalmente con el mismo número de dientes que el sector dentado del piñón con el que trabaja, así como el mismo número de ranuras que tiene el estriado interno del collarín en el que está alojado. La superficie cónica de fricción del anillo sincronizador está diseñada con un sistema ranurado que permite el ingreso del aceite lubricante y la salida del aceite caliente, el cual alcanza altas temperaturas durante su operación.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img10.png", alt="Diagrama desglosado de un sistema de transmisión, mostrando componentes como el piñón, anillo sincronizador, buje, desplazable, chavetas y muelles.", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Collarín y sector dentado]
                    p.mb-0 El collarín está alojado en un sector dentado que puede desplazarse lateralmente para empujar el anillo sincronizador y engranar con el sector dentado del piñón de la marcha respectiva. Este sector dentado se fija al eje estriado de salida mediante otro estriado, lo que permite mantenerlo sólido durante su trabajo, pero también facilita su extracción para tareas de mantenimiento o reparación.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img11.png", alt="Representación detallada de los elementos principales de un collarín y su conexión con el anillo sincronizador, el seguro y el eje estriado.", style="width: 500px").m-auto
    p.mb-5(data-aos="fade-down") Este sector dentado tiene cavidades en ambos lados para permitir el ingreso del anillo sincronizador y en tres sectores de su periferia cuenta con grandes ranuras que alojan las chavetas necesarias para mantener el collarín en posición neutral o en cada marcha.
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Selección de las velocidades
    p(data-aos="fade-right") Cuando el conductor del vehículo selecciona una velocidad o marcha, mueve la palanca de cambios en una dirección específica. Este movimiento obliga al eje selector a posicionarse en una de las tres líneas durante su desplazamiento por el punto neutral, es decir, hacia los lados izquierdo o derecho de la palanca.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 4.] Estriado del collarín, anillo sincronizador, collarín y eje estriado
        figure
          img(src="@/assets/curso/tema2/img16.png", alt="Esquema de una caja de cambios destacando los mecanismos para seleccionar velocidades, incluyendo horquillas, ejes, muelles.", style="width: 600px").m-auto
      .col-lg-4(data-aos="fade-left")
        .row.h-100.align-items-center.bg-c13
          .col-12
            .p-4
              figure.mb-3
                img(src="@/assets/curso/tema2/img12.png", alt="", style="width: 120px")
              p.mb-0 Cuando se empuja o se hala la palanca (hacia adelante o atrás), este movimiento desplaza el eje selector, el cual empuja la horquilla correspondiente a las marchas seleccionadas, por ejemplo, el eje de la primera y segunda velocidades, el eje de la tercera y cuarta velocidades, o el eje de la quinta velocidad y marcha atrás, que es la disposición más común en un vehículo.
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Sistema de bloqueo y mantenimiento de las velocidades
    p(data-aos="fade-down") Cuando la palanca selectora mueve un eje selector y este empuja, mediante la horquilla, un collarín para engranar la marcha deseada; existe un sistema que asegura que el collarín permanezca en su posición incluso si el conductor suelta la palanca. Este sistema utiliza esferas metálicas que, empujadas por muelles calibrados, se insertan en ranuras del eje selector, bloqueándolo en su posición. De esta manera, la marcha se mantiene hasta que el conductor decida cambiarla.
    .row.justify-content-center.align-items-end
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 5.] Componentes para la selección de velocidades
        figure
          img(src="@/assets/curso/tema2/img17.png", alt="Diagrama de un sistema de bloqueo de marchas, mostrando elementos como varillas, horquillas, pernos, muelles, esferas y pasadores que evitan el cambio accidental de velocidad.", style="width: 600px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
