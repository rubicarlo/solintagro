<template>
  <div class="container">
    <div class="row">
      <div
        class="col-4 mb-4 d-flex justify-content-center"
        v-for="(trabajo, index) in trabajos"
        :key="index"
        @click="mostrarImagenGrande(trabajo)"
      >
        <div class="thumbnail-wrapper">
          <img
            :src="trabajo.imagen"
            :alt="trabajo.titulo"
            class="img-thumbnail"
            :title="trabajo.titulo"
          />
        </div>
      </div>
    </div>

    <div
      v-if="imagenSeleccionada"
      class="modal d-block"
      tabindex="-1"
      @click.self="cerrarModal"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
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
              alt=""
              class="img-fluid rounded mb-3"
            />
            <p class="text-muted">{{ imagenSeleccionada.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import proyecto1 from "@/assets/Experiencia/AGILE27Abril2018.jpg";
import proyecto2 from "@/assets/Experiencia/GWASvezabotanico21marzo2024.jpg";
import proyecto3 from "@/assets/Experiencia/Pozoblanco 2006.jpg";

export default {
  name: "Trabajos",
  data() {
    return {
      trabajos: [
        {
          titulo: "Proyecto 1",
          descripcion: "Descripción del proyecto 1.",
          imagen: proyecto1,
        },
        {
          titulo: "Proyecto 2",
          descripcion: "Descripción del proyecto 2.",
          imagen: proyecto2,
        },
        {
          titulo: "Proyecto 3",
          descripcion: "Descripción del proyecto 3.",
          imagen: proyecto3,
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
.thumbnail-wrapper {
  width: 150px; /* Ancho fijo */
  height: 150px; /* Alto fijo */
  overflow: hidden; /* Esconde cualquier contenido desbordado */
}

.thumbnail-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen se recorte proporcionalmente */
  border-radius: 5px; /* Opcional, bordes redondeados */
}

/* Estilos para el modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-dialog {
  max-width: 80%;
}

.btn-close {
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
