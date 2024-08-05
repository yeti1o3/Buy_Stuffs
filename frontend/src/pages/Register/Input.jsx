/* eslint-disable react/prop-types */
function Input(props) {
    const{formData, setFormData}=props;
    const{name,email,password,confirmPassword}=formData;
  return (
    <>
        <input type="text" placeholder="Name" 
            value={name}
            onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
            />

        <input type="text" placeholder="Email" 
            value={email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
            />

        <input type="password" placeholder="Password" 
            value={password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            />

        <input  type="password" placeholder="ConfirmPassword" 
            value={confirmPassword}
            onChange={(e
            )=>{setFormData({...formData,confirmPassword:e.target.value})}}
            />
    </>
  )
}

export default Input
