import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
import './components/TodoComponents/Todo.css';

class App extends React.Component {
   constructor(){
     super();
     this.state = {
       list: [
         {task: "milk", id: 1528817077286, completed: false},
         {task: "eggs", id: 1528817084358, completed: false},
         {task: "butter", id: 1528817093827, completed: false}
       ],
       item: ""
     };
   };
   trackInputHandler = event => {
     this.setState({item: event.target.value});
   }
   addItem = e => {
     e.preventDefault();
     const items = this.state.list;
     items.push({task: this.state.item, id: Date.now(), completed: false});
     this.setState({list: items});
     this.setState({item: ""});
   }
   toggleCompleted = id => {
     let list = this.state.list.slice();
     list=list.map(item => {
       if (item.id === id) {
         item.completed = !item.completed;
         return item;
       } else{ return item; }
     });
     this.setState({list: list});
   }
   clearCompleted = e => {
     e.preventDefault();
     let list = this.state.list.slice();
     list = list.filter(item => item.completed === false);
     this.setState({list: list});
   }
	
	render(){
		return (
			<div className="container">
			<h2>Todo List</h2>
	         <TodoList
	           list={this.state.list}
	           handler={this.toggleCompleted}
	         />
	         <TodoForm
	           changeHandler={this.trackInputHandler}
	           val={this.state.item}
	           submitHandler={this.addItem}
	           clearHandler={this.clearCompleted}
	         />
	       	</div>
		);
	}

export default App;










