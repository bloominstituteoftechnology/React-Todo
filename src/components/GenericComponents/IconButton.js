import React from 'react';

import './IconButton.css';

/*
    PASSABLE PROPS:
    icon: The text/element to display as the icon.
    label: The text to display as the label.
    onClick: The method called when this element is clicked.
*/

class IconButton extends React.Component {
    render() {
        return (
            <button type="button" className="iconbutton" onClick={_ => this.props.onClick()}>
                <div className="iconbutton-icon">{this.props.icon}</div>
                <div className="iconbutton-label">{this.props.label}</div>
            </button>
        );
    }
}

export default IconButton;
