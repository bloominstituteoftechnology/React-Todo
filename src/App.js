import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		
		// you will need a place to store your state in this component.
		// design `App` to be the parent component of your application.
		// this component is going to take care of state, and any change handlers you need to work with your state

		this.state = {
			toDoList: [
				{
					task: '',
					id: `Date.now()`,
					completed: false
				},
			]
		};
	}

	// - All of your `handler` functions should live here on `<App />`.

	handleClick = (event) => {
		this.setState({
			task: event.target.value,
			id: Date.now(),
		})
	};

	handleInput = (event) => {
		//something
	};
	
	render() {
		return (
			<div>
				<h1>Todo List: MVP</h1>
			</div>
		);
	}
}

export default App;
