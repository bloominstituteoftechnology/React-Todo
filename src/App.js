import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

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
  clearCompleted = e => {
    e.preventDefault();
    console.log('it was clicked')
    let todo_items = this.state.todo_items.slice();
    todo_items = todo_items.filter(todo => !todo_items.completed);
    this.setState({ todo_items });
  };

  finishItem = id => {
    
    console.log("i was clicked")
    let todo_items = this.state.todo_items.slice();
    todo_items = todo_items.map(todo => {
      if (todo_items.id === id) {
        todo_items.completed = !todo_items.completed;
        return todo_items;
      } else {
        return todo_items;
      }
    });
    this.setState({ todo_items });
  };
   
  

  deleteItem = event => {
    event.preventDefault();
    this.setState({
      todo_items: []
    }) 
  };


  handleNewItem = event => {
    this.setState({
      textField: event.target.value
    });
  };



  render() {
    return (
      <div>
       
        <TodoList 
          finishItems={this.finishItem}
          items={this.state.todo_items}
          
        
         />
        <TodoForm 
          addItem={this.addItem}
          textField={this.state.textField}
          handleNewItem={this.handleNewItem}
          deleteAll={this.deleteItem}
          clearCompleted={this.clearCompleted}

        />
        
      </div>
    );
  }
}

export default App;
