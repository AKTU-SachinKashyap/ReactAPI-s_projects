
import React, { useEffect, useReducer, useState } from 'react'

// const Hooks = () => {
    // const [toggle, setToggle]=useState(true);


    // const Error=()=>{
    //     alert("this is Error");
    // }
//   return (
//     <div>
//       <h1>Hello sachin kashyap</h1>
      /* Increment  */
      /* <button onClick={()=>{setCount(count+1)}}>click</button>
      <h1>{count}</h1> */


       /* ****** toggle button  */
      /* <button onClick={()=>{setToggle(!toggle)}}>Submit</button>
      {toggle&&(<ul>
        <li>an item</li></ul>)} */


        // {/* ********** Error  */}
        /* <input type='text' placeholder='Enter you text' ></input>
        // <button onClick={Error}>Submit</button> */
    /* </div>
  )
}

export default Hooks */



/* 1. useState: Create a component that generates a random color in RGB format and displays it on the screen. Use useState to manage the color state and update it when a button is clicked. */


// const RandomColorDisplay = () => {

//       const [randomColor, setRandomColor] = useState(generateRandomColor());
    
//       function generateRandomColor() {
//         const red = Math.floor(Math.random() * 256);
//         const green = Math.floor(Math.random() * 256);
//         const blue = Math.floor(Math.random() * 256);
//         return `rgb(${red}, ${green}, ${blue})`;
//       }
    
     
//       function handleButtonClick() {
//         const newRandomColor = generateRandomColor();
//         setRandomColor(newRandomColor);
//       }
    
//       return (
//         <div>
//           <div
//             style={{
//               width: '100px',
//               height: '100px',
//               backgroundColor: randomColor,
//               margin: '20px',
//             }}
//           ></div>
//           <button onClick={handleButtonClick}>Generate Random Color</button>
//         </div>
//       );
//     };
   
// export default RandomColorDisplay;





// 2.******** useReducer: Build a component that simulates a simple game where the user rolls a dice. Use useReducer to manage the state of the dice value and display it on the screen when the user clicks a "Roll Dice" button.

// const  ROLL_DICE='ROLL_DICE';

// const diceReducer=(state,action)=>{
//   switch(action.type){
//     case  ROLL_DICE:
//       return Math.floor(Math.random()*6)+1;
//     default :
//     return state;
//   }
// }


// const DiceGame=()=>{
//   const [diceValue, dispatch]=useReducer(diceReducer,1);
//   const handleRollDice =()=>{
//     dispatch({type:ROLL_DICE});
// };

//   return(
//     <div>
//       <h2>Roll the dice game</h2>
//       <p>Dice Value:{diceValue}</p>
//       <button onClick={handleRollDice}>Roll Dice</button>
//     </div>
//   )
// }
// export default DiceGame;




// 3.******* useState: Develop a character counter for text input that displays the remaining characters a user can type. Use useState to manage the state and update the count as the user types.

// const Hooks=()=>{
//   const [InputText, setInputText]=useState('');
//   const maxCharacter=100;
  
//   const handleInput =(e)=>{
//     const text=e.target.value;
//     if(text.length <= maxCharacter){
//       setInputText(text);
//     }
//   }

//   return(
//     <div>
//       <textarea
//       value={InputText}
//       typeof='text' placeholder='Enter your text'
//       onChange={handleInput}></textarea>
//       <div>
//         {maxCharacter-InputText.length} character remaining
//       </div>
//     </div>
//   )
// }
// export default Hooks;






// 5.  ***** useState: Implement a simple image gallery component with navigation buttons to switch between images. Use useState to manage the current image and update it when the user clicks on the navigation buttons.

// import image1 from './logo192.png'
// import image2 from './logo512.png'

// const Hooks = () => {

//   const [selectImage, setSelecteImage]=useState(0);
//   const [allImage, setAllImage]=useState([image1,image2]);

//   useEffect(()=>{
//     setInterval(()=>{
//       setSelecteImage(selectImage => selectImage < 1 ? selectImage+1:0);
//     },2000);
//   },[])


//   return(
//     <div>
//       <img width={500} height={400} src={allImage[selectImage]}></img>

//       <button onClick={()=>{
//         if(selectImage < allImage.length-1)
//         setSelecteImage(selectImage+1)
//       }}>Next</button>
//       <button onClick={()=>{
//         if(selectImage > 0)
//         setSelecteImage(selectImage-1)
//       }}>Prev</button>
//     </div>
//   )
//     }
// export default Hooks

