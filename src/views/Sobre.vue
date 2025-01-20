<template>
  <section>
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

    <div class="container mt-4">

      <h2 class="text-center mb-5 display-5 ">{{ $t('about.tituloproyectos') }}</h2>
    <!-- Primer elemento -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">2017- 2021</div>
      <div class="fw-bold mb-1">Partner of EU project TRUE (TRansition to sUstainable legume based systems in Europe)</div>
      <div class="text-secondary">H2020-SFS-2016-2017/H2020-SFS-2016-2</div>
    </div>

    <!-- Segundo elemento -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">2017 - 2020</div>
      <div class="fw-bold mb-1">External collaborator for AGILE (Application of Genomic Innovation in the Lentil Economy) project</div>
      <div class="text-secondary">University of Saskatchewan, Canada</div>
    </div>

    <!-- Tercer elemento -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">2016 - 2018</div>
      <div class="fw-bold mb-1">Contrats with ITQB, Portugal for grasspea and common bean multiplication and characterization</div>
      <div class="text-secondary">                  </div>
    </div>

    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">2016 – till present</div>
      <div class="fw-bold mb-1">Agreement with IAS-CSIC on legume research</div>
      <div class="text-secondary">                  </div>
    </div>

    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">   2016 – till present</div>
      <div class="fw-bold mb-1">LegumES</div>
      <div class="text-secondary">                  </div>
    </div>

    <div class="mb-4 p-3 border rounded-3 bg-light">
      <div class="text-muted mb-1">   2016 – till present</div>
      <div class="fw-bold mb-1">PROSPER (Promoting Resilient Orphan Legumes for Sustainable Agriculture and Food Security)</div>
      <div class="text-secondary">HORIZON-CL6-2024-BIODIV-02-3-two-stage, ID number: SEP-211009149</div>
    </div>

    <!-- Agregar más elementos aquí de ser necesario -->
  </div>


  <div class="container mt-4">

<h2 class="text-center mb-5 display-5 ">{{ $t('about.tituloWP') }}</h2>
<!-- Primer elemento -->
<div class="mb-4 p-3 border rounded-3 bg-light">
<div class="fw-bold mb-1">WP5 Novel dishes and processed products enhancing biodiversity</div>
<div class="text-secondary">(Task 5.4)</div>
</div>

<!-- Segundo elemento -->
<div class="mb-4 p-3 border rounded-3 bg-light">

<div class="fw-bold mb-1">WP6 Environment and Biodiversity</div>
<div class="text-secondary">(Tasks 6.1, 6.2, 6.3, 6.4)</div>
</div>

<!-- Tercer elemento -->
<div class="mb-4 p-3 border rounded-3 bg-light">

<div class="fw-bold mb-1">WP7 Exploitation of genetic diversity and development of pre-breeding material</div>
<div class="text-secondary">(Tasks 7.1, 7.2: Pilot cases  (with Germany), 7.3, 7.4: Vertical approach to proliferate the results 
	D7.4.1 Handbook on Lens culinaris (SOL) [M45] 
	D7.4.2 Handbook on Lathyrus spp. (SOL) [M45] )                  </div>
</div>

<div class="mb-4 p-3 border rounded-3 bg-light">
<div class="fw-bold mb-1">WP8 Enhancing the agri-food value chain biodiversity links via the BIOVALUE tool</div>
<div class="text-secondary">(Tasks 8.1, 8.3)</div>
</div>

<div class="mb-4 p-3 border rounded-3 bg-light">
<div class="fw-bold mb-1">WP9 Certification, testing and labelling of underutilized products</div>
<div class="text-secondary">(Task 9.1)</div>
</div>

<div class="mb-4 p-3 border rounded-3 bg-light">
<div class="fw-bold mb-1">WP10 Communication, Dissemination and Capacity Building 	</div>
<div class="text-secondary">(Tasks 10.1, 10.2, 10.3, 10.5)</div>
</div>

<!-- Agregar más elementos aquí de ser necesario -->
</div>
  </section>
</template>

<script>
import tresLentejas from '@/assets/3lentejas.webp';

export default {
  data() {
    return {
      tresLentejas,
         };
  },
  methods: {
    onImageLoad() {
      console.log('Image loaded');
    }
  }
};


</script>


<style scoped>
.fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
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


