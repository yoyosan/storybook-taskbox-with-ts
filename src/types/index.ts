export type Task = {
  id: string;
  state:
    | 'TASK_INBOX'
    | 'TASK_PINNED'
    | 'TASK_ARCHIVED'
    | 'TASK_IN_PROGRESS'
    | 'TASK_COMPLETED';
  title: string;
};

export type TaskList = {
  tasks: Task[];
  loading: boolean;
  error?: string;
};
