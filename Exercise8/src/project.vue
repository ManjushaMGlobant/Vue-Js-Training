<template>
    <div v-if="id" class="component">
       You are seeing details of  project {{ id }}.
    </div>
</template>

<script>

export default {
  props: {
    id: Number
  }
};

</script>
