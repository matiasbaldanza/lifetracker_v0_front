
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

import { TaskStatus } from "./TaskStatus"

import { Task } from "@/types/tasksTypes"

type CardTaskProps = Task

export function CardTask({
  taskTitle,
  taskCategory,
  taskDescription,
  estimatedTime,
  actualTime,
  timeStarted,
  timeEnded,
  status
}: CardTaskProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{taskTitle}</CardTitle>
        <CardDescription>{taskCategory}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{taskDescription}</p>
      </CardContent>
      <CardFooter>
        <TaskStatus
          estimatedTime={estimatedTime}
          actualTime={actualTime}
          timeStarted={timeStarted}
          timeEnded={timeEnded}
          status={status}
        />
      </CardFooter>
    </Card>
  )
}