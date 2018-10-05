import React from 'react';

//import Todo from './components/TodoComponents/Todo'
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
      newTodo: '',
    }
  }

  changeHandler = event => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value})
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoArray: [
        ...this.state.todoArray, //spread operator
        { task: this.state.newTodo,
          id: Date.now(),
          completed: false }
      ],
      newTodo: '',
    })
  }

  markCompleted = id  => {
    console.log(id)
    this.setState({     
      todoArray: this.state.todoArray.map(todoObj => {
        if (todoObj.id !== id) {
          return {
            ...todoObj,
          }
        }else{
          return {
            ...todoObj,
            completed: todoObj.completed === false ? true : false,
          }
        }
      })
    })
  };
  

  render() {
    return (
      <div className="App">
      <TodoList 
        todoArray={this.state.todoArray}
        markCompleted={this.markCompleted}
        />
      <TodoForm 
        changeHandler={this.changeHandler}
        addNewTodo={this.addNewTodo} //forgot to add ALL the handlers from form
        newTodo={this.state.newTodo} 
      />
      </div>
    )
  }

}

export default App;

//input wasn't clearing because you ref the 
//correct {this.newTodo} vs. {this.state.newTodo}