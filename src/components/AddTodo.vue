<template>
<div>
    <form @submit="onSubmit">
        <input type="text" v-model.trim="title" name="title" placeholder="Add Todo...">
        <input type="submit" value="Submit" class="btn">
    </form>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'AddTodo',
    data: () => ({
        title: '',
    }),
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit(e) {
        e.preventDefault();
        this.addTodo(this.title);
        this.title = "";
        }
    }
}
</script>  

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type='submit'] {
        flex: 2;
    }
</style>