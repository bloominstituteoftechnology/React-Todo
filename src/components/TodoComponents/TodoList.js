import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div>
            <Todo listContent={props.listContent} />
            <TodoForm listContent={props.listContent} inputText={props.inputText} newListItem={props.newListItem} />
        </div>
    );
}

export default TodoList;