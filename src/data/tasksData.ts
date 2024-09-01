import { Task } from '../types/tasksTypes';
import { tasksList as mockTasksList } from './mocks/tasksData';

interface TaskDataSource {
  getTasks: () => Promise<Task[]>;
  getTask: (taskId: string) => Promise<Task | undefined>;
  createTask: (task: Omit<Task, 'id'>) => Promise<Task>;
  updateTask: (taskId: string, task: Partial<Task>) => Promise<Task | undefined>;
  deleteTask: (taskId: string) => Promise<boolean>;
}

const mockTaskDataSource: TaskDataSource = {
  getTasks: async () => mockTasksList,

  getTask: async (taskId) => mockTasksList.find(task => task.taskTitle === taskId),

  createTask: async (task) => ({ ...task, taskTitle: Date.now().toString() }),

  updateTask: async (taskId, task) => {
    const index = mockTasksList.findIndex(t => t.taskTitle === taskId);
    if (index !== -1) {
      mockTasksList[index] = { ...mockTasksList[index], ...task };
      return mockTasksList[index];
    }
    return undefined;
  },

  deleteTask: async (taskId) => {
    const index = mockTasksList.findIndex(t => t.taskTitle === taskId);
    if (index !== -1) {
      mockTasksList.splice(index, 1);
      return true;
    }
    return false;
  },
};

// This would be replaced with actual API calls in a real implementation
const apiDataSource: TaskDataSource = {
  getTasks: async () => {
    // Implement API call to get tasks
    throw new Error('API not implemented');
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTask: async (taskId) => {
    // Implement API call to get a single task
    throw new Error('API not implemented');
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createTask: async (task) => {
    // Implement API call to create a task
    throw new Error('API not implemented');
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTask: async (taskId, task) => {
    // Implement API call to update a task
    throw new Error('API not implemented');
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteTask: async (taskId) => {
    // Implement API call to delete a task
    throw new Error('API not implemented');
  },
};

const dataSourceConfig = {
  useApi: false, // Set this to true to use API, false to use mock data
};

export const dataSource: TaskDataSource = dataSourceConfig.useApi ? apiDataSource : mockTaskDataSource;

export const getTasks = dataSource.getTasks;
export const getTask = dataSource.getTask;
export const createTask = dataSource.createTask;
export const updateTask = dataSource.updateTask;
export const deleteTask = dataSource.deleteTask;
