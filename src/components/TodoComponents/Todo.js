import React from 'react';
import {render} from "react-dom";


class Todo extends React.Component {

    constructor (props) {

        super(props);

        this.state = {
            task : props.taskProp,
            fn : props.onClickFn
         };


    }

    onClick = (event) => {
        console.log("Click called");
        this.state.fn(this.state.task);
    }

    render () {
        if (this.props.taskProp.completed) {
            return <li> <button onClick={this.onClick}><strong><strike>{this.props.taskProp.task}  </strike></strong></button> </li>;
        } else {
            return <li><button onClick={this.onClick}><strong>{this.props.taskProp.task} </strong></button> </li>;
        }
    }
}

export default Todo;