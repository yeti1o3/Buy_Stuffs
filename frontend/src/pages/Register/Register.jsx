import { useState } from "react"
import '../../styles/Register.css'
import Input from "./Input";
import Checkbox from "./Checkbox";
import useRegister from "../../hooks/useRegister";

function Register() {
    const {register}= useRegister();
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

    function handleSubmit(e){
      e.preventDefault();
      register(formData);
    }

  return (
    <div className="Register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h2>Register</h2>
        
        <Input formData={formData} setFormData={setFormData}/>
        <Checkbox formData={formData} setGender={setGender}/>
        
        <a>Already have an account ??</a>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
