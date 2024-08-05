import { useState } from "react"
import '../styles/Login.css'
function Login() {
    const[formData,setFormData]=useState({
        Email:"",
        password:""
    })
  return (
    <div>
      <form className="loginForm">
        <h2>Login</h2>
        <input type="text" placeholder="Email" value={formData.Email}
            onChange={(e)=>{setFormData({...formData,Email:(e.target.value)})}}
        />

        <input type="password" placeholder="Password" value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:(e.target.value)})}}
        />
        <a>{"Don't"} have an account ?</a>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
