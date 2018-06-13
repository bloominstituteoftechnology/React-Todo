import React from 'react';

const Search = (props) => {
	return (
		<div>
			<li>
				{props.todo.task}
			</li>
		</div>
	);
};

export default Search;