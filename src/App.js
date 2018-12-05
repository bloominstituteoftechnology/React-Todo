import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: ''
		};
	}
	inputText = (event) => {
		this.setState({ message: event.target.value });
	};

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div className="App">
				<h1>{this.state.message}</h1>
				<h2>{this.state.message}</h2>
				<h2>Welcome to your Todo App!</h2>
			</div>
		);
	}
}

export default App;
