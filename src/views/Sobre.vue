<template>
  <section >
    <div class="fondo-seccion container-fluid bg-light p-3">
  <div class="row text-center">
    <h1 class="display-2 fw-normal mt-4">{{ $t('about.tituloPrincipal') }}</h1>
  </div>

  <div class="row align-items-center mt-4">
    <div class="col-md-4 d-flex justify-content-center">
      <img :src="tresLentejas" class="img-fluid w-100 fade-in ms-5" alt="Tres Lentejas" @load="onImageLoad">
    </div>

    <div class="col-md-8 text-center text-md-start">
      <h2 class="fw-bold">{{ $t('about.bienvenida') }}</h2>
      <p class="lead">{{ $t('about.descripcionBienvenida') }}</p>
    </div>
  </div>
</div>

    <div class="container-fluid  p-3">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10">
          <div class="row py-5">
            <div class="col-12 col-md-9 d-flex justify-content-center align-items-center">
              <p class="text-center fs-4">{{ $t('about.seccion1') }}</p>
            </div>
            <div class="col-12 col-md-3">
              <img :src="AGILE" alt="Habas" class="img-fluid fade-in" @load="onImageLoad">
            </div>
          </div>

          <div class="row py-5">
            <div class="col-12 col-md-3">
              <img :src="GWASveza" alt="Legumbres" class="img-fluid fade-in" @load="onImageLoad">
            </div>
            <div class="col-12 col-md-9 d-flex justify-content-center align-items-center">
              <p class="text-center fs-4">{{ $t('about.seccion2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tresLentejas from '@/assets/3lentejas.webp';

import AGILE from '@/assets/Experiencia/AGILE27Abril2018.jpg';
import GWASveza from '@/assets/Experiencia/GWASvezabotanico21marzo2024.jpg';
import intercrop from '@/assets/Experiencia/intercrop varios 22 Marzo 2020(1).jpg';

export default {
  name: 'NuevoComponente',
  data() {
    return {
      tresLentejas,
      AGILE,
      GWASveza
    };
  },
  methods: {
    onImageLoad(event) {
      event.target.style.opacity = 1;
    }
  }
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in[src] {
  opacity: 1;
}

@media (max-width: 768px) {
  /* Se aplica p-2 de Bootstrap */
}

@media (max-width: 576px) { 
    .fs-4 {
        font-size: 1.25rem; /* Reduce el tamaño de la fuente en móviles */
    }
}
</style>


