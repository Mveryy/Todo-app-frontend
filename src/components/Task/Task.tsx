import axios from "axios"
import { Trash } from "phosphor-react"
import { ITodos } from "../../context/TodoContext"
import { SingleTask } from "./styled"

export default function Task(props: { task: ITodos }) {
  const { task } = props

  // remover task
  const handleDelete = async (id: number) => {
    await axios.delete(`https://todo-app-backend1.herokuapp.com/task/${id}`)
  }

  // alterar status done da task
  const handleTaskChange = (id: number) => {
    axios.patch(`https://todo-app-backend1.herokuapp.com/task/${id}`, {
      done: !task.done
    })
  }

  function handleClassName() {
    var element = document.getElementById(task.id.toString());
    element?.classList.toggle("activeLabel");
  }

  return (
    <SingleTask task={task}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => handleTaskChange(task.id)}
      />
      <label
        id={task.id.toString()}
        className=""
        onClick={() => handleClassName()}
      >
        <p>{task.description}</p>
      </label>
      <Trash
        size={28}
        color="#992121"
        onClick={() => handleDelete(task.id)}
        style={{ cursor: 'pointer', marginLeft: 10 }}
      />
    </SingleTask>
  )
}