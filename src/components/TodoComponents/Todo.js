import React from 'react';

const Chore = props => {
    let verboseClassName = 'chore';
    if(props.chore.finished) {
        verboseClassName = verboseClassName + 'finished';
    };
    const handleClick = () => {
        props.toggleFinished(props.chore.id);
    };
    return (
        <div onClick={handleClick} className={verboseClassName}>
            <p>{props.chore.name}</p>
        </div>
    );
};

export default Chore;