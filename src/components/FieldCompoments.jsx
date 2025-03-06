import { useState } from "react"

export function FieldCompoments({setname,setusn,handler})
{
   
    return(
        <div>
            <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}></input>
            <br></br>
            <input type="text"placeholder="Usn"onChange={(e)=>{setusn(e.target.value)}}></input>
            <br></br>
            <button onClick={handler}>Click to Add</button>
        </div>
    )
    
}