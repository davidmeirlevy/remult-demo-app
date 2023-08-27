<script setup lang="ts">
import {fetchUser, loaded, user} from './auth-service.ts';
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import Login from './components/Login.vue';

fetchUser();
</script>

<template>
  <Header />

  <Todos v-if="user" />
  <Login v-else-if="loaded"/>
</template>

<style scoped>
</style>
