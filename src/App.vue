<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">
      <img src="/logosolitagro.svg" alt="Logo" class="custom-logo" />
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sobre-solintagro" class="nav-link">Acerca de</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  <!-- Contenido dinámico -->
  <router-view></router-view>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <div class="container">
      <p class="mb-0">&copy; 2025 Solintagro. Todos los derechos reservados.</p>
      <p class="mb-0">
        <router-link to="/Privacidad" class="text-white">Política de Privacidad</router-link>
        <a href="/terminos" class="text-white">Aviso legal</a>
      </p>
    </div>
  </footer>
</template>
<style scoped>
/* Aplica la fuente por defecto en toda la aplicación */
* {
  font-family: 'Josefin Sans', sans-serif;
}

/* Estilos para el logo */
.custom-logo {
  height: 70px; /* Ajusta la altura deseada */
  width: auto;   /* Mantiene la proporción original */
  margin: 0;
  padding: 0;
}

/* Estilos para la barra de navegación (ajustes finos) */
.navbar {
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
    font-size: 1.35rem;
    font-weight: 600;
    color: #333;
    padding: 0.5rem 1rem;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #007bff;
}

.nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
</style>
