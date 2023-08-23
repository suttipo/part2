//import axios from "axios";
import personsSevice from "../services/persons";
//import { useState } from "react";

const Delete = ({id, name, setPersons, persons, setMessage}) => {
    //const [errorMessage, setErrorMessage] = useState('delete')
    const eraser = () => {
        console.log(id)
        console.log(name)
        let eras = window.confirm(`delete ${name}?`);
        console.log('eras', eras);
        if (eras === true) {
          personsSevice
          .eras(id)
            .then(() => {
                setPersons(persons.filter(ele => ele.id !== id).map(ele => ele));
                })
                .catch(err => {
                    console.log(err);
                    if(err.response.status === 404){
                        setMessage(`${name} has already been removed from server.`)
                    }
                    personsSevice
                    .getAll()
                    .then(responds => setPersons(responds.data))
                })
    
            }
        }
    
      
    
    return (
        <div style={{display:'inline'}}>
            <button onClick={eraser} >Delete</button>
        </div>
    )
}

export default Delete;