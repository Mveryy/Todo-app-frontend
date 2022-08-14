import { useContext } from "react"
import TodoContext from "../../context/TodoContext"
import Header from "../Header/Header"
import Task from "../Task/Task"
import { SingleTask, ToDo } from "./styles"

export function Todo() {
  const { todos, filteredTasks } = useContext(TodoContext)

  return (
    <ToDo>
      <Header />
      <SingleTask>
        {
          todos.length > 0
            ? filteredTasks.map(task => (<Task task={task} key={task.id} />))
            : <h3>Não existem tarefas</h3>
        }
      </SingleTask>
    </ToDo>
  )
}