import { useState } from "react";

export function RenderCompoments({ submittedData }) {
    const[completed,setcompleted]=useState([]);
    function MarksCompleted(index)
    {
        setcompleted(prevstate=>[...prevstate,index]);


    }
    return (
        <div>
            
          {submittedData.map((data,index)=>
          (
            <div key={index}>
               
                <h2>{data.name}</h2>
                <h2>{data.usn}</h2>
                <button onClick={()=>MarksCompleted(index)}>{completed.includes(index)?"Completed":'Marks as completde'}</button>
            </div>
          
            
          ))}
        </div>
        
    );
}
