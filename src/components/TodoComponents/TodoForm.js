import React from 'react';
// import '.Todo.css';

const InputBox = props => {
  return (
    <div>
     {props.task}
     </div>
  );
};

class TodoForm extends React.Component{
  constructor(){
    super();
    this.state={
      inputField: 'Word'
    };
  }

  render(){
    return (
      <div class="TodoForm">
       <div class="inputBox">
        <InputBox task={this.state.inputField} />
        </div>
      </div>
    );
  }
}

export default TodoForm;
