import React from 'react';

const RemoveButton = (props) => {
    return (
        <button className="btn-remove" onClick={props.removeAllClick}>
        Remove Completed
        </button>
    );
};

export default RemoveButton;