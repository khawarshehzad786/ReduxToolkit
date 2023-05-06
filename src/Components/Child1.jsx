import React from 'react'
import Child2 from './Child2'
import { useSelector } from 'react-redux'

const Child1 = () => {

  const data = useSelector((c)=>{
// console.log(c.show.value);
    return c.show.value;
  })


  return (
    <div>
       
      <h1>  Child1 {data}</h1>
        
        <Child2/>
        <button style={{width:"80px", cursor:"pointer"}}>Click Here</button></div>
  )
}

export default Child1