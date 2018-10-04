import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

let todoItem = [{task : '1st', id : Date.now(),  completed : false}];

class App extends React.Component {

 constructor(props){
   super(props);
   this.state ={items : todoItem};
  
   this.addTodo = this.addTodo.bind(this);
   this.deleteItem = this.deleteItem.bind(this);
   this.completedItem = this.completedItem.bind(this);
  }
 
  addTodo(item) {
    
  // console.log(item);
    let newItem ={task: item, id: Date.now(), completed: false };

    this.setState({ items: [...this.state.items, newItem]});
  }
 
  completedItem(index){
    let myArray = this.state.items;
    myArray.forEach(item => {
      if(item.id === index)
        item.completed = true;
    });
    this.setState({ items: myArray});
  }

  deleteItem(){
    console.log("deletedItem");
    let myArray = this.state.items;

    myArray = myArray.filter(item => (!item.completed));
    this.setState({ items: myArray});
  }
  render() {

    return (
      <div>
        <h2>Welcome to The World's Best Most In Depth Coolest To-Do List!</h2>
        <TodoList key={this.state.id}  items={this.state.items} completedItem={this.completedItem} />
        <TodoForm addTodo={this.addTodo} deleteItem={this.deleteItem}/> 
      </div>
    );
  }
}

export default App;
