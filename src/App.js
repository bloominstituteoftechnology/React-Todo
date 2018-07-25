import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo'; 

const myTodoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },  
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }, 
];

class App extends React.Component {
  constructor(){
    super(); 
    this.state = {
      list: myTodoList, 
      input: null, 
    }
  }

  inputChangeHandler = (e) => {
  this.setState({input: e.target.value}); 

  }

  buttonClickHandler = (e) => {
    let id = Date.now(); 
    this.setState({buttonClick: true})
    let list = this.state.list.slice(); 
    list.push({task: this.state.input, id: id, completed: false})
    this.setState({list: list, input: null})
  }
  
  render() {
    return (
      <div>
        <h2>Todo Application</h2>
            <TodoForm change = {this.inputChangeHandler} click = {this.buttonClickHandler} />
          <div className = "to-do-items">
            {this.state.list.map(todo => <Todo task = {todo.task} id = {todo.id} />)}
        </div>
      </div>
    );
  }
}

export default App;
