import React from 'react';
import Search from './Search'

const SearchList = (props) => {
	return (
		<div>
			<ul>
				{props.list.map(todo => {
					{console.log('mapping over todo item', todo)}
					return <Search key={todo.id} todo={todo}/>
				})}
			</ul>	
		</div>
	);
};

export default SearchList;