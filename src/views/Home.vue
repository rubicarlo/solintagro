<template>
  <div>
    <section class="fondo-seccion">
      <div class="container">
        <div class="row align-items-center py-3">
          <div class="col-md-6">
            <h1 class="display-3 fw-bold">Contenido de la sección con fondo</h1>
            <p class="fs-5">Esta es la sección con el fondo actualizado y optimizada en altura. Proporciona información relevante de manera compacta.</p>
          </div>
          <div class="col-12 col-md-6 text-center">
            <picture>
              <source :srcset="leguminosasImage" type="image/webp">
              <img 
                :src="leguminosasImage" 
                class="img-fluid rounded mx-auto d-block w-75" 
                alt="Imagen de leguminosas" 
                loading="lazy" 
                decoding="async" 
                @load="onImageLoad">
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <h2 class="text-center mb-5 display-5">Colaboramos con</h2>
      <div class="row text-center justify-content-center">
        <div
          class="col-12 col-md-3 mb-4"
          v-for="(image, index) in images"
          :key="index">
          <picture>
            <source :srcset="image.src" type="image/webp">
            <img
              :src="image.src"
              class="img-fluid w-75 fade-in rounded"
              :alt="image.alt"
              loading="lazy"
              decoding="async"
              @load="onImageLoad">
          </picture>
          <p class="fs-5 mt-2">{{ image.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import leguminosasImage from '../assets/leguminosas.webp'; 
import Logo_CSIC from '../assets/Logo_CSIC.jpg';
import Logo_FR from '../assets/Logo_centro_frances.svg';
import Logo_age from '../assets/Logotipo_de_la_Agencia_Estatal_de_Investigación.svg';
import peas1 from '../assets/peas1.svg';

export default {
  name: 'MiComponente',
  data() {
    return {
      leguminosasImage: leguminosasImage, 
      images: [
        { src: Logo_CSIC, alt: 'Logo del CSIC' },
        { src: Logo_FR, alt: 'Logo del centro francés'},
        { src: Logo_age, alt: 'Logo de la Agencia Estatal de Investigación'},
        { src: peas1, alt: 'Logo de guisantes'}
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
