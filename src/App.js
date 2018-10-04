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
    this.state = { 
      toDoList: [], 
      mainInput: '', 
      doneItem: '' 
    }
    this.cNT = this.cNT.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
  }



  changeHandler(event){
        this.setState({
          mainInput: {text: event.target.value,
                      id: Math.floor(Math.random() * 1000),
                      completed: false}});
  }
  cNT(event){ //createNewTodo
    event.preventDefault();
    this.setState({ 
      toDoList: [...this.state.toDoList, this.state.mainInput],
      mainInput: {text: ''} 
    });

  }

  toggleComplete(event){
    let toDoId = event.target.dataset.id;
    let list = this.state.toDoList;
      console.log(toDoId);
    let matchedItem = list.find(item => {return (item.id.toString() === toDoId)});
      console.log(matchedItem);
      console.log(matchedItem.completed);
    
    matchedItem.completed = !matchedItem.completed;
      console.log(matchedItem);
    
    this.setState({toDoList: [...this.state.toDoList]});
    

     
  }

  clearComplete(event){
    event.preventDefault();
    let list = this.state.toDoList;

    let newList = list.filter(item => !item.completed);
    this.setState({toDoList: newList});

  }





  
  render() {
    return (
      <div>
        <ToDoList list={this.state.toDoList} 
                  onClick={this.toggleComplete} />
        
        <TodoForm mainInput={this.state.mainInput} 
                  onSubmit={this.cNT} 
                  onClick={this.cNT}
                  onChange={this.changeHandler} 
                  clear={this.clearComplete}/>
      </div>
    );
  }
}

export default App;
