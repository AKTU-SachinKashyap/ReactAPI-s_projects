
import React,{ useState } from 'react'
// import Proops from "./Proops"
// import Childcom from './Childcom'

export default function PropsHooks() {

  // 5.  ***** Question: Create a React component called Toggle that displays a button and a paragraph. Initially, the paragraph should be hidden. When the button is clicked, the paragraph should toggle between being hidden and visible. Use the useState hook to manage the visibility state.

  // const [toggle, setToggle]=useState(true)

  // return(
  //   <>
  //   <button onClick={()=> setToggle(!toggle)}
  //   >submit</button>
  //   {toggle&&(<ul >
  //     <li>an item</li>
  //   </ul>)}
  //   </>
  // )








  // 4.  ******* Question: Create a parent component called Parent Component and two child components called Child Component1 and ChildComponent2. Pass a prop called color from Parent Component to both child components. Display the color prop value in each child component.

  // return(
  //   <dev>
  //    <Childcom></Childcom>
  //    <Proops color="red" value='22,223,254'></Proops>
  //   </dev>
  // )



 
  // 3. ****** Question: Create a React component called Form that contains an input field and a button. When the button is clicked, the value entered in the input field should be displayed below the input field. Use the useState hook to manage the input field value.

  const [message, setMessage]=useState("");
  const [updated, setUpdated] =useState(message)

  const handleChange =(e)=>{
    setMessage(e.target.value);
  }
 
  const handleClick =() =>{
    setUpdated(message);
  }
  return(
    <div>
      <form>
          <input type="text" id='message' name='message' onChange={handleChange} value={message}></input>
          <h2>message:{message}</h2>
          <h2>updated:{updated}</h2>
          <button onClick={handleClick}>Updated</button>
      </form>
    </div>
  )

  }


//   // 2.  ******** Question: Create a parent component called Parent Component and a child component called ChildComponent. Pass a prop called message from ParentComponent to ChildComponent, and display the message prop value in ChildComponent
//   return(
//     <div>
//      <Proops name="sachin" age='22'></Proops>
//     </div>
//   )


// function Proops(props) {
//   return (
//     <div>
//       <h1>this is a message ChildComponent {props.name}
//           and her age is {props.age}</h1>
//     </div>
//   )
// }

// export default Proops






// 1. ***** Question: Create a React component called Counter that displays a counter value and a button. When the button is clicked, the counter value should increase by 1. Use the useState hook to manage the counter value
  // const [Number, count]=useState(0)
  // console.log(Number);
  // return (
  //   <div>
  //    <button onClick={()=>count(Number+1)}>clicked</button>
  //    <h2>{Number}</h2>
  //   </div>
  // )
// }

// export default PropsHooks






