import { useState } from "react"
import '../../styles/Login.css'
import Input from "./Input"
import useLogin from "../../hooks/useLogin"
function Login() {
    const {signin}=useLogin();
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    function handleSubmit(e){
      e.preventDefault();
      signin(formData);
    }

  return (
    <div className="Login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <Input formData={formData} setFormData={setFormData}/>

        <a>{"Don't"} have an account ?</a>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
