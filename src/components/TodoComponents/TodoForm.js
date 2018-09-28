import React from 'react'


class TodoForm extends React.Component {

render(){

      return (
        <div>
          <input 
                onChange={this.props.valueHandler}
                placeholder="Add to do here"
                type="text"/>
            < button onClick={this.props.submitHandler}> Add Todo </button>
        </div>
      )

}

}
export default TodoForm;


