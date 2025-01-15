<template>
    <div class="container">
      <!-- Galería de miniaturas -->
      <div class="row">
        <div
          class="col-4 mb-4"
          v-for="(trabajo, index) in trabajos"
          :key="index"
          @click="mostrarImagenGrande(trabajo)"
        >
          <img
            :src="trabajo.imagen"
            :alt="trabajo.titulo"
            class="img-fluid"
            :title="trabajo.titulo"
          />
        </div>
      </div>
  
      <!-- Imagen grande con título y descripción -->
      <div v-if="imagenSeleccionada" class="modal d-block">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ imagenSeleccionada.titulo }}</h5>
              <button type="button" class="btn-close" @click="cerrarModal"></button>
            </div>
            <div class="modal-body">
              <img :src="imagenSeleccionada.imagen" alt="" class="img-fluid" />
              <p>{{ imagenSeleccionada.descripcion }}</p>
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
        imagenSeleccionada: null, // Imagen seleccionada para mostrar en grande
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
  /* Estilos opcionales */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  </style>
  