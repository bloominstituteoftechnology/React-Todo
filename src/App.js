import React  from 'react';
import ToDoList from './components/ToDo'
import Childcomponent from './components/TodoChild'

const App = () => (
  <div>
    <h2>Todo App</h2>
<ToDoList/>
<Childcomponent/>
  </div>
);

export default App;
