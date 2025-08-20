<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import router from '../router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;

const { mutate: performLogin, loading, onError, onDone } = useMutation(LOGIN_MUTATION);

const onSubmit = () => {
  errorMessage.value = ''; // Limpa erros anteriores
  performLogin({
    email: email.value,
    password: password.value,
  });
};

onDone(result => {
  console.log('Login bem-sucedido!', result.data);
  
  // Salva os dados do usuário no localStorage para usar na próxima página
  localStorage.setItem('user', JSON.stringify(result.data.login));
  
  router.push('/welcome');
});

onError(error => {
  console.error('Erro no login:', error.message);
  errorMessage.value = 'E-mail ou senha inválidos. Tente novamente.';
});
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="desafio@bondy.com.br"
          />
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="123456"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}
.login-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}
.input-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; 
}
button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
button:disabled {
  background-color: #a0c7ff;
  cursor: not-allowed;
}
button:hover:not(:disabled) {
  background-color: #0056b3;
}
.error-message {
  color: #d93025;
  text-align: center;
  margin-top: 1rem;
}
</style>