import React, {Component} from 'react';
import ReactDOM from 'react';
import Header from './components/HeaderComponents/Header';
import ToDoList from './components/ToDoItemComponents/ToDoList';
import ToDoItem from './components/ToDoItemComponents/ToDoItem';


// const App = () => (
//   <div>
//     <h2>Todo App</h2>
//   <Header />
//   <ToDoList />
//   </div>
// );
class App extends Component {

  constructor() {
    super();
    this.state={
      title:"To Do List",
      inputToDoValue:'',
      toDoListItems:[],
    }
  }
  render() {
    return (    
      <div>
      <h1>App should be here</h1>
      

      </div>
    
    )
  }
}
  
export default App;
