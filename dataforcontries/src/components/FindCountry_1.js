
import { useState } from 'react';
//import axios from 'axios';

const FindContry = ({ ele, getName, data }) => {
    const [toggle, setToggle] = useState(false);
    const [valueBtn, setValueBtn] = useState('show');
    const [foundCountry, setFoundCountry] = useState({});
    const [toShow, setToShow] = useState('')
    let show = null;
    const mapCountry = (ele, data) => {
        return data.filter(a => a.name.common === ele);
    }
    const handleToggleShow = (e) => {
        e.preventDefault();
        console.log('toggle before', toggle)
        setToggle(current => !current);
        console.log('toggle after', toggle);
        toggle ? setValueBtn('show') : setValueBtn('close');
        console.log('valueBtn', valueBtn, toggle)

        //valueBtn === 'show' ? setFoundCountry(() => mapCountry(ele,data)) : setFoundCountry({})
        show = valueBtn === 'show' ? showFounCountry() : setFoundCountry({});
        console.log('show in handle', show)
        setToShow(show);
    }
    console.log('founCountry', foundCountry);
    const showFounCountry = () => {
        //console.log('found',foundCountry)
        let found = mapCountry(ele, data);
        console.log('found', found)
        
        return (
            <div>
                <h4>Capital: {found[0].capital}</h4>
                <h4>Are: {found[0].area}</h4>
                <h4>Languages:</h4>
                <ul>
                    {Object.values(found[0].languages).map(ele => <li>{ele}</li>)}
                </ul>
                <img src={found[0].flags.png} alt={found[0].flags.alt} />
            </div>
        )
    }
    //show = foundCountry !== {} && showFounCountry();
    console.log('show out', show);


    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ paddingRight: '20px' }}> {ele}  </p>
                <button onClick={handleToggleShow}>{valueBtn}</button>
            </div>
            <div style={{backgroundColor:'lightblue'}}>{toShow}</div>
        </div>

    )
}

export default FindContry;