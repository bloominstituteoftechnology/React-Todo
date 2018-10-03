import React from 'react';
import './AppContainer.css';
import InputContainer from '../InputContainer/InputContainer';
import ListContainer from '../ListContainer/ListContainer';



const AppContainer = props => {
    return (
        <div className='app-container'>
            <InputContainer />
            <ListContainer />
        </div>
    )
}

export default AppContainer;