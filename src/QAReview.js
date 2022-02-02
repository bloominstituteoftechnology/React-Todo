import React from 'react';
import { connect } from 'react-redux';
import "./styles/QAReview.css";

const QAReview = () => {
    return (
        <div className='qaReviewMain'>
            <h2>QA Review</h2>
            <div className='actions'>
                <div className='actionsButtons'>
                    <button>Add a note</button>
                    <button>Edit</button>
                    <button>Delete</button> 
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
        stories: state.stories
    }
}

export default connect(mapStateToProps,{})(QAReview)