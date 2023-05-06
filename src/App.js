import React from 'react'
import './App.css';
// import { useState } from 'react';
import Child1 from './Components/Child1';

const App = () => {

  // const [state, setstate] = useState(0);




  return (
    <div className='container'>
  {/* <button onClick={()=>{
    setstate(state +1)
  }}> +</button> 
  <h2>{state}</h2>
<button onClick={()=>(state===0)? setstate(0) : setstate(state -1)}>-</button>*/} 
  <Child1/>
    </div> 
  )
}

export default App;