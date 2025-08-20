import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { apolloClient } from './apollo'
import VueCompositionAPI, { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'

Vue.use(VueCompositionAPI)

new Vue({
  router,
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: h => h(App)
}).$mount('#app')