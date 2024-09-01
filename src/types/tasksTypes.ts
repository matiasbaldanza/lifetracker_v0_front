export const taskCategories = [
  'Admin',
  'Call',
  'Document',
  'Edit',
  'Email',
  'Event',
  'Meeting',
  'Other',
  'Proofread',
  'Record',
  'Research',
  'Review',
  'Script'
]

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'canceled'

export type Task = {
  taskTitle: string;
  taskCategory: typeof taskCategories[number];
  taskDescription: string;
  estimatedTime?: number;
  actualTime: number;
  timeStarted: Date | null;
  timeEnded: Date | null;
  status: TaskStatus;
}