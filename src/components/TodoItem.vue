<template>
    <div class="todo-item" :class="{'is-completed': todo.completed}">
        <p>
            <input type="checkbox" >   
            <span v-text="todo.title || ''"></span>
            <button @click="deleteTodoItems(todo.id)" class="del">x</button>  
        </p>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'TodoItem',
    props: {
        todo: {type: Object, default: ()=>({})}
        },
    methods: {
        ...mapActions(["getTotoList","deleteTodoItems"])
    },
}
</script>  

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted
    }
    .is-completed {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>