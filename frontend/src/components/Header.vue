<script setup lang="ts">
import {logout, user} from '../auth-service.ts';
</script>

<template>
  <header v-if="user">
    <span>Hi {{ user.username }}</span>
    <el-button @click="logout">Logout</el-button>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>