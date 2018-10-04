import React from 'react';

// const Todo = props => {
//   return (
//     <div className='todo'>
//       {props.todo.task}
//     </div>
//   );
// }
// export default Todo;

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
          this.props.complete(this.props.todo.id)
      }

      return (
          <div className='task'>
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
              </div>
          </div >
      )
  }
}

export default Todo;