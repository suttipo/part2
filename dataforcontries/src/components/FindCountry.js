import { useState } from "react"
import Show from './Show'
import CountryResult from "./CountryResult";

const FindContry = ({ ele }) => {

    const [toggle, setToggle] = useState(false);
    const [valueBtn, setValueBtn] = useState('show');
    // const [foundCountry, setFoundCountry] = useState('');
    // const [nameFounCountry, setNameFoundCountry] = useState('');

    //let show = null;
    // const clearCon = () => {
    //     setFoundCountry('');
    //     setNameFoundCountry('');
    //     //show = null
    // }
    const handleToggleShow = (e) => {
        e.preventDefault();
        //switch toggle true or false
        setToggle(current => !current);
        console.log('toggle', toggle, valueBtn);
        //set value of button 
        toggle ? setValueBtn('show') : setValueBtn('close');
        // !toggle ? getName(ele).then(res => {
        //     setFoundCountry(res.data);
        //     setNameFoundCountry(res.data.name);

        //     console.log(res.data.name.common)
        // }) : clearCon();
        console.log('toggle', toggle, valueBtn);

    }

    // console.log('foundContry', foundCountry)
    // console.log('nameFoundCountry', nameFounCountry.common)

    // show = (
    //     <div 
    //         style={{ backgroundColor: 'lightblue' }}>
    //         <p>Country: {nameFounCountry.common}</p>
    //         <p>Area: {foundCountry.area}</p>
    //         languages:
    //         {foundCountry&&Object.values(foundCountry.languages)
    //         .map((ele,id) => <li key={id}>{ele}</li>)}
    //         <img src={foundCountry&&foundCountry.flags.png} alt='flags' wide={60} height={60}/>
    //     </div>
    // )


    //console.log('show', show)
    return (

        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ paddingRight: '20px' }}> {ele}  </p>
                <button onClick={handleToggleShow}>{valueBtn}</button>
            </div>
            <div>
                {toggle &&
                    <CountryResult
                        name={ele}
                    />}
            </div>
        </div>

    )

}

export default FindContry
//https://www.weatherapi.com/my/ apikey 664aa5c61cbe45a784d155246231608