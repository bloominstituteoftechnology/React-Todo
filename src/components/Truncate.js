import React from 'react';
import PropTypes from 'prop-types';

export default function Truncate(props) {
    const {string, truncateIndex} = props;
    
    function truncate(str){
        if(str.length > truncateIndex){
            return str.slice(0, truncateIndex - 3) + '...';
        } else {
            return str;
        }
    }
    return (
        <React.Fragment>{truncate(string)}</React.Fragment>
    )
}

Truncate.propTypes = {
    string: PropTypes.string.isRequired,
    truncateIndex: PropTypes.number.isRequired
}

Truncate.defaultProps = {
    string: "Default Title String",
    truncateIndex: 50
}