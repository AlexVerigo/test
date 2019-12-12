<template>
    <header class="header">
        <h1>TodoList</h1>
        <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>  

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    .header h1 {
        margin: 0;
    }
    .nav {
        padding-top: 15px;
    }
    .nav a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
    }
</style>