import React, { useEffect, useState } from 'react'
import '../App.css';
import { TiWeatherCloudy } from "react-icons/ti";

const TempApp = () => {


    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2e4422510bf8327681942d2cdc19d9ca&units=metric`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])



    return (
        <div className='container'>
            <div className='box'>
                <div className='boxData'>
                    <input type='search' onChange={(e) => { setSearch(e.target.value) }} />
                </div>

                {!city ? (
                    <p style={{textAlign:"center", fontSize:"20px"}}>No Data Found</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <TiWeatherCloudy style={{ fontSize: '40px' }} />{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°C
                            </h1>
                            <h3 className='temp_appro'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default TempApp;