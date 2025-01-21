<template>
  
  <div class="container mt-4" style="max-width: 90%; font-family: 'Josefin Sans', sans-serif;">
    <h1 class="text-center mb-4 fw-bold fs-1 mt-5">{{ $t('Contacto.tituloPrincipal') }}</h1>
</div>


  <div class="row justify-content-center gap-4">
    <!-- Panel Izquierdo -->
    <div class="col-md-6 col-lg-5 left-panel p-4 d-flex justify-content-center">
      <iframe
        width="80%"
        height="400"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5775.800547674802!2d-4.792467145537684!3d37.877189181282546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDUyJzM4LjYiTiA0wrA0NycyMy45Ilc!5e0!3m2!1ses!2ses!4v1736240607813!5m2!1ses!2ses"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <!-- Panel Derecho -->
    <div class="col-md-6 col-lg-5 right-panel p-4" style="font-family: 'Josefin Sans', sans-serif;">
    
    <div class="row gap-4">
        <div class="col-md-3 d-flex flex-column gap-3">
            <h5 style="font-weight: 600;">{{ $t('Contacto.oficina') }}</h5>
            <p>{{ $t('Contacto.lugar') }}</p>
            <h5 style="font-weight: 600;">{{ $t('Contacto.Telefono') }}</h5>
            <p>957 44 55 11 </p>
        </div>
        <div class="col-md-3 d-flex flex-column gap-3">
            <h5 style="font-weight: 600;">{{ $t('Contacto.Emilio') }}</h5>
            <a href="mailto:eleonora.solintagro@gmail.com">eleonora.solintagro@gmail.com</a>
        </div>
    </div>
</div>
</div>
    <!-- Campo Formulario -->
    <div class="form-section">
    <form @submit.prevent="sendEmail" class="form-container">
      <!-- Campo Nombre -->
      <div class="mb-5">
        <label for="name" class="form-label">{{ $t('Contacto.Correonombre') }}</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="form-control input-styled"
          :class="{ 'is-invalid': errors.name }"
          :placeholder="$t('Contacto.cuadronombre')"
          @blur="validateField('name')"
          required
        />
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
        </div>
      </div>

      <!-- Campo Email -->
      <div class="mb-5">
        <label for="email" class="form-label">{{ $t('Contacto.Correoemilio') }}</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="form-control input-styled"
          :class="{ 'is-invalid': errors.email }"
          :placeholder="$t('Contacto.cuadrocorreo')"
          @blur="validateField('email')"
          required
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>

      <!-- Campo Mensaje -->
      <div class="mb-4">
        <label for="message" class="form-label">{{ $t('Contacto.Correoasunto') }}</label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-control input-styled"
          :class="{ 'is-invalid': errors.message }"
          :placeholder="$t('Contacto.cuadroasunto')"
          rows="5"
          @blur="validateField('message')"
          required
        ></textarea>
        <div v-if="errors.message" class="invalid-feedback">
          {{ errors.message }}
        </div>
      </div>

      <!-- Botón Enviar -->
      <div class="d-grid">
        <button type="submit" class="btn-gradient btn-lg">
          {{ $t('Contacto.Boton') }}
        </button>
      </div>

      <!-- Mensajes de éxito y error -->
      <div v-if="successMessage" class="alert alert-success mt-4 fade show" role="alert">
        <i class="bi bi-check-circle-fill me-2"></i>{{ successMessage }}
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-4 fade show" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      errors: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    validateField(field) {
      if (!this.formData[field]) {
        this.errors[field] = "Este campo es obligatorio.";
      } else {
        this.errors[field] = "";
      }
    },
    sendEmail() {
      const fields = ["name", "email", "message"];
      fields.forEach((field) => this.validateField(field));

      if (Object.values(this.errors).some((error) => error)) {
        this.errorMessage = "Por favor, corrige los errores antes de enviar.";
        return;
      }

      emailjs
        .send(
          "service_amdn97i",
          "template_1k5jnoo",
          {
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message,
          },
          "rlNyvxAxp0WUnVEtr"
        )
        .then(() => {
          this.successMessage = "¡Correo enviado exitosamente!";
          this.errorMessage = "";
          this.resetForm();

          setTimeout(() => {
            this.successMessage = "";
          }, 5000);
        })
        .catch(() => {
          this.errorMessage = "Ocurrió un error al enviar el correo. Intenta nuevamente.";
          this.successMessage = "";

          setTimeout(() => {
            this.errorMessage = "";
          }, 5000);
        });
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
/* Fondo general de la sección */
.form-section {
  background: linear-gradient(135deg, #e0e7ff, #f8f9fa); /* Fondo amplio */
  padding: 3rem 0; /* Espacio alrededor de la sección */
  display: flex;
  justify-content: center; /* Centrar el formulario horizontalmente */
}

/* Estilo del formulario */
.form-container {
  width: 90%; /* Ocupará el 90% del ancho disponible */
  max-width: 800px; /* Límite para pantallas grandes */
  padding: 2rem 3rem;
}

/* Inputs personalizados */
.input-styled {
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.75rem;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  width: 100%;
}

.input-styled:focus {
  border-color: #6c63ff;
  box-shadow: 0 0 10px rgba(108, 99, 255, 0.2);
  outline: none;
}

/* Botón con gradiente */
.btn-gradient {
  background: linear-gradient(135deg, #6c63ff, #4a47d4);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #4a47d4, #6c63ff);
  transform: scale(1.05);
}
</style>