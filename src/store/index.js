import {createStore} from 'vuex'

const store = createStore({
    state: {
      // estado inicial - armazenamento de dados
      user:{
        first_name: 'Patrick',
        last_name: 'Sousa',
        email: 'patrick@patrick.com',
      },
      products: [],
      cart:[]
    },
    mutations: {
      // mutações
    },
    actions: {
      // ações
    },
    getters: {
      // getters
    }
  });
  
  export default store;