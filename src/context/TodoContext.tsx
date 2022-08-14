import { createContext, ReactNode, useEffect, useState } from "react";
import axios from 'axios'

export interface ITodos {
  id: number;
  description: string;
  done: boolean;
}

type ProviderProps = {
  children: ReactNode;
}

interface TContext {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  filter: String;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredTasks: ITodos[]
}

const TodoContext = createContext<TContext>({} as TContext)

const TodoContextProvider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [filter, setFilter] = useState("all")
  const [inputText, setInputText] = useState("")
  const [search, setSearch] = useState("")

  async function getData() {
    const res = await axios.get<ITodos[]>("https://todo-app-backend1.herokuapp.com/task")
    const sortedData = res.data.sort(function (a: ITodos, b: ITodos) {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      // if a === b
      return 0;
    });
    setTodos(sortedData)
  }

  useEffect(() => {
    getData()
  }, [todos])

  // filtro tasks todas/completas/não completas
  let sortedList: ITodos[]
  if (filter === "done") {
    sortedList = todos.filter(item => item.done === true)
  } else if (filter === "undone") {
    sortedList = todos.filter(item => item.done === false)
  } else {
    sortedList = todos
  }

  // filtro search
  const filteredTasks = search.length > 0
    ? sortedList.filter(task => task.description.includes(search))
    : sortedList

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      filter,
      setFilter,
      inputText,
      setInputText,
      search,
      setSearch,
      filteredTasks
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
export { TodoContextProvider }