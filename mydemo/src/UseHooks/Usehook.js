// import React, { useState } from 'react'

// import axios from "axios";
import { useEffect, useReducer } from "react";
import { useState } from "react";

// function Usehook() {
//     const [count, setvalue]=useState(0);
//     console.log(count)
//   return (
//     <div>
//       <button onClick={()=>setvalue(count+1)}>value</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Usehook




// 2. *****  Todo List: Develop a React component for managing a simple todo list. It should allow users to add new tasks, mark tasks as completed, and remove tasks from the list.

// function Usehook() {
//     const [Todo, setTodo]=useState([]);
//     const [inputValue, setInputvalue]=useState('');

//     const addTodo=()=>{
//         if(inputValue.trim()!=='')
//         {
//         setTodo([...Todo,inputValue])
//         setInterval('');
//         }
//     }

//     const deleteTodo=(index)=>{
//       const newTodos=Todo.filter((_,i)=>i!==index);
//       setTodo(newTodos);
//     }

//   return (
//     <div>
//       <form>
//         <input type='text' value={inputValue} onChange={(e)=>setInputvalue(e.target.value)} placeholder='Enter Your texk...'></input> 
//         <button onClick={addTodo} >Add</button>
//         <ul>
//           {Todo.map((Todo,index)=>(
//           <li key={index} >{Todo}
//           <button onClick={()=>deleteTodo(index)}>deleteTodo</button>
//           </li>
//           ))}
//         </ul>
//       </form>
//     </div>
//   )
// }

// export default Usehook;



// 3.*******   Toggle Component: Design a React component that toggles between two states. For example, it can display a "Show" button when in a hidden state and a "Hide" button when in a visible state. Clicking the button should toggle between the states.


// function Usehook() {
//   const [toggle, setToggle]=useState(true)
//   return (
//     <div>
//       <>
//   <button onClick={()=>setToggle(!toggle)}>submit</button>
//   {toggle&&(<ul>
//     <li>an item</li>
//   </ul>)}
//   </>
//     </div>
//   )
// }

// export default Usehook



// 4.    ******* . Input Validation: Build a React component that contains an input field. It should display an error message if the user submits the form with an empty input field.



// function Usehook() {
//   const Error=()=>{
//     alert("this is error");
//   }
//   return (
//     <div>
//       <input type='text' placeholder='Enter The Text'></input>
//       <button onClick={Error}>sumbmit</button>
//     </div>
//   )
// }

// export default Usehook



// 5.   ******  User Registration: Develop a React component that collects user registration details, such as name, email, and password, and validates the inputs before allowing submission. Display error messages for invalid or missing information.

// function Usehook() {
//   const [name, setName] =useState('')
//   const [age, setAge] =useState('')
//   const [email, setEmail] =useState('')
//   const [password, setPassword] = useState('')
//   const [confPassword, setConfPassword] = useState('')


//   const handleChange=(e)=>{
//     setName(e.target.value);
//   }
//   const handleAgeChange=(e)=>{
//     setAge(e.target.value);
//   }
//   const handleEmailChange=(e)=>{
//     setEmail(e.target.value);
//   }
//   const handlePasswordChange=(e)=>{
//     setPassword(e.target.value);
//   }
//   const handleConfPasswordChange=(e)=>{
//     setConfPassword(e.target.value);
//   }

//   const handleSubmit=(e)=>{
//     if(password!=confPassword){
//       alert("password Not Match")
//     }else{
//       alert('A from was sumitted with Name:"'+ name +'", Age:"'+age+'" and Email:"' + email+'"');
//     }
//     e.preventDefault();
//   }



//   return (
//     <div>
//       <form onSubmit={(e) =>{handleSubmit(e)}}>
//         <label>
//       Name:
//       <input type='text' value={name} onChange={(e)=>
//       {handleChange(e)}} placeholder='Enter Your Name'></input>
//       </label>
//       <br></br>


//       <label>
//       Email:
//       <input type='Email' placeholder='Enter Your Email' value={email} required onChange={(e)=>{ handleEmailChange(e)}}></input>
//       </label><br></br>


//         password:
//       <label>
//       <input type='password' placeholder='Enter Your Password' value={password} required onChange={(e)=>{handlePasswordChange(e)}}></input>
//       </label><br></br>


//       <label>
//       confirm password:
//       <input type='password' value={confPassword} placeholder='Enter Your Password' required   onChange={(e)=>{handleConfPasswordChange(e)}}></input>
//       </label><br></br>
     

//       <label>
//       Age:
//        <input type='password' value={age} placeholder='Enter Your Password' required
//      onChange={(e)=>{handleAgeChange(e)}}></input><br></br>
//       </label>


//        <input type='submit' value="Submit"></input>
      
//     </form>
//     </div>
//   )
// }

// export default Usehook



// 1. useState: Create a component that generates a random color in RGB format and displays it on the screen. Use useState to manage the color state and update it when a button is clicked.


// const RandomColorDisplay = () => {

//   const [randomColor, setRandomColor] = useState(generateRandomColor());

//   function generateRandomColor() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     return `rgb(${red}, ${green}, ${blue})`;
//   }

 
//   function handleButtonClick() {
//     const newRandomColor = generateRandomColor();
//     setRandomColor(newRandomColor);
//   }

//   return (
//     <div>
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           backgroundColor: randomColor,
//           margin: '20px',
//         }}
//       ></div>
//       <button onClick={handleButtonClick}>Generate Random Color</button>
//     </div>
//   );
// };

// export default RandomColorDisplay;




// 2.******** useReducer: Build a component that simulates a simple game where the user rolls a dice. Use useReducer to manage the state of the dice value and display it on the screen when the user clicks a "Roll Dice" button.



// import React, { useReducer } from 'react';
// const ROLL_DICE = 'ROLL_DICE';


// const diceReducer = (state, action) => {
//   switch (action.type) {
//     case ROLL_DICE:
//       return Math.floor(Math.random() * 6) + 1; 
//     default:
//       return state;
//   }
// };

// const DiceGame = () => {
//   const [diceValue, dispatch] = useReducer(diceReducer, 1);

//   const handleRollDice = () => {
//     dispatch({ type: ROLL_DICE });
//   };

//   return (
//     <div>
//       <h2>Roll the Dice Game</h2>
//       <div>
//         <p>Dice Value: {diceValue}</p> 
//         <button onClick={handleRollDice}>Roll Dice</button>
//       </div>
//     </div>
//   );
// };

// export default DiceGame;




// 3.******* useState: Develop a character counter for text input that displays the remaining characters a user can type. Use useState to manage the state and update the count as the user types
// import React, { useState } from 'react';

// const Usehook = () => {
  
//   const [inputText, setInputText] = useState('');
//   const maxCharacterCount = 100;

  
//   const handleInputChange = (event) => {
//     const text = event.target.value;
//     if (text.length <= maxCharacterCount) {
//       setInputText(text);
//     }
//   };

//   return (
//     <div>
//       <textarea
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="Type your text here..."
//       />
//       <div>
//         {maxCharacterCount - inputText.length} characters remaining
//       </div>
//     </div>
//   );
// };

// export default Usehook;



// 4.   ******  useReducer: Create a component that fetches data from multiple APIs simultaneously. Use useReducer to manage the state of the fetched data and display it when all API calls are complete.

//   function Usehook(){
//   const [playerName, setPlayerName] =useState([]);
//   const [playerPic, setPlayerPic] = useState([]);

//   const fetchData = () =>{
//     const playerAPI ='https://fakestoreapi.com/products/1';
//     const playerPic='https://picsum.photos/200'

//     const getPlayer =axios.get(playerAPI)
//     const getPlayerPic = axios.get(playerPic)
//     axios.all([getPlayer,getPlayerPic]).then(
//       axios.spread((...allData)=>{
//         const allDataPlayer = allData[0].data.image
//         const getPlayerPic = allData[1].data.image

//        setPlayerName(allDataPlayer)
//         setPlayerPic(getPlayerPic)
//       })
//     )
//   }

//   useEffect(()=>{
//     fetchData()
//   },[])

//   return(
//     <div>
//       player name is: {playerName}
//       <img src={playerPic}></img>
//     </div>
//   )
// }
// export default Usehook;






// 5.  ***** useState: Implement a simple image gallery component with navigation buttons to switch between images. Use useState to manage the current image and update it when the user clicks on the navigation buttons.

// import React, {useEffect,useState} from 'react'
// import image1 from '../React10js/Slider/img/Screenshot (4).png'
// import image2 from  '../React10js/Slider/img/Screenshot (5).png'
// import  image3 from '../React10js/Slider/img/Screenshot (6).png'



// function Usehook() {
//   const [selectImage, setSelectedImage]=useState(0);
//   const [allImages, setAllImages]=useState([image1,image2,image3])

//   useEffect(()=>{
//     setInterval(()=>{
//       setSelectedImage(selectImage => selectImage < 2 ? selectImage+1 :0)
//     }, 2000)
//   },[])


//   return(
//     <div>
//       <img width={510} height={400} src={allImages[selectImage]}></img>
      
//       <button onClick={() => {
//         if(selectImage< allImages.length -1)
//         setSelectedImage(selectImage+1)
//       }}>Next</button>

//       <button onClick={() => {
//         if(selectImage > 0)
//       setSelectedImage(selectImage -1)}}
//       >PREV</button>
//     </div>
//   ) 
// }
// export default Usehook




// 9. ***** useState: Implement a basic rating component that allows users to give a star rating from 1 to 5. Use useState to manage the rating state and display the selected number of stars.



// import {FaStar, FaStarHalaAlt} from 'react-icons';
// import {AioutlineStar} from 'react-icons/ai';
// import './Usehook.css';
// import { icons } from "react-icons";

// const StarRating=()=>{
//     const [rating, setRating]=useState(0);
//     const [hover, setHover]= useState(0);
//     return(
//         <div className="star-rating">
//             {[...Array(5)].map((star,index)=>{
//                 index +=1;
//                 return(
//                     <button 
//                         type="button" key={index}
//                         className={index <= (hover || rating) ? "on" : "off"}
//                         onClick={()=> setRating(index)}
//                         onMouseEnter={()=> setHover(index)}
//                         onMouseLeave={()=> setHover(rating)}
//                     >
//                         <span className="star">&#9733;</span>
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }
// export default StarRating;




// 8. useReducer: Develop a simple audio player component with play, pause, and volume control features. Use useReducer to manage the player state and update the UI accordingly.
 
 /*import  {AiFillPlayCircle} from "react-icons/ai";
//  import {BiSkipNextCircle} from "react-icons/bi";
//  import {BiSkipPreviousCircle} from "react-icons/bi"
// BiSkipNextCircle
// BiSkipPreviousCircle
 
const Usehook = () => {

  const [audiosrc, setAudioSrc]=useState('')

    useEffect(()=>{
      setInterval(()=>{

       const audiourl='https://wynk.in/music/song/pagal-shayar/ig_195473008674_INB942100885'
  
        setAudioSrc(audiosrc)
      }, 2000)
    },[])

  return (
    <>
    <div className="">
        <div className="P">
          {/* { {audiosrc ? <AudioPlayer src={audiosrc} />:<p>Loading....</p>} } */
          /* { <BiSkipPreviousCircle className="react-icon"></BiSkipPreviousCircle> */
        /*<AiFillPlayCircle className="ract-icon" src={audiosrc}></AiFillPlayCircle> 
         <BiSkipNextCircle className="react-icon"></BiSkipNextCircle>  

        </div>
    </div>
      <h1>Hello</h1>
    </>
  )
}

export default Usehook*/






/*
import './Usehook.css';
import songs from './song/Songs.mp3';
import  {AiFillPlayCircle} from "react-icons/ai";
import {BiSkipNextCircle} from "react-icons/bi";
 import {BiSkipPreviousCircle} from "react-icons/bi"
function Usehook() {
  const [value, setValue]=useState(0);
  
  useEffect(()=>{
    if(value %2 === 0)
    {
      }
      play()
    },[value]);
    
    function play(){
      new Audio(songs).play()
    }
    return (
      <>
      <div>

        <div className="P">
          //  <button onClick={()=>setValue(value+1)}>play</button> 
          <BiSkipNextCircle className="react-icon"></BiSkipNextCircle> 
          <AiFillPlayCircle className="ract-icon" onClick={()=>setValue(value+1)} ></AiFillPlayCircle> 
          <BiSkipPreviousCircle className="react-icon"></BiSkipPreviousCircle>
        </div>
      </div>
      </>
      )
    }
    export default Usehook
    
    */



/*
import React, {Component} from 'react'
const Usehook = () => {
    const [value, setValue] = useState(0);


  const state ={
    audio: new Audio(songs,songs1),
    isPlaying: false,
  };


   const playPause=()=>{
      let isPlaying =this.state.isPlaying;
      if(isPlaying){
        this.state.audio.pause();
      }else{
        this.state.audio.play();
      }
      this.setState({isPlaying: !isPlaying});
  };
    return (
    <div>
      
        <p>
          {this.state.isPlaying?"Song is Playign":"Song is paused"}
        </p>
        <button onClick={playPause}>Play|Pause</button>
    </div>
  );
 
}

export default Usehook;
*/



// ******* 10. useState and useReducer: Create a component that tracks mouse movement within a specific area. Use useState to manage the mouse coordinates and useReducer to handle mouse events like "mouseenter" and "mouseleave."

// Action types for useReducer
const MOUSE_ENTER = 'MOUSE_ENTER';
const MOUSE_LEAVE = 'MOUSE_LEAVE';
const MOUSE_MOVE = 'MOUSE_MOVE';

// Reducer function to handle mouse events
const mouseReducer = (state, action) => {
  switch (action.type) {
    case MOUSE_ENTER:
      return { ...state, isMouseInside: true };
    case MOUSE_LEAVE:
      return { ...state, isMouseInside: false };
    case MOUSE_MOVE:
      return { ...state, x: action.payload.x, y: action.payload.y };
    default:
      return state;
  }
};

const MouseTracker = () => {
  // State to manage mouse coordinates
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  // useReducer to handle mouse events
  const [state, dispatch] = useReducer(mouseReducer, { isMouseInside: false, x: 0, y: 0 });

  // Event handlers
  const handleMouseEnter = () => {
    dispatch({ type: MOUSE_ENTER });
  };

  const handleMouseLeave = () => {
    dispatch({ type: MOUSE_LEAVE });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMouseCoords({ x: clientX, y: clientY });
    dispatch({ type: MOUSE_MOVE, payload: { x: clientX, y: clientY } });
  };

  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: '1px solid #ccc',
        position: 'relative',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div>Mouse is inside: {state.isMouseInside ? 'Yes' : 'No'}</div>
      <div>Mouse X: {state.x}</div>
      <div>Mouse Y: {state.y}</div>
      <div>Mouse X (useState): {mouseCoords.x}</div>
      <div>Mouse Y (useState): {mouseCoords.y}</div>
    </div>
  );
};
export default MouseTracker;




// ********  useState and useReducer: Create a component that allows users to draw on the screen. Use useState to manage the drawing color and useReducer to handle the drawing actions (e.g., start, stop, clear).


// import React, { useState, useReducer, useRef, useEffect } from 'react';

// Action types for useReducer
// const START_DRAWING = 'START_DRAWING';
// const STOP_DRAWING = 'STOP_DRAWING';
// const DRAW = 'DRAW';
// const CLEAR_CANVAS = 'CLEAR_CANVAS';

// Reducer function to handle drawing actions
// const drawReducer = (state, action) => {
//   switch (action.type) {
//     case START_DRAWING:
//       return { ...state, isDrawing: true };
//     case STOP_DRAWING:
//       return { ...state, isDrawing: false };
//     case DRAW:
//       return { ...state, drawingCoords: action.payload.drawingCoords };
//     case CLEAR_CANVAS:
//       return { ...state, drawingCoords: [] };
//     default:
//       return state;
//   }
// };

// const DrawingCanvas = () => {
//   const canvasRef = useRef(null);

//   // State to manage drawing color
//   const [drawingColor, setDrawingColor] = useState('#000000');

//   // useReducer to handle drawing actions
//   const [state, dispatch] = useReducer(drawReducer, {
//     isDrawing: false,
//     drawingCoords: [],
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Set the drawing color
//     ctx.strokeStyle = drawingColor;
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
//     ctx.lineWidth = 2;

//     // Draw each path in the drawingCoords array
//     state.drawingCoords.forEach((path) => {
//       ctx.beginPath();
//       ctx.moveTo(path[0].x, path[0].y);
//       path.forEach((point) => {
//         ctx.lineTo(point.x, point.y);
//       });
//       ctx.stroke();
//     });
//   }, [state.drawingCoords, drawingColor]);

//   // Event handlers
//   const handleStartDrawing = () => {
//     dispatch({ type: START_DRAWING });
//   };

//   const handleStopDrawing = () => {
//     dispatch({ type: STOP_DRAWING });
//   };

//   const handleDraw = (event) => {
//     if (!state.isDrawing) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     dispatch({ type: DRAW, payload: { drawingCoords: [...state.drawingCoords, { x, y }] } });
//   };

//   const handleClearCanvas = () => {
//     dispatch({ type: CLEAR_CANVAS });
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="colorPicker">Drawing Color:</label>
//         <input
//           type="color"
//           id="colorPicker"
//           value={drawingColor}
//           onChange={(e) => setDrawingColor(e.target.value)}
//         />
//       </div>
//       <div>
//         <canvas
//           ref={canvasRef}
//           width="400"
//           height="300"
//           style={{ border: '1px solid #ccc' }}
//           onMouseDown={handleStartDrawing}
//           onMouseUp={handleStopDrawing}
//           onMouseMove={handleDraw}
//         />
//       </div>
//       <div>
//         <button onClick={handleClearCanvas}>Clear Canvas</button>
//       </div>
//     </div>
//   );
// };

// export default DrawingCanvas;
