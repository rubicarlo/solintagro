<template>
  <div>
    <section class="fondo-seccion">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-3 fw-bold">Contenido de la sección con fondo</h1>
            <p class="fs-5">Esta es la sección con el fondo actualizado y mayor altura. Esta es la sección con el fondo actualizado y mayor altura.</p>
          </div>
          <div class="col-12 col-md-6">
            <img :src="leguminosasImage" class="img-fluid rounded mx-auto d-block w-75 fade-in" alt="Imagen de leguminosas" loading="lazy" decoding="async" @load="onImageLoad">
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="row text-center">
        <div class="col-12 col-md-3 mb-4" v-for="(image, index) in images" :key="index">
          <img :src="image.src" class="img-fluid w-50 fade-in" :alt="image.alt" loading="lazy" decoding="async" @load="onImageLoad">
          <p class="fs-5">{{ image.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import leguminosasImage from '../assets/leguminosas.png'; 
import peasCom2 from '../assets/peas com(2).svg';
import beansCom2 from '../assets/beans com(2).svg';
import peasCom3 from '../assets/peas com(3).svg';
import peas1 from '../assets/peas1.svg';

export default {
  name: 'MiComponente',
  data() {
    return {
      leguminosasImage: leguminosasImage, 
      images: [
        { src: peasCom2, alt: 'Imagen de guisantes en color verde', description: 'Imagen de guisantes colgando' },
        { src: beansCom2, alt: 'Imagen de frijoles en color marrón', description: 'Imagen de guisantes en color verde' },
        { src: peasCom3, alt: 'Imagen de guisantes en color verde claro', description: 'Imagen de baina' },
        { src: peas1, alt: 'Imagen de guisantes en color verde oscuro', description: 'Imagen de guisantes otra' }
      ]
    };
  },
  methods: {
    onImageLoad(event) {
      event.target.style.opacity = 1;
    }
  }
}
</script>

<style scoped>
.fondo-seccion {
    background-image: url('../assets/fondo.png');
    background-size: cover;
    background-position: center;
    min-height: 50vh;
    padding: 40px;
}

</style>