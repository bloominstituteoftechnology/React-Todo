import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import "./styles/QAReview.css";
import {fetchStories} from "./actions/adminActions"

const QAReview = ({stories}) => {
    const [state, setState] = useState(stories)

    useEffect(()=>{
        fetchStories()
    },[fetchStories])
    
    return (
        <div className='qaReviewMain'>
            <h2>QA Review</h2>
            <div className='actions'>
                <div className='actionsButtons'>
                    <button >Approve</button>
                    <button >Reject</button>
                    <button >Add a note</button>
                    <button >Edit</button>
                    <button >Delete</button>
                </div>
                <div className='searchForm'>
                    <form>
                        <button>Search</button>
                        <input type='text' placeholder="search" />
                    </form>
                </div>
            </div>
            <div className='review'>
                <h3>Review</h3>
                <form>
                    <div className='review-checkboxes'>
                        <label>
                            <input type='checkbox' />
                            Select all
                        </label>
                        <br/>
                        <div>
                            {state.map(story =>
                                <div className='story'>
                                    <label>
                                        <input type='checkbox' />
                                        {<h4>{story.title}</h4>} by {story.author} 
                                    </label>
                                </div>
                            )}
                        </div>   
                    </div>
                </form>
            </div>
            <div className='reviewed'>
                <div className='approved'>
                    <h3>Approved</h3>
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
                <div className='rejected'>
                    <h3>Rejected</h3>
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
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stories: state.data
    }
}

export default connect(mapStateToProps,{})(QAReview)