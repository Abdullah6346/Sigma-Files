
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
        <input  placeholder="Username"type="text"  {...register("username",{required:{value:true,message:"this field is required"} , minLength:{value:2,message:"The minLength is 2"},maxLength:{value:6,message:"The maxLength is 6"}})} />
        {errors.username && <div>{errors.username.message}</div>}
        </label>
        <label htmlFor="password">
          Password:
        <input placeholder='Password' type="password"  {...register("password",{required:{value:true,message:"this field is required"}, minLength:{value:2,message:"The minLength is 2"},maxLength:{value:6,message:"The maxLength is 6" } } )}/>
        {errors.password && <div>{errors.password.message}</div>}

        </label>
        </div>
        <input type="submit" value="submit"  />
      </form>
     </div>
    </>
  )
}

export default App
