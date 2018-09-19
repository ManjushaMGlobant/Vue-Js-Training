<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Project Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5"
                            v-bind:key="index"
                            @click="showDetails(index)">
                            Project #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Project Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Project are managed here</p>
                    <project-detail :id="index" ></project-detail>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectDetail from "./project.vue";

export default {
  data: function() {
    return {
      index: 0
    };
  },
  methods: {
    showDetails(id) {
        this.index = id;
    }
  },
  components: {
    projectDetail: ProjectDetail
  }
};
</script>

<style>
</style>
