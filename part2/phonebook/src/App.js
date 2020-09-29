import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons';
import personService from './services/persons'
import Notification from './components/Notification';
import Error from './components/Error'
import './index.css'

const App = () => {

  const [ persons, setPersons ] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  },[])

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('') 

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const phoneList = filterName === ""
  ? persons
  : persons.filter(
    item => item.name.toLowerCase().search(filterName.toLowerCase()) !== -1
  )


  const handleAddName = (event) => {
    event.preventDefault()
    const phoneObject = {
      name: newName,
      number: newNum,
    }

    personService
      .create(phoneObject)
      .then(initialPerson => {

        const isExist = {}

        persons.forEach(({name}) => {
          isExist[name] = name === newName ? true : false
        })
    
        isExist[newName] 
          ? alert(`${newName} is already added to phonebook`)
          : setPersons(persons.concat(initialPerson))
        setNewName('')
        setNewNum('')
          })
      .then(()=> {
        setMessage(          
          `'${phoneObject.name}' was added to server`        
          )        
          setTimeout(() => 
          {          
            setMessage(null)        
          }, 5000)
      })
  }

  const onDelete = (id) => () => {
    const deletedPerson = persons.find(n=> n.id === id)
    if(window.confirm('Are you sure to delete')){
      personService
        .remove(id)
        .then(
          setPersons(persons.filter(person => person.id !== id))
        )
        .catch(error=> {
          setErrorMessage(          
            `Information of '${deletedPerson.name}' has already been deleted from server`        
            )    
            setTimeout(() => 
            {          
              setErrorMessage(null)        
            }, 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification noti={message} />
      <Error message={errorMessage} />

      <Filter handleFilterName={handleFilterName} filterName={filterName} />

      <h3>add a new</h3>

      <PersonForm
        newName={newName}
        newNum={newNum}
        handleNewName={handleNewName}
        handleNewNum={handleNewNum}
        handleAddName={handleAddName}
      />
      
      <h3>Numbers</h3>
      
      <Persons phoneList={phoneList} onDelete={onDelete} />
    </div>
  )
}

export default App