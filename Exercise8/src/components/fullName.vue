<template>
    <div>
    <slot></slot>
    </div>
</template>

<script>
export default {
  data: function (){
    return {
      user: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    submitForm: function(){
      console.log("HHIe", this.isFormSubmitted);
      this.isFormSubmitted = !this.isFormSubmitted;
    }
  }
};
</script>
