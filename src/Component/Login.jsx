// import { BlurLinear } from '@mui/icons-material'
import React, { useState } from 'react'
import ApiSharpIcon from '@mui/icons-material/ApiSharp';
import { Link } from 'react-router-dom';

const Login = ({setLoginModel}) => {


//to store the values from the input
  const [loginFeild, setloginFeild] = useState({"userName":"" , "password" : ""});
  const handleOnChangeInput = (event,name) =>{
        setloginFeild({
          ...loginFeild, [name]:event.target.value
        })
  }
  console.log(loginFeild);

  return (
    <div className='w-full h-full bg-transparent fixed top-0 text-white flex justify-center bg-[rgba(0,0,0,0.7)] left-0 font-[] ' >
      <div className='w-[35%] h-[70%] mt-[8%]  select-none  flex flex-col items-center  border-2 shadow-white border-gray-600 bg-black rounded-lg'>
        
        <div className='flex flex-col text-[200%] items-center gap-2 pt-[10%]'>
          <ApiSharpIcon sx={{fontSize:"150%"}}/>
          <h1>LOGIN</h1>
        </div>
        {/* value and onchange is used for form handling*/}
        <input name='' type="text" value={loginFeild.userName} onChange={(e)=>handleOnChangeInput(e, "userName")} placeholder='Username' className='w-[70%] h-[7%] rounded-lg bg-transparent border-2 mt-[10%] placeholder:opacity-90  placeholder:text-[1.2vw] placeholder: pl-[1%] font-[poppins] border-white' />
        <input type="password" value={loginFeild.password} onChange={(e)=>handleOnChangeInput(e, "password")} placeholder='Password' className='w-[70%] h-[7%] rounded-lg bg-transparent border-2 mt-[7%] placeholder:opacity-90  placeholder:text-[1.2vw] placeholder: pl-[1%] font-[poppins] border-white' />

        <div className='flex gap-[2vw] items-center justify-center mt-[12%]'>
          <button className='bg-gray-600 text-[1.5vw] px-[20%] rounded-full hover:bg-gray-900 font-[poppins]'>Login</button>
          <Link  onClick={()=>setLoginModel()} className='bg-gray-600 text-[1.5vw] px-[20%] rounded-full font-[poppins] cursor-pointer hover:bg-gray-900  '>Back</Link>
        </div>
        <h3 className='font-[poppins] mt-[5%] text-gray-400'>Didn't Signup?</h3>

        <Link to={"/signup"}  className='bg-gray-400 text-[1.5vw] px-[14%] mt-[2%] bg-red-600 hover:bg-red-800 rounded-full font-[poppins]' onClick={()=>setLoginModel()}>Sign Up</Link>
      </div>
        
    </div>
  )
}

export default Login
