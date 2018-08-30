import React from 'react';
import PropTypes from 'prop-types';

export default function Truncate(props) {
    const {string} = props;
    return (
        <React.Fragment>{string}</React.Fragment>
    )
}

Truncate.propTypes = {
    string: PropTypes.string.isRequired
}

Truncate.defaultProps = {
    string: "Default Title String"
}