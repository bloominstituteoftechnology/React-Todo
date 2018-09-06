import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList  from './components/TodoComponents/TodoList'
import Todo  from './components/TodoComponents/Todo'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        todoList: [],
        
    };
}

handleNewTask = event =>
    this.setState({todoList: event.target.todoList}
    );


  render() {

    alert(this.state.todoList);
    return (
      <div>
        <Todo />
        <TodoForm />
        <TodoList todos={this.state.todoList} />
        
      </div>
    );
  }
}

export default App;
