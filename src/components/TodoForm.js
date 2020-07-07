import React from "react";
import "../styles.css";


const TodoForm = props => {

        return (

              <form className="form" onSubmit={props.handleSubmit}>
                  <input
                    value={props.item}
                    type="text"
                    name="item"
                    placeholder="todo..."
                    onChange={props.handleChanges}
                  />
                  <br/>
                  <button className="add-btn">Add</button>
              </form>
         
        )
    
}

export default TodoForm;