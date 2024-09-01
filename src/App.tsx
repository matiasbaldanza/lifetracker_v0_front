import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout.tsx'
import { CardTask } from './components/Task/TaskCard.tsx'
import { getTasks } from './data/tasksData.ts'
import { Task } from './types/tasksTypes.ts'

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()
      setTasksList(tasks)
    }
    fetchTasks()
  }, [])

  return (
    <Layout>
      <div className="space-y-4">
        {tasksList.map((task) => (
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
    </Layout>
  )
}

export default App
