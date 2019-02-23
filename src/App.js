import React, {useState} from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";
import "./App.css";

const App = () => {
  const [todoData, setTodoData] = useState([])
  const [inputTask, setInputTask] = useState("");

  const changeHandler = event => {
    setInputTask(event.target.value);
  };

  const addNewTask = event => {
    event.preventDefault();
    if (inputTask === "") {
      return null;
    }

    setTodoData([
      ...todoData,
      {
        id: Date.now(),
        task: inputTask,
        completed: false,
        decoration: "taskFontNone"
      }
    ]);
    setInputTask("");
  };

  const changeBool = index => {
    setTodoData(
      todoData.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === false ? true : false,
            decoration:
              task.decoration === "taskFontNone" ? "taskFont" : "taskFontNone"
          };
        }
      })
    );
  };

  const clearTask = event => {
    event.preventDefault();
    setTodoData(todoData.filter(task => !task.completed));
  };

  return (
    <div>
      <TodoForm
        changeHandler={changeHandler}
        addNewTask={addNewTask}
        inputTask={inputTask}
        clearTask={clearTask}
      />

      <TodoList taskData={todoData} changeBool={changeBool} />
    </div>
  );
};

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
