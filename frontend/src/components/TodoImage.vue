<script setup lang="ts">
defineProps<{image: string}>();
</script>

<template>
  <div class="todo-image">
    <img :src="image" alt="">
  </div>
</template>

<style scoped>
.todo-image {
  height: 200px;
  overflow: hidden;
}

.todo-image img {
  min-width: 100%;
  min-height: 120%;
  max-height: 140%;
  margin-top: -15%;
}
</style>