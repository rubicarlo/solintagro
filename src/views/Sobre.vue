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
  <div class="accordion">
    <!-- Primer elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark collapsed"
           data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
        <div>
          <div class="text-muted">2017-2021</div>
          <div>Partner of EU project TRUE</div>
        </div>
        <i class="bi bi-chevron-down icon-toggle"></i>
      </div>
      <div id="collapse1" class="collapse p-3">
        <div class="text-secondary">H2020-SFS-2016-2017/H2020-SFS-2016-2</div>
      </div>
    </div>
    <!-- Segundo elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark"
           data-bs-toggle="collapse" data-bs-target="#collapse2">
        <div>
          <div class="text-muted">2017 - 2020</div>
          <div>External collaborator for AGILE project</div>
        </div>
        <i class="bi bi-chevron-down transition"></i>
      </div>
      <div id="collapse2" class="collapse p-3">
        <div class="text-secondary">University of Saskatchewan, Canada</div>
      </div>
    </div>

    <!-- Tercer elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark"
           data-bs-toggle="collapse" data-bs-target="#collapse3">
        <div>
          <div class="text-muted">2016 - 2018</div>
          <div>Contracts with ITQB, Portugal</div>
        </div>
        <i class="bi bi-chevron-down transition"></i>
      </div>
      <div id="collapse3" class="collapse p-3">
        <div class="text-secondary">Multiplication and characterization of grasspea and common bean</div>
      </div>
    </div>

    <!-- Cuarto elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark"
           data-bs-toggle="collapse" data-bs-target="#collapse4">
        <div>
          <div class="text-muted">2016 – till present</div>
          <div>Agreement with IAS-CSIC on legume research</div>
        </div>
        <i class="bi bi-chevron-down transition"></i>
      </div>
      <div id="collapse4" class="collapse p-3">
        <div class="text-secondary">Detalles adicionales...</div>
      </div>
    </div>

    <!-- Quinto elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark"
           data-bs-toggle="collapse" data-bs-target="#collapse5">
        <div>
          <div class="text-muted">2016 – till present</div>
          <div>LegumES</div>
        </div>
        <i class="bi bi-chevron-down transition"></i>
      </div>
      <div id="collapse5" class="collapse p-3">
        <div class="text-secondary">Detalles adicionales...</div>
      </div>
    </div>

    <!-- Sexto elemento -->
    <div class="mb-3 border rounded-3 bg-light">
      <div class="p-3 d-flex justify-content-between align-items-center fw-semibold accordion-header text-dark"
           data-bs-toggle="collapse" data-bs-target="#collapse6">
        <div>
          <div class="text-muted">2016 – till present</div>
          <div>PROSPER</div>
        </div>
        <i class="bi bi-chevron-down transition"></i>
      </div>
      <div id="collapse6" class="collapse p-3">
        <div class="text-secondary">HORIZON-CL6-2024-BIODIV-02-3-two-stage, ID number: SEP-211009149</div>
      </div>
    </div>
  </div>



    <!-- Agregar más elementos aquí de ser necesario -->
  </div>


  <div class="container mt-4">
    <h2 class="text-center mb-5 display-5 ">{{ $t('about.tituloWP') }}</h2>

    <!-- WP5 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp5">
            WP5 Novel dishes and processed products enhancing biodiversity
        </div>
        <div id="wp5" class="collapse text-secondary">
            (Task 5.4)
        </div>
    </div>

    <!-- WP6 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp6">
            WP6 Environment and Biodiversity
        </div>
        <div id="wp6" class="collapse text-secondary">
            (Tasks 6.1, 6.2, 6.3, 6.4)
        </div>
    </div>

    <!-- WP7 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp7">
            WP7 Exploitation of genetic diversity and development of pre-breeding material
        </div>
        <div id="wp7" class="collapse text-secondary">
            (Tasks 7.1, 7.2: Pilot cases (with Germany), 7.3, 7.4: Vertical approach to proliferate the results
            <br> D7.4.1 Handbook on Lens culinaris (SOL) [M45]
            <br> D7.4.2 Handbook on Lathyrus spp. (SOL) [M45] )
        </div>
    </div>

    <!-- WP8 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp8">
            WP8 Enhancing the agri-food value chain biodiversity links via the BIOVALUE tool
        </div>
        <div id="wp8" class="collapse text-secondary">
            (Tasks 8.1, 8.3)
        </div>
    </div>

    <!-- WP9 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp9">
            WP9 Certification, testing and labelling of underutilized products
        </div>
        <div id="wp9" class="collapse text-secondary">
            (Task 9.1)
        </div>
    </div>

    <!-- WP10 -->
    <div class="mb-4 p-3 border rounded-3 bg-light">
        <div class="fw-bold mb-1" data-bs-toggle="collapse" data-bs-target="#wp10">
            WP10 Communication, Dissemination and Capacity Building
        </div>
        <div id="wp10" class="collapse text-secondary">
            (Tasks 10.1, 10.2, 10.3, 10.5)
        </div>
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
.accordion-header {
      cursor: pointer;
      transition: background 0.3s ease-in-out;
    }

    .accordion-header:hover {
      background-color: var(--bs-secondary-bg-subtle);
    }

    .icon-toggle {
      transition: transform 0.3s ease-in-out;
    }

    /* Flecha rota cuando está abierto */
    .collapsed .icon-toggle {
      transform: rotate(0deg);
    }

    .icon-toggle {
      transform: rotate(180deg);
    }
</style>


