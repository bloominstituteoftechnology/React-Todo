import React from 'react';

class Todo extends React.Component {
  log() {
    console.log("Help! I'm being clicked!");
  }
  render () {
    return (
      <ul>
        {
          this.props.list.map((item, i) => {
            return <li key={i} className={this.props.className} onClick={this.props.toggleClassName}>{item}</li>;
          })
        }
      </ul>
    );
  }
}

export default Todo;