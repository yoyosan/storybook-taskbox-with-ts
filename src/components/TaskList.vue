<script setup lang="ts">
import { computed } from 'vue';

import { useTaskStore } from '@/store';

import PureTaskList from './PureTaskList.vue';

const store = useTaskStore();

const tasks = computed(() => store.getFilteredTasks);

const archiveTask = (taskId: string) => store.archiveTask(taskId);
const pinTask = (taskId: string) => store.pinTask(taskId);
</script>

<template>
  <PureTaskList
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>
