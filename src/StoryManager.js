import React from 'react';
import { Calendar } from 'react-calendar';
import './styles/StoryManager.css'


const StoryManager = () => {
    return (
        <div className='story-manager'>
            <h2>Story Manager</h2>
            <div className='actions'>
                <div className='actionsButtons'>
                    <button>Add a story</button>
                    <button>Edit story</button>
                    <button>Delete story</button> 
                </div>
                <div className='searchForm'>
                    <form>
                        <button>Search</button>
                        <input type='text' placeholder="search" />
                    </form>
                </div>
            </div>
            <div className='library'>
                <h3>Library</h3>
                <form>
                    <div className='review-checkboxes'>
                        <label>
                            <input type='checkbox' />
                            This is a test story
                        </label>
                        <label>
                            <input type='checkbox' />
                            This is a test story
                        </label>
                        <label>
                            <input type='checkbox' />
                            This is a test story
                        </label> 
                    </div>
                </form>
            </div>
            <div className='bottom-widgets'>
                <div className='calendar'>
                    <Calendar />
                </div>
                <div className='placeholder-text'>
                    <p>placeholder widget</p>
                </div>
            </div>   
        </div>
    )
}

export default StoryManager