import React,{useState} from 'react';

export default function Statehooks ()
{
    const [first,setFirst]=useState("yellow")
    return(
        <div>
            <h1>Hello statehooks!!!</h1>
            <h2>{first}</h2>
            <button onClick={()=>setFirst("black")}>update button</button>
        </div>
    )
}