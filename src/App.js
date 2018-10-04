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

  changeText = (event, index) => {
    this.setState({
      todoArray: this.state.todoArray.map((todo, idx) => {
        if (index !== idx) {
          return todo;
        } else {
          return {
          ...todo,
          completed: todo.completed === "false" ? "true" : "false"
          }
        }
      },
      
      )
    })
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

  // strikeThrough = (event) => {
  //   if (event.target.classList.includes('lineThrough')) {
  //     return event.target.classList.remove('lineThrough');
  //   } else {
  //     return event.target.classList.add('lineThrough');
  //   }
  // }
  
  render() {
    console.log(this.state.todoArray[0]);
    console.log(this.state.todoArray[1]);
    console.log(this.state.todoArray[2]);
    return (
      <div>
        <TodoList 
        todoArray={this.state.todoArray}
        changeText={this.changeText} 
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
