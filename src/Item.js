import React, { Component } from 'react';


class Item extends Component {
	
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
		<div>
			{this.props.reminder}
		</div>
		);
	}
}

export default Item;
