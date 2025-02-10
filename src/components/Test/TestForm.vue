<template>
  <div class="test-form">
    <h2 data-testid="form-title">Contact Form</h2>
    <form @submit.prevent="handleSubmit" data-testid="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" data-testid="name-input" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          data-testid="email-input"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="formData.message"
          data-testid="message-input"
          required
        ></textarea>
      </div>

      <button type="submit" data-testid="submit-button">Submit</button>
    </form>

    <div v-if="isSubmitted" class="success-message" data-testid="success-message">
      Form submitted successfully!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', formData)
  isSubmitted.value = true
}
</script>

<style scoped>
.test-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.success-message {
  color: #4caf50;
  margin-top: 15px;
  text-align: center;
}
</style>
