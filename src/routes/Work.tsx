import { useEffect, useState } from 'react'

import { CardTask } from '../components/Task/TaskCard'
import { Task } from '../types/tasksTypes'
import { getTasks } from '../data/tasksData.ts'


export function Work() {
  const [workTasksList, setWorkTasksList] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()
      setWorkTasksList(tasks)
    }
    fetchTasks()
  }, [])

  return (
    <div className="space-y-4">
      {workTasksList.map((task) => (
        <CardTask
          key={task.taskTitle}
          taskTitle={task.taskTitle}
          taskCategory={task.taskCategory}
          taskDescription={task.taskDescription}
          estimatedTime={task.estimatedTime}
          actualTime={task.actualTime}
          timeStarted={task.timeStarted}
          timeEnded={task.timeEnded}
          status={task.status}
        />
      ))}
    </div>
  )
}