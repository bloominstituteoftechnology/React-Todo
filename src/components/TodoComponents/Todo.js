import React from 'react';
import { prependOnceListener } from 'cluster';

const Todo = (props) => {
    return <li>{props.Todo}</li>
}

export default Todo;