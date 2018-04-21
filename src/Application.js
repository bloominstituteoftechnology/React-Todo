import React, {Component} from 'react';
import List from "./List";
import GetReminder from "./GetReminder";
class Application extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	addReminder = (item) => {
		this.setState({reminder:item});
	}

	render() {
		return (
		<div>
			<h2>ToDo App</h2>
			<List reminder={this.state.reminder}/>
			<GetReminder add={this.addReminder} />
		</div>
		);
	}
}

export default Application;
