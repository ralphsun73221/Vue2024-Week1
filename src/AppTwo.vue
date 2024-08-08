<script setup>
import { ref } from 'vue'

const text = ref('攻殼機動隊')

const todos = ref([
  {
    id: 123,
    text: '12345'
  }
])

const addTodo = () => {
  todos.value.push({
    text: text.value,
    id: new Date().getTime()
  })
  text.value = ''
}
</script>

<template>
  <H1>App Two</H1>
  <div>
    <input type="text" v-model="text" />
    <button type="button" @click="addTodo">New</button>
  </div>
  <hr />
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </div>
</template>
