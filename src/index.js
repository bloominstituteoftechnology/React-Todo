import React from 'react';
import ReactDom from 'react-dom';

require("!style-loader!css-loader!sass-loader!./index.scss");

ReactDom.render(<div className="div-wrapper">Hello World!</div>, document.getElementById('root'));
