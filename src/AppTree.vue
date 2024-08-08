<script setup>
import { ref } from 'vue'

// 資料
const MENU_LIST = ref([
  {
    id: 1,
    itemName: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    inventory: 20
  },
  {
    id: 2,
    itemName: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    inventory: 18
  },
  {
    id: 3,
    itemName: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    inventory: 10
  },
  {
    id: 4,
    itemName: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    inventory: 25
  },
  {
    id: 5,
    itemName: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    inventory: 20
  },
  {
    id: 6,
    itemName: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    inventory: 18
  },
  {
    id: 7,
    itemName: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    inventory: 20
  }
])

// 方法
</script>

<template>
  <h1>第一週作業</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">介紹</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="menu in MENU_LIST" :key="menu.id">
          <th scope="row">{{ menu.itemName }}</th>
          <td>
            <small>{{ menu.description }}</small>
          </td>
          <td style="text-align: center">{{ menu.price }}</td>
          <td style="text-align: center">
            <button type="button" @click="menu.inventory += 1">+</button>
            {{ menu.inventory }}
            <button type="button" @click="menu.inventory -= 1">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
th,
td {
  border: 1px solid;
  padding: 8px 10px;
}
th[scope='col'] {
  background-color: #505050;
  color: #fff;
}
td {
  text-align: left;
}
table {
  border-collapse: collapse;
}
</style>
