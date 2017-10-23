import React, { Component } from 'react';

export default class AddTodo extends Component {

	handleEnter = (e) => {
		e.persist();
		if (e.which == 13) {
	    this.props.addTodo(e.target.value);
	    e.target.value = "";
	  }
	}

	render(){
		return(
			<div className="add-todo">
				<input type="text" placeholder="Add a todo" onKeyPress={this.handleEnter} />
			</div>
		);
	}
}