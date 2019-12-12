import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters:{
    allTodos: (state) => state.todos,
},
  mutations: {
    setTodo(state, payload) {
      state.todos = payload;
    },
    deleteTodoItems:(state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    newTodo: (state, todo) => state.todos.unshift(todo),
  },
  actions: {
    async getTotoList({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      commit('setTodo', response.data)
    },
    async deleteTodoItems({commit}, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteTodoItems', id)
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false });
        commit('newTodo', response.data)
  },
}
})
