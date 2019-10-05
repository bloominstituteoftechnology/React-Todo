import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			value : '',
		};
	}

	handleChange = (e) => {
		this.setState({
			value : e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.addTodo(e, this.state.value);

		this.setState({
			value : '',
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.value} onChange={this.handleChange} />
				<button className='add-btn'>Add Todo</button>
			</form>
		);
	}
}
export default TodoForm;
