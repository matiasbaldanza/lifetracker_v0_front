import { Task } from '../../types/tasksTypes'

export const tasksList: Task[] = [
  {
    taskTitle: 'Task 1',
    taskCategory: 'Task',
    taskDescription: 'This is a task',
    estimatedTime: 10,
    actualTime: 0,
    timeStarted: null,
    timeEnded: null,
    status: 'pending'
  },
  {
    taskTitle: 'Task 2',
    taskCategory: 'Task',
    taskDescription: 'This is a task',
    estimatedTime: 10,
    actualTime: 0,
    timeStarted: null,
    timeEnded: null,
    status: 'pending'
  },
  {
    taskTitle: 'Task 3',
    taskCategory: 'Task',
    taskDescription: 'This is a task',
    estimatedTime: 10,
    actualTime: 30,
    timeStarted: new Date('2024-09-01 10:00:00'),
    timeEnded: new Date('2024-09-01 10:30:00'),
    status: 'completed'
  }
]