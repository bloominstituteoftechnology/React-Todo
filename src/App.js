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

	item: "",
	searchItem: ""
		
	};

};

 changeListItem = event => {
   event.preventDefault();		 
    console.log(event.target.value);
    // the way to update state in react! // LIFECYCLE FUNCTION
    this.setState({ item: event.target.value });
  };

 changeListItemSearch = event => {
   event.preventDefault();          
    console.log(event.target.value);
    // the way to update state in react! // LIFECYCLE FUNCTION
    this.setState({ searchItem: event.target.value });
  };


 addItem = event => { 
      event.preventDefault();	 
    const todos = this.state.todos.slice();
    todos.push({"task": this.state.item, "id": Date.now(), "completed": false });
    this.setState({ todos: todos, item: ""});
  };

removeListItem = event => {
	event.preventDefault();

	let todos = this.state.todos.slice();
	todos = todos.filter(todo => !todo.completed);
	
	this.setState({ todos: todos});

};

searcItem = event => {
	event.preventDefault();
	let todos =this.state.todos.slice();
        todos = todos.filter(todo => todo.task === this.state.searchItem);
	this.setState({todos: todos, searchItem: ""});

}


toggleId = id => {
	let todos =this.state.todos.slice();
	todos = todos.map(todo => {
		
	if(todo.id ===id){

		todo.completed = !todo.completed;
		return todo;
	}	
	
	else{
		return todo;
	}	
	
	});	
	this.setState({todos: todos});

};


		
 render() {
    return (
      <div>
	    <TodoList classStrike="item-strike" classRegular="item-style" toggleIdValue={this.toggleId} listItem={this.state.todos} />
	    <TodoForm inputValueSearch={this.state.searchItem} searchInput={this.changeListItemSearch} enterKeyPress ={this.searcItem} inputStyle="input-style" buttonStyle="button-style" removeItem={this.removeListItem} inputEvent={this.changeListItem}  inputValue={this.state.item} addNewItem={this.addItem}  />

      </div>
    );
  }
}

export default App;
