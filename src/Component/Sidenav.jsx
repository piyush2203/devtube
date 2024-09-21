import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link, useNavigate } from "react-router-dom";

const Sidenav = ({sideNavbar}) => {
    const [pic, setpic] = useState("/profile.png");
    
  
    

  return (
    <div className={sideNavbar? 'md:w-[20%] w-[50%] font-[poppins] z-[45] absolute h-full text-white bg-[#1F1F1F] border-r-2 border-b-2 border-black md:pt-[6%] pt-[17%] font-["roboto"] px-[1%] m-0 overflow-y-auto': "hidden duration-500 absolute"}>

      
      <Link to={"/"} className="flex w-full items-center justify-between  pl-[15%]   md:pr-[15%] pr-[5%] md:py-[12%] py-[15%] hover:duration-300 h-[6%]  rounded-md hover:bg-gray-400">
        <div className="w-[20%]">
          <HomeOutlinedIcon sx={{ fontSize: "180%" }} />
        </div>
        <div className=" w-[80%] flex justify-center">
          <h1 className="md:text-[130%] text-[90%]">Home</h1>
        </div>
      </Link>
      <hr className="border-x border-[#636161]" />

      <div className="flex w-full items-center justify-between  pl-[15%]   md:pr-[15%] pr-[5%] md:py-[12%] py-[15%] hover:duration-300 h-[6%]  rounded-md hover:bg-gray-400">
        <div className="w-[20%]">
          <SubscriptionsOutlinedIcon sx={{ fontSize: "180%" }} />
        </div>
        <div className=" w-[80%] flex justify-center">
          <h1 className="md:text-[130%] text-[90%] pl-[10%]">Subscription</h1>
        </div>
      </div>
      <hr className="border-x border-[#636161]" />

      <div className="flex w-full items-center justify-between  pl-[15%]   md:pr-[15%] pr-[5%] md:py-[12%] py-[15%] hover:duration-300 h-[6%]  rounded-md hover:bg-gray-400">
        <div className="w-[20%]">
          <ThumbUpAltOutlinedIcon sx={{ fontSize: "180%" }} />
        </div>
        <div className=" w-[80%] flex justify-center">
          <h1 className="md:text-[130%] text-[90%] pl-[10%]">Liked </h1>
        </div>
      </div>
      <hr className="border-x border-[#636161]" />

      <div className="flex w-full items-center justify-between  pl-[15%]   md:pr-[15%] pr-[5%] md:py-[12%] py-[15%] hover:duration-300 h-[6%]  rounded-md hover:bg-gray-400">
        <div className="w-[20%]">
          <RestoreOutlinedIcon sx={{ fontSize: "180%" }} />
        </div>
        <div className=" w-[80%] flex justify-center">
          <h1 className="md:text-[130%] text-[90%] pl-[10%]">History</h1>
        </div>
      </div>
      <hr className="border-x border-[#636161]" />

      <div className="pt-[30%] flex items-center">
        <h1 className="md:text-2xl text-xl pl-[4%] text-[#636161] pr-[3%]">Subscriptions</h1>
        <ArrowForwardIosOutlinedIcon
          sx={{ fontSize: "110%", color: "#636161" }}
        />
      </div>
      <hr className="border-x border-[#636161] mb-[3%]" />

      <div className="subscriptions">


        <Link to={"/user/768"} className="flex w-full  items-center justify-between pl-[15%] md:pr-[15%] pr-[5%] py-[3%] hover:duration-300  w-full rounded-md hover:bg-gray-400 border-x border-y  mb-[2%]">

          <div className=" w-[20%] md:h-10 h-7 rounded-full bg-green-200 overflow-hidden border-2 border-white">
            <img src={pic} alt="" className="object-cover h-full w-full " />
          </div>
          <div className=" w-[80%]  flex justify-center  overflow-hidden ml-[5%]">
            <h1 className="md:text-[110%] text-[80%] overflow-hidden">Channel Name</h1>
          </div>

        </Link>


          
     


        
        


        
      </div>





    </div>
  );
};

export default Sidenav;
