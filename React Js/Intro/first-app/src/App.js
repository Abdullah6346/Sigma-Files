// Components and states basic intro:
import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
 const [value,setvalue]=useState(0)
  return (
    <div className="App">
      <Navbar/>     
       <div className='counter'>{value}</div>
     <button onClick={()=>{setvalue(value+1)
     }} >Click me</button>
     <Footer/>
    </div>
  ); 
}
export default App;
