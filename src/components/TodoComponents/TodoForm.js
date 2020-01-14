import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                // onChange={}
                type="text"
                name="item"
                value={props.value}
                placeholder="...todo"
            />
        </form>
    );
};