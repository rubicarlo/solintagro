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
            <a href="mailto:solintagro@gmail.com">solintagro@gmail.com</a>
        </div>
    </div>
</div>

    
    <div class="col-md-6 col-lg-5 right-panel p-4" style="font-family: 'Josefin Sans', sans-serif;">
      <form @submit.prevent="sendEmail" class="needs-validation" novalidate>
  <!-- Campo Nombre -->
  <div class="mb-3">
    <label for="name" class="form-label">{{ $t('Contacto.Correonombre') }}</label>
    <input
    type="text"
    id="name"
    v-model="formData.name"
    class="form-control"
    :class="{'is-invalid': errors.name}"
    :placeholder="$t('Contacto.cuadronombre')"  @blur="validateField('name')"
    required
  />
    <div v-if="errors.name" class="invalid-feedback">
      {{ errors.name }}
    </div>
  </div>

  <!-- Campo Email -->
  <div class="mb-3">
    <label for="email" class="form-label">{{ $t('Contacto.Correoemilio') }}</label>
    <input
      type="email"
      id="email"
      v-model="formData.email"
      class="form-control"
      :class="{'is-invalid': errors.email}"
      :placeholder="$t('Contacto.cuadrocorreo')"
      @blur="validateField('email')"
      required
    />
    <div v-if="errors.email" class="invalid-feedback">
      {{ errors.email }}
    </div>
  </div>

  <!-- Campo Mensaje -->
  <div class="mb-3">
    <label for="message" class="form-label">{{ $t('Contacto.Correoasunto') }}</label>
    <textarea
      id="message"
      v-model="formData.message"
      class="form-control"
      :class="{'is-invalid': errors.message}"
      :placeholder="$t('Contacto.cuadroasunto')"
      rows="4"
      @blur="validateField('message')"
      required
    ></textarea>
    <div v-if="errors.message" class="invalid-feedback">
      {{ errors.message }}
    </div>
  </div>

  <!-- Botón Enviar -->
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
      errors: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    validateField(field) {
      if (!this.formData[field]) {
        this.errors[field] = 'Este campo es obligatorio.';
      } else {
        this.errors[field] = '';
      }
    },
    sendEmail() {
      // Validación previa
      const fields = ['name', 'email', 'message'];
      fields.forEach((field) => this.validateField(field));

      if (Object.values(this.errors).some((error) => error)) {
        this.errorMessage = 'Por favor, corrige los errores antes de enviar.';
        return;
      }

      // Enviar el correo con emailjs
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
      .then(() => {
        this.successMessage = '¡Correo enviado exitosamente!';
        this.errorMessage = '';
        this.resetForm();

        // Limpiar el mensaje después de 5 segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      })
      .catch(() => {
        this.errorMessage = 'Ocurrió un error al enviar el correo. Intenta nuevamente.';
        this.successMessage = '';

        // Limpiar el mensaje después de 5 segundos
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
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
.container {
  max-width: 600px;
}
textarea {
  resize: none;
}
</style>

