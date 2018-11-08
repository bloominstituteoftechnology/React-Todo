import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';
import './components/TodoComponents/Todo.css';


const listData = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false,
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false,
  // },
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      itemList: listData,
      inputText: '',
    }
  }
  handler = item => {
    this.setState({
      [item.target.name]: item.target.value
    });
  }
  addItem = item => {
    item.preventDefault();
    if(this.state.inputText !== ""){
    this.setState({
      itemList: [
        ...this.state.itemList,
        { task: this.state.inputText, id: Date.now(), completed: false, taskDone: 'inactive' }
      ],
      inputText: '',
    });
  }
  };

  clearItems = item =>{
    item.preventDefault();
    this.setState({
      itemList: this.state.itemList.filter(item => item.completed ===false)
    })
  }
  completedTask = id => {
    this.setState({
      itemList: this.state.itemList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            taskDone: task.taskDone === 'inactive' ? 'active' : 'inactive',
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList 
          itemList={this.state.itemList}
          completedTask = {this.completedTask}
         />
        <TodoForm
          addItem={this.addItem}
          clearItems ={this.clearItems}
          inputText={this.state.inputText}
          handleChange={this.handler}
        />
        

        </div>
        
    );
  }
}
  
export default App;
