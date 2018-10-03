import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  changeHandler = event => {
    this.setState({  todo: event.target.value  })
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoArray: [...this.state.todoArray, 
        {
          task: this.state.todo,
          completed: false
        }
      ],
      todo: ''
    })
  }

  render() {
    return (
      <div>
        <TodoList 
        todoArray={this.state.todoArray} 
        />
        <TodoForm  
        addNewTodo={this.addNewTodo} 
        changeHandler={this.changeHandler}
        todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
