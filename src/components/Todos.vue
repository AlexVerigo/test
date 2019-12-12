<template>
    <div>
        <div :key='todo.id' v-for='todo in allTodos'>
            <TodoItem :todo="todo" />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Todos',
    components: {
        TodoItem
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.getTotoList('getTotoList');
    },
    methods: {
        ...mapActions(["getTotoList","deleteTodoItems"])
    },
}
</script>  

<style>
</style>
