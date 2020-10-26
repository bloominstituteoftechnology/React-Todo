import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				{this.props.list.map((todo) => (
					<Todo data={todo} handleComplete={this.props.handleComplete} />
				))}
			</div>
		);
	}
}
