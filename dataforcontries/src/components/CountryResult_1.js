import { useState, useEffect } from "react";
let data = ''
const CountryResult = ({ele}) => {
    const [foundCountry, setFoundCountry] = useState('');
    const [nameFounCountry, setNameFoundCountry] = useState('');
    useEffect(() => {
        getName(ele).then(response => {
            setFoundCountry(response.data);
            setNameFoundCountry(response.data.name);
            data = response.data;
            console.log('name', data.name.common)
        })
    }, [ele,getName])
    console.log('foundCountry',foundCountry,nameFounCountry)
    //console.log('fondCountry.name.common', foundCountry.capitalInfo.latlng[0],
    //foundCountry.capitalInfo.latlng[1])
    let show = (
        <div style={{ backgroundColor: 'lightblue' }}>
            <p>Country: {nameFounCountry.common}</p>
            <p>Capital: {foundCountry.capital}</p>
            <p>Area: {foundCountry.area}</p>
            languages:
            {foundCountry && Object.values(foundCountry.languages)
                .map((ele, id) => <li key={id}>{ele}</li>)}
            <img src={foundCountry && foundCountry.flags.png} alt='flags' wide={60} height={60} />
        </div>
    )
    
    return (
        <div>{show}</div>
    )
}

export default CountryResult;