import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
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

    // const todos = this.state.todoArray.slice();
    // todos.push({ task: this.state.newTodo, completed: false, id: Date.now() });
    // this.setState({ todos, newTodo: '' });
    // console.log(todos)
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  markCompleted = id => {
    let todos = this.state.todoArray.slice();
    console.log("mc", todos)
    todos = todos.map(todoObj => {
      if (todoObj.id === id) {
        todoObj.completed = !todoObj.completed;
        return todoObj;
      } else {
        return todoObj;
      }
    });
    this.setState({ todos });
  };

  clearTodos = event => {
    console.log("fired completed")
    event.preventDefault();
    // let todos = this.state.todoArray.slice();

    this.setState({
        todoArray: this.state.todoArray.filter(todo => {
            return !todo.completed
        })
    })
    // console.log("afterclear", todos)
  };

//   markCompleted = id  => {
//     console.log(id)
//     this.setState({
//       todoArray: this.state.todoArray.map(todoObj => {
//         if (todoObj.id !== id) {
//           return {
//             ...todoObj,
//           }
//         }else{
//           return {
//             ...todoObj,
//             completed: todoObj.completed === false ? true : false,
//           }
//         }
//       })
//     })
//   };

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
        clearTodos={this.clearTodos}
      />
      </div>
    )
  }

}

export default App;

//input wasn't clearing because you ref the
//correct {this.newTodo} vs. {this.state.newTodo}