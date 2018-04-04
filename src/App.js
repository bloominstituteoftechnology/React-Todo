import React from 'react';
import TodoList from './TodoList';
import Who from './Todo';

const App = () => (
  <div>
      <Who name="Akiem" />
      <h2>Make a ToDo list to keep track of your daily responsibilities!</h2>
        <TodoList />
  </div>
);

export default App;
