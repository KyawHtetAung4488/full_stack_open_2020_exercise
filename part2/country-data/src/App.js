import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './Country'

const  App = () =>  {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  },[])


  const [ searchCountry, setSearchCountry ] = useState('')

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }

  const handleShow = (country) => () => {
    setSearchCountry(country)
  } 

  const searchList = searchCountry === ""
  ? countries
  : countries.filter(
    item => item.name.toLowerCase().search(searchCountry.toLowerCase()) !== -1
  )

  const len = searchList.length

  return (
   <div>
     find searchList <input type="text" onChange={handleSearchCountry} />
     {
       len > 10 
       ? <p>Too Many matches, specify another filter</p>
       : (len < 10 && len > 1)
          ? searchList.map(country => 
              <p key={country.name}>{ country.name } <button onClick={handleShow(country.name)}>show</button></p>
            )
          : len === 1 
            ? searchList.map(country => {
              return (
                <Country  key={country.name} country={country} />
              )
            })
            : <p>Nothing found</p>
     }
   </div>
  );
}

export default App;
