// Type definitions for the application

export interface Task {
  id: string;
  state: 'todo' | 'done' | 'archived' | 'pinned';
  title: string;
}

export interface TaskList {
  tasks: Task[];
  loading: boolean;
  error?: string;
}
