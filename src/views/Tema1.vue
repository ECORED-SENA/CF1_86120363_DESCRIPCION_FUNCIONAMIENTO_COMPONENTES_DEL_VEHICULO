<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de la caja de cambios manual
    .row
      .col-lg-9.order-2.order-lg-1
        p La caja de cambios o caja de velocidades es un conjunto fundamental para el funcionamiento del vehículo, ya que la potencia generada por el motor fluye por esta antes de llegar a las ruedas. Su función básica consiste en controlar la velocidad y el par motor disponible para las ruedas bajo diferentes condiciones de manejo.
        .row.mb-3
          .col-xl-auto.pe-0.mb-4.mb-xl-0
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
      .col-lg-3.order-1.order-lg-2.mb-2.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 300px").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1	Tipos de cajas de cambios
    p Las cajas de cambios se diseñan para adaptarse a diferentes configuraciones de los vehículos, dependiendo de la ubicación del motor y las necesidades de propulsión. Cada tipo tiene características específicas que influyen en el desempeño y la funcionalidad del vehículo.
    .row.bg-c4
      .col-12
        .p-5
          .tarjeta.bg-white
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
    .row.mb-5
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
    p La relación de transmisión (Rt) es la relación entre las velocidades de rotación (N) de dos engranajes conectados entre sí. Matemáticamente se representa así:
    .row.bg-c7
      .col-12
        .px-5
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img9.png", alt="", style="width: 400px").m-auto
            .col-lg-8
              .row.justify-content-center.mb-3
                .col-auto.bg-c3
                  .py-4.px-5
                    p.mb-0 Rt = N2 / N1
              p También puede expresarse mediante el número de dientes (Z) del engranaje conductor sobre el número de dientes del engranaje conducido:
              .row.justify-content-center.mb-3
                .col-auto.bg-c3
                  .py-4.px-5
                    p.mb-0 Rt = Z1 / Z2
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 1.] Relación de transmisión
              .row
                .col-lg-auto
                  .p-4
                    figure
                      img(src="@/assets/curso/tema1/img4.svg", alt="", style="width: 300px").m-auto
                .col-lg
                  .p-4
                    p En donde:
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-brain.txt--green
                        |
                        p.mb-0 N1 es el número de revoluciones del engranaje conductor.
                      li.d-flex
                        i.fas.fa-brain.txt--green
                        |
                        p.mb-0 Z1 el número de dientes del conductor.
                      li.d-flex
                        i.fas.fa-brain.txt--green
                        |
                        p.mb-0 N2 el número de revoluciones del engranaje conducido.
                      li.d-flex
                        i.fas.fa-brain.txt--green
                        |
                        p.mb-0 Z2 el número de dientes del conducido.

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
