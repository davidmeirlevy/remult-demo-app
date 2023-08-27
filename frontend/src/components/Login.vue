<script setup lang="ts">
import {ref} from 'vue';
import welcomeImage from '../assets/welcome.png';
import {login} from '../auth-service.ts';

const username = ref('');
</script>

<template>
<el-form @submit.prevent="login(username)">
  <header>
    <div class="welcome-img"><img :src="welcomeImage" alt=""></div>
    <h1>Welcome!</h1>
  </header>
  <el-form-item>
    <el-input placeholder="Username" v-model="username" size="large"/>
  </el-form-item>
  <el-button native-type="submit">Login</el-button>
</el-form>
</template>

<style scoped>
.welcome-img {
  width: 330px;
  height: 330px;
  overflow: hidden;
  border-radius: 50%;
}
.welcome-img img {
  height: 100%;
  margin-left: -25%;
}

h1 {
  margin-block-start: -20px;
}
</style>