<template>
  <div class="container">
    <h2 class="text-center mb-5 mt-5 display-5">{{ $t('Trabajos.tituloPrincipal') }}</h2>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-md-3 mb-4 d-flex justify-content-center"
        v-for="(trabajo, index) in trabajos"
        :key="index"
        @click="mostrarImagenGrande(trabajo, index)"
      >
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="image-wrapper">
            <img
              :src="trabajo.imagen"
              :alt="$t(`Trabajos.trabajosLista[${index}].${trabajo.nombreClave}.titulo`)"
              class="card-img-top img-fluid rounded-lg"
              :title="$t(`Trabajos.trabajosLista[${index}].${trabajo.nombreClave}.titulo`)"
            />
          </div>
          <div class="card-body text-center">
            <p class="card-text text-muted">{{ $t(`Trabajos.trabajosLista[${index}].${trabajo.nombreClave}.abajo`) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="imagenSeleccionada"
      class="modal fade show d-block"
      tabindex="-1"
      @click.self="cerrarModal"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t(`Trabajos.trabajosLista[${indiceSeleccionado}].${imagenSeleccionada.nombreClave}.titulo`) }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="cerrarModal"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img
              :src="imagenSeleccionada.imagen"
              :alt="$t(`Trabajos.trabajosLista[${indiceSeleccionado}].${imagenSeleccionada.nombreClave}.titulo`)"
              class="img-fluid rounded"
            />
            <p class="text-muted mt-3">{{ $t(`Trabajos.trabajosLista[${indiceSeleccionado}].${imagenSeleccionada.nombreClave}.descripcion`) }}</p>
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
          nombreClave: "proyectoAGILE", // Clave única para i18n
          imagen: AGILE,
        },
        {
          nombreClave: "colaboracionIASCSIC", // Clave única para i18n
          imagen: GWASveza,
        },
        {
          nombreClave: "muestreoFrijol", // Clave única para i18n
          imagen: frijol,
        },
        {
          nombreClave: "resistenciaAlmortas", // Clave única para i18n
          imagen: almortas,
        },
        {
          nombreClave: "proyectoTRUE", // Clave única para i18n
          imagen: TRUE,
        },
        {
          nombreClave: "proyectoBIOVALUE", // Clave única para i18n
          imagen: BIOVALUE,
        },
        {
          nombreClave: "proyectoLegumES", // Clave única para i18n
          imagen: LegumES,
        },
        {
          nombreClave: "proyectoPROSPER", // Clave única para i18n
          imagen: PROSPER,
        },
      ],
      imagenSeleccionada: null,
      indiceSeleccionado: null, // Para guardar el índice del trabajo seleccionado
    };
  },
  methods: {
    mostrarImagenGrande(trabajo, index) {
      this.imagenSeleccionada = trabajo;
      this.indiceSeleccionado = index; // Guarda el índice
    },
    cerrarModal() {
      this.imagenSeleccionada = null;
      this.indiceSeleccionado = null; // Resetea el índice al cerrar el modal
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



