import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../src/Redux/counter/counterslice'
const Navbar = () => {
    const count=useSelector( (state => state.counter.value))

  return (
    <div>
    Current Value is {count}
    </div>
  )
}

export default Navbar
