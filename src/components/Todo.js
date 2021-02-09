import React from "react";

class Todo extends React.Component{

    handleClick = () => {
        console.log(this.props.completed);
        this.props.strikeThroughToggle(this.props.id);
      };

    render() {

        return ( 
            <div>
                <h1> Existing Task </h1> 
                <p>{this.props.task}</p>
                <p>{this.props.id}</p>
                <p onClick={this.handleClick}>{this.props.completed}</p>

            </div>
        )
    }
}

export default Todo;