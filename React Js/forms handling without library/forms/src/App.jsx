import { useState } from 'react';
import './App.css'

function App() {
  const [form, setform] = useState({
    username:'',
    password: '',
  })
   console.log(form)
  const handlechange= (e) => {
      setform({...form,[e.target.name]:e.target.value})
  };
  const handlesubmit= (e) => {
    e.preventDefault();
    console.log("form submitted")
  };

  return (
    <>
     <div className="container">
      <form action="" onSubmit={handlesubmit}>
        <div className="container">

        <label htmlFor="username">
          User-Name:
        <input type="text" name="username" value={form.username} id="username" onChange={handlechange} />

        </label>
        <label htmlFor="password">
          Password:
        <input type="password" name="password" value={form.password} id="password" onChange={handlechange} />

        </label>
        </div>
        <input type="submit" value="submit"  />
      </form>
     </div>
    </>
  )
}

export default App
