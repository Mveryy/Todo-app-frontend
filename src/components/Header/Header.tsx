import axios from "axios"
import { MagnifyingGlass, Plus } from "phosphor-react"
import { KeyboardEvent, useContext } from "react"
import TodoContext from "../../context/TodoContext"
import { HeaderContainer, Input, InputsHeader } from "./styles"

export default function Header() {
  const { todos, setFilter, setTodos, setInputText, inputText, setSearch } = useContext(TodoContext)

  // adicionar nova task  
  const handleAddTask = (taskName: string) => {
    async function postTask() {
      await axios.post('https://todo-app-backend1.herokuapp.com/task', {
        description: taskName,
        done: false
      })
      setTodos([...todos])
    }
    postTask()
    setInputText('')
  }

  //adicionar nova task ao apertar a tecla enter
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputText !== '') {
      handleAddTask(inputText);
      setInputText('');
    }
  }
  return (
    <HeaderContainer>
      <select onChange={(e) => setFilter(e.currentTarget.value)}>
        <option value="all">Todas</option>
        <option value="done">Completas</option>
        <option value="undone">Incompletas</option>
      </select>
      <InputsHeader>
        <div>
          <Input
            type="text"
            placeholder="Digite sua tarefa"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <Plus
            size={32}
            color="#fff"
            onClick={() => inputText && handleAddTask(inputText)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div>
          <Input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar tarefa"
          />
          <MagnifyingGlass size={32} color="#fff" />
        </div>
      </InputsHeader>
    </HeaderContainer>
  )
}