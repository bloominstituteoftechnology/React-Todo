import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

console.log('here')

class App extends React.Component {
  constructor() {
    super();
    this.state={
      inputText: '',
      todoList: [],
    };
  }

  componentDidMount(){
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo){
      this.setState({todoList: storedTodo})
    } 
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTodo = (event) => {
    // console.log(this.state.todoList)
    event.preventDefault();

    let newTasks = [...this.state.todoList,
      { task: this.state.inputText, id: Date.now(),  completed: false }];
    localStorage.setItem('todo', JSON.stringify(newTasks));
    

    this.setState({
      todoList: newTasks,
      inputText: ''
    }, () => console.log(this.state.todoList[this.state.todoList.length - 1].id));
  }

  clearAll = (event) => {
    console.log('should clear completed')
    event.preventDefault();
    let temp = this.state.todoList.filter( (item) => item.completed !== true )
    localStorage.setItem('todo', JSON.stringify(temp));
    this.setState({todoList: temp})
  }

  toggleItem = (item) => {

    console.log(!item.completed);
    let temp = this.state.todoList.map( (list) => {
      if(list.id === item.id) {
        return {task: item.task, id: item.id, completed: !item.completed}
      } else return list
    })
    localStorage.setItem('todo', JSON.stringify(temp));
    this.setState({
      todoList: temp,
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container'>
        <h2>My Todo List</h2>

        <TodoList 
          list={this.state.todoList} 
          toggleItem={this.toggleItem} />

        <TodoForm 
          addTodo={this.addTodo}
          clearAll={this.clearAll}
          handleChange={this.handleChange}
          nameInputText={'inputText'}
          inputClick={'addTodo'}
          inputClick2={'clear All'}
          inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
