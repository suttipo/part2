
const Total = ({parts}) => {
    //const {parts} = props.course;
    console.log('parts in Total',parts);
    return (
        <div>
            <p>Toal number of exercises...<b>{ parts.reduce((acc, current) => acc + current['exercises'], 0)}</b></p>
        </div>
    )
}

export default Total;