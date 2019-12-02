import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }
}

handleChanges = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

submitTask = e => {
  e.preventDefault();
  this.PaymentResponse.addTask(this.state.item);
};

render() {
  return (
    
  )
}