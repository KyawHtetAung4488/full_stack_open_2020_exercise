import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part) => {
                return (
                    <Part 
                        name={part.name} 
                        exercise={part.exercises}  
                        key={part.id}
                    />
                )
            })}
        </div>
    )
}

export default Content