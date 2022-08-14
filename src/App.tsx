import { TodoContextProvider } from "./context/TodoContext"
import { Todo } from "./components/Todo/Todo"
import { Container, Footer } from './styles.js'

function App() {
  return (
    <TodoContextProvider>
      <Container>
        <Todo />
        <Footer>
          <h3>
            Feito por <a href="https://github.com/Mveryy" target="_blank">Matheus Verissimo</a>
          </h3>
        </Footer>
      </Container>
    </TodoContextProvider>
  )
}

export default App
