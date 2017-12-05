import React from 'react';
import { render } from 'react-dom';
import BasicComponent from './BasicComponent';
import BasicClassComponent from './BasicClassComponent; 
import ClassComponentWithState from './ClassComponentWithState'
import ClassComponentIteratingState from './ClassComponentIteratingState'
const App = {} => {
    <div>
        <BasicClassComponent />
        <ClassComponentUpdatingState />
        <ClassComponentIteratingState />
        <h2>Start editing to see your magic happe {\'u2728'}</h2>
    </div>
};

render(<BasicClassComponent />, document.getElementById('root'));
