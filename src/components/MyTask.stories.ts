import { fn } from '@storybook/test';
import MyTask from './MyTask.vue';

export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn(),
};

export default {
  component: MyTask,
  title: 'MyTask',
  tags: ['autodocs'],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      state: 'TASK_INBOX',
      title: 'Test Task',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
