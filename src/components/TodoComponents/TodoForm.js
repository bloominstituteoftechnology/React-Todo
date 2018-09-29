import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className={'formDiv'}>
        <form>
          <input value={this.props.todo} onChange={this.props.inputChange} placeholder={'Todo Item'} />
          <div className={'buttonDiv'}>
            <button type="submit" onClick={this.props.addTodo}>
              Add Todo
            </button>
            <button onClick={this.props.clear}>Clear Completed</button>
          </div>
          <div className={'searchDiv'}>
            <input value={this.props.search} onChange={this.props.searchFunc} placeholder={'Search'} />
            <button onClick={this.props.reload}>Clear Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
