<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" name="todo" v-model.lazy="todoName" />
    <button id="add" @click="addTodo">Add Todo </button>
    <br />
    
    <div v-show="todoCount === maxLimit">
      You have reached the limit. Please delete some todo item to add more .
    </div>
    <hr>

    <div v-if="todoCount">
      <app-list-todo :todos="todoList" :handleTodoClick="removeTodo"></app-list-todo>
      <hr>
      
      <app-progress-bar :items="todoCount"></app-progress-bar>
    </div>

  </div>
    
</template>

<script>
import List from './components/List'
import ProgressBar from './components/ProgressBar'

export default {
  name: 'app',
  data () {
    return {
      todoName: '',
      todoList: [],
      maxLimit: 12,
      todoCount: 0
    }
  },
  methods: {
    addTodo: function (){
      if(this.todoList.length != this.maxLimit){
        this.todoList.push(this.todoName);
        this.resetInput();
      }
    },

    removeTodo: function(key) {
      this.todoList.splice(key, 1);
    },

    resetInput: function() {
      this.todoName = '';
    }
  },
  watch: {
    todoList: function(){
      this.todoCount = this.todoList.length;
      if(this.todoCount === this.maxLimit){
        document.getElementById('add').disabled = true;
      }
      else {
        document.getElementById('add').disabled = false;
      }
    }
  },
  components: {
    appListTodo: List,
    appProgressBar: ProgressBar
  }
}
</script>

<style  lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
