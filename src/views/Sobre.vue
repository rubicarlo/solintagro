<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
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
  <h2 class="text-center mb-5 display-5">Proyectos</h2>

  <!-- Elementos colapsables -->
  <div class="accordion mb-5" id="proyectosAccordion">
    <!-- Primer elemento -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                <div>
                    <div class="text-muted">2017-2021</div>
                    <div>Partner of EU project TRUE (TRansition to sUstainable legume based systems in Europe) </div>
                </div>
            </button>
        </h2>
        <div id="collapse1" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="text-secondary">H2020-SFS-2016-2017/H2020-SFS-2016-2 <p>Breeding program applied on Lathyrus clymenum and L. ochrus and Lens culinaris that are evaluated for characteristics of importance to sustainable agriculture (combination of low inputs request, increased and stable yield and resistance to stresses).</p><p><a href="https://true-project.webarchive.hutton.ac.uk/index.htm" target="_blank">https://true-project.webarchive.hutton.ac.uk/index.htm</a></p></div>
            </div>
        </div>
    </div>

    <!-- Segundo elemento -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                <div>
                    <div class="text-muted">2017 - 2020</div>
                    <div>External collaborator for AGILE project (Application of Genomic Innovation in the Lentil Economy)</div>
                </div>
            </button>
        </h2>
        <div id="collapse2" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary">University of Saskatchewan, Canada<p>Phenotyping a lentil panel under field and controlled conditions for environmental adaptation, stress resistance and agronomic traits.</p><p><a href="https://genomeprairie.ca/project/agile/" target="_blank">https://genomeprairie.ca/project/agile/</a></p></div>
            </div>
        </div>
    </div>

    <!-- Tercer elemento -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                <div>
                    <div class="text-muted">2016 - 2018</div>
                    <div>Contracts with ITQB, Portugal</div>
                </div>
            </button>
        </h2>
        <div id="collapse3" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary">Multiplication and characterization of grasspea and common bean</div>
            </div>
        </div>
    </div>

    <!-- Cuarto elemento -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                <div>
                    <div class="text-muted">2016 – till present</div>
                    <div>Agreement with IAS-CSIC on legume research</div>
                </div>
            </button>
        </h2>
        <div id="collapse4" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary">Detalles adicionales...</div>
            </div>
        </div>
    </div>

    <!-- Quinto elemento -->
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                <div>
                    <div class="text-muted">2016 – till present</div>
                    <div>LegumES</div>
                </div>
            </button>
        </h2>
        <div id="collapse5" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary">Valorising and balancing the ecosystem service benefits offered by legumes, and legume-based cropped systems<p><a href="https://genomeprairie.ca/project/agile/" target="_blank">https://genomeprairie.ca/project/agile/</a></p></div>
            </div>
        </div>
    </div>
<!-- otro elemento -->
<div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                <div>
                    <div class="text-muted">2020 – 2025</div>
                    <div>BioValue</div>
                </div>
            </button>
        </h2>
        <div id="collapse7" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary"><a href="https://www.biovalue-project.eu/" target="_blank">https://www.biovalue-project.eu//</a></div>
            </div>
        </div>
    </div>
    <!-- Sexto elemento -->
     
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                <div>
                    <div class="text-muted">2025 – till present</div>
                    <div>PROSPER</div>
                </div>
            </button>
        </h2>
        <div id="collapse6" class="accordion-collapse collapse" >
            <div class="accordion-body">
                <div class="text-secondary">HORIZON-CL6-2024-BIODIV-02-3-two-stage, ID number: SEP-211009149</div>
            </div>
        </div>
    </div>
</div></div>


<!-- Agregar más elementos aquí de ser necesario -->

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


