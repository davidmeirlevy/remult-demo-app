<script setup lang="ts">
import {ref} from 'vue';
import Todo from './Todo.vue';
import TodoEditor from './TodoEditor.vue';

const todos = ref([
  {
    id: 1,
    title: 'moshe',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg'
  },
  {
    id: 2,
    title: 'avi',
    image: 'https://www.allrecipes.com/thmb/3x-XkV8T36df_M4tkoDbaD-WmJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-juiciest-hamburgers-ever-DDMFS-4x3-86fc27c741dd410aa365f96490c54060.jpg'
  }
]);


const editedTodo = ref();
function editTodo(todo) {
  editedTodo.value = todo;
}

function removeTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo);
}

function updateTodo(updatedData) {
  const id = editedTodo.value.id;

  Object.assign(editedTodo.value, updatedData);

  editedTodo.value = undefined;
}
</script>

<template>
  <div class="todos">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" @edit="editTodo"/>
  </div>
  <TodoEditor :todo="editedTodo" @closed="editedTodo = undefined" @submitted="updateTodo"/>
</template>

<style scoped>
.todos {
  display: flex;
  gap: 10px;
}
</style>