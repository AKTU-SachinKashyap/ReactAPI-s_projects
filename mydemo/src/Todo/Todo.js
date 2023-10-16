import React, { useState } from 'react'


const Todo = (props) => {
    const[value, setvalue]=useState([]);
    const[inputValue,setInputvalue]=useState('');

    const addtodo=()=>{
        if(inputValue.trim() !==''){
            setvalue([...value,inputValue]);
            setInterval('');
        }
    }
  return (
    <div>
        <input type='text' value={inputValue} onChange={(e)=> setInputvalue(e.target.value)} placeholder='Enter your todo'></input>
            <button onClick={addtodo}>addtodo</button>
        <ul>
            {value.map((value, index)=>(
                <il key={index}>
                <h1>{props.name} and {props.age}</h1>
                </il>
            ))}
        </ul>
    </div>
  )
}

export default Todo
