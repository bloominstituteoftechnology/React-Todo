import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const toDoItems = [
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

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			toDoItems: toDoItems,
			toDoItem: {
				task: '',
				id: Date.now(),
				completed: false
			}
		};
	}

	handleChanges = (event) => {
		this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        [event.target.name]: event.target.value
      }
    })
  };
  
  addItem = (event) => {
    event.preventDefault();
    this.setState({
      toDoItems: [...this.state.toDoItems, this.state.toDoItem],
      toDoItem: {
        task: '',
        id: Date.now(),
        completed: false
      }
    });
    
  };

	render() {
		return (
			<div className="wrapper">
				<h2>Welcome to your Todo App!</h2>
				<TodoList items={this.state.toDoItems} />
				<TodoForm onChange={this.handleChanges} onSubmit={this.addItem} todoValue={this.state.toDoItem.task} />
			</div>
		);
	}
}

export default App;
