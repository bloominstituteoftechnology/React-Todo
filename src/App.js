import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [{task:'Sleep',
              id:564,
              completed:false,}],      
    };

  }


  render(){
    return <div>
            <TodoForm value ={this.state.task} onChange={this.inputHandler}/>
            <TodoList list ={this.state.todo}/>
          </div>
  };
}


export default App;
