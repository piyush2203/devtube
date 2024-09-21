import React, { useState } from 'react'
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadRounded';
import ApiSharpIcon from '@mui/icons-material/ApiSharp';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [signUpFeild, setsignUpFeild] = useState({"email":"", "password":"", "channelName":"", "username":"", "profile":""});
  const handleOnChangeInput=(event,name)=>{
    setsignUpFeild({
      ...signUpFeild, [name]:event.target.value
    })
  }
  // console.log(signUpFeild);
  const uploadImage=async(e)=>{
    console.log('uploading');
    
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'youtube');
    try {
      // cloudname = 'dx5q6lpu4'
      const response = await axios.post("https://api.cloudinary.com/v1_1/dx5q6lpu4/image/upload", data)
      console.log(response);
      
    } catch (err) {
      console.log(err);
    }
    
  }
  

  return (
    

    <div className='h-full w-full flex justify-center items-center '>
      <div className='bg-black overflow-hidden h-[80vh] w-[35vw] mt-[4%] rounded-lg justify-center border-2 border-gray-400 items-center shadow-lg shadow-gray-500/40'>
      <div className='flex flex-col text-[200%] items-center text-white gap-2 pt-[10%]'>
          <ApiSharpIcon sx={{fontSize:"150%"}}/>
          <h1>SignUp</h1>
        </div>
        <div className='flex flex-col items-center mt-[5%]'>
            <input type="text" value={signUpFeild.email} onChange={(e)=>handleOnChangeInput(e, "email")} className='mb-[2vh] h-[5vh] w-[80%] bg-transparent text-white border-2 font-[poppins] placeholder:text-[120%] placeholder:text-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            placeholder:opacity-35  m-[2%] rounded-lg  border-2 border-gray-600' placeholder='Email '/>

            <input type="text" value={signUpFeild.password} onChange={(e)=>handleOnChangeInput(e, "password")}  className='mb-[2vh] h-[5vh] w-[80%] bg-transparent text-white border-2 font-[poppins] placeholder:text-[120%] placeholder:text-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            placeholder:opacity-35  m-[2%] rounded-lg  border-2 border-gray-600' placeholder='Password '/>
            
            <input type="text" value={signUpFeild.channelName} onChange={(e)=>handleOnChangeInput(e, "channelName")} className='mb-[2vh] h-[5vh] w-[80%] bg-transparent text-white border-2 font-[poppins] placeholder:text-[120%] placeholder:text-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            
            placeholder:opacity-35  m-[2%] rounded-lg bg-gray-200 border-2 border-gray-600 ' placeholder='Channel Name'/>

           <input type="text" value={signUpFeild.username} onChange={(e)=>handleOnChangeInput(e, "username")} className='mb-[2vh] h-[5vh] w-[80%] bg-transparent text-white border-2 font-[poppins] placeholder:text-[120%] placeholder:text-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            
            placeholder:opacity-35  m-[2%] rounded-lg bg-gray-200 border-2 border-gray-600 ' placeholder='Username'/>


            <div className='font-[poppins] text-white mt-[2%] ml-[14%]'>
              Profile Image : <input type="file" onChange={(e)=>uploadImage(e)} accept='image/*' className=''/>
            </div>
            

            <button type="submit" className='font-[poppins] mt-[5%] text-[1.3vw] bg-red-600 px-[4vw] rounded-full text-white border-2 border-gray-500 mt-[5%] '>SignUp Your Account !!</button>
            <Link to={"/"} className='text-white font-[inter] mt-[4%] bg-blue-400 px-[1.4vw] text-xl rounded-full border-blue-900 '> Home</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
