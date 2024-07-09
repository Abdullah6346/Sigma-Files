import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(200)

  return (
    <>
      <div>The Count is {count}</div>
        <button onClick={()=>{setCount(count*1000)}}>Update Me</button>
      
    </>
  )
}

export default App
