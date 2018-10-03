import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myToDoList: [
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
      inputText: '',
      newTask: ''
    }
  }
  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTask = e => {
    e.preventDefault();
    this.setState({myToDoList: [...this.state.myToDoList, {task: this.state.newTask} ], newTask: ''
  })};
  
  render() {
    return (
      <div>
        <TodoList myToDoList={this.state.myToDoList} />
        <TodoForm 
        changeHandler={this.changeHandler}
        inputText={this.state.inputText}
        addTask={this.addTask}
        newTask={this.state.newTask}/>
      </div>
    );
  }
}

export default App;
