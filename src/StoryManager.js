import React, {useState} from 'react';
import UploadEpisode from "./UploadEpisode";
import './styles/StoryManager.css';
import TestPopup from './TestPopup';


const StoryManager = () => {

    const [popupButton, setPopupButton] = useState(false)

    return (
        <div className='story-manager'>
            <div className='library'>
                <div className='library-top'>
                    <h2>Story Library</h2>
                    <button onClick={() => setPopupButton(true)}>Add +</button>  
                </div>
                
                <form>
                    <div className='review-checkboxes'>
                        <p>Placeholder story</p>
                        <p>Placeholder story</p>
                        <p>Placeholder story</p> 
                    </div>
                </form>
            </div>
            <div className='checked'>
                <div className='approved'>
                    <h3>Approved</h3>
                    <div>
                        <br></br>
                    </div>
                    <form>
                        <div className='review-checkboxes'>
                            <p>Placeholder story</p>
                            <p>Placeholder story</p>
                            <p>Placeholder story</p> 
                        </div>
                    </form>
                </div>
                <div className='rejected'>
                    <h3>Rejected</h3>
                    <div>
                        <br></br>
                    </div>
                    <form>
                    <div className='review-checkboxes'>
                            <p>Placeholder story</p>
                            <p>Placeholder story</p>
                            <p>Placeholder story</p> 
                        </div>
                    </form>
                </div>
            </div>
            <TestPopup trigger={popupButton} setTrigger={setPopupButton} />
        </div>
    )
}

export default StoryManager