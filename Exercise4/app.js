new Vue({
  el: '#exercise',
  data: {
    clsName: '',
    classes: '',
    classToggle: ''
  },
  methods: {
    startEffect: function() {
      let vm = this;
      let flag = true;
      vm.classToggle = 'shrink';

      setInterval(function() {
        flag ? (vm.classToggle = 'shrink') : (vm.classToggle = 'highlight');
        flag = !flag;

      }, 3000);
    }
  }
});
