<script setup>
import { ref } from 'vue'

const todos = ref([
  {
    id: 1,
    name: '購買雜貨',
    dueDate: '2024-07-30',
    complete: true
  },
  {
    id: 2,
    name: '完成功課',
    dueDate: '2024-08-30',
    complete: true
  },
  {
    id: 3,
    name: '看課程',
    dueDate: '2024-09-30',
    complete: true
  },
  {
    id: 4,
    name: '看書',
    dueDate: '2024-10-30',
    complete: false
  }
])
</script>

<template>
  <h1>App.vue</h1>
  <table>
    <thead>
      <tr>
        <th>代辦事項名稱</th>
        <th>到期日</th>
        <th>是否已完成</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>{{ todo.dueDate }}</td>
        <td>{{ todo.complete ? '是' : '否' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
