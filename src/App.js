import React from 'react';


import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const toDoData = [
  {toDoItem: 'Get Groceries',
   id: 1528817077286,
   completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDoData,
      toDoItem: '',
      
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      completed: false,
      toDoItem: this.state.toDoItem
    }
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        newTask
      ],
      toDoItem: '',
      
    });
  };

  render() { 
    console.log(this.state.toDoList)
    return (
      
      <div>
        
        <ToDoList toDoDataList={this.state.toDoList}/>
        <ToDoForm
        addNewItem = {this.addNewItem}
        handleChanges = {this.handleChanges}
        toDoItem = {this.state.toDoItem}
        id = {this.state.id}
        />
      </div>
       
    );
   
    
  }
  
}





export default App;