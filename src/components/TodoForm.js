import React from 'react';

const TodoForm = props => {
	return (
		<div className="form-wrapper">
			<form onSubmit={props.searchTask}>
				<input
					type="text"
					name="search"
					onChange={props.handleSearch}
					placeholder="Search..."
					value={props.search}
				/>
				<button>Search</button>
			</form>
			<form onSubmit={props.handleAddTask}>
				<input
					type="text"
					name="item"
					onChange={props.handleChanges}
					placeholder="Add todo..."
					value={props.task}
				/>
				<button>Add</button>
			</form>
			<button className="clean" onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoForm;
