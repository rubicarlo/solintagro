<template>
  
  <div class="container mt-4" style="max-width: 90%; font-family: 'Josefin Sans', sans-serif;">
    <h1 class="text-center mb-4 fw-bold fs-1 mt-5">Encuentranos en</h1>
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
            <h5 style="font-weight: 600;">Oficina principal</h5>
            <p>C/ ESCRITORA ROSA CHACEL, 4 - LOCAL 2. 14004</p>
            <h5 style="font-weight: 600;">Teléfono</h5>
            <p>957 44 66 22</p>
        </div>
        <div class="col-md-3 d-flex flex-column gap-3">
            <h5 style="font-weight: 600;">Email</h5>
            <a href="mailto:solintagro@gmail.com">solintagro@gmail.com</a>
        </div>
    </div>
</div>

    
    <div class="col-md-6 col-lg-5 right-panel p-4" style="font-family: 'Josefin Sans', sans-serif;">
      <form @submit.prevent="sendEmail" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="form-control"
            placeholder="Ingresa tu nombre o el de tu empresa"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Tu correo</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="form-control"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Tu mensaje</label>
          <textarea
            id="message"
            v-model="formData.message"
            class="form-control"
            placeholder="Escribe tu mensaje aquí"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>

      <!-- Mensajes de éxito y error -->
      <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </div>
  </div>



</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    sendEmail() {
      // Validación básica
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      emailjs.send(
        'service_amdn97i', // Reemplaza con tu Service ID
        'template_1k5jnoo', // Reemplaza con tu Template ID
        {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message
        },
        'rlNyvxAxp0WUnVEtr' // Reemplaza con tu Public Key
      )
      .then((response) => {
        this.successMessage = '¡Correo enviado exitosamente!';
        this.errorMessage = '';
        this.resetForm();
      })
      .catch((error) => {
        this.errorMessage = 'Ocurrió un error al enviar el correo. Intenta nuevamente.';
        this.successMessage = '';
      });
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Opcional: estilos personalizados */
.container {
  max-width: 600px;
}
textarea {
  resize: none;
}
</style>

