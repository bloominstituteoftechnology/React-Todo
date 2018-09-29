import React from 'react'


class TodoForm extends React.Component {

  render() {
  const filteredList = () => {
   this.props.remove(this.props.completed)
  }

      return (
        <div>
          <input 
                input={this.props.newTodo}
                onInput={this.props.valueHandler}
                placeholder="Add to do here"
                type="text"/>
          < button onClick={this.props.submitHandler}> Add Todo </button>
          < button onClick={this.filteredList} > Clear Completed </button>
        </div>
      )

}

}
export default TodoForm;


