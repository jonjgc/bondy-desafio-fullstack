<script setup>
import { ref, onMounted } from 'vue';
import router from '../router';
const user = ref(null);

onMounted(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    user.value = JSON.parse(userData);
  } else {
    // Se não encontrar dados do usuário, volta para o login
    router.push('/');
  }
});

const logout = () => {
  localStorage.removeItem('user');
  router.push('/');
}
</script>

<template>
  <div class="welcome-container">
    <div v-if="user" class="welcome-box">
      <h1>Bem-vindo(a), {{ user.name }}!</h1>
      <p>Seu login foi realizado com sucesso.</p>
      <p><strong>E-mail:</strong> {{ user.email }}</p>
      <button @click="logout">Sair</button>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  text-align: center;
}
.welcome-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #333;
}
p {
  color: #555;
  font-size: 1.1rem;
}
button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
button:hover {
  background-color: #c82333;
}
</style>