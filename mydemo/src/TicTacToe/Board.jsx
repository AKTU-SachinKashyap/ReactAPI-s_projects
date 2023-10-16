import React, { useState } from "react";
import Square from "./Square";


const Board =()=>{
    const [state, setSate]= useState(Array(9).fill(null));
    const [isXTurn, setIsXturn]=useState(true);

    const checkWinner =()=>{
        const WinnerLogic =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let logic of WinnerLogic){
            const[a, b, c] = logic;
            if(state[a] !== null && state[a] === state[b] 
                && state[a] ===state[c]){
                    return state[a];
            }
        }
        return false;
    };
    
     const isWinner = checkWinner();


    const handleClick =(index) =>{
        if(state[index] !==null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setSate(copyState);
        setIsXturn(!isXTurn);
    };

    const handleReset =() =>{
        setSate(Array(9).fill(null));
    }

    return(
        <div className="board-container">
           {  isWinner ? (
           <>{isWinner} won the game <button onClick={handleReset} >Play Again</button></>
           ):(
            <>
            <h4>Player {isXTurn ? "X" : "O"} Play mov</h4>
            <div className="board-row">
                <Square  onClick={()=> handleClick(0)} value={state[0]}></Square>
                <Square  onClick={()=> handleClick(1)} value={state[1]}></Square>
                <Square  onClick={()=> handleClick(2)} value={state[2]}></Square>
            </div>
            <div className="board-row">
                <Square  onClick={()=> handleClick(3)} value={state[3]}></Square>
                <Square  onClick={()=> handleClick(4)} value={state[4]}></Square>
                <Square  onClick={()=> handleClick(5)} value={state[5]}></Square>
            </div>
            <div className="board-row">
                <Square  onClick={()=> handleClick(6)} value={state[6]}></Square>
                <Square  onClick={()=> handleClick(7)} value={state[7]}></Square>

                <Square  onClick={()=> handleClick(8)} value={state[8]}></Square>
            </div> 
            </>)}
        </div>
    )
}
export default Board;