/* eslint-disable react/prop-types */
function Input({formData,setFormData}) {
  return (
    <>
        <input type="text" placeholder="Email" value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:(e.target.value)})}}
        />

        <input type="password" placeholder="Password" value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:(e.target.value)})}}
        />
    </>
  )
}

export default Input
