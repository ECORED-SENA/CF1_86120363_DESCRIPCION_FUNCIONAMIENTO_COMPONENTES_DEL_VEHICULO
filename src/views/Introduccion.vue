<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El uso de automóviles es indispensable en múltiples actividades, especialmente en trabajos de campo. Sin embargo, el desconocimiento sobre su correcto manejo y mantenimiento suele provocar problemas como desgastes y averías inesperadas, que dificultan su operatividad. Esto resalta la importancia de comprender el funcionamiento de los componentes esenciales del vehículo.
        .row
          .col-12
            .p-4.bg-c1
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 90px").m-auto
                .col
                  p.mb-0 La caja de cambios, un elemento clave en el sistema de transmisión, juega un papel fundamental al transferir el par y el movimiento del motor hacia las ruedas, asegurando que el automóvil pueda desplazarse en diferentes condiciones. Conocer sus características y funcionamiento permite un manejo eficiente y previene fallos comunes que afectan su desempeño.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
