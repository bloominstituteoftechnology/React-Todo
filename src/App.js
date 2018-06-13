import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor(){
	super();

	this.state = {

	 todos: [
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
],

	item: ""
		
	};

};

 changeListItem = event => {
   event.preventDefault();		 
    console.log(event.target.value);
    // the way to update state in react! // LIFECYCLE FUNCTION
    this.setState({ item: event.target.value });
  };


 addItem = () => {
    const todos = this.state.todos.slice();
	 todos.push({"task": this.state.item, "id": Date.now(), "completed": false });
    this.setState({ todos: todos});
  };



		
 render() {
    return (
      <div>
           <TodoList  listItem={this.state.todos} />
	   <TodoForm  inputEvent={this.changeListItem}  inputValue={this.state.item} addNewItem={this.addItem}  />

      </div>
    );
  }
}

export default App;
