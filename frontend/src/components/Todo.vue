<script setup lang="ts">
import {Delete, Edit} from '@element-plus/icons-vue';
import TodoImage from './TodoImage.vue';

defineProps<{todo: any}>();

const emit = defineEmits(['remove', 'edit']);
</script>

<template>
  <el-card class="todo" :body-style="{ padding: 0 }">
    <TodoImage :image="todo.image"/>
    <div>
      <h3>{{ todo.title }}</h3>
    </div>
    <div class="actions">
      <el-icon @click="emit('edit', todo)">
        <Edit/>
      </el-icon>
      <el-icon @click="emit('remove', todo)">
        <Delete/>
      </el-icon>
    </div>
  </el-card>
</template>

<style scoped>
.todo {
  position: relative;
  width: 300px;
}

.todo .actions {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  display: none;
  gap: 8px;
  background: #000;
}

.todo:hover .actions {
  display: flex;
}

.todo .actions > * {
  vertical-align: middle;
  cursor: pointer;
}
</style>