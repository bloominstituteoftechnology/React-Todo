import { useAuth0 } from "@auth0/auth0-react"
import React,{useEffect,useState} from "react"
import Logout from "./Logout"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"


function Landing () {
      const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) {
        return JSON.parse(savedTodos)
    } else {
        return [];
    }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])


  const toggleTodo = todoId => {
      console.log("toggle")
      const updatedTodos = todos.map(todo => {
          if(todoId === todo.id) {
            return {...todo, completed : !todo.completed}
          }
          return todo
      })
      setTodos(updatedTodos)
  }

  const addTodo = newTodo => {
      setTodos(
          [...todos, {
              task: newTodo.trim(),
              id: Math.random(),
              completed: false
          }]
      )
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const clearCompleted = () => {
    setTodos(
          todos.filter(todo => !todo.completed)
      )
    localStorage.setItem("todos", JSON.stringify(todos));
  }
    const {loginWithRedirect, user } = useAuth0()
    if (!user){           
        return (
            <div>
                <button onClick={() => loginWithRedirect()}>
                    Login
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <header>
                  <Logout />  
                </header>
                <div>
                    <h1>To-do List</h1>
                    <TodoForm 
                        addTodo={addTodo}
                        clearCompleted={clearCompleted}
                        />
                    <TodoList 
                        todos={todos} 
                        toggleTodo={toggleTodo}
                        />
                </div>
            </div>
        )
    }

}

export default Landing