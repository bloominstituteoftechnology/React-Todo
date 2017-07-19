/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<div>Hello World!</div>, document.getElementById('root'));
