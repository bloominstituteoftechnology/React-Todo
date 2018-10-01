import React from 'react'

class TextInputDisplay extends React.Component {
    render() {
        return (
            <div>
                {this.props.addTextInput}
                <div class="clear-todo-list-item" onClick={this.props.clearCompleted}>Clear Completed Task</div>
            </div>
        )
    }
}

export default TextInputDisplay


