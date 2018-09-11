new Vue({
  el: '#exercise',
  data: {
    result: 'Not There Yet',
    value: 0
  },
  methods: {
    reset: function() {
      this.value = 0;
      this.result = 'Not There Yet'
    }
  },
  watch: {
    value: function() {
      if (this.value === 45) {
        this.result = 'Done';
      }
    },
    result: function() {
      let vm = this;

      setTimeout(function() {
        vm.reset(); //reset data values
      }, 5000);
    }
  }

});