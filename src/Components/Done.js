import React, { Component } from "react";

class LineThrough extends Component {
    handleLine = (props) => {
        this.props.toggleTodoCompleted(this.props.index);
    }

    rendor() {
        let style = {
            "TextDecoration": this.props.TodoList.completed ? "line-through" : "none",
        }
        return (
            <div style={style} onClick={this.handleLine}>
                {this.props.LineThrough.text}
            </div>
        );
    }
}

export default LineThrough;