import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        console.log(this.props.item);
        return(
            <li> {this.props.item.task} </li>
        );
    }
}

export default Todo;