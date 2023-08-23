
const Header = (props) => {
    //console.log(`name ${name}`)
    const {name} = props.course;
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Header;