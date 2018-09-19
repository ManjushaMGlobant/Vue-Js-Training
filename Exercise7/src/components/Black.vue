<template>
    <div>
        <slot name="first"></slot>
        <slot name="second"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid black;
        background-color: gray;
        padding: 10px;
        margin: 20px auto;
        text-align: center
    }
</style>