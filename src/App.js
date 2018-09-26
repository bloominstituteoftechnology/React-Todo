import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
			//values which we are storing
		};
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return <div />;
	}
}

export default App;

// - `<App />` will hold all the data needed for this project.It will also be the container for your Todo Components.
//   - All of your application data will be stored here on`<App />`.
//   - All of your`handler` functions should live here on`<App />`.
