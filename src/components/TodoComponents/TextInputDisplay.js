import React from 'react'

class TextInputDisplay extends React.Component {
    render() {
        return (
            <div>
                {this.props.addTextInput}
                <button onClick={this.props.clearCompleted}>Clear Completed Task</button>
            </div>
        )
    }
}

export default TextInputDisplay


