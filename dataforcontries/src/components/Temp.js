

const Temp = ({dataWeather}) => {
    console.log('dataWeather',dataWeather)
    return(
        <div style={{backgroundColor:'grey'}}>
        <h3>Weather</h3>
        <p>current temparator: {dataWeather.current.temp_c} celsius</p>
                <p>{dataWeather.current.condition.text}</p>
                <img src={dataWeather.current.condition.icon} alt='icon' wide={100} height={100}/>
        </div>
    )
}

export default Temp;