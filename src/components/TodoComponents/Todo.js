import React from 'react';
import SplitText from 'react-pose-text';

const Todo = props => {
	const charPoses = {
		exit: { opacity: 0, y: 20 },
		enter: {
			opacity: 1,
			y: 0,
			delay: ({ charIndex }) => charIndex * 20,
		},
	};
	return (
		<div className="todo">
			<SplitText
				className={props.todo.completed ? 'complete' : null}
				onClick={() => props.toggle(props.todo.id)}
				initialPose="exit"
				pose="enter"
				charPoses={charPoses}>
				{props.todo.task}
			</SplitText>
		</div>
	);
};

export default Todo;
