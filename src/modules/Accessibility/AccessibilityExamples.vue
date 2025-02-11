<!-- AccessibilityExamples.vue -->
<template>
  <div class="accessibility-examples">
    <!-- <h1 id="mainTitle">Web Erişilebilirlik Örnekleri</h1> -->

    <!-- Perceivable - Algılanabilir -->
    <section aria-labelledby="perTitle">
      <h2 id="perTitle">1. Algılanabilir (Perceivable)</h2>

      <p>
        Görsel/işitsel içerik erişilebilir mi? <strong>Alt metinler, kontrast oranları.</strong>
      </p>

      <!-- Alt Text Example -->
      <div class="example-block">
        <h3>Görsel Alternatif Metni</h3>
        <img
          src="/images/example.jpg"
          alt="Bir laptop üzerinde çalışan web geliştirici"
          width="100%"
          height="auto"
        />
      </div>

      <!-- Color Contrast Example -->
      <div class="example-block">
        <h3>Renk Kontrastı</h3>
        <p class="good-contrast">İyi kontrast - Koyu metin açık arka plan üzerinde</p>
        <p class="bad-contrast">Kötü kontrast örneği</p>
      </div>
    </section>

    <!-- Operable - İşletilebilir -->
    <section aria-labelledby="opTitle" id="mainContent">
      <h2 id="opTitle">2. Kullanılabilir (Operable)</h2>

      <p>
        Tüm kullanıcılar tarafından fare, klavye, dokunmatik ekran veya yardımcı teknolojilerle
        kullanılabilmelidir.
      </p>

      <!-- Keyboard Navigation -->
      <div class="example-block">
        <h3>Klavye Navigasyonu</h3>
        <nav>
          <ul class="keyboard-nav">
            <li><a href="#" class="nav-link">Ana Sayfa</a></li>
            <li><a href="#" class="nav-link">Hakkımızda</a></li>
            <li><a href="#" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
      </div>

      <!-- Skip Link -->
      <div class="example-block">
        <a href="#mainContent" class="skip-link">Ana içeriğe git</a>
      </div>
    </section>

    <!-- Understandable - Anlaşılabilir -->
    <section aria-labelledby="undTitle">
      <h2 id="undTitle">3. Anlaşılabilir (Understandable)</h2>

      <p>Kullanıcılar, web sayfasındaki içeriği ve işlevleri kolayca anlayabilmelidir.</p>

      <!-- Form Example -->
      <div class="example-block">
        <h3>Erişilebilir Form</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="userName">Kullanıcı Adı:</label>
            <input
              type="text"
              id="userName"
              v-model="formData.userName"
              aria-describedby="userNameHelp"
              required
            />
            <div id="userNameHelp" class="help-text">
              Kullanıcı adınız en az 3 karakter olmalıdır
            </div>
          </div>

          <div class="form-group">
            <label for="userEmail">E-posta:</label>
            <input
              type="email"
              id="userEmail"
              v-model="formData.email"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="help-text">Geçerli bir e-posta adresi giriniz</div>
          </div>

          <button type="submit" aria-label="Formu gönder">Gönder</button>
        </form>
      </div>
    </section>

    <!-- Robust - Sağlam -->
    <section aria-labelledby="robTitle">
      <h2 id="robTitle">4. Sağlam (Robust)</h2>

      <p>Web içeriği, farklı cihazlar ve yardımcı teknolojilerle uyumlu çalışmalıdır.</p>

      <!-- ARIA Example -->
      <div class="example-block">
        <h3>ARIA Kullanımı</h3>
        {{ showNotification }}
        <div role="alert" aria-live="polite" class="notification" v-if="showNotification">
          İşlem başarıyla tamamlandı!
        </div>

        <!-- Custom Dialog -->
        <div class="modal-wrapper">
          <button @click="openModal" aria-haspopup="dialog">Modalı Aç</button>

          <div
            v-if="isModalOpen"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-modal="true"
            class="modal"
          >
            <h4 id="modalTitle">Modal Başlığı</h4>
            <p>Modal içeriği burada yer alır.</p>
            <button @click="closeModal" aria-label="Modalı kapat">Kapat</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  userName: '',
  email: '',
})

const showNotification = ref(false)
const isModalOpen = ref(false)

const handleSubmit = () => {
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.accessibility-examples {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.example-block {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Contrast Examples */
.good-contrast {
  color: #333;
  background-color: #fff;
}

.bad-contrast {
  color: #999;
  background-color: #fff;
}

/* Skip Link */
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: #fff;
  color: #000;
  text-decoration: none;
}

.skip-link:focus {
  left: 50%;
  transform: translateX(-50%);
}

/* Keyboard Navigation */
.keyboard-nav {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  text-decoration: none;
  color: #333;
}

.nav-link:focus {
  outline: 2px solid #007bff;
  border-radius: 4px;
}

/* Form Styles */
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.help-text {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}

/* Modal Styles */
.modal-wrapper {
  position: relative;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Notification Styles */
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}
</style>
