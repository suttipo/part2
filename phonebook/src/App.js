import { useState, useEffect } from "react";
//import axios from "axios";
import personsSevice from "./services/persons";
import Persons from "./compernent/Persons";
import Filter from "./compernent/Filter";
import PersonForm from "./compernent/PersonForm";
import Notification from "./compernent/Notification";


function App({ datas }) {
  /*
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);*/
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);


  useEffect(() => {
    console.log('useEffect')
    personsSevice
      .getAll()
      .then(responds => {
        console.log('fulfilled')
        setPersons(responds.data);

      })
  }, [])
  const showMessage = () => {
    setTimeout(() => {
      setMessage(null);
    }, 5000)
  }
  message !== null && showMessage()

  return (
    <div>

      <h1>Phonebook</h1>
      <Notification message={message} />
      <Filter
        persons={persons}
      />


      <h2>Add a new</h2>
      <PersonForm
        setPersons={setPersons}
        persons={persons}
        setMessage={setMessage}
      />


      <Persons
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
      />

    </div>
  );
}

export default App;
