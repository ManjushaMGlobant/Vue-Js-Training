new Vue({
  el: '#app',
  data: {
    name: 'Manjusha',
    age: 24,
    value: 'Manjusha Mule',
    srcUrl: "https://wallpapercave.com/wp/gKHWym0.jpg"
  },
  methods: {
    getThriceOfCurrentAge: function() {
      return 3 * this.age
    },
    getRandomNumer: function() {
      return Math.random();
    }
  }
});