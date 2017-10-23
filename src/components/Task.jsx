import React, { Component } from 'React';


export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className="task">
      <input type="checkbox" checked={this.props.completed} />
     <p>{this.props.text}</p>
    </div>
    );
  }
}
