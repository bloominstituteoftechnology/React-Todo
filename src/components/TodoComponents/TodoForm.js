import React from 'react';
import posed from 'react-pose';

const TodoForm = props => {
	const Box = posed.div({
		hoverable: true,
		pressable: true,
		init: {
			scale: 1,
		},
		hover: {
			scale: 1.3,
		},
		press: {
			scale: 1.1,
		},
	});
	const Button = posed.div({
		hoverable: true,
		pressable: true,
		init: {
			scale: 1,
		},
		hover: {
			scale: 1.3,
		},
		press: {
			scale: 1.1,
		},
	});
	return (
		<form className="todo-form">
			<input
				className="todo-input"
				value={props.todoInput}
				type="text"
				name="todo"
				onChange={props.handleChange}
				placeholder="Enter Task"
			/>
			<div className="buttons">
				<Box>
					<button className="add-btn" onClick={props.addTodo}>
						<Button>Add</Button>
					</button>
				</Box>
				<Box>
					<button className="clear-complete" onClick={props.clearCompleted}>
						<Button>Clear</Button>
					</button>
				</Box>
			</div>
		</form>
	);
};

export default TodoForm;
