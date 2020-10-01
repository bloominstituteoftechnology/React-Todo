import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
function TodoList() {

const [todos, setTodos] = useState([
  {
    text: "Item 1",
    isCompleted: false
  },
  {
    text: "Item 2",
    isCompleted: false
  },
  {
    text: "Item 3",
    isCompleted: false
  }
]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

return (
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
);
      }

export default TodoList;
