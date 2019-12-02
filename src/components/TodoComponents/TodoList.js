// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul className="list">
				{this.props.todos.map(todo => {
					return <Todo todo={todo} />;
				})}
			</ul>
		);
	}
}

export default TodoList;
