// import React, {useState} from "react";

// 2.********  Question: Create a functional component called Counter that displays a counter value and a button. The component should have an initial count prop and when the button is clicked, the counter value should increase by 1. Display the updated counter value on the screen.


/*function Home(props)
{
    const count =()=>
    {
        let n=9;
        let i=0;
        for(i=0; i<=n; i++){

            alert(i)
        }
        // alert("value is printeg")
    }
    return(
        <div>
             <button onClick={count}>Print</button>
        </div>
    )
}
export default Home;
*/




//  1.  ****** 1. Question: Create a functional component called Greeting that takes a nameprop and displays a greeting message with the name. For example, if the nameprop is "John", the component should display "Hello, John!".
/*


function Home(props){
    return(
        <div><h1>Hello, {props.name} </h1></div>
    )
}
export default Home;

*/



// 3. ******  Question: Create a functional component called Product that takes name,price, and quantity props and displays the product information in the format "Product: [name], Price: [price], Quantity: [quantity]". Assume the price prop is a number

/*
function Home(props)
{
    return(
        <div>
             <h1>Product name {props.name} </h1>
             <h1>price {props.price} </h1>
             <h3>quantity {props.quantity} </h3>
        </div>
    )
}
export default Home;
*/

// // 4.  Question: Create a functional component called TodoList that takes an array oftodos as a prop. Each todo object in the array has a id and task property. Display each task in an unordered list (<ul>) with each task as a list item (<li>).


/*
import React,{useState} from "react"
import { AiFillDelete } from 'react-icons/ai';



function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputvalue] = useState(''); 
     
    const addTodo =()=>{
        if(inputValue.trim()!=''){
            setTodos([...todos, inputValue]);
            setInterval('');
        }
    }
    const deleteTodo =(index)=>{
        const newTodos=todos.filter((_,i)=>i!==index);
        setTodos(newTodos);
    }

    return(
        <div className="M">
            <h1>To Do List</h1>
            <input id="P" type='text' value={inputValue}
            onChange={(e)=>setInputvalue(e.target.value)}
            placeholder='Enter Your Task...'/>
            <button className="Q" onClick={addTodo}>Add</button>
            <ul className="D">
                {todos.map((todo,index)=>(
                    <li className="A" key={index}>{todo}
                    <button className="B" onClick={()=>deleteTodo(index)}><AiFillDelete  size='20px'   ></AiFillDelete></button>
                   
                    </li>
                ))}
            </ul>
        </div>

    ) ;
}
export default Todo;
*/




// Question: Create a functional component called Weather that takes a city prop and displays the current weather condition for that city. You can assume the weather information is available as a string. Display the city name along with the weather condition.

// import axios from 'axios';
// import React,{useState, useEffect} from "react";
// // const API_KEY =`9a388c7d8e7e7e479ab56ac6bc818b72`;

// function Weather(){
//     const [data, setData]= useState({
//         celcius: 10,
//         name:'India',
//         humidity: 10,
//         speed:2
//     })

//     const [name, setName] =useState('');
//     // useEffect(()=>{
        
//     // },[])

//     const handleClick= () =>{
//         if(name!==""){
//             const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9a388c7d8e7e7e479ab56ac6bc818b72&units=metric`;

//         axios.get(apiUrl).then(res=>{
//             console.log(res.da)
//             setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
//         }).catch(err => console.log(err));
//         }
//     }

//     return (
//         <div className="S">
//             <input type="search" className="P" 
//             placeholder="Enter your city..."
//             onChange={e=> setName(e.target.value)} ></input>
//             <button className='U' onClick={handleClick}>search</button>
//             <h2 className="text-4xl text-center"></h2>
//             <div>{data.celcius}℃</div>
//             <div>{data.name}</div>
//             <div>humidity {data.humidity}%</div>
//             <div> wind {data.wind}km/h</div>
//         </div>
//     )   
// }
// export default Weather;




// ********** The state for our timer
// import React, { useState, useRef, useEffect } from 'react'
 
// const App = () => {
//     // We need ref in this, because we are dealing with JS setInterval to keep track of it and stop it when needed

//     const Ref = useRef(null);
//     const [timer, setTimer] = useState('00:00:00');
 
//     const getTimeRemaining = (e) => {
//         const total = Date.parse(e) - Date.parse(new Date());
//         const seconds = Math.floor((total / 1000) % 60);
//         const minutes = Math.floor((total / 1000 / 60) % 60);
//         const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//         return {
//             total, hours, minutes, seconds
//         };
//     }
// const startTimer = (e) => {
//     let { total, hours, minutes, seconds }
//                 = getTimeRemaining(e);
//     if (total >= 0) {

//         // update the timer check if less than 10 then we need to add '0' at the beginning of the variable
//         setTimer(
//             (hours > 9 ? hours : '0' + hours) + ':' +
//             (minutes > 9 ? minutes : '0' + minutes) + ':'
//             + (seconds > 9 ? seconds : '0' + seconds)
//         )
//     }
// }
// const clearTimer = (e) => {
 
//     // If you adjust it you should also need to adjust the Endtime formula we are about to code next   
//     setTimer('00:00:10');

//     // If you try to remove this line the updating of timer Variable will be after 1000ms or 1sec
//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//         startTimer(e);
//     }, 1000)
//     Ref.current = id;
// }
// const getDeadTime = () => {
//     let deadline = new Date();

//     // This is where you need to adjust if you entend to add more time
//     deadline.setSeconds(deadline.getSeconds() + 10);
//     return deadline;
// }

// // We can use useEffect so that when the component mount the timer will start as soon as possible

// // We put empty array to act as componentDid mount only
// useEffect(() => {
//     clearTimer(getDeadTime());
// }, []);
// return (
//     <div className="App">
//         <h2>{timer}</h2>
//         <button onClick={onClickReset}>Reset</button>
//     </div>
// )
// }



    







// {timerComponents.length ? timerComponents : <span>Time's up!</span>}


// function Home() {

//     function handleChange(event) {
//       console.log(event.target.value);
//     }
    
//     return (
//       <input name="firstName" onChange={handleChange} />
//     );
// }
  
// export default Home;



// Adding Events 
// function Home(){
//     const count=()=>{
//         alert("i am counting demo")
//     }
//     return(
//         <button onClick={count}>Count a demo</button>
//     );
// }
// export default Home;


// function Home(){
//     const count=(a)=>{
//         alert(a)
//     }
//     return(
//         <div>
//             <button onClick={()=>count("hello")}>Count a demo</button>
//         </div>
//     );
// }
// export default Home;



// Event Handling 
// function Home(){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('Clicked');
//     }
//     return(
//         <form onSubmit={handleClick}><button type="submit">sumbmit</button></form>
//     );
// }
// export default Home;




// class EventBind extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             steps: 0
//         };
//         this.clickHandler = this.clickHandler.bind(this);
//     }
//     clickHandler(){
//         this.setState({
//             steps: this.state.steps + 1
//         });
//     }
//     render(){
//         return(
//             <><div>{this.state.steps}</div>
//             <button onClick={this.clickHandler}>Click</button>
//             </>
//         );
//     }
// }
// export default Home;




// const Home=()=>{
//     const[number, counting]=useState(0);
//     console.log(number)
//     return(
//         <div>
//             <button onClick={()=>counting(number+1)}>ICREMENT</button>
//             <h2>{number}</h2>
//         </div>
//     );
// }
// export default Home;


// function Home(){
//     const showhange =(event)=>{
//         console.log(event.target.value);
//     }
//     return(
//         <div>
//             <input type="text" name="t1" onChange={showhange}></input>
//         </div>
//     );
// }
// export default Home;







// Implement a countdown timer component using useState. The timer should start at a specified time (in seconds) and count down to 0, updating every second.

import { useState } from 'react'

// import './Home.css'
/*
import React, { useState, useRef, useEffect } from 'react'
const Home = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds 
        };
    }
const startTimer = (e) => {
    let { total, hours, minutes, seconds }
                = getTimeRemaining(e);
    if (total >= 0) {
        setTimer(
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
}
const clearTimer = (e) => {
    setTimer('00:00:00');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
}
const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 3600);
    return deadline;
}


useEffect(() => {
    clearTimer(getDeadTime());
}, []);
const onClickReset = () => {
    clearTimer(getDeadTime());
}

return (
    <div className="count">
        <h2>{timer}</h2>
        <button onClick={onClickReset}>Reset</button>
    </div>
)
}
export default Home
*/







// Create a dynamic form component that receives an array of form fields as props (each field has a label, type, and initial value). Use useState to manage the form state and update it as users interact with the form.


import React from 'react'

const Home = () => {
    const[inputfields, setinputfields]=useState([{name:'', age:''}])

   const handelform= (index, e) =>{
    let data=[...inputfields];
    data[index][e.target.name] = e.target.value;
    setinputfields(data);

   }

   const addFields =()=>{
    let newfiled ={name:'', age:''}
    setinputfields([...inputfields, newfiled])
   }

   const submit = (e) => {
    e.preventDefault();
    console.log(inputfields)
}
const remove =(index) =>{
           let data =[...inputfields];
           data.splice(index,1)
           setinputfields(data)
}
  return (
    <div>
            {inputfields.map((input, index)=>{
                    return(
                        <div key={index}>
                            <input name='name' placeholder='Enter your name' value={input.name} 
                            onChange={event => handelform(index,event)}></input>
                            <input name='age' placeholder='Enter your age' value={input.age}
                            onChange={event => handelform(index,event)}></input>
                            <button onClick={addFields}>Add more</button>
                            <button onClick={submit}>submit</button>
                            <button onClick={remove}>Remove</button>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Home;
