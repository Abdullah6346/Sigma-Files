import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Navbar from './Components/navbar'

function App() {
  const [count, setCount] = useState(200)
  const [first, setfirst] = useState(0)
  // // It will run on every render
  // useEffect(() => {
  //   alert("This is the home page ")

  // })

  // useEffect(() => {
  //   alert(`${count} Count was in begining`)
  // }, [count])

  // useEffect(() => {
  //   alert(`${first} first was in begining`)
  //   // setfirst(first+1)
  // }, [first])

  


  return (
    // <>
    //   <div>The Count is {count}</div>
    //     <button onClick={()=>{setCount(count*1000)}}>Update Me</button>

    // </>   
    // Today Practice
    <>
      <Navbar color="red" tag="blue" type="frontend" />
      <div>The Count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update Me</button>

    </>
  )
}

export default App
