/* eslint-disable react/prop-types */
function Checkbox({setGender,formData}) {
  return (
    <div className="registerCheckbox">
        <label>male</label>
        <input type="checkbox" onChange={()=>setGender("male")} checked={formData.gender==="male"}></input>
        <label>female</label>
        <input type="checkbox" onChange={()=>setGender("female")} checked={formData.gender==="female"}></input>
    </div>
  )
}

export default Checkbox
