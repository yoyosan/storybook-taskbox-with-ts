<script setup lang="ts">
import { computed } from 'vue';

import type { Task } from '@/types';

import MyTask from './MyTask.vue';

const props = withDefaults(
  defineProps<{
    tasks: Array<Task>;
    loading?: boolean;
  }>(),
  {
    tasks: () => [],
    loading: false,
  }
);

const emit = defineEmits(['archive-task', 'pin-task']);

const isEmpty = computed(() => props.tasks.length === 0);
const tasksInOrder = computed(() => [
  ...props.tasks.filter(t => t.state === 'TASK_PINNED'),
  ...props.tasks.filter(t => t.state !== 'TASK_PINNED'),
]);

/**
 * Event handler for archiving tasks
 */
function onArchiveTask(taskId: string) {
  emit('archive-task', taskId);
}

/**
 * Event handler for pinning tasks
 */
function onPinTask(taskId: string) {
  emit('pin-task', taskId);
}
</script>

<template>
  <div class="list-items">
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </template>
    <template v-else-if="isEmpty">
      <div class="wrapper-message">
        <span class="icon-check" />
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </template>
    <template v-else>
      <MyTask
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>
