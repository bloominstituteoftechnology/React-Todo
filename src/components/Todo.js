import React from "react";

export default class Todo extends React.Component {
	constructor() {
		super();
	}

	handleCheck = (e) => {
		const { checked } = e.target;
		this.props.handleComplete(this.props.data.id, checked);
	};

	render() {
		return (
			<div>
				<input
					type="checkbox"
					value={this.props.completed}
					onClick={this.handleCheck}
				/>
				{this.props.data.completed ? (
					<span style={{ textDecoration: "line-through" }}>
						{this.props.data.task}
					</span>
				) : (
					<span>{this.props.data.task}</span>
				)}
			</div>
		);
	}
}
