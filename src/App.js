import React, { Component } from 'react';
import './components/TodoComponents/Todo.css'
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [  
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
      name: ''
    }
  }

  componentDidUpdate(){
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  componentWillMount(){
    let stringData = localStorage.getItem('data');
    let data = JSON.parse(stringData);
    console.log(data);
    this.setState({data: data.data})
  }

  generateTodo(){
    return this.state.data.map((obj, index) => {
      if(this.task === ''){
        return <Todo index={index} data={obj} markAsCompleted={this.markAsCompleted.bind(this)} />
      }
      else if (obj.task.includes(this.state.name)){
        return <Todo index={index} data={obj} markAsCompleted={this.markAsCompleted.bind(this)} />
      }
    });
  }

  markAsCompleted(index){
    let newState = this.state.data;
    newState[index].completed = true;
    this.setState({data: newState})
    console.log(this.state);
  }

  addTodo(data){
    let newData = [
      {
        task: data,
        id: Date.now(),
        completed: false
      }
    ]
    this.setState({data: this.state.data.concat(newData)} );
  }

  clearCompleted(e){
    e.preventDefault();
    let newArr = this.state.data.filter((obj, index) => {
      return !(obj.completed === true);
    })
    this.setState({data: newArr});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        Search 
        <input
        type="text"
        id="listNames"
        value={this.state.name}
        onChange={e => this.setState({name: e.target.value})}
        />
        <TodoList generateTodo={this.generateTodo.bind(this)} />
        <TodoForm addTodo={this.addTodo.bind(this)} clearCompleted={this.clearCompleted.bind(this)} />
      </div>
    );
  }
}

export default App;