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
		});
	};

	addItem = (event) => {
		event.preventDefault();
		this.setState({
      // Array concatenation using the spread operator. This method doesn't mutate the toDoItems array directly
      // equivalent to this let arr1 = [1, 2, 3]; let arr2 = [...arr1, 4]; 
      // arr2 --> [1,2,3, 4], arr1 --> [1, 2, 3]
			toDoItems: [ ...this.state.toDoItems, this.state.toDoItem ],
			toDoItem: {
				task: '',
				id: Date.now(),
				completed: false
			}
		});
  };
  
  markComplete = (currentItem, currentId) => {
    this.setState((currentState) => {
      const completedTask = currentState.toDoItems.find((todoListItem) => todoListItem.task === currentItem)
      return {
        toDoItems: currentState.toDoItems.filter((todoListItem) => todoListItem.task !== currentItem)
          .concat({
            currentItem,
            currentId,
            completed: !completedTask.completed
          })
      }
    });
  };

	render() {
		return (
			<div className="wrapper">
				<h2>Welcome to your Todo App!</h2>
				<TodoList items={this.state.toDoItems} onMarkComplete={this.markComplete} />
				<TodoForm onChange={this.handleChanges} onSubmit={this.addItem} todoValue={this.state.toDoItem.task} />
			</div>
		);
	}
}

export default App;
