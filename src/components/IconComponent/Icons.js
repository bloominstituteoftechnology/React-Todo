import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Icons.css';

export default class Icons extends React.Component {
    constructor() {
        super();
        this.state = {
            complete: false,
        }
    }

    clearButton = () => {
        this.setState({
            complete: !this.state.complete
        });
        this.props.toggleCompleteBoolean(this.state.complete, this.props.self);
        this.props.strikeThrough();
    }

    render() {
        const currentIcon = this.state.complete ? faCheck : faTimes;
        const currentIconClass = this.state.complete ? 'complete' : 'not-complete';
        
        return (
            <div className="icons-container">
                <FontAwesomeIcon className={currentIconClass} icon={ currentIcon } onClick={this.clearButton} />
            </div>
        )
    }
}