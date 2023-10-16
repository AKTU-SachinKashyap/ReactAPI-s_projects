// // const API_KEY =`9a388c7d8e7e7e479ab56ac6bc818b72`;


import axios from 'axios';
import React,{useState, useEffect} from "react";
import './Weather.css';



function Weather(){
    const [data, setData]= useState({
        celcius: 10,
        name:'India',
        humidity: 10,
        speed:2
    })

    const [name, setName] =useState('');
    

    const handleClick= () =>{
        if(name!==""){
            const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9a388c7d8e7e7e479ab56ac6bc818b72&units=metric`;

        axios.get(apiUrl).then(res=>{
            // console.log(res.da)
            setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
        }).catch(err => console.log(err));
        }
    }

    return (
        <div className="S">
            <input type="search" className="P" 
            placeholder="Enter your city..."
            onChange={e=> setName(e.target.value)} ></input>
            <button className='U' onClick={handleClick}>search</button>
            <h2 className="text-4xl text-center"></h2>
            <div>{data.celcius}℃</div>
            <div>{data.name}</div>
            <div>humidity {data.humidity}%</div>
            <div> wind {data.wind}km/h</div>
        </div>
    )   
}
export default Weather;
    
