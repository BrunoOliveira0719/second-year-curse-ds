import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchComponent from "./components/SearchComponent.jsx";

const baseURL = "https://restcountries.com/v3.1/"
const all = `${baseURL}all`

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  function SearchCoutry(search) {
    console.log(search)
    const country = data.find(country => {if (country.name.common === search) return search});
    
    if (!country) {
      setError("Country not found");
      return false;
    };
    
    setData([country]);
    return true;
  };


  setTimeout(useEffect(() => {
    axios.get(all)
    .then((response) => {
      if (!response) {
        throw new Error("Network response was not ok")
      }

      localStorage.setItem("countries", JSON.stringify(response.data))
      setData(response.data)
    })
    .catch((error) => {
      setError("Error in the request: " + error)
    })
  },[]), 30000)
  
  console.log(data)
  console.log(error)

  return (
    <div className="App">
      <SearchComponent setData={setData} SearchCoutry={SearchCoutry}/>
    
    <div className={data.length > 1 ? "main-app" : "main-app-unique"}>
      {data ? data.map((country) => {
        return (
          <div key={country.name.common} className={data.length > 1 ? "card" : "card-unique"}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.name.common} />
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        )
      }) : <h1>Loading...</h1>}
    </div>
    </div>
  )
}

export default App;
