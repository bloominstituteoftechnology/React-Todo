import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div>
            <Todo listContent={props.listContent} />
            <TodoForm
                listContent={props.listContent}
                newListItem={props.newListItem}
                changeHandler={props.changeHandler}
                addNewListItem={props.addNewListItem}
            />
        </div>
    );
}

export default TodoList;