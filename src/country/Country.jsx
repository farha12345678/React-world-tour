import { useState } from 'react';
import './Country.css'
const Country = ({ country , handleVisited ,handleFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        setVisited(!visited)
    }
const passParam = () => handleVisited(country)

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'Red': 'black'}}>Name : {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area} </p>
            <p>Code : {cca3} </p>
            <button  onClick={passParam} style={{marginBottom : '10px', backgroundColor : 'blue', color : 'white'}}>Mark as visited</button>
            <br />
            <button onClick={ () =>handleFlags(country.flags.png)} style={{ marginBottom : '10px', backgroundColor : 'green', color : 'white'}}>
                Add the flag
            </button>
            <br />
            <button style={{backgroundColor : 'gray', color : 'white'}} onClick={handleVisit}>{visited? 'Visited' : 'Going'}</button>
            {
                visited? 'I have visited' : 'I want to visit'
            }
        </div>
    );
};

export default Country;