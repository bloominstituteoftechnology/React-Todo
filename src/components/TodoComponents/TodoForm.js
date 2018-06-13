import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<input type="text" onChange={this.props.onChange} value={this.props.value}/>
					<button onSubmit={this.props.onSubmit} >Add Todo</button>
					<button type="button" onClick={this.props.onClick}>Clear Completed</button>									
				</form>
			</div>
		);
	}
}

export default TodoForm;