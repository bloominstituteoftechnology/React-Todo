import React, { Component } from 'react';

class Input extends Component {

  constructor() {
    super();
    console.log("Emply Constructor");
  }

  render(){
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" placeholder="Enter new Todo" className="Input__field" onChange={this.props.onChange} value={this.props.value} />
      </form>
    );
  };

}

export default Input;