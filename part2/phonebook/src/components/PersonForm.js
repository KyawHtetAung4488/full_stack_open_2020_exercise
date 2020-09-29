import React from 'react'

const PersonForm = ({newName, newNum, handleNewName, handleNewNum, handleAddName}) => {
    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={newNum} onChange={handleNewNum} />
            </div>
            <div>
                <button type="submit" onClick={handleAddName}>add</button>
            </div>
        </form>
    )
}

export default PersonForm