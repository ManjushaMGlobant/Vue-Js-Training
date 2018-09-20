<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <div v-custom-on:hit="tryHere">Try Me!</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            "custom-on": {
                bind(el,binding) {
                    if (binding.arg === "hit") {
                        el.addEventListener('click', binding.value);
                    }
                }
            }
        },
        methods: {
            tryHere: function(){
                alert('Hey there!');
            }
        }
    }
</script>

<style>
</style>
