
const Part = ({name,exercises}) => {
    //console.log('Parts',props);
    return (
    <div>
        <h3>{name}</h3>
        <p>Exercises {exercises}</p>
    </div>
    )
}

export default Part;