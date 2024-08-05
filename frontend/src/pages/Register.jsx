import { useState } from "react"
import '../styles/Register.css'
function Register() {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    function setGender(gender){
      setFormData({...formData,gender:gender});
    }
    console.log(formData);
  return (
    <div>
      <form className="registerForm">
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
            onChange={(e
            )=>{setFormData({...formData,confirmPassword:e.target.value})}}
            />
        <div className="registerCheckbox">
        <label>male</label>
        <input type="checkbox" onChange={()=>setGender("male")} checked={formData.gender==="male"}></input>
        <label>female</label>
        <input type="checkbox" onChange={()=>setGender("female")} checked={formData.gender==="female"}></input>
        </div>
        <a>Already have an account ??</a>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
