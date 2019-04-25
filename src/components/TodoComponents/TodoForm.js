'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addTask(this.state.task)
    this.setState({ task: '' })
  }

  render() {
    return (
      <div className="jsx-TodoForm">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="task" value={this.state.task} onChange={this.onChange} placeholder="...todo" autofocus></input>
          <button type="submit">Add Todo</button>
          <button onClick={this.props.clearCompletedTasks}>Clear Completed</button>
        </form>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = TodoForm
