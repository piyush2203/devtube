import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoStableIcon from "@mui/icons-material/VideoStable";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import ApiSharpIcon from '@mui/icons-material/ApiSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = ({sideNavFunc, sideNavbar}) => {
    const  [navbarDrop, setnavbarDrop] = useState(false);
    const [pic, setpic] = useState("/profile.png")

    const [login, setlogin] = useState(false);




    const handledrop =() => {
        setnavbarDrop(!navbarDrop);
    }

    const setsideNavFunc=()=>{
        sideNavFunc(!sideNavbar)
    }

    const navigate = useNavigate();

    const profileAction =()=>{
      
      navigate("/user/786");
      navbarDrop(false);
    }

    const setLoginModel=()=>{
      setlogin(false);
    }

    const onClickOfPopUpOption=(button)=>{
      setnavbarDrop(false);
      if(button==="login"){
        setlogin(true);
      }else{

      }
    }
   

  return (
    <div className="w-[100%] md:px-[2%] h-[8%] bg-[#1F1F1F] flex  z-[55]  absolute  items-center text-white font-[Satoshi]  border-b-2 border-black ">
      {/* left navbar */}

      <div className=" left md:w-[15%] w-[20%] h-full gap-2 flex cursor-pointer justify-start items-center">
        <div className="hamburger md:pr-[5%] " onClick={setsideNavFunc}>
          <MenuRoundedIcon sx={{ color: "[#737277]", fontSize: "200%" }} />
        </div>
        <Link to={"/"} onClick={()=>{setnavbarDrop(false)}} className="Name md:pl-[7%]  flex items-center justify-between font-[poppins] text-600">
          <div className="md:block hidden">
          <ApiSharpIcon
            sx={{
              fontSize: "220%",
              
            }}
          />
          </div>
          <h1 className="md:text-[150%] text-[120%]  md:pl-[7%] pl-[1%]">DevTube</h1>
        </Link>
      </div>

      {/* middle Navbarr */}

      <div className="md:w-[70%] w-[55%] ml-[8%] md:ml-0 h-full flex justify-center md:justify-start items-center ">
        <div className="md:w-[65%] w-[70%] h-[65%] ml-[12%] md:ml-[14%] bg-[#151517] flex pl-[2%] items-center border-2  border-[#737277] text-white rounded-full overflow-hidden font-[poppins]" >
          <SearchIcon sx={{opacity:"0.35"}}/>
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] bg-[#151517] p-2 rounded-full outline-none placeholder:text-[120%] placeholder:text-white placeholder:opacity-35 "
          />
        </div>
      </div>

      {/* right navbar */}


      
      <div className="w-[25%] md:w-[15%] h-full justify-center flex items-center md:gap-4 gap-1 relative">
        <Link to={"/:id/upload"} className="flex justify-center text-white items-center gap-2 md:border-2 px-2 rounded-full hover:bg-black ">
          <VideoCallSharpIcon sx={{ fontSize: "180%", color: "white" }} />
          <div className="md:block hidden font-[poppins]"> Add Video</div>
        </Link>
        <div className=" md:h-10 md:w-10 h-7 w-7 rounded-full border-white border-x border-y overflow-hidden">
          <img
            src={pic}
            alt=""
            className="object-cover h-full w-full "
            onClick={handledrop}
          />
        </div>


        {navbarDrop && <div className="md:w-[70%] w-[150%] md:h-[190%] h-[240%] bg-black rounded-lg absolute top-[110%] md:right-[0%] right-[10%] flex flex-col">
            <Link onClick={profileAction} className="w-full h-[33%] y flex items-center justify-between  hover:bg-gray-400 border-gray-400 bg-[#1F1F1F] px-[22%] rounded-t-md ">
                <AccountCircleIcon/>
                <h1>Profile</h1>
            </Link>
            <Link  className="w-full h-[33%] y border-gray-400 bg-[#1F1F1F] flex items-center justify-between  hover:bg-gray-400 px-[25%]" onClick={()=>onClickOfPopUpOption("login")}>
                <LoginIcon/>
                <h1>Login</h1>
            </Link>
            <Link className="w-full h-[33%] y border-gray-400 flex bg-[#1F1F1F] items-center justify-between  hover:bg-gray-400 px-[23%] z-15 rounded-b-lg" onClick={()=>onClickOfPopUpOption("logout")}>
                <LogoutIcon/>
                <h1>Logout</h1>
            </Link>
        </div>}

        
      </div>
      {
        login && <Login setLoginModel={setLoginModel}/>
      }
    </div>
  );
};

export default Navbar;
