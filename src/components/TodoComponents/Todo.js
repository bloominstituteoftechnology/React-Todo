import React from 'react';
import PropTypes from 'prop-types';
import Truncate from '../Truncate';
import Icons from '../IconComponent/Icons';
import './Todo.css';

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }
    }

    strikeThrough = () => {
        this.setState({completed: !this.state.completed});
    }

    render() {
        const {title, body, time} = this.props;
        const current = this.state.completed ? 'strike-through' : '';
        return (
            <div className={`todo-item ${current}`}>
                <h3 title={title}>
                    <Truncate truncateIndex={50} string={title} />
                </h3>
                <p>{body}</p>
                <small>{time}</small>
                <Icons strikeThrough={this.strikeThrough} />
            </div>
        )
    }
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