import React, { useState } from "react";


function Clacu(){
        const [value, setValue]= useState('');
    return (
        <div className="M">
            <div className="cal">

                <from action="">
                    <div className="display">
                        <h1>Calculator</h1>
                        <input className="P" type="text" value={value}></input>
                    </div>
                    <div>

                    {/* <input type="input" value="7" onClick={e=> setValue(value+ e.target.value)} ></input> */}
                    <input type="button" value="AC"onClick={e=> setValue('')}></input>
                    <input type="button" value="DE" onClick={e=> setValue(value.slice(0,-1) )} ></input>
                    <input type="button" value="=" onClick={e=> setValue(eval(value))}></input>
                    <input type="button" value="/" onClick={e=> setValue(value + e.target.value)} ></input>
                    </div>
                    <div >
                    <input type="button" value="7" onClick={e=> setValue(value + e.target.value)} ></input>
                    <input type="button" value="8" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="9" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="*" onClick={e=> setValue(value + e.target.value)}></input>
                    </div>
                    <div>
                    <input type="button" value="6" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="5" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="4" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="+" onClick={e=> setValue(value + e.target.value)}></input>
                    </div>
                    <div>
                    <input type="button" value="3" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="2" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="1" onClick={e=> setValue(value + e.target.value)}></input>
                    <input type="button" value="-" onClick={e=> setValue(value + e.target.value)}></input>
                    </div>
                </from>
            </div>
            
        </div>
    )
}
export default Clacu;