<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p> 1. Pass some text to the 3 components but not using props </p>
                  <div>
                    <app-orange>
                      {{colors.orange}}
                    </app-orange>
                    <app-black>
                      <div slot="first">
                        I am first black slot
                      </div>
                      <div slot="second">
                        {{colors.black}}
                      </div>
                    </app-black>

                    <app-red>
                      {{colors.red}}
                    </app-red>
                  </div>
                <p> 2. Dynamically switching the components using buttons </p>
                <br>
                <button @click="displayComponent = 'appOrange'" class="btn btn-default">Load Orange Template</button>
                <button @click="displayComponent = 'appBlack'" class="btn btn-default">Load Black Template</button>
                <button @click="displayComponent = 'appRed'" class="btn btn-default">Load Red Template</button>
                <hr>
                <!-- <app-orange></app-orange>
                <app-black></app-black>
                <app-red></app-red> -->
                <component :is="displayComponent"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Orange from './components/Orange.vue';
    import Black from './components/Black.vue';
    import Red from './components/Red.vue';

    export default {
      data: function() {
        return {
          displayComponent: "appOrange",
          colors: {
            orange: "I am Orange",
            black: "I am Black",
            red: "I am Red"
          }
        };
      },
      components: {
          appOrange: Orange,
          appBlack: Black,
          appRed: Red
      }
    }
</script>

<style>
</style>
