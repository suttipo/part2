import Delete from "./Delete";
//import axios from 'axios'
//import useState from 'react';
const Persons = ({ persons, setPersons, setMessage }) => {

  console.log('ListPerson props', persons);
  /*
  const eraser = (id,name) => {
    console.log(id)
    console.log(name)
    let eras = prompt('delete',name);
    console.log('eras',eras);
    if(eras !== null){
      axios.delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        axios
        .get('http://localhost:3001/persons')
        .then(responds => {
        console.log('fulfilled')
        
      })
      
    })
    }
  <button onClick={() => eraser(person.id,person.name)}>delete</button>  
  }*/
  const mapPerson = persons.map((person, id) => {
    //console.log('person',person)
    return (
      <div key={id} style={{ padding: '5px' }}>
        <p style={{ display: 'inline', padding: "25px" }}>{person.name}  {person.number}   </p>
        <Delete
          id={person.id}
          name={person.name}
          setPersons={setPersons}
          persons={persons}
          setMessage={setMessage}
        />
      </div>

    )
  })

  return (
    <div>
      <h2>numbers</h2>
      {mapPerson}
    </div>

  )
}

export default Persons;