
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors,isSubmitted,isSubmitting  },setError } = useForm();

  const delay= (delay) => {
    return new Promise  ((resolve,reject)=>{

      setTimeout(() => {
        resolve()
      }, delay * 1000);


    }) 
  };
  const onSubmit = async data => 
    {
      await delay(2)
      console.log(data)
      if(data.username!== "abdull" && data.password!== "ab123" ){
        setError("formerror",{message:"You Can Not Login Beacause Credentials Are Wrong"})
      }
       if(data.username == "rohan" ){
        setError("rohan",{message:"This user is blocked "})

      }

  
    }

  return (
    <>
<<<<<<< Updated upstream
    {isSubmitting && <div>Form is Submitting.....  </div>}
      <div className="container">
=======
  
    <div className="container">
>>>>>>> Stashed changes
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
        <input disabled={isSubmitting} type="submit" value="submit"  />
        {errors.rohan && <div> {errors.rohan.message} </div>}
        {errors.formerror && <div> {errors.formerror.message} </div>}
      </form>
     </div>
    </>
  )
}

export default App