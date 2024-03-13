import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([])



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleFlags = flag => {
    const newFlags = [...visitedFlags , flag];
    setVisitedFlags(newFlags)
    }

    const handleVisited = country => {
        const newVisited = [...visitedCountries , country];
        setVisitedCountries(newVisited)
    }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div>
                <h3>Visited Country : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisited={handleVisited}
                        handleFlags={handleFlags}
                        country={country}  ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;