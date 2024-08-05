import axios from 'axios'
import {useDispatch} from 'react-redux'
import {login} from '../feature/user/userSlice'
function useLogin() {
  const dispatch=useDispatch();
  const signin=async(formData)=>{
    const {email,password}=formData;
    try{
        const res=await axios.post('/api/auth/login',{
            email:email,
            password:password
        });
        if(res)
        {
           const data= res.data;
           dispatch(login({
            id:data._id,
            name:data.name,
            profilePic:data.profilePic,
           }));
           
        }
    }catch(err){
        console.log(err);
    }
  }
  return{signin};
}

export default useLogin
