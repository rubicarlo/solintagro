<template>
  <div>
    <!-- Barra de Navegación -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi App</a>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacto" class="nav-link">Contacto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sobre-solintagro" class="nav-link">Acerca de</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenedor dinámico para las rutas -->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style><script setup lang="ts">
</script>
