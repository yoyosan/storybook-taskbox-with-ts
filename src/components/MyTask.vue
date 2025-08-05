<script lang="ts" setup>
import type { Task } from '@/types';
import type { PropType } from 'vue';

defineProps({
  task: {
    type: Object as PropType<Task>,
    default: (): Task => ({ id: '', state: 'todo', title: '' }),
    validator: (task: Task) =>
      ['id', 'state', 'title'].every(key => key in task),
  },
});
</script>

<template>
  <div class="list-item">
    <label for="title" :aria-label="task.title">
      <input type="text" readonly :value="task.title" id="title" name="title" />
    </label>
  </div>
</template>
