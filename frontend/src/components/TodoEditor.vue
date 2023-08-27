<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';

const props = defineProps<{ todo: any }>()
const emit = defineEmits(['closed', 'submitted']);
const {todo} = toRefs(props);

const showModal = ref(false);

const updatedTodo = ref({});

function clearUpdates() {
  updatedTodo.value = {};
}

function submit() {
  emit('submitted', updatedTodo.value);
}

watch(todo, (newTodo) => {
  if (newTodo) {
    showModal.value = true;
    updatedTodo.value = {
      title: newTodo.title || '',
      image: newTodo.image || ''
    };
  } else {
    showModal.value = false;
    clearUpdates();
  }
})
</script>

<template>
  <el-form @submit="submit">
    <el-dialog
        v-model="showModal"
        title="Tell us about your task"
        width="30%"
        align-center
        @close="emit('closed')"
    >
      <el-form-item>
        <el-input placeholder="Title" v-model="updatedTodo.title" size="large"/>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Image URL" v-model="updatedTodo.image" size="large"/>
      </el-form-item>
      <div>
        The Image: <img :src="updatedTodo.image" alt=""/>
      </div>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="emit('closed')">Cancel</el-button>
        <el-button type="primary" @click="submit">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </el-form>
</template>

<style scoped>
img {
  width: 50px;
}
</style>