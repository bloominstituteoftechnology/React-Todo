import React, { Component } from 'react';

class Todoform extends Component {
	render() {
		return (
			<form>
				<input
					type='text'
					name='todo'
					value={this.props.value}
					onChange={this.props.handleOnChange}
					placeholder='todo'
				/>
				<button onClick={this.props.handleAddTodo}>Add Todo</button>
				<button>Clear Completed</button>
			</form>
		);
	}
}

export default Todoform;
