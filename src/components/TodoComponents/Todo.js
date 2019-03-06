import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <li>{this.item}</li>
      </div>
    );
  }
}

export default Todo;