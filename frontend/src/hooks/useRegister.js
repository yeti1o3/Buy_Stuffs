import { useDispatch } from 'react-redux';
import { login } from '../feature/user/userSlice';
import axios from 'axios'
function useRegister() {
    const distpatch=useDispatch();
    const register=async(formData)=>{
        const {name,email,password,confirmPassword,gender}=formData;
        try{
            const res=await axios.post('/api/auth/register',{
                name:name,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
                gender:gender,
            })
            if(res)
            {
                const data=res.data;
                distpatch(login({
                    id:data._id,
                    name:data.name,
                    profilePic:data.profilePic,
                }))

            }
        }catch(err)
        {
            console.log(err);
        }
    }
    return {register};

}

export default useRegister
