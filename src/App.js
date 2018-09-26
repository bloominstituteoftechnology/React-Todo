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
      id: 0,
     toDoTitle:'',
      toDoContent:'',
      toDoListItems:[],
    }
  }
  render() {
    return (    
      <div>
      <h1>D2rd Stuff ToDo</h1>
      <Header />
      <ToDoList />
      </div>
    
    )
  }
}
  
export default App;
