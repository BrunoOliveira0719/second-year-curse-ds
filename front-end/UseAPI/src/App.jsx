import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const baseURL = "https://restcountries.com/v3.1/"
const all = `${baseURL}all`

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    axios.get(all)
    .then((response) => {
      if (!response) {
        throw new Error("Network response was not ok")
      }

      setData(response.data)
    })
    .catch((error) => {
      setError("Error in the request: " + error)
    })
  },[])
  
  console.log(data)
  console.log(error)

  return (
    <div className="main-app">
      {data ? data.map((country) => {
        return (
          <div key={country.name.common} className="card">
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.name.common} />
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        )
      }) : <h1>Loading...</h1>}
    </div>
  )
}

export default App;
