import React from 'react';

import './Checkbox.css';

/*
    PASSABLE PROPS:
    status: One of three states:
        "active", "complete", "cancelled"
    onClick: Calls this method when clicked
*/

class Checkbox extends React.Component {
    render() {
        let innerSymbol;
        switch (this.props.status) {
            case "complete":
                innerSymbol = [
                    <i className="fas fa-ellipsis-h" style={{ display: "none" }}></i>,
                    <i className="fas fa-check"></i>,
                    <i className="fas fa-minus" style={{ display: "none" }}></i>
                ];
                break;
            case "cancelled":
                innerSymbol = [
                    <i className="fas fa-ellipsis-h" style={{ display: "none" }}></i>,
                    <i className="fas fa-check" style={{ display: "none" }}></i>,
                    <i className="fas fa-minus"></i>
                ];
                break;
            default:
                innerSymbol = [
                    <i className="fas fa-ellipsis-h"></i>,
                    <i className="fas fa-check" style={{ display: "none" }}></i>,
                    <i className="fas fa-minus" style={{ display: "none" }}></i>
                ];
                break;
        }

        return ( <div className="checkbox" onClick={_ => this.props.onClick()}>{innerSymbol}</div> );
    }
}

export default Checkbox;
