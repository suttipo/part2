import { useState, useEffect } from "react";
import axios from 'axios';
//import Show from './components/Show'
import FindContry from "./components/FindCountry";
import CountryResult from "./components/CountryResult";
//import Show from "./components/Show";
//import FindContry from "./components/FindCountry";
//let last = ''
function App() {
  const [data, setData] = useState(null);
  const [inputChangeValue, setInputChangValue] = useState("");
  const [country, setCountry] = useState([]);

  //const [result_1, setResult_1] = useState('')


  //when start useEffect require data to server with method get
  //eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        //respose.data set to data
        setData(response.data);
        console.log('data', data)

      })
      .catch(error => console.log('error', error.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('data', data)

  let result = [];
  //getName function require server with param name 
  const getName = (name) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      //when server response set findContry with response.data
      //.then(response => funcSetState(() => response.data))
      .catch(error => console.log('error', error.message))//
  }
  //handleInputChange function for arttibute onchange input 
  const handleInputChange = (e) => {
    e.preventDefault();
    //console.log('inputChangeValue',inputChangeValue)
    //when input change assign to inputChangeValue
    setInputChangValue(e.target.value)
    //console.log('inputChangeValue', inputChangeValue, inputChangeValue.length);
    //and setCount with count + 1
    //setCount(count + 1);
    //console.log('count', count);
    //create regex with inputChangeValue assign to find
    const find = new RegExp(inputChangeValue);
    console.log('find', find);
    //condition if inputChangeValue is one char map data to result
    //and setCount with 1
    if (inputChangeValue.length === 1) {
      result = data.map(ele => ele.name.common);
      console.log('result', result)
      //setCount(1);
      //if inputChangeValue more than one char spreed country to result  
    } else {
      result = [...country]
    }
    console.log('result before', result)

    //filter each element of result with find regex test element
    result = result.filter(ele => find.test(ele));
    //spreed result to country 
    setCountry([...result]);
    //condition result has length equal 1 require to server with getName
    result.length === 1 && getName(result[0]);

  }
  //console.log('country', country);

  //console.log('inputChangeValue',inputChangeValue)
  //foundCountry map country if length !== 1 if true show FindCountry component
  const foundCountry = country.length > 1 &&
    country.map((ele, index) => {
      return (
        <div key={index}>
          <FindContry ele={ele}  />
        </div>
      )
    })
  //console.log('founcountry', foundCountry.length);
  //console.log('country', country)


  return (
    <div className="App">
      <h1>React</h1>
      <div>
        find countries:
        <input
          type='text'
          onChange={handleInputChange}
          value={inputChangeValue}
        />

        {/*condition length of country > 9 return tag p
        if === 1 return CountryResult compo other return foundCountry */}

        {
          country.length > 9 ?
            <p>Too many country specify new filter.</p> :
              country.length === 1 ?
              <CountryResult name={country[0]} getName={getName} /> :
              inputChangeValue === '' ?
                null :
                foundCountry
        }


      </div>
    </div>
  );
}

export default App;
