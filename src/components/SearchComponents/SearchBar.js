import React, { Component } from 'react';

const SearchBar= (props) =>{
		return (
			<div>
				<form onSubmit={props.onSubmit}>
					<input type="text" value={props.value} onChange={props.onChange}/>
					<button type="submit">Search</button>
				</form>
			</div>
		);
}

export default SearchBar;