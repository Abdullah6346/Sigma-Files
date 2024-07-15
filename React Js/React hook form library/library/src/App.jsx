
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">

        <label htmlFor="username">
          User-Name:
        <input  placeholder="Username"type="text"  {...register("username")} />

        </label>
        <label htmlFor="password">
          Password:
        <input placeholder='Password' type="password"  {...register("password")}  />

        </label>
        </div>
        <input type="submit" value="submit"  />
      </form>
     </div>
    </>
  )
}

export default App
