import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleComplete, numTodos }) => (
	<div>
		{/* <div className="num-todos">{numTodos} things left to do</div> */}
		<div className="todo-list">
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
			))}
		</div>
	</div>
)

export default TodoList
