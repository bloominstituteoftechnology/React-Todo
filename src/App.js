import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo_items: [],
      textField: ""
    };
  };

  addItem = event => {
    event.preventDefault();
    if(this.state.textField){
      this.setState({
        todo_items: [...this.state.todo_items, {task:this.state.textField, id: Date.now(), completed:false}],
        textField: ""
      });
    }
  };

  finishItem = event => {
    event.preventDefault();
    this.setState({
      completed: true
    });
  };

  deleteItem = event => {
    event.preventDefault();
    this.setState({
      todo_items: null
    }) 
  };

  // deleteCompleted = event => {
  //   event.preventDefault();
  //   for(let i=0; i<todo_items.length; i++){
  //     if(todo_items.completed===true){
  //       this.setState({
  //         todo_items: null
  //       })
  //     }
  //   }
    
  // }

  handleNewItem = event => {
    this.setState({
      textField: event.target.value
    });
  };



  render() {
    return (
      <div>
        <TodoList items={this.state.todo_items} />
        <TodoForm 
          addItem={this.addItem}
          textField={this.state.textField}
          handleNewItem={this.handleNewItem}

        />
      </div>
    );
  }
}

export default App;
