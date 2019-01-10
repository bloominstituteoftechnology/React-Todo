import React from 'react';
import Checkbox from '../GenericComponents/Checkbox';
import IconButton from '../GenericComponents/IconButton';

import './TodoListItem.css';

/*
    PASSABLE PROPS:
    onToggle: When the todo item is toggled, call this method.
    onDelete: When the todo item is deleted, call this method.
    item: The todo item object.
*/

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    toggleExpand() {
        let newExpanded = !this.state.expanded;

        this.setState({ expanded: newExpanded });
    }

    dateToShortString() {
        let timeSince = Date.now - this.props.item.date;
        let minutes = timeSince / (1000 * 60);
        let hours = minutes / 60;
        let days = hours / 24;
        let weeks = days / 7;

        if (weeks >= 2) {
            return `${Math.floor(weeks)}w ago`;
        } else if (days >= 2) {
            return `${Math.floor(days)}d ago`;
        } else if (hours >= 2) {
            return `${Math.floor(hours)}hr ago`;
        } else if (minutes >= 2) {
            return `${Math.floor(minutes)}min ago`
        } else {
            return "Seconds ago";
        }
    }

    render() {
        let body = null;
        if (this.state.expanded) 
            body = (
                <div className="todolistapp-item-body">
                    <hr className="todolistapp-item-body-hr" />
                    <p className="todolistapp-item-body-description">
                        {this.props.item.description}
                    </p>
                    <div className="todolistapp-item-body-footer">
                        <IconButton icon={ <i className="fas fa-times"></i> } label="delete" onClick={_ => this.props.onDelete()}/>
                    </div>
                </div>
            );

        return (
            <div className="todolistapp-item">
                <div className="todolistapp-item-header">
                    <Checkbox status={this.props.item.status} onClick={_ => this.props.onToggle()} />
                    <div className="todolistapp-item-header-text" onClick={_ => this.toggleExpand()}>
                        <h2 className="todolistapp-item-name">{this.props.item.name}</h2>
                        <h2 className="todolistapp-item-date">{this.dateToShortString()}</h2>
                    </div>
                    
                </div>
                {body}
            </div>
        );
        
    }
}

export default TodoListItem;
