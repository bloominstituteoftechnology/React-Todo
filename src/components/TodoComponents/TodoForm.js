import React from "react";
import './Todo.css';

class ChoreForm extends React.Component {
  constructor() {
    super();
    this.state = {
      choreName: ""
    };
  }

  handleChanges = e => {
      this.setState({
          choreName: e.target.value
      })
  }

  handleSubmit = e => {
      e.preventDefault();
      if (this.state.choreName !== ''){
          this.props.addChore(this.state.choreName);
          this.setState({
              choreName: ''
          });
      }
  }

  render(){
      return (
          <form onSubmit={this.handleSubmit}>
              <input 
                onChange={this.handleChanges}
                type='text'
                name='chore'
                value={this.state.choreName}
              />
              <button className='addBtn'>Add</button>
              <div />
              <p className='finishedP'>Finished</p>
          </form>
      )
  }
}

export default ChoreForm;
