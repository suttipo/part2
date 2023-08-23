import { useState, useEffect } from "react";
import axios from "axios";
import Show from './Show'
//let data = ''
const CountryResult = ({ name }) => {
    const [foundCountry, setFoundCountry] = useState('');
    const [dataWeather, setDataWeather] = useState('');
    const [nameFoundCountry, setNameFoundCountry] = useState('');

    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
            .then(res => {
                setFoundCountry(res.data);
                setNameFoundCountry(res.data.name);
                axios.get(` http://api.weatherapi.com/v1/current.json?key=664aa5c61cbe45a784d155246231608&q=${res.data.capital}`)
                    .then(res => {
                        console.log('res', res.data);
                        setDataWeather(res.data);
                        //console.log('dataWeather',dataWeather)
                    })
                    .catch(err => console.log(err.message))
                
            })
            .catch(err => console.log(err.message))
    }, [name])

    // const getWeather = (capital) => {
    //     axios.get(` http://api.weatherapi.com/v1/current.json?key=664aa5c61cbe45a784d155246231608&q=${capital}`)
    //     .then(res => {
    //         console.log('weather data',res.data)
    //         setDataWeather(res.data)})
    //     .catch(error => console.log(error.massages))
    //     //console.log('data',data)
    // }
    foundCountry && console.log('data', dataWeather);

    return (
        <div>{(foundCountry&&dataWeather) &&
            <Show
                foundCountry={foundCountry}
                nameFoundCountry={nameFoundCountry}
                dataWeather={dataWeather}
            />
        }
        </div>
    )
}

export default CountryResult;