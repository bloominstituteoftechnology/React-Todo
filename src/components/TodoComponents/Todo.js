import React from 'react';
import PropTypes from 'prop-types';
import Truncate from '../Truncate';
import Icons from '../IconComponent/Icons';
import './Todo.css';

export default function Todo(props) {
    const {title, body, time} = props;
    return (
        <div className="todo-item">
            <h3>
                <Truncate string={title} />
            </h3>
            <p>{body}</p>
            <small>{time}</small>
            <Icons />
        </div>
    )
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

Todo.defaultProps = {
    body: 'Default Body Message',
    time: 'Time not set',
}