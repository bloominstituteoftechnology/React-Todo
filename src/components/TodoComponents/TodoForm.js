import React from 'react'

class TodoForm extends React.Component {

render(){

      // const clicked = () => {
      //   this.props.clickHandler();
      // }

      return (
        <div>
          <input name="task"
                onChange={this.props.valueHandler}
                placeholder="Add to do here"
                type="text"
                />
            <button onClick={this.props.submitHandler}>Add Todo</button>
        </div>
      )

}

}
export default TodoForm;


