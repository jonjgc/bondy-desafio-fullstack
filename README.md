# Desafio Fullstack - Bondy (Solução)

Este repositório contém a solução completa para o desafio de desenvolvimento fullstack, incluindo a implementação do backend e a construção do frontend.

## Tecnologias Utilizadas

* **Monorepo:** Lerna
* **Backend:** Node.js, GraphQL, Serverless Framework, MongoDB (in-memory)
* **Frontend:** Vue.js (v2.7 com Composition API), Vite, Vue Router (v3), Apollo Client

---

## Backend

### O Que Foi Feito

Para atender aos requisitos do desafio, foi implementada uma `mutation` no GraphQL para autenticação de usuários. O trabalho realizado incluiu:

1.  **Definição do Schema:** No arquivo `packages/backend/src/typeDefs/mutation.ts`, foi adicionada a `mutation login`, especificando que ela recebe um `email` e `password` (ambos obrigatórios) e retorna um objeto do tipo `User`. O tipo `User` também foi definido no schema.

2.  **Implementação do Resolver:** Foi criado um resolver (`packages/backend/src/graphql/resolvers/mutations/login.ts`) com a lógica de negócio para a autenticação:
    * A função busca o usuário no banco de dados pelo e-mail fornecido.
    * Caso o usuário exista, a biblioteca `bcrypt` é utilizada para comparar a senha enviada pelo formulário com a senha criptografada armazenada no banco.
    * Se a autenticação for bem-sucedida, o resolver retorna o objeto completo do usuário.
    * Em caso de falha (usuário não encontrado ou senha incorreta), um erro é lançado, que é capturado e tratado pelo frontend.

3.  **Correções de Tipagem:** Foram adicionadas anotações de tipo `DocumentNode` nos arquivos de schema para garantir a compatibilidade e a portabilidade do código com TypeScript.

### Como Executar o Backend

1.  Na raiz do projeto, instale todas as dependências:
    ```bash
    yarn install
    ```
2.  Inicie o servidor do backend:
    ```bash
    yarn lerna run start --scope=backend
    ```
3.  O console exibirá a URL do GraphQL Playground (geralmente `http://localhost:3000/local/desafio`), que pode ser usada para testar a API diretamente.

---

## Frontend

### Funcionalidades

O frontend foi construído do zero, seguindo os requisitos, e possui as seguintes funcionalidades:

* Uma tela de login com campos para e-mail e senha.
* Conexão com a API GraphQL do backend através do Apollo Client.
* Ao submeter o formulário, a `mutation` de login é chamada.
* Em caso de sucesso, o usuário é redirecionado para uma página de boas-vindas que exibe seu nome e e-mail.
* Em caso de falha, uma mensagem de erro é exibida na tela de login.
* A página de boas-vindas também possui uma função de "Sair" que limpa os dados e redireciona de volta para o login.

### Como Construir e Executar o Frontend

1.  **Pré-requisito:** Certifique-se de que o **servidor do backend já esteja rodando**.
2.  Na raiz do projeto, instale todas as dependências (se ainda não o fez):
    ```bash
    yarn install
    ```
3.  Inicie o servidor de desenvolvimento do frontend:
    ```bash
    yarn lerna run dev --scope=frontend
    ```
4.  Abra seu navegador e acesse a URL fornecida no console (geralmente `http://localhost:5173`).
5.  Utilize as credenciais de teste para fazer o login:
    * **E-mail:** `desafio@bondy.com.br`
    * **Senha:** `123456`