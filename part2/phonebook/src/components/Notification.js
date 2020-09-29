import React from 'react'

const Notification = ({noti}) => {
    if(noti === null || noti === '')
    {
        return null
    }
    else{
        return (
            <div className="noti">
                {noti}
            </div>
        )
    }
}

export default Notification