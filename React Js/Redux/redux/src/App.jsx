import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './Redux/counter/counterslice'
import Navbar from '../Comonents/Navbar'
function App() {
  // Why Use useSelector?
  // Read State: It is the primary way to read data from the Redux store and use it in your React components.
  // Why Use useDispatch?
  // Update State: It is the primary way to dispatch actions that update the state in the Redux store

  const count = useSelector((state => state.counter.value))
  const dispatch = useDispatch()
  const inputref = useRef()

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          dispatch(increment())
        }}>
          Increment
        </button>
        <button onClick={() => {
          dispatch(decrement())
        }}>Decrement</button>
        <button onClick={() => {
          dispatch((multiply()))
        }}>Multiply</button>
        <input placeholder='Enter Value' className='input' ref={inputref} type="number" name="number" id="number" />
        <button onClick={() => {
          const amount =Number(inputref.current.value)
          dispatch(incrementByAmount(amount))
        }}>Add Entered Value</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
