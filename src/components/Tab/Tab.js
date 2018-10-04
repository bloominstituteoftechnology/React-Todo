import React from 'react';
import './Tabs.css';

const Tab = props => (
    <div className="tab">{props.children}</div>
);

export default Tab;