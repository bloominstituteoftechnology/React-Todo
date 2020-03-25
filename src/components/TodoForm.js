import React from 'react';

const TodoForm = ({
	searchTask,
	handleSearch,
	search,
	handleAddTask,
	handleChanges,
	task,
	clearCompleted
}) => {
	return (
		<div className="form-wrapper">
			<form onSubmit={searchTask}>
				<input
					type="text"
					name="search"
					onChange={handleSearch}
					placeholder="Search..."
					value={search}
				/>
				<button>Search</button>
			</form>
			<form onSubmit={handleAddTask}>
				<input
					type="text"
					name="item"
					onChange={handleChanges}
					placeholder="Add todo..."
					value={task}
				/>
				<button>Add</button>
			</form>
			<button className="clean" onClick={clearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoForm;
