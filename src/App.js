import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react';
import City from './City';

function App() {

  const key = "1b71577f1e68940dae97e81bb05aaf49"
  const [city, setCity] = useState()
  const [search, setSearch] = useState("")

  useEffect(()=>{
    
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi()
  },[search])
  console.log(search)
  return (
    <div className="App">
      <div className='input-container'>
      <input onChange={(e)=>setSearch(e.target.value)} placeholder='City Name' type='text'></input>
      {city && <City city={city}></City>}
      </div>
    </div>
  );
}

export default App;
