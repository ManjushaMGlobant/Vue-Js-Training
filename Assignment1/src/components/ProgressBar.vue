<template>
    <div class="progress">
      <div class="progress-bar" :style="{ width: items*8.3 + '%', 'background-color': 'green' }">
          {{items}}/12
      </div>
    </div>
</template>

<script>
    export default {
        props: ["items"]
    };
</script>

<style scoped>
.progress {
  width: 300px;
  margin: 20px 0;
  border-radius: 3px;
  background:lightgray;
  text-align: center;
}

.progress-bar {
  width: 0;
  height: 20px;
  border-radius: 3px;
  color: #ffffff;
}
</style>