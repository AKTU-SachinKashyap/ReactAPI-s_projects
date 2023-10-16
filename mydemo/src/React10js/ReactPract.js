// import React, { useState } from 'react'

import { createContext } from "react";

// ********* 10 questions

// 1.  ******** React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.

// const ReactPract=()=> {
//     const list=["Banana","Apple","Orange","Mango","Pineapple","watermelon"];

//     const [filterList, setFilterList]=useState(list);
//     const handleSearch =(e)=>{
//         if(e.target.value ===""){
//             setFilterList(list);
//             return;
//         }
//         const filteredValues =list.filter(
//             (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
//         )
//         setFilterList(filteredValues);
//     }
//   return (
//     <div>
//         search: <input name='query' type='text' onChange={handleSearch}></input>
//         {filterList && filterList.map((item, index)=>(<div key={index}>{item}</div>))}
//     </div>
//   )
// }

// export default ReactPract




// 2.   ****** Creating a simple counter using React which increments or decrements count dynamically on-screen as the user clicks on the button. This exercise requires knowledge of fundamental React concepts such as State, Component, etc.


// import React from 'react'

// function ReactPract() {
//       const [count, setvalue]=useState(0);
//      console.log(count)
//      return (
//      <div>
//        <button onClick={()=>setvalue(count+1)}>value</button>
//        <h1>{count}</h1>
//      </div>
//    )
// }

// export default ReactPract






// 3.   ***** React code to print each item from the list on the page using Array.map() function to display each item on the page.

// import React, { useState } from 'react'

// const ReactPract=()=> {

//     let fruits =[{label: "Banana"}, {label:"Apple"},{label:"Orange"}, {label: "Mango"}, {label:"Pineapple"}, {label:"watermelon"}];

//     let [fruit, setFruit] = useState("");

//     let handleFruitChange =(e)=>{
//         setFruit(e.target.value)
//     }


//   return (
//     <div>
//       <select onChange={ handleFruitChange}>
//         {fruits.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)}
//       </select>
//     </div>
//   );
// }

// export default ReactPract




// 4.   ***** Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.

// import React, { useState } from 'react'

// function ReactPract() {

//     const [toggle, setToggle]=useState(true);


//   return (
//     <div>
//       <button onClick={()=>setToggle(!toggle)}>click </button>

//       {toggle&&(<ul><li>An Item</li></ul>)}
//     </div>
//   )
// }

// export default ReactPract





// 5. ****** React exercise to create an image slide, where users can view multiple images with next/previous buttons. Additionally, there is also anoption to select an image from any index of the list through a click-on option circle.


// import React, { useEffect, useState } from 'react'
// import image1 from './Slider/img/Screenshot (4).png'
// import image2 from './Slider/img/Screenshot (6).png'
// import image3 from './Slider/img/Screenshot (5).png'

// function ReactPract() {
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

// export default ReactPract




// 6.   *******  Create a Checklist in React


// import React from 'react'
// import { useState } from 'react'

// function ReactPract() {
//   const [first, setFirst]=useState(true);
//   const [second, setSecond] =useState(true);
//   const handleChange= (data) =>{
//     if(data =="first"){
//       if(first == true){
//         console.log(data,"our value")
//       }
//     setFirst(!first)
//     }
//     if(data =="second"){
//         if(second==true){
//           console.log(data,"our value")
//       }
//       setSecond(!second)
//     }
//   }
//   return (
//     <div>
//       <input type='checkbox' value={first} onChange={()=> handleChange("first")}></input>First
//       <input type='checkbox' value={second} onChange={()=> handleChange("second")}></input>Second
//     </div>
//   )
// }

// export default ReactPract



// 7.  ****** Simple Login form in React
// import {useState} from 'react'

// function ReactPract() {
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

// export default ReactPract




// 8.  ****** Print data from REST API
//  import axios from 'axios';
// import React, { useEffect, useState } from 'react'
 
//  function ReactPract() {
//   const [userData, setdata]=useState([]);
//   useEffect(()=>{
//     axios.get("https://api.nasa.gov/planetary/apod?api_key=UbzfxOVEtWGPRf0LnCyczkSM2dGwu7N0pqtKP6io").then((res)=>{
//       console.log(res);
//       setdata(res.data)
//     })
//   },[])
//    return (
//      <div>
//        {userData.map((data)=>{
//         return(
//           <div>{data.name}</div>
//         )
//        })}
//      </div>
//    )
//  }
 
//  export default ReactPract
 



// 9. ****** Multi-Page navigation using React Router

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// function App() {
  // Dynamic
  // let users=[
  //   {name: 'sachin', id:1},
  //   {name: 'peter', id:2},
  //   {name: 'bruce', id:3},
  //   {name: 'tony', id:4},
  // ]

  // return(
  //   <div>
  //     <Router>
  //     <h1>React Dynamic Routing</h1>
  //     {
  //       users.map((item)=>
  //       <div><Link to={"/user/"+item.id}><h2>{item.name}</h2></Link></div>)
  //     }
  //     <Route path="/user/:id"><User/></Route>
  //     </Router>
  //   </div>
  // )
// }




// 10 . *******   Context API in React Components.
const FirstName = createContext();

import React from 'react'
const ReactPract=() =>{
  return (
    <div>
      <>
      <FirstName.Provider value={"sachin"}>
      </FirstName.Provider>
      
      </>
    </div>
  );
};

export default ReactPract
export {FirstName};






