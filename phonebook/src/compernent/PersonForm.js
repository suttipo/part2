import personsSevice from '../services/persons'
import { useState } from "react";

const PersonForm = ({ setPersons, persons,setMessage }) => {

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleNewName = (e) => {
        e.preventDefault();
        console.log(e.target);
        setNewName(e.target.value);
    }

    const handleNewPhone = (e) => {
        e.preventDefault();
        console.log('handleNewPhone', e.target.value);
        setNewPhone(e.target.value);
    }

    // const showMessage = (sentens) => {
    //     setMessage(sentens);
    //     setTimeout(() => {
    //         setMessage(null);
    //     },5000)
    // }

    const handleOnSubmitPerson = (e) => {
        e.preventDefault();
        //find same name 
        //console.log('newName',newName)
        const newPerson = {
            name: newName,
            number: newPhone
        }
        console.log('persons',persons);
        const checkNameInPersons = persons.filter(person => person.name === newName);
        console.log('checkNameInPersons', checkNameInPersons);


        if (checkNameInPersons.length !== 0) {
            //console.log('inif')
            window.confirm(`${newName} is already added to phonebook,replace the old number
            with a new one?`) ? personsSevice
                .update(checkNameInPersons[0].id, newPerson)
                .then((responds) => {
                    setMessage(`add new number ${newPhone}`);
                    setPersons(persons.map(ele => ele.id !== checkNameInPersons[0].id ? ele : responds.data))
                    setNewName('');
                    setNewPhone('');
                })
                .catch(err => {
                    console.log('error',err.response.status)
                    if(err.response.status === 404){
                        setMessage(`information of ${newPerson.name} has already been removed from server`)
                    }
                })
                

                : setNewName('');
            setNewPhone("");
            

        } else {
            personsSevice
                .create(newPerson)
                .then((responds) => {
                    setMessage(`add name ${responds.data.name} and number ${responds.data.number}`)
                    setPersons(persons.concat(responds.data));
                    setNewName('');
                    setNewPhone('');
                })
        }

    }


    return (
        <div>
            <form onSubmit={handleOnSubmitPerson}>
                <div>
                    name: <input
                        type='text'
                        onChange={handleNewName}
                        value={newName}
                    />
                </div>
                <div>
                    Numbers: <input
                        type='text'
                        onChange={handleNewPhone}
                        placeholder="123-456-7890 "
                        value={newPhone}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm;