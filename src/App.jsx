import { useState } from 'react'
import { FieldCompoments } from './components/FieldCompoments'
import { RenderCompoments } from './components/RenderCompoments';


function App() {
  const [name,setname]=useState('');
  const [usn,setusn]=useState('');
  const[flag,setflag]=useState('');
  const [submittedData,setsubmittedData]=useState([]);
  function handler()
  {setsubmittedData(prevData => [...prevData, { name, usn }]);
  console.log("Handleer is  calling")

  }
  return (
   <div>
    <FieldCompoments setname={setname} setusn={setusn} handler={handler}></FieldCompoments>
    <RenderCompoments submittedData ={submittedData} ></RenderCompoments>
   </div>
  )
}

export default App
