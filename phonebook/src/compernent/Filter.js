import { useState } from "react";

const Filter = ({ persons }) => {
    const [serchNames, setSerchName] = useState('');
    let listSerchName = null;
    
    listSerchName = persons.filter((person) => person.name === serchNames).map((person) =>
        <p key={person.id}>{person.name} {person.number}</p>)

    const handleSerchName = (e) => {
        e.preventDefault();
        console.log('handleSerchName', e.target);
        setSerchName(e.target.value);
        console.log('serchNames', serchNames)
    }
    console.log('listSerchName', listSerchName);
    return (
        <div>
            filter show with
            <input
                type="text"
                onChange={handleSerchName}
                value={serchNames}
            />
            {listSerchName}
        </div>
    )
}

export default Filter;