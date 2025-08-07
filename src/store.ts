import { defineStore } from 'pinia';
import type { Task } from './types';

const defaultTasks: Task[] = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: defaultTasks,
    status: 'idle', // 'idle' | 'loading' | 'error'
    error: null,
  }),
  getters: {
    getFilteredTasks: state => {
      const filteredTasks = state.tasks.filter(
        task => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
      );
      return filteredTasks;
    },
  },
  actions: {
    archiveTask(taskId: string) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.state = 'TASK_ARCHIVED';
      }
    },
    pinTask(taskId: string) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.state = 'TASK_PINNED';
      }
    },
  },
});
