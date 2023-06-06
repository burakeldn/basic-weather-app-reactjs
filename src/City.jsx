import React from 'react'

export default function City({city}) {

  return (
    <div>
            <h3>{city.name}</h3>
            <h3>{city.main.temp}</h3>
            <h3>{city.weather[0].main}</h3>
    </div>
  )
}
