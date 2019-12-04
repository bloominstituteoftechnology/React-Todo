import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      toDos: [
        {
          task: 'Take Charli to the Groomer',
          id: 777,
          completed: false
        },
        {
          task: 'Change the antifreeze in the Jaguar',
          id: 420,
          completed: false
        },
        {
          task: 'Change the antifreeze in the Escalade',
          id: 13,
          completed: false
        },
        {
          task: 'Fix the gutter at the corner of the kitchen at Aunt Eleanor\'s',
          id: 24,
          completed: false
        },
        {
          task: 'Groceries for the week',
          id: 18,
          completed: false
        }
      ],
      toDo: ''
    };
  }

  addToDo = event => {
    event.preventDefault();
    const newToDo = { task: this.state.toDo, completed: false, id: Date.now() };
    this.setState({
      toDos: [...this.state.toDos, newToDo],
      toDo: ''
    });
  };

  changeToDo = e => this.setState({[e.target.name]: e.target.value});

  toggleToDoComplete = id => {
    let toDos = this.state.toDos.slice();
    toDos = toDos.map(toDo => {
      if(toDo.id === id){
        toDo.completed = !toDo.completed;
        return toDo;
      }else{
        return toDo;
      }
    });
    this.setState({toDos});
  };

  clearCompletedToDos = event => {
    event.preventDefault();
    let toDos = this.state.toDos.filter(toDo => !toDo.completed);
    this.setState({toDos});
  };

  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My{" "}{" "}{" "} Everyday{" "}{" "}{" "} ToDo{" "}{" "}{" "} List!</h1>
        </div>
        <div className="form">
          <ToDoForm 
            value={this.state.toDo}
            handleToDoChange={this.changeToDo}
            handleAddToDo={this.addToDo}
            handleClearToDos={this.clearCompletedToDos}
          />
        </div>
        <ToDoList 
          handleToggleComplete={this.toggleToDoComplete}
          toDos={this.state.toDos}
        />
      </div>
    );
  }
}
export default App;