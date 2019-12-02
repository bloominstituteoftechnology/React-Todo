import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleAdd(this.state.value)
          this.setState({value: ''})
        }}>
          <input
            type='text'
            name='listItem'
            value={this.state.value}
            onChange={(e) => {
              this.setState({value: e.target.value})
            }}
          >
          </input>
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}
export default TodoForm;