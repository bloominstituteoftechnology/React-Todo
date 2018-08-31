import React from 'react';
// import ReactDOM from 'react-dom';

// import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import Todo from './components/TodoComponents/Todo.js';

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor()  {
	super();
	this.state = {
	    // cleared: [],
	    // todos: [],
	    todos: [ {
		added: 'Get groceries',
		id: 1,
		completed: false
            },
		     {
			 added: 'Go for run',
			 id: 2,
			 completed: false
		     }],
	    inputText: ""
	};
    }

    addTodo = event => {
	event.preventDefault();
	if (this.state.inputText) {
	    this.setState({
		todos: [...this.state.todos, {added: this.state.inputText, id: Date.now(), completed: false}],
		inputText: ""
	    });
	}
    };

    completedTask = id => {
    	const newArr = [...this.state.todos];
	newArr.map(todo => {
	    if(todo.id === id) {
		todo.completed = !todo.completed;
	    }
	});
	this.setState({
	    todos: newArr
	}, () => console.log(this.state));
	// console.log(id);
    };

    clearTodo = event => {
	event.preventDefault();
	// let newArr = [...this.state.todos];
	let todos = [...this.state.todos];
	todos = todos.filter(todo => !todo.completed);
	this.setState({
	    todos
	});
    };
	
    handleInput = event => {
	this.setState({
	    inputText: event.target.value
	});
    };
    
    render() {
	return (
	    <div>
	      <TodoList todos={this.state.todos} completedTask={this.completedTask} />
	      <TodoForm
		clearTodo={this.clearTodo}
		addTodo={this.addTodo}
		inputText={this.state.inputText}
		handleInput={this.handleInput}
		/>
	    </div> 
	);
    }
}

export default App;
