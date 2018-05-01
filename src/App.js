import React from 'react';
import TodoList from "./components/TodoList";


class App extends React.Component {

 render() {
  return  (
    <div>
      <h2>Todo App</h2>
      <TodoList/>
    </div>
    );
  }
}

export default App;
