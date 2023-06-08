import React from 'react'

export default function City({city}) {

  return (
    <div>
            <h3>City: {city.name}</h3>
            <h3>Temperature: {city.main.temp}</h3>
            <h3>Weather is {city.weather[0].main}</h3>
    </div>
  )
}
