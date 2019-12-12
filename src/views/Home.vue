<template>
  <div class="home">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

export default {
  name: 'home',
  components: {
    AddTodo,
    Todos
  }
}
</script>

<style>
</style>