import { useState } from "react"

function Register() {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    console.log(formData);
  return (
    <div>
      <form>
        <h2>Register</h2>
        <input type="text" placeholder="Name" 
            value={formData.name}
            onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
            />
        <input type="text" placeholder="Email" 
            value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
            />
        <input type="password" placeholder="Password" 
            value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            />
        <input  type="password" placeholder="ConfirmPassword" 
          value={formData.confirmPassword}
          onChange={(e)=>{setFormData({...formData,confirmPassword:e.target.value})}}
          />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
