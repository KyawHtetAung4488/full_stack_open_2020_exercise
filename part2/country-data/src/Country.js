import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Country = ({country}) => {

    const api_key = process.env.REACT_APP_API_KEY

    const [ weather, setWeather ] = useState('')

    useEffect(() => {
        axios
        .get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.capital}`)
        .then((response)=>{
            setWeather(response.data)
        })
    },[country])

    const current = { ...weather.current } 
    const condition = {...current.condition}

    return (
        <div>
            <h2>{ country.name }</h2>
            <p>capital { country.capital }</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
              {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>

            <img src={country.flag} alt={country.name} height="100" />

            <h2>weather in { country.capital }</h2>

            <p>temperature : { current.temp_c } Celcius</p>
            <img src={condition.icon} alt={condition.text} />
            <p><b>wind:</b> { current.wind_mph } mph direction { current.wind_dir} </p>
        </div>
    )
}

export default Country