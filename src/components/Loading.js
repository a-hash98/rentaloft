import React from 'react'
import loading from '../images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>loft data loading...</h4>
            <img src={loading} alt='loading' />
        </div>
    )
}

export default Loading
