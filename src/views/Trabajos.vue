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
            <p class="card-text text-muted">{{ trabajo.descripcion }}</p>
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
import intercrop from '@/assets/Experiencia/intercrop varios 22 Marzo 2020(1).jpg';
import Pozoblanco from '@/assets/Experiencia/Pozoblanco 2006.jpg';
import uno from '@/assets/Experiencia/IMG_20180409_125740.jpg';
import dos from '@/assets/Experiencia/IMG_20220813_093945.jpg';
import tres from '@/assets/Experiencia/IMG-20150612-WA0005.jpg';
import cuatro from '@/assets/Experiencia/IMG-20180214-WA0010.jpg';

export default {
  name: "Trabajos",
  data() {
    return {
      trabajos: [
        { titulo: "AGILE", descripcion: "Trabajo de AGILE realizado en abril 2018.", imagen: AGILE },
        { titulo: "GWAS Vezabotanico", descripcion: "Estudio de GWAS en el jardín botánico, marzo 2024.", imagen: GWASveza },
        { titulo: "Intercrop", descripcion: "Intercrop en la agricultura, marzo 2020                d        ddddddddddddddd    d        ddddddddddddddd    d        ddddddddddddddddddddddd.", imagen: intercrop },
        { titulo: "Pozoblanco", descripcion: "Vista de Pozoblanco en 2006.", imagen: Pozoblanco },
        { titulo: "Imagen Uno", descripcion: "Una fotografía tomada en abril 2018.", imagen: uno },
        { titulo: "Imagen Dos", descripcion: "Otra fotografía tomada en agosto 2022.fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", imagen: dos },
        { titulo: "Imagen Tres", descripcion: "Fotografía de 2015 con un paisaje bello.", imagen: tres },
        { titulo: "Imagen Cuatro", descripcion: "Fotografía de febrero 2018, con un paisaje nevado.", imagen: cuatro },
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



