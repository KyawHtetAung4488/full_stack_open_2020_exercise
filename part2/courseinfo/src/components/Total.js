import React from 'react'

const Total = ({ parts }) => {
    
    const total = parts.reduce((s, p) => s + p.exercises , 0)

    return(
      <b>Number of exercises {total}</b>
    ) 
  }

  export default Total