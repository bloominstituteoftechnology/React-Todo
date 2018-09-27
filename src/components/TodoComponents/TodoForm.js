import React from 'react';

class TodoForm extends React.Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.props.addItem}>
                <input
                  placeholder="...todo"
                  ref={this.props.inputElement}
                  value={this.props.currentItem.task}
                  onChange={this.props.handleInput}
                />
                <button type="submit" className="addTask"> Add Todo </button>
                <button type="submit" className="clearCompleted"> Clear Completed </button>
              </form>
            </div>
          </div>
        )
    }
}

export default TodoForm