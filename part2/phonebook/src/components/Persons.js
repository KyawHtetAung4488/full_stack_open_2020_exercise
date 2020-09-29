import React from 'react'

const Persons = ({phoneList, onDelete}) => {
    return (
        <div>
            {
                phoneList.map((person) => {
                    return (
                        <p key={person.name}>
                            {person.name} {person.number}

                            <button onClick={onDelete(person.id)}>Delete</button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Persons