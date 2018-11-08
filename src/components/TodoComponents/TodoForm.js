// will do what character form does.
import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTodo} className="todo-list">
                <input
                    autocomplete="off"
                    className="input-section"
                    type="text"
                    name="inputText"
                    placeholder="Honey please do..."
                    value={props.inputText}
                    onChange={props.handleChange}
                    />
                <button className="add-button button" type="submit">HoneyDo</button>
                <button className="completed-button button" onClick={props.clearTodo}>Thanks</button>
            </form>
           
        </div>
    )
}

export default TodoForm;