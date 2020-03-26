import React from 'react';

const clearCompleted = ({ clearCompleted }) => {
	return (
		<div className="form-wrapper">
			<button className="clean" onClick={clearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};

export default clearCompleted;
