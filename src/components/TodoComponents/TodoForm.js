import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
			id: Date.now(),
			completed: false
		}
	}
	render() {
		return (
			<div>
				<h2>Todo Form</h2>
			</div>
		)
	}
}
export default TodoForm;