<template>
  <section>
    <div class="container-fluid fondo-seccion">
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

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10">
          <div class="row py-5">
            <div class="col-12 col-md-9 d-flex justify-content-center align-items-center">
              <p class="text-center fs-4">{{ $t('about.parrafo1') }}</p>
            </div>
            <div class="col-12 col-md-3">
              <img :src="broadBeans" alt="Habas" class="img-fluid fade-in" @load="onImageLoad">
            </div>
          </div>

          <div class="row py-5">
            <div class="col-12 col-md-3">
              <img :src="leguma" alt="Legumbres" class="img-fluid fade-in" @load="onImageLoad">
            </div>
            <div class="col-12 col-md-9 d-flex justify-content-center align-items-center">
              <p class="text-center fs-4">{{ $t('about.parrafo2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tresLentejas from '../assets/3lentejas.png';
import broadBeans from '../assets/broad beans.png';
import leguma from '../assets/leguma.png';

export default {
  name: 'NuevoComponente',
  data() {
    return {
      tresLentejas,
      broadBeans,
      leguma
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

.fondo-seccion {
  background-color: #f0f0f0;
  padding: 20px;
}

.col-xl-10 {
    max-width: 1200px; /* Ajusta este valor según tus necesidades */
    margin: 0 auto;
}

.py-5 {
    padding-top: 3rem;
    padding-bottom: 3rem;
}

@media (max-width: 768px) {
  .fondo-seccion {
    padding: 15px;
  }
}

@media (max-width: 576px) { /* Ajuste para pantallas extra pequeñas */
    .fs-4 {
        font-size: 1.25rem; /* Reduce el tamaño de la fuente en móviles */
    }
    .fondo-seccion {
        padding: 10px;
    }
}
</style>

