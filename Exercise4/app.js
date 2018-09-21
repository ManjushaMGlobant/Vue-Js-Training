new Vue({
  el: '#exercise',
  data: {
    clsName: '',
    classes: '',
    classToggle: '',
    bgColor: 'green',
    blockWidth: 0
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
    },
    startProgress: function() {
      let self = this;

      setInterval(function() {
        self.blockWidth < 100 ? self.blockWidth += 5: '';

      }, 1000);

    }
  }
});
