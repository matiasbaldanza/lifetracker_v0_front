import { Task } from "@/types/tasksTypes"

type TaskStatusProps = Pick<Task, 'estimatedTime' | 'actualTime' | 'timeStarted' | 'timeEnded' | 'status'>

export function TaskStatus({
  estimatedTime,
  actualTime,
  timeStarted,
  timeEnded,
  status
}: TaskStatusProps) {
  return <div>
    <p>Estimated Time: {estimatedTime}</p>
    <p>Actual Time: {actualTime}</p>
    <p>Time Started: {timeStarted?.toLocaleString()}</p>
    <p>Time Ended: {timeEnded?.toLocaleString()}</p>
    <p>Status: {status}</p>
  </div>
}