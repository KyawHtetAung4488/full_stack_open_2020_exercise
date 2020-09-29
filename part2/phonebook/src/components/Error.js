import React from 'react'

const Error = ({message}) => {
    if(message === null || message === ''){
        return null
    }
    else{
        return (
            <div className="error">
                {message}
            </div>
        )
    }
}

export default Error