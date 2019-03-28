import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {



      todos: [  


  {
    task: 'Learn React',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Go Shopping',
    id: 1528817084358,
    completed: false
  },
]

    

    }
}
  


render() {
  return (
    <div>
      {console.log (this.state.todos)}
      <h2>Welcome to the to-do list</h2>
      <TodoList todos= {this.state.todos} />
    </div>
  );

}

}







       
       

  

export default App;
