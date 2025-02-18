<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generalidades de la caja de cambios manual
    .row
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p La caja de cambios o caja de velocidades es un conjunto fundamental para el funcionamiento del vehículo, ya que la potencia generada por el motor fluye por esta antes de llegar a las ruedas. Su función básica consiste en controlar la velocidad y el par motor disponible para las ruedas bajo diferentes condiciones de manejo.
        .row.mb-3
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
            figure
              img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 400px").m-auto
          .col
            .row.h-100.align-items-center.bg-c3
              .col-12
                .p-4 
                  p.mb-0 Como el motor está variando constantemente en su número de revoluciones, se hace necesario aprovechar su mayor par motor o par de torsión en todas las condiciones de marcha. Es decir, se necesitará transmitir el mejor par motor hasta las ruedas motrices del automóvil.
        .row.align-items-center
          .col-md-auto.mb-3.mb-md-0
            figure
              img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 80px").m-auto
          .col
            p.mb-0 Para ello se utiliza una caja de cambios, con el fin de enviar la mayor fuerza posible hasta las ruedas. Por ejemplo, durante el arranque o inicio de marcha del vehículo se requerirá mayor par motor, independiente de la carga y de la aceleración, y se deberá mantener una velocidad uniforme acorde al camino. También, la caja de cambios deberá permitir seleccionar una marcha en sentido opuesto, para que el vehículo pueda conducirse hacia atrás.
      .col-lg-3.order-1.order-lg-2.mb-2.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 300px").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1	Tipos de cajas de cambios
    p(data-aos="fade-down") Las cajas de cambios se diseñan para adaptarse a diferentes configuraciones de los vehículos, dependiendo de la ubicación del motor y las necesidades de propulsión. Cada tipo tiene características específicas que influyen en el desempeño y la funcionalidad del vehículo.
    .row.bg-c4
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Motor delantero y propulsión trasera]
                    p.mb-0 En esta caja de cambios, se toma la potencia del motor que está ubicado en la parte frontal para transmitirla a las llantas traseras mediante un sistema de transmisión.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img4.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Motor y propulsión delantera o trasera]
                    p.mb-0 En este tipo de transmisión, la propulsión del vehículo se realiza más directamente y no cuenta con el árbol de transmisión como en el caso anterior. Además, en muchos casos, la caja de cambios tiene integrado el diferencial.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img5.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Transmisión 4 x 4]
                    p.mb-0 Esta caja de cambios se utiliza en los vehículos que tienen tracción en las cuatro ruedas. Se diferencia de la caja de cambios con motor delantero y propulsión trasera en que cuenta con una caja de transferencia y un árbol de transmisión para llevar la potencia a los ejes delanteros.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img6.png", alt="", style="width: 500px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Transmisión por engranajes
    .row.mb-5(data-aos="fade-down")
      .col-lg-auto.pe-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img7.png", alt="", style="width: 350px").m-auto
      .col.bg-c5
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 Los elementos más utilizados en la caja de cambios manual para transmitir el par de torsión y las revoluciones del motor son los piñones o engranajes. A continuación, se explican la relación de transmisión y los engranajes más usados en este tipo de caja.
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Relación de transmisión
    p(data-aos="fade-right") La relación de transmisión (Rt) es la relación entre las velocidades de rotación (N) de dos engranajes conectados entre sí. Matemáticamente se representa así:
    .row.bg-c7.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img9.png", alt="", style="width: 400px").m-auto
            .col-lg-8(data-aos="fade-left")
              .row.justify-content-center.mb-3
                .col-auto.bg-c3
                  .py-2.px-5
                    p.mb-0 #[b Rt = N2 / N1]
              p También puede expresarse mediante el número de dientes (Z) del engranaje conductor sobre el número de dientes del engranaje conducido:
              .row.justify-content-center.mb-3
                .col-auto.bg-c3
                  .py-2.px-5
                    p.mb-0 #[b Rt = Z1 / Z2]
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 1.] Relación de transmisión
              .row
                .col-lg-auto.pe-lg-0
                  .p-4.bg-c8
                    figure
                      img(src="@/assets/curso/tema1/img4.svg", alt="Esquema de dos engranajes en contacto, representando una relación de transmisión. El engranaje verde (Z2) es el mayor y el amarillo (Z1) es el menor, indicando sentidos de giro con flechas y las velocidades angulares correspondientes (N2 y N1).", style="width: 300px").m-auto
                .col-lg.ps-lg-0
                  .p-4.bg-c9.h-100
                    p En donde:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b N1] es el número de revoluciones del engranaje conductor.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Z1] el número de dientes del conductor.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b N2] el número de revoluciones del engranaje conducido.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 #[b Z2] el número de dientes del conducido.
          .row.justify-content-center
            .col-lg-10.mb-3(data-aos="fade-right")
              .row.align-items-center.mb-4
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src="@/assets/curso/tema1/img5.svg", alt="", style="width: 100px").m-auto
                .col
                  p #[b Ejemplo de cálculo]
                  p.mb-0 Un engranaje amarillo de 12 dientes conduce a un engranaje verde de 20 dientes. Este último gira a menor número de revoluciones pero con mayor par de torsión.
            .col-lg-10(data-aos="fade-left")
              .p-4.bg-c10
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema1/img10.png", alt="", style="width: 300px").m-auto
                  .col
                    .p-4
                      p #[b Utilizando la fórmula:]
                      p.mb-0 Rt = Z1 / Z2
                      p.mb-0 Reemplazando los valores:
                      p.mb-0 Rt = 12 / 20
                      p.mb-0 Rt = 0,6
                      p.mb-0 Esto significa que por cada giro completo del engranaje conductor (piñón amarillo), el engranaje conducido (piñón verde) gira 0,6 vueltas. Este movimiento genera mayor par motor.
    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0 Tipos de engranajes
    p(data-aos="fade-right") Los engranajes son componentes esenciales en las cajas de cambios, utilizados para transmitir el movimiento y ajustar las relaciones de fuerza y velocidad entre los diferentes elementos. A continuación, se describen los tipos principales:
    TabsB.color-primario(data-aos="fade-down")
      .py-4.py-md-5(titulo="Engranajes de dientes rectos" :icono="require('@/assets/curso/tema1/img6.svg')")
        .row.justify-content-center
          .col-10
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img11.png", alt="", style="width: 400px").m-auto
              .col
                p #[b Engranajes de dientes rectos]
                p.mb-0 Este tipo de engranaje consiste en una rueda dentada cuyos dientes se acoplan con los de otro engranaje de menor o mayor diámetro. Su diseño es mecánicamente más eficiente; sin embargo, genera ruido durante la transmisión del movimiento.
      .py-4.py-md-5(titulo="Engranajes de dientes helicoidales" :icono="require('@/assets/curso/tema1/img7.svg')")
        .row.justify-content-center
          .col-10
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img12.png", alt="", style="width: 400px").m-auto
              .col
                p #[b Engranajes de dientes helicoidales]
                p.mb-0 En este tipo de engranaje, los dientes tienen una inclinación helicoidal, lo que reduce considerablemente el ruido generado durante la transmisión. Pese a un pequeño impacto en el rendimiento, ofrece un bajo nivel de ruido y mayor contacto entre los dientes.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
