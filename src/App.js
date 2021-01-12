import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";


const listData =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listData,
      toggleCompleted: () => {}
    };
  }

 toggleCompleted = (clickedItemId) => {
   this.setState({
     list: this.state.list.map((item) => {
       if(item.id === clickedItemId) {
         return {
           ...item,
           completed: !item.completed
         };
         
       } else {
         return item;
       }
     })
   })
 }
 //addItem property
 addItem = (itemTask) => {
   const newTask = {
     task: itemTask,
     id: new Date(),
     completed: false
   };
return this.setState({
  list: [...this.state.list, newTask]
})
 }
//clearItem property
clearItem = (event) => {
  event.preventDefault()
  return this.setState({
    list: this.state.list.filter((item) => {
      if(item.completed === true) {
        return (item = undefined)
      } else {
        return item;
      }
    })
  })
}


 render() {
   return (
     <div className = 'App'>
       <div className = 'header'>
         <h1>ToDo List </h1>
         <TodoForm addItem = {this.addItem} />
         </div>
         <TodoList
         list = {this.state.list}
         toggleCompleted = {this.toggleCompleted}
         clearItem = {this.clearItem}
         />
         </div>
   )
 }
}
 

export default App

// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.
