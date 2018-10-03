import React from 'react';
import ToDoList from './components/TodoComponents/TodoList.js';
import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = { toDoList: ['sdfa'], mainInput: '', doneItem: '' }
    this.cNT = this.cNT.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event){
        this.setState({mainInput: event.target.value})
  }
  cNT(event){ //createNewTodo
    event.preventDefault();
    this.setState({ 
      toDoList: [...this.state.toDoList, this.state.mainInput],
      mainInput: '' 
    });

  }





  
  render() {
    return (
      <div>
        <ToDoList list={this.state.toDoList} />
        <TodoForm mainInput={this.state.mainInput} 
                  onSubmit={this.cNT} 
                  onClick={this.cNT}
                  onChange={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
