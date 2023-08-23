//import {useState} from 'react'
import Temp from './Temp'

const Show = ({ foundCountry, nameFoundCountry, dataWeather }) => {
    console.log('dataweather',dataWeather)
    return (
        <div
            style={{ backgroundColor: 'lightblue' }}>
            <>
                <p>Country: {nameFoundCountry.common}</p>
                <p>Capital: {foundCountry.capital}</p>
                <p>Area: {foundCountry.area}</p>
                languages:
                {foundCountry && Object.values(foundCountry.languages)
                    .map((ele, id) => <li key={id}>{ele}</li>)}
                <img src={foundCountry && foundCountry.flags.png} alt='flags' wide={100} height={100} />
            
            </>

            <Temp dataWeather={dataWeather} />

        </div>
    )
}

export default Show;