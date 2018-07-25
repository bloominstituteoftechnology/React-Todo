import React from 'react';
import TodoList



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoList: "Things to do",
      Todo: [
        {
          task: 'Take Nap',
          id: 100,
          completed: false,
        },
        {
          task: 'Mow Lawn',
          id: 101,
          completed: false,
        },

        {
          task: 'Fix Fence',
          id: 102,
          completed: false,
        },
        {
          task: 'Take Nap',
          id: 103,
          completed: false,
        }
      ],
      Todo1: ''

    };

    addTodo = props => {
      props.preventDefault();
      const TodoList = this.state.TodoList.slice();
      TodoList.push({ task: this.state.TodoList, completed: false, id: Date.now() });
      this.setState({ TodoList, TodoList: '' });
    }
  }




  render() {
    return (
      <div>
        <h2>{this.state.TodoList}</h2>
        <input type="text" onChange={this.changeTodoList}
          placeholder="Add Todo"
          value={this.state.Todo}
        />
        < button onSubmit={this.addTodo}>Add Todo</button>

      </div>
    )
  }
}


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state



export default App;