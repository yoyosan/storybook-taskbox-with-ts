<script setup lang="ts">
import { useTaskStore } from '@/store';
import { computed } from 'vue';

const store = useTaskStore();

const isError = computed(() => store.status === 'error');
</script>

<template>
  <PureInboxScreen :error="isError" />
</template>
