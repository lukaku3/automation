import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    servers: [
      {id: 1, name: "Foo", ipAddress: "127.0.10.10"},
      {id: 2, name: "Bar", ipAddress: "127.0.10.11"},
      {id: 3, name: "Bazz", ipAddress: "127.0.10.12"},
    ],
    playbooks: [
      {id: 1, name: "Foo", ipAddress: "127.0.10.10"},
      {id: 2, name: "Bar", ipAddress: "127.0.10.11"},
      {id: 3, name: "Bazz", ipAddress: "127.0.10.12"},
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
