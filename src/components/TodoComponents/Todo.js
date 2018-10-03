import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false
        }
    }

    handleEditing() {
        this.setState({
            editing: true
        })
    }
    handleEditingDone(e) {
        if (e.keyCode === 13) {
            this.setState({ editing: false });
        }
    }
    handleEditingChange(e) {
        var _changedText = e.target.value;
        this.setState({ changedText: _changedText })
    }

    componentDidMount() {
        this.setState({ changedText: this.props.todo.task })
    }

    render() {
        const clickSelect = () => {
            this.props.handleComplete(this.props.todo.id)
        }

        return (
            <li className='task'>
                <div className='task-box'>
                    <input
                        className="checkbox"
                        type="checkbox"
                        onClick={clickSelect}
                    />
                    <span
                        className={this.state.editing ? 'none' : 'view'}
                        onClick={this.handleEditing.bind(this)}
                    >
                        {this.state.changedText}
                    </span>
                    <input
                    className={this.state.editing ? 'view input' : 'none'}
                    type="text"
                    value={this.state.changedText}
                    onChange={this.handleEditingChange.bind(this)}
                    onKeyDown={this.handleEditingDone.bind(this)}
                />
                </div>
            </li >
        )
    }
}

export default Todo;