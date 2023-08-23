import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
const [data, setData] = useState(null);
  const [country, setCountry] = useState([]);
  const [prevResult, setPrevResult] = useState([]);
  const [count, setCount] = useState(0);
  //const [findCountry, setFindCountry] = useState('');
  let name = '';
  let res = "";
  let result = [];

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setData(response.data);
        console.log('data', data)

      })
  }, []);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //data[ele].name.common
  //data != null && (result = [...data]);
  //console.log('result',result)
  //let count = 0;
  //let prevResult = [];
  const handleInputChange = (e) => {
    setCount(count+1);
    result = [...country];
    console.log('count',count)
    console.log('result',result);
    //prevResult = [...country];
    res = e.target.value;
    console.log('res', res, res.length);
    console.log('prevResult', prevResult);
    
    if (res.length === 1 ) {
      result = data.map(ele => ele.name.common);
      setCount(0);
    } else if (res.length > 1 && res.length < count) {
      console.log('in if')
      setCount(count-1);
      result = [...prevResult]
    }else{
      setPrevResult(...country);
    }
    //res === [] && (result = [...data]);
    //let test = null;
    
    console.log('prevResult',prevResult)
    console.log('result', result)
    console.log('e.target.value', e.target.value);
    res = e.target.value;
    console.log('res', res);
    console.log('count ',count);
    console.log('result before filter', result);
    //console.log('prev before filter', prevResult)
    //result = result.filter(ele => ele.name.common[res.length - 1] === res[res.length - 1]);
    result = result.filter(ele => ele[res.length - 1] === res[res.length - 1]);
    console.log('result', result);
    if (result.length !== 0) {
      // console.log('in if')
      // setCountry([...prevResult]);
      setCountry([...result])
    }
       
    console.log('result', result);
    //console.log('prevResult', prevResult);
    console.log('res', res)
    
    

  }
  //console.log('data',data)
  // findCountry = [...country];
  // console.log('findcount try',findCountry)
  return (
    <div className="App">
      <h1>React</h1>
      <div>
        find countries:<input type='text' onChange={handleInputChange} />
        {/*{findCountry.map(ele => <p>{ele.name.common}</p>)}*/}
        {country.map((ele, id) => <div key={id}>{ele}</div>)}
      </div>
    </div>
  );
}

export default App;