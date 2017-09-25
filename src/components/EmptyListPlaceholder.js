// Import React from react.
import React from 'react';
// Font Awesome
const FontAwesome = require('react-fontawesome');

const EmptyListPlaceholder = (props) => {
  console.log(props);
  const {text, icon} = props;
  return (
    <div className="emptyPlaceholder">
      <p>{text}</p>
      <FontAwesome className='placeholderImage' size='4x' name={icon} />
    </div>
  );
};

export default EmptyListPlaceholder;
