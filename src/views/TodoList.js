import React from 'react';
import './Todo.css';

const TodoList = props => {

    return(
        <div className="container">
            <h1> {props.data.title}</h1>
            
            <div className="form-container">

                {props.data.list.map((item) => 
                    <div className="list" key={item.id}>
                        <input onChange={props.checked} type="checkbox" />
                        <p>{item.task}</p>
                    </div>
                )}

                <form>
                    {console.log(props.data.list)}
                    <input placeholder='Todo Task' onChange={props.addTask} />
                    <button>Add Todo List</button>
                    <button>Clear Todo List</button>
                </form>
            </div>
        </div>
    )
}

export default TodoList;