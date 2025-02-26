<template>
  <div class="container">
    <h2 class="text-center mb-5 mt-5 display-5">{{ $t('Trabajos.tituloPrincipal') }}</h2>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-md-3 mb-4 d-flex justify-content-center"
        v-for="(trabajo, index) in trabajos"
        :key="index"
        @click="mostrarImagenGrande(trabajo)"
      >
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="image-wrapper">
            <img
              :src="trabajo.imagen"
              :alt="trabajo.titulo"
              class="card-img-top img-fluid rounded-lg"
              :title="trabajo.titulo"
            />
          </div>
          <div class="card-body text-center">
            <p class="card-text text-muted">{{ trabajo.abajo }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar la imagen grande -->
    <div
      v-if="imagenSeleccionada"
      class="modal fade show d-block"
      tabindex="-1"
      @click.self="cerrarModal"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ imagenSeleccionada.titulo }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="cerrarModal"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img
              :src="imagenSeleccionada.imagen"
              :alt="imagenSeleccionada.titulo"
              class="img-fluid rounded"
            />
            <p class="text-muted mt-3">{{ imagenSeleccionada.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AGILE from '@/assets/Experiencia/AGILE27Abril2018.jpg';
import GWASveza from '@/assets/Experiencia/GWASvezabotanico21marzo2024.jpg';
import frijol from '@/assets/Experiencia/IMG-20150612-WA0005.jpg';
import almortas from '@/assets/Experiencia/ColaboracionconelITQB.jpg';
import TRUE from '@/assets/Experiencia/UnionEuropeaTRUE.jpg';
import BIOVALUE from '@/assets/Experiencia/Cordobamarzo2024BIOVALUE.jpg';
import LegumES from '@/assets/Experiencia/IMG_20180409_125740.jpg';
import PROSPER from '@/assets/Experiencia/IMG-20180214-WA0010.jpg';

export default {
  name: "Trabajos",
  data() {
    return {
      trabajos: [
      {
    titulo: "Proyecto AGILE",
    descripcion:
      "Colaboración en varias tareas de cuidado y multiplicación de una colección de germoplasma de lentejas en seno al proyecto AGILE (Aplicación de Innovación Genómica en la Economía de la Lenteja) (financiado por Universidad de Saskatchewan, Canadá) (2015-2018).",
    imagen: AGILE,
    abajo: "Cuidado y multiplicación de germoplasma de lentejas en el proyecto AGILE (2015-2018).",
  },
  {
    titulo: "Colaboración IAS-CSIC",
    descripcion:
      "Colaboración desde 2016 con el Instituto de Agricultura Sostenible (IAS-CSIC) en diferentes tareas de apoyo a la investigación en leguminosas.",
    imagen: GWASveza,
    abajo: "Colaboración en investigación de leguminosas con el IAS-CSIC desde 2016.",
  },
  {
    titulo: "Muestreo de frijol",
    descripcion:
      "Colaboración con el ITQB (Instituto de Tecnología Química y Biológica, Oeiras, Portugal) para multiplicación y muestreo de una colección de germoplasma de frijol común (2016/17).",
    imagen: frijol,
    abajo: "Multiplicación y muestreo de frijol común con el ITQB (2016/17).",
  },
  {
    titulo: "Resistencia en almortas",
    descripcion:
      "Colaboración con el ITQB (Instituto de Tecnología Química y Biológica, Oeiras, Portugal) para multiplicación de material vegetal (500 genotipos), puesta a punto y desarrollo de evaluaciones para la respuesta de resistencia en almortas (Lathyrus spp.) a infestaciones por gorgojos (2017/18).",
    imagen: almortas,
    abajo: "Evaluación de resistencia en almortas con el ITQB (2017/18).",
  },
  {
    titulo: "Proyecto TRUE",
    descripcion:
      "Participación en diferentes tareas del Proyecto Internacional financiado por la Unión Europea TRUE (TRansition paths to sUstainable legume based systems in Europe): H2020-SFS-2016-2017/H2020-SFS-2016-2 (2017-2021). Desarrollo de estudios piloto en campo; evaluación de sistemas de cultivo de leguminosas (guisantes, habas, algarrobas, lentejas, garbanzos y almortas); desarrollo de material vegetal mejorado.",
    imagen: TRUE,
    abajo: "Evaluación de sistemas de cultivo de leguminosas en la UE (2017-2021).",
  },
  {
    titulo: "Proyecto BIOVALUE",
    descripcion:
      "Participación en diferentes tareas del Proyecto Internacional financiado por la Unión Europea BIOVALUE (Fork-to-farm agent-based simulation tool augmenting BIOdiversity in the agri-food VALUE chain): Grant Agreement 101000499 — BIOVALUE — H2020-SFS-2018-2020 / H2020-SFS-2020-2 (2021-2025). Multiplicación y distribución de las semillas utilizadas en los estudios piloto llevados a cabo por los diferentes colaboradores; estudio en detalle la calidad nutricional y el comportamiento postcosecha de las especies plantadas en los casos piloto (almortas); desarrollo de un protocolo relativo a la recolección de datos para la evaluación de recursos fitogenéticos y su contribución a la biodiversidad de la UE; elaboración de manuales de manejo del cultivo de la almorta y lenteja en la UE.",
    imagen: BIOVALUE,
    abajo: "Estudio de semillas y biodiversidad en la UE (2021-2025).",
  },
  {
    titulo: "Proyecto LegumES",
    descripcion:
      "Participación en diferentes tareas del Proyecto Internacional financiado por la Unión Europea LegumES (Valorising and balancing the ecosystem service benefits offered by legumes, and legume-based cropped systems): Project 101135512 — LegumES — HORIZON-CL6-2023-BIODIV-01 (2024-2028). Elaborar el impacto de los contextos ambientales y genéticos en los múltiples beneficios de los servicios ecosistémicos (SE) mediados por leguminosas y/o su coste.",
    imagen: LegumES,
    abajo: "Impacto ambiental y genético en servicios ecosistémicos (2024-2028).",
  },
  {
    titulo: "Proyecto PROSPER",
    descripcion:
      "Participación en diferentes tareas del Proyecto Internacional financiado por la Unión Europea PROSPER (Promoting Resilient Orphan Legumes for Sustainable Agriculture and Food Security): SEP-211009149 HORIZON-CL6-2024-BIODIV-02 (2025-2029). Cultivo de leguminosas (comunes y minoritarias); tareas de mejora, agronomía, sistemas de cultivo, cadena de valor, tecnología de semillas.",
    imagen: PROSPER,
    abajo: "Mejora y cultivo de leguminosas para seguridad alimentaria (2025-2029).",
  },  
      ],
      imagenSeleccionada: null,
    };
  },
  methods: {
    mostrarImagenGrande(trabajo) {
      this.imagenSeleccionada = trabajo;
    },
    cerrarModal() {
      this.imagenSeleccionada = null;
    },
  },
};
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  height: 200px; /* Ajusta esta altura para uniformidad */
  overflow: hidden;
  border-radius: 0.75rem;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover .image-wrapper img {
  transform: scale(1.1); /* Efecto de zoom */
}


.card:hover {
  transform: translateY(-5px);
}

.card-body {
  padding: 1.25rem;
  background-color: #f8f9fa;
}

.card-text {
  font-size: 0.9rem;
  font-weight: 500;
}

.modal-body img {
  max-width: 100%; /* Asegura que la imagen no exceda el ancho del modal */
  max-height: 80vh; /* Para pantallas altas */
  object-fit: contain; /* Asegura que la imagen no se distorsione */
  border-radius: 0.75rem;
  margin: auto;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
}

.modal.fade.show .modal-dialog {
  transform: translateY(0);
}
</style>



