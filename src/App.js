import React, { useEffect, useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import "./styles/App.css";
import Landing from './components/Landing';
import Logout from './components/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App () {
    const {user} = useAuth0()
//   const [todos, setTodos] = useState(() => {
//     const savedTodos = localStorage.getItem("todos");
//     if(savedTodos) {
//         return JSON.parse(savedTodos)
//     } else {
//         return [];
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   },[todos])


//   const toggleTodo = todoId => {
//       console.log("toggle")
//       const updatedTodos = todos.map(todo => {
//           if(todoId === todo.id) {
//             return {...todo, completed : !todo.completed}
//           }
//           return todo
//       })
//       setTodos(updatedTodos)
//   }

//   const addTodo = newTodo => {
//       setTodos(
//           [...todos, {
//               task: newTodo.trim(),
//               id: Math.random(),
//               completed: false
//           }]
//       )
//       localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   const clearCompleted = () => {
//     setTodos(
//           todos.filter(todo => !todo.completed)
//       )
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
    return (
        <Router>
            <div className="app">
          {/* <h1>To-do List</h1>
        <TodoForm 
            addTodo={addTodo}
            clearCompleted={clearCompleted}
             />
        <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo}
            /> */}
            <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route path="/users/:id" element={<Todos />}/>
            </Routes>
      </div>
        </Router>
      
    );
}

export default App;
