import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor(props) {
  super();
  this.state = {
      todos: [],
     
  };
}

  newTodo = (event) => { 

    this.setState({
      
        todos: [...this.state.todos, {task: event.target.value, id: Date.now(), completed: false}]
        
    })

    event.target.value = '';
  }

  clickHandler = (event) => {

      this.setState ({
          todo: [...this.state.todos, {task: event.currentTarget.parentNode.firstChild.value, id: Date.now(), completed: false }]
  })

    event.currentTarget.previousElementSibling.value = '';

  }

  render() {

    return (
          <div key={this.state.id}>
            <h2>My Todo List</h2>
            <Todo todos={this.state.todos} />
            <TodoForm onClick={this.state.todos}/>
          </div>
    );
  }
}

export default App;
