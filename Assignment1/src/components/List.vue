<template>
    <div>
        <h3> TODO List </h3>
        <ul>
            <li v-for="(value, key) in todos" v-bind:key="key" @click="handleTodoClick(key)"> 
                {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["todos", "handleTodoClick"]
    };
</script>

<style scoped>
    
</style>