import React from 'react';
import { render } from 'react-dom';
import ProgressTracker from './ProgressTracker.js';
import './test.css';
import Tabs from './components/Tab/Tabs.js';
import Tab from './components/Tab/Tab.js';

render((
    <div className="test-container">
        <ProgressTracker />
        <Tabs>
            <Tab title="a">
                <h1>1</h1>
            </Tab>
            <Tab title="b">
                <h1>2</h1>
            </Tab>
            <Tab title="c">
                <h1>3</h1>
            </Tab>
        </Tabs>
    </div>
), document.getElementById('root'));
