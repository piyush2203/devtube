import React, { useState } from 'react'
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadRounded';

const VideoUpload = () => {
  const [UploadDetails, setUploadDetails] = useState({"title":"", "description":"", "category":"", "thumbnail":"", "video":""})
  const handleOnChangeInput=(event,name)=>{
    setUploadDetails({
      ...UploadDetails, [name]:event.target.value
    })
  }
  console.log(UploadDetails);

  return (
    <div className='h-full w-full flex justify-center items-center '>
      <div className='bg-black border-2 overflow-hidden h-[80vh] w-[40vw] mt-[4%] rounded-lg justify-center items-center shadow-lg shadow-gray-500/40'>
        <div className='h-[15%] w-full flex justify-center items-center overflow-hidden'>
            <h1 className='text-4xl text-white'>UPLOAD YOUR VIDEO</h1>
        </div>
        <div className='flex items-center justify-center'>
            <CloudUploadTwoToneIcon sx={{fontSize:"15vh", color:"white"}} />
        </div>
        <div className='flex flex-col items-center mt-[5%]'>
            <input type="text" value={UploadDetails.title} onChange={(e)=>handleOnChangeInput(e, "title")}  className='mb-[2vh] h-[5vh] bg-transparent text-white w-[80%] font-[poppins] placeholder:text-[120%] placeholder:text-white border-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            placeholder:opacity-35  m-[2%] rounded-lg  border-2 border-gray-600' placeholder='Title Of The Video '/>
            <input type="text" value={UploadDetails.description} onChange={(e)=>handleOnChangeInput(e, "description")} className='mb-[2vh] h-[5vh] bg-transparent text-white w-[80%] font-[poppins] placeholder:text-[120%] placeholder:text-white border-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            placeholder:opacity-35  m-[2%] rounded-lg  border-2 border-gray-600' placeholder='Description Of The Video '/>
            
            <input type="text" value={UploadDetails.category} onChange={(e)=>handleOnChangeInput(e, "category")} className='mb-[2vh] h-[5vh] bg-transparent text-white w-[80%] font-[poppins] placeholder:text-[120%] placeholder:text-white border-white 
            placeholder:pl-[5%]  placeholder:opacity-60
            
            placeholder:opacity-35  m-[2%] rounded-lg bg-gray-200 border-2 border-gray-600 ' placeholder='Category Of The Video'/>
            <div  className='font-[poppins] m-[3%] text-white'>Thumbnail : <input type="file" value={UploadDetails.thumbnail} onChange={(e)=>handleOnChangeInput(e, "thumbnail")} accept='image/*' className='ml-[1vw]'/></div>
            <div className='font-[poppins] text-white'>Video : <input type="file" value={UploadDetails.video} onChange={(e)=>handleOnChangeInput(e, "video")} accept='video/mp4, video/webm' className='ml-[3.4vw]'/></div>

            <button type="submit" className='font-[poppins] mt-[5%] text-[1.5vw] bg-blue-600 px-[4vw] rounded-full text-white border-2 border-gray-500'>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default VideoUpload;
