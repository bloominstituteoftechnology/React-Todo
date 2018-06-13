import React from 'react';
/*import TodoList from './components/TodoComponents/TodoList';*/
/*import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';*/




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: [{task: 'task1', id: Date.now(), completed: false}],
      dataInput: ''
    }
  }

  toDoHandler = event => {
    console.log(event.target.value);
    this.setState({dataInput: event.target.value})
  }

  addTodo = () => {
    const data = {task: this.state.dataInput, id: Date.now(), completed: false};
    const todolist = this.state.todolist.slice();
    todolist.push(data);
    this.setState({todolist: todolist, dataInput: ''});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.todolist.map((todo) => {
            return <li key={todo.task}>{todo.task}</li>
            
        })}
        <div>
       <input type='text'
       placeholder='Add Todo'
       onChange={this.toDoHandler}
       value={this.state.dataInput}/>
       <button onClick={this.addTodo}>Add</button>
    </div>
    
      </div>
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // <TodoForm />
  //<TodoList itemslist={this.state.todolist.task} />