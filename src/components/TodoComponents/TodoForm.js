import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    componentDidMount() {
        const input = document.querySelector("input")
        document.addEventListener("keypress",(e)  =>  {

            if(e.key === "Enter")   {
                this.props.clickAdd(input.value);
                document.querySelector("input").value = "";
            }
        })
    }
    render(props)    {
        return(
            <div className="todoForm">
                <input placeholder="...todo" />
                <div onClick={()    =>  this.props.clickAdd(document.querySelector("input").value)}>Add Todo</div>
                <div onClick={()    =>  this.props.clearComplete()}>Clear Completed</div>
            </div>
        )
    }
}

export default TodoForm;
